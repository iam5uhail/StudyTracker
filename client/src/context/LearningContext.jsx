import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { initialTracks } from '../data/fallbackData';

const LearningContext = createContext(null);
const STORAGE_KEY = 'learn_tracker_tracks_v1';
const ACTIVE_TRACK_KEY = 'learn_tracker_active_track_v1';

export function LearningProvider({ children }) {
  const [tracks, setTracks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Failed to load tracks from localStorage', e);
    }
    return initialTracks;
  });

  const [activeTrackId, setActiveTrackId] = useState(() => {
    try {
      const saved = localStorage.getItem(ACTIVE_TRACK_KEY);
      if (saved && tracks.some(t => t.id === saved)) return saved;
    } catch (e) {}
    return tracks[0]?.id || 'pattern-wise';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All'); // 'All', 'Solved', 'Unsolved', 'Revision'

  // Persist tracks
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tracks));
    } catch (e) {
      console.error('Failed to save tracks to localStorage', e);
    }
  }, [tracks]);

  // Persist active track id
  useEffect(() => {
    if (activeTrackId) {
      localStorage.setItem(ACTIVE_TRACK_KEY, activeTrackId);
    }
  }, [activeTrackId]);

  // Background sync with API if server is alive
  useEffect(() => {
    let mounted = true;
    fetch('/api/tracks')
      .then(res => {
        if (!res.ok) throw new Error('API offline');
        return res.json();
      })
      .then(data => {
        if (mounted && Array.isArray(data) && data.length > 0) {
          // If server responded with data, merge progress gracefully
          // For now, client localStorage takes priority for local user changes
        }
      })
      .catch(() => {
        // Silently keep local state
      });
    return () => { mounted = false; };
  }, []);

  const activeTrack = useMemo(() => {
    return tracks.find(t => t.id === activeTrackId) || tracks[0] || null;
  }, [tracks, activeTrackId]);

  // Overall Global Stats across ALL sheets (for the top right widget)
  const globalStats = useMemo(() => {
    let totalProblems = 0;
    let solvedProblems = 0;
    let easyTotal = 0;
    let easySolved = 0;
    let mediumTotal = 0;
    let mediumSolved = 0;
    let hardTotal = 0;
    let hardSolved = 0;
    let totalTopics = 0;

    tracks.forEach(t => {
      totalTopics += (t.topics || []).length;
      (t.topics || []).forEach(topic => {
        (topic.items || []).forEach(item => {
          totalProblems++;
          const isDone = Boolean(item.isSolved);
          if (isDone) solvedProblems++;

          const diff = (item.difficulty || 'Medium').toLowerCase();
          if (diff === 'easy') {
            easyTotal++;
            if (isDone) easySolved++;
          } else if (diff === 'hard') {
            hardTotal++;
            if (isDone) hardSolved++;
          } else {
            mediumTotal++;
            if (isDone) mediumSolved++;
          }
        });
      });
    });

    const percent = totalProblems === 0 ? 0 : Math.round((solvedProblems / totalProblems) * 100);
    const easyPercent = easyTotal === 0 ? 0 : Math.round((easySolved / easyTotal) * 100);
    const medPercent = mediumTotal === 0 ? 0 : Math.round((mediumSolved / mediumTotal) * 100);
    const hardPercent = hardTotal === 0 ? 0 : Math.round((hardSolved / hardTotal) * 100);

    return {
      sheetsCount: tracks.length,
      topicsCount: totalTopics,
      totalProblems,
      solvedProblems,
      percent,
      easy: { total: easyTotal, solved: easySolved, percent: easyPercent },
      medium: { total: mediumTotal, solved: mediumSolved, percent: medPercent },
      hard: { total: hardTotal, solved: hardSolved, percent: hardPercent },
    };
  }, [tracks]);

  // Current Active Track Stats
  const activeTrackStats = useMemo(() => {
    if (!activeTrack) return { total: 0, solved: 0, percent: 0, topicsCount: 0 };
    let total = 0;
    let solved = 0;
    (activeTrack.topics || []).forEach(top => {
      (top.items || []).forEach(item => {
        total++;
        if (item.isSolved) solved++;
      });
    });
    const percent = total === 0 ? 0 : Math.round((solved / total) * 100);
    return {
      total,
      solved,
      percent,
      topicsCount: (activeTrack.topics || []).length
    };
  }, [activeTrack]);

  // Toggle item solved status
  const toggleSolved = (trackId, itemId) => {
    setTracks(prev => prev.map(t => {
      if (t.id !== trackId) return t;
      return {
        ...t,
        topics: (t.topics || []).map(topic => ({
          ...topic,
          items: (topic.items || []).map(item => {
            if (item.id === itemId) {
              const nextSolved = !item.isSolved;
              if (nextSolved) {
                // Fire mini celebratory confetti!
                try {
                  confetti({
                    particleCount: 45,
                    spread: 60,
                    origin: { y: 0.8 },
                    colors: ['#10B981', '#34D399', '#6EE7B7', '#F59E0B']
                  });
                } catch (e) {}
              }
              return { ...item, isSolved: nextSolved, solvedAt: nextSolved ? new Date().toISOString() : null };
            }
            return item;
          })
        }))
      };
    }));
  };

  // Toggle item revision / bookmark star
  const toggleRevision = (trackId, itemId) => {
    setTracks(prev => prev.map(t => {
      if (t.id !== trackId) return t;
      return {
        ...t,
        topics: (t.topics || []).map(topic => ({
          ...topic,
          items: (topic.items || []).map(item => {
            if (item.id === itemId) {
              return { ...item, isRevision: !item.isRevision };
            }
            return item;
          })
        }))
      };
    }));
  };

  // Update item notes & code snippet
  const updateItemNotes = (trackId, itemId, { notes, codeSnippet, tags }) => {
    setTracks(prev => prev.map(t => {
      if (t.id !== trackId) return t;
      return {
        ...t,
        topics: (t.topics || []).map(topic => ({
          ...topic,
          items: (topic.items || []).map(item => {
            if (item.id === itemId) {
              return {
                ...item,
                notes: notes !== undefined ? notes : item.notes,
                codeSnippet: codeSnippet !== undefined ? codeSnippet : item.codeSnippet,
                tags: tags !== undefined ? tags : item.tags,
                updatedAt: new Date().toISOString()
              };
            }
            return item;
          })
        }))
      };
    }));
  };

  // Create a brand new track (Universal sheet creator)
  const createTrack = ({ name, subtitle, description, category, topics }) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `sheet-${Date.now()}`;
    const newTrack = {
      id: slug,
      name,
      badge: String(tracks.length + 1),
      subtitle: subtitle || 'Custom curated learning roadmap',
      description: description || 'Track your daily topics, problems, and concepts.',
      icon: 'BookOpen',
      category: category || 'Custom',
      topics: Array.isArray(topics) && topics.length > 0 ? topics : [
        {
          id: `${slug}-topic-1`,
          name: 'Getting Started',
          description: 'Core concepts and foundational problems',
          items: []
        }
      ]
    };
    setTracks(prev => [...prev, newTrack]);
    setActiveTrackId(newTrack.id);
    return newTrack;
  };

  // Import track from JSON or custom structure
  const importTrack = (trackData) => {
    if (!trackData || !trackData.name) {
      throw new Error('Invalid track data: Must contain a name');
    }
    const slug = (trackData.id || trackData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')) + `-${Date.now().toString().slice(-4)}`;
    const importedTrack = {
      ...trackData,
      id: slug,
      badge: String(tracks.length + 1),
      topics: (trackData.topics || []).map((topic, tIdx) => ({
        id: topic.id || `${slug}-t-${tIdx + 1}`,
        name: topic.name || `Topic ${tIdx + 1}`,
        description: topic.description || '',
        items: (topic.items || []).map((item, iIdx) => ({
          id: item.id || `${slug}-item-${tIdx}-${iIdx}`,
          title: item.title || item.name || `Problem ${iIdx + 1}`,
          difficulty: item.difficulty || 'Medium',
          platform: item.platform || 'General',
          link: item.link || '',
          tags: item.tags || [],
          notes: item.notes || '',
          codeSnippet: item.codeSnippet || '',
          isSolved: Boolean(item.isSolved),
          isRevision: Boolean(item.isRevision)
        }))
      }))
    };
    setTracks(prev => [...prev, importedTrack]);
    setActiveTrackId(importedTrack.id);
    return importedTrack;
  };

  // Delete a track
  const deleteTrack = (trackId) => {
    if (tracks.length <= 1) {
      alert('You must have at least one active track.');
      return;
    }
    const nextTracks = tracks.filter(t => t.id !== trackId);
    setTracks(nextTracks);
    if (activeTrackId === trackId) {
      setActiveTrackId(nextTracks[0].id);
    }
  };

  // Reset progress of a track
  const resetTrack = (trackId) => {
    setTracks(prev => prev.map(t => {
      if (t.id !== trackId) return t;
      return {
        ...t,
        topics: (t.topics || []).map(topic => ({
          ...topic,
          items: (topic.items || []).map(item => ({
            ...item,
            isSolved: false,
            isRevision: false
          }))
        }))
      };
    }));
  };

  // Add topic to a track
  const addTopic = (trackId, { name, description }) => {
    const topicId = `topic-${Date.now()}`;
    setTracks(prev => prev.map(t => {
      if (t.id !== trackId) return t;
      return {
        ...t,
        topics: [
          ...(t.topics || []),
          {
            id: topicId,
            name: name || 'New Topic',
            description: description || '',
            items: []
          }
        ]
      };
    }));
  };

  // Add item / question to a topic
  const addItem = (trackId, topicId, itemData) => {
    const itemId = `item-${Date.now()}`;
    const newItem = {
      id: itemId,
      title: itemData.title || 'Untitled Problem',
      difficulty: itemData.difficulty || 'Medium',
      platform: itemData.platform || 'Custom',
      link: itemData.link || '',
      tags: itemData.tags ? (Array.isArray(itemData.tags) ? itemData.tags : itemData.tags.split(',').map(s => s.trim())) : [],
      notes: itemData.notes || '',
      codeSnippet: itemData.codeSnippet || '',
      isSolved: false,
      isRevision: false
    };

    setTracks(prev => prev.map(t => {
      if (t.id !== trackId) return t;
      return {
        ...t,
        topics: (t.topics || []).map(topic => {
          if (topic.id !== topicId) return topic;
          return {
            ...topic,
            items: [...(topic.items || []), newItem]
          };
        })
      };
    }));
  };

  // Delete item from topic
  const deleteItem = (trackId, topicId, itemId) => {
    setTracks(prev => prev.map(t => {
      if (t.id !== trackId) return t;
      return {
        ...t,
        topics: (t.topics || []).map(topic => {
          if (topic.id !== topicId) return topic;
          return {
            ...topic,
            items: (topic.items || []).filter(item => item.id !== itemId)
          };
        })
      };
    }));
  };

  // Export data as JSON file
  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tracks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `learn_tracker_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Reset everything to default template
  const restoreDefaults = () => {
    if (confirm('Restore default sheets (Pattern Wise, Java & Concurrency, Last Minute 100)? This will reset your progress to defaults.')) {
      setTracks(initialTracks);
      setActiveTrackId(initialTracks[0].id);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <LearningContext.Provider
      value={{
        tracks,
        activeTrackId,
        setActiveTrackId,
        activeTrack,
        globalStats,
        activeTrackStats,
        searchQuery,
        setSearchQuery,
        selectedDifficulty,
        setSelectedDifficulty,
        selectedStatus,
        setSelectedStatus,
        toggleSolved,
        toggleRevision,
        updateItemNotes,
        createTrack,
        importTrack,
        deleteTrack,
        resetTrack,
        addTopic,
        addItem,
        deleteItem,
        exportData,
        restoreDefaults
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}
