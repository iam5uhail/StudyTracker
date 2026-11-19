import React, { useState } from 'react';
import { 
  Plus, 
  CheckCircle2, 
  Clock, 
  Circle, 
  Edit3, 
  Trash2, 
  Search, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function SubjectDetailView({ onOpenAddTopic }) {
  const { activeSubject, toggleTopicStatus, updateTopic, deleteTopic } = useLearning();
  const [topicFilter, setTopicFilter] = useState('');
  const [editingTopicId, setEditingTopicId] = useState(null);
  const [notesDraft, setNotesDraft] = useState('');

  if (!activeSubject) return null;

  const topics = activeSubject.topics || [];
  const completed = topics.filter(t => t.status === 'completed').length;
  const inProgress = topics.filter(t => t.status === 'in_progress').length;
  const total = topics.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const filteredTopics = topics.filter(t => 
    t.title.toLowerCase().includes(topicFilter.toLowerCase()) ||
    (t.notes && t.notes.toLowerCase().includes(topicFilter.toLowerCase()))
  );

  const handleStartEditingNotes = (topic) => {
    setEditingTopicId(topic.id);
    setNotesDraft(topic.notes || '');
  };

  const handleSaveNotes = (topicId) => {
    updateTopic(activeSubject.id, topicId, { notes: notesDraft });
    setEditingTopicId(null);
  };

  return (
    <div className="bg-[#1E293B]/70 border border-slate-700/80 rounded-2xl p-5 shadow-sm space-y-5">
      {/* Subject Header & Progress Bar */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-gray-400 border border-slate-700">
                {activeSubject.category || 'Course'}
              </span>
              <h2 className="text-xl font-bold text-white tracking-tight">{activeSubject.name}</h2>
            </div>
            {activeSubject.description && (
              <p className="text-xs text-gray-400 mt-1 max-w-2xl">{activeSubject.description}</p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-xs font-mono font-bold text-white">
                {completed} of {total} Topics Mastered
              </div>
              <div className="text-[11px] text-gray-400">
                {inProgress > 0 && `${inProgress} in progress • `}{percent}% syllabus done
              </div>
            </div>
            <button
              onClick={() => onOpenAddTopic(activeSubject.id, activeSubject.name)}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Topic</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Filter / Search input */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            placeholder="Search chapters or topics..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-900/80 border border-slate-700/80 focus:border-indigo-500 rounded-xl text-xs text-gray-200 placeholder-gray-500 focus:outline-none transition-colors"
          />
        </div>
        <span className="text-xs text-gray-500">
          Tip: Click status pill (🔘 To Do / ⏳ In Progress / ✅ Completed) to cycle
        </span>
      </div>

      {/* Topics List */}
      <div className="space-y-2.5">
        {filteredTopics.length === 0 ? (
          <div className="p-8 text-center text-xs text-gray-500 bg-slate-900/40 rounded-xl border border-slate-800">
            No topics found. Add your first topic or chapter to start tracking!
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const isEditing = editingTopicId === topic.id;

            return (
              <div 
                key={topic.id}
                className={`group border rounded-xl p-3.5 transition-all ${
                  topic.status === 'completed'
                    ? 'bg-slate-900/40 border-slate-800/80'
                    : topic.status === 'in_progress'
                    ? 'bg-indigo-950/20 border-indigo-900/50'
                    : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  {/* Left: Status Toggle Button + Title */}
                  <div className="flex items-start space-x-3 flex-1 min-w-0">
                    <button
                      onClick={() => toggleTopicStatus(activeSubject.id, topic.id)}
                      className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border flex-shrink-0 transition-all ${
                        topic.status === 'completed'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : topic.status === 'in_progress'
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                          : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-gray-200'
                      }`}
                      title="Click to cycle: To Do -> In Progress -> Completed"
                    >
                      {topic.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {topic.status === 'in_progress' && <Clock className="w-3.5 h-3.5" />}
                      {topic.status === 'todo' && <Circle className="w-3.5 h-3.5" />}
                      <span>
                        {topic.status === 'completed' ? 'Completed' :
                         topic.status === 'in_progress' ? 'In Progress' : 'To Do'}
                      </span>
                    </button>

                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-semibold truncate ${
                        topic.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-100'
                      }`}>
                        {topic.title}
                      </h4>

                      {/* Notes / Summary snippet */}
                      {!isEditing && topic.notes && (
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed line-clamp-2">
                          {topic.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Actions: Confidence badge, Time, Notes Edit, Delete */}
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {/* Time spent */}
                    {topic.minutesSpent > 0 && (
                      <span className="text-[11px] font-mono text-gray-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {topic.minutesSpent} mins
                      </span>
                    )}

                    {/* Edit Notes button */}
                    <button
                      onClick={() => isEditing ? setEditingTopicId(null) : handleStartEditingNotes(topic)}
                      className="p-1.5 text-gray-400 hover:text-indigo-300 rounded-lg hover:bg-slate-800 transition-colors"
                      title="Add or edit notes for this topic"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>

                    {/* Delete topic button */}
                    <button
                      onClick={() => {
                        if (confirm(`Remove topic "${topic.title}"?`)) deleteTopic(activeSubject.id, topic.id);
                      }}
                      className="p-1.5 text-gray-600 hover:text-rose-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Delete topic"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Inline Notes Editor */}
                {isEditing && (
                  <div className="mt-3 pt-3 border-t border-slate-700/80 space-y-2">
                    <label className="text-[11px] font-semibold text-gray-300">
                      Notes, key takeaways & formulas for this topic:
                    </label>
                    <textarea
                      value={notesDraft}
                      onChange={(e) => setNotesDraft(e.target.value)}
                      placeholder="Write your summary, key definitions, or what you learned..."
                      rows={3}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl p-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none resize-none"
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setEditingTopicId(null)}
                        className="px-3 py-1 rounded-lg text-xs text-gray-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveNotes(topic.id)}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white"
                      >
                        Save Notes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
