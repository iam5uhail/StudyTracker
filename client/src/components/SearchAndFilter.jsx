import React from 'react';
import { Search, Filter, Star, CheckCircle, Circle, Layers } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function SearchAndFilter() {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedDifficulty, 
    setSelectedDifficulty,
    selectedStatus,
    setSelectedStatus
  } = useLearning();

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
      {/* Search Bar matching screenshot */}
      <div className="relative flex-1 max-w-md">
        <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search problems or patterns..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0A100D] border border-[#16241D] focus:border-emerald-500/60 text-sm text-gray-200 placeholder-gray-500 focus:outline-none transition-colors"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-300"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Buttons & Difficulty Dropdown */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Status filters */}
        <div className="inline-flex rounded-xl bg-[#0A100D] border border-[#16241D] p-1 text-xs">
          <button
            onClick={() => setSelectedStatus('All')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedStatus === 'All' ? 'bg-[#16241D] text-white' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedStatus('Solved')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center space-x-1 transition-colors ${
              selectedStatus === 'Solved' ? 'bg-[#16241D] text-emerald-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <CheckCircle className="w-3 h-3" />
            <span>Solved</span>
          </button>
          <button
            onClick={() => setSelectedStatus('Unsolved')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center space-x-1 transition-colors ${
              selectedStatus === 'Unsolved' ? 'bg-[#16241D] text-amber-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Circle className="w-3 h-3" />
            <span>Unsolved</span>
          </button>
          <button
            onClick={() => setSelectedStatus('Revision')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center space-x-1 transition-colors ${
              selectedStatus === 'Revision' ? 'bg-[#16241D] text-yellow-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Star className="w-3 h-3 fill-yellow-400/40 text-yellow-400" />
            <span>Revision</span>
          </button>
        </div>

        {/* Difficulty Select */}
        <div className="relative">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="appearance-none bg-[#0A100D] border border-[#16241D] hover:border-[#1E3127] text-gray-300 text-xs font-medium rounded-xl px-3.5 py-2.5 pr-8 focus:outline-none focus:border-emerald-500/60 cursor-pointer"
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <Filter className="w-3.5 h-3.5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
