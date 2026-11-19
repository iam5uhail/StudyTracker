import React, { useState } from 'react';
import { CheckCircle2, Circle, Plus, Trash2, Target } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function TodayFocusCard() {
  const { dailyGoals, toggleGoal, addGoal, deleteGoal, subjects } = useLearning();
  const [newGoalText, setNewGoalText] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]?.name || 'General');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    addGoal({
      title: newGoalText.trim(),
      subjectName: selectedSubject,
      estimatedMinutes: 30
    });
    setNewGoalText('');
  };

  const completedCount = dailyGoals.filter(g => g.isCompleted).length;
  const totalCount = dailyGoals.length;
  const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="bg-[#1E293B]/70 border border-slate-700/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Today's Focus & Goals</h2>
              <p className="text-xs text-gray-400">What do you plan to learn or finish today?</p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
            {completedCount}/{totalCount} Done ({percent}%)
          </span>
        </div>

        {/* Progress Mini Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Goals Checklist */}
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {dailyGoals.length === 0 ? (
            <div className="text-center py-6 text-xs text-gray-500">
              No tasks planned for today. Add one below to kick off your study session!
            </div>
          ) : (
            dailyGoals.map(goal => (
              <div
                key={goal.id}
                className={`group flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                  goal.isCompleted
                    ? 'bg-slate-900/60 border-slate-800/80 text-gray-500'
                    : 'bg-slate-800/70 border-slate-700 text-gray-200 hover:border-slate-600'
                }`}
              >
                <div 
                  onClick={() => toggleGoal(goal.id)}
                  className="flex items-center space-x-2.5 flex-1 min-w-0 cursor-pointer"
                >
                  <button className="flex-shrink-0 text-indigo-400">
                    {goal.isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-500 group-hover:text-indigo-400" />
                    )}
                  </button>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-xs font-medium truncate ${goal.isCompleted ? 'line-through text-gray-500' : 'text-gray-100'}`}>
                      {goal.title}
                    </span>
                    {goal.subjectName && (
                      <span className="text-[10px] text-gray-400 font-medium">
                        {goal.subjectName}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => deleteGoal(goal.id)}
                  className="text-gray-600 hover:text-rose-400 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Remove task"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Add Form */}
      <form onSubmit={handleAdd} className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={newGoalText}
          onChange={(e) => setNewGoalText(e.target.value)}
          placeholder="+ Add a study task for today..."
          className="flex-1 bg-slate-900/80 border border-slate-700/80 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-gray-200 placeholder-gray-500 focus:outline-none transition-colors"
        />
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="bg-slate-900/80 border border-slate-700/80 text-gray-300 text-xs rounded-xl px-2 py-2 focus:outline-none max-w-[120px] truncate"
        >
          {subjects.map(s => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
          <option value="General">General</option>
        </select>
        <button
          type="submit"
          className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center space-x-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}
