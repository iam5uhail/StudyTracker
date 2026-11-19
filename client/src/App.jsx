import React, { useState } from 'react';
import { 
  Navbar, 
  TodayFocusCard, 
  WeeklyConsistencyCard, 
  SubjectTabs, 
  SubjectDetailView, 
  DailyLogView,
  LogSessionModal,
  AddSubjectModal,
  AddTopicModal
} from './components';
import { BookOpen, Calendar, Plus } from 'lucide-react';

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState('subjects'); // 'subjects' or 'logs'
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const [addTopicModalData, setAddTopicModalData] = useState(null); // { subjectId, subjectName }

  const handleOpenAddTopic = (subjectId, subjectName) => {
    setAddTopicModalData({ subjectId, subjectName });
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar
        onOpenLogModal={() => setIsLogModalOpen(true)}
        onOpenAddSubject={() => setIsAddSubjectOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Top Hub: Today's Focus Checklist + Weekly Consistency Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <TodayFocusCard />
          <WeeklyConsistencyCard />
        </div>

        {/* View Switcher: Subjects & Syllabus vs. Day-by-Day Learning Log */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveMainTab('subjects')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeMainTab === 'subjects'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Subjects & Syllabus</span>
            </button>

            <button
              onClick={() => setActiveMainTab('logs')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeMainTab === 'logs'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/60'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Day-by-Day Journal</span>
            </button>
          </div>

          <div className="text-xs text-gray-500 hidden sm:block">
            {activeMainTab === 'subjects' ? 'Manage your courses & syllabus' : 'Track your daily study history'}
          </div>
        </div>

        {/* Tab 1: Subjects & Syllabus */}
        {activeMainTab === 'subjects' && (
          <div className="space-y-4">
            <SubjectTabs onOpenAddSubject={() => setIsAddSubjectOpen(true)} />
            <SubjectDetailView onOpenAddTopic={handleOpenAddTopic} />
          </div>
        )}

        {/* Tab 2: Day-by-Day Learning Journal */}
        {activeMainTab === 'logs' && (
          <DailyLogView onOpenLogModal={() => setIsLogModalOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 text-center text-xs text-gray-500">
        StudyTrack — Personal Daily Learning Companion for Students
      </footer>

      {/* Modals */}
      {isLogModalOpen && (
        <LogSessionModal onClose={() => setIsLogModalOpen(false)} />
      )}

      {isAddSubjectOpen && (
        <AddSubjectModal onClose={() => setIsAddSubjectOpen(false)} />
      )}

      {addTopicModalData && (
        <AddTopicModal
          subjectId={addTopicModalData.subjectId}
          subjectName={addTopicModalData.subjectName}
          onClose={() => setAddTopicModalData(null)}
        />
      )}
    </div>
  );
}
