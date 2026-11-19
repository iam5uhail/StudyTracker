import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import ProblemRow from './ProblemRow';
import { useLearning } from '../context/LearningContext';

export default function RevisionView({ onOpenNotes }) {
  const { tracks } = useLearning();

  // Aggregate all starred items across all sheets
  const starredItems = [];
  tracks.forEach(track => {
    (track.topics || []).forEach(topic => {
      (topic.items || []).forEach(item => {
        if (item.isRevision) {
          starredItems.push({
            item,
            trackId: track.id,
            trackName: track.name,
            topicId: topic.id,
            topicName: topic.name
          });
        }
      });
    });
  });

  return (
    <div className="space-y-6">
      <div className="glow-card rounded-2xl p-6 border border-[#16241D] bg-[#0A100D]">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
            <Star className="w-5 h-5 fill-yellow-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Interview Revision List</h2>
            <p className="text-xs text-gray-400">
              Problems and concepts you starred (⭐) for quick revision right before your interviews.
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-gray-400 mt-3 pt-3 border-t border-[#131F19]">
          Total Revision Problems: <strong className="text-yellow-400">{starredItems.length}</strong>
        </div>
      </div>

      {starredItems.length === 0 ? (
        <div className="glow-card rounded-2xl p-12 text-center border border-[#16241D] bg-[#0A100D]">
          <Star className="w-8 h-8 text-gray-600 mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-gray-300">No problems starred yet</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            Click the star (⭐) next to any problem in your sheets to save it here for fast revision!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {starredItems.map(({ item, trackId, trackName, topicId, topicName }) => (
            <div key={`${trackId}-${item.id}`} className="space-y-1">
              <div className="flex items-center space-x-2 text-[11px] text-gray-500 font-mono px-2">
                <span className="text-emerald-400 font-semibold">{trackName}</span>
                <span>/</span>
                <span>{topicName}</span>
              </div>
              <ProblemRow
                item={item}
                trackId={trackId}
                topicId={topicId}
                onOpenNotes={onOpenNotes}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
