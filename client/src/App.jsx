import React, { useState } from 'react';
import { 
  Sidebar, 
  HeroHeader, 
  ProgressCard, 
  SheetTabs, 
  ActiveSheetOverview, 
  SearchAndFilter, 
  TopicAccordion,
  NotesModal,
  AddTrackModal,
  AddProblemModal,
  ImportModal,
  RevisionView
} from './components';
import { useLearning } from './context/LearningContext';
import { Plus, BookOpen, Star } from 'lucide-react';

export default function App() {
  const { activeTrack, addTopic, tracks } = useLearning();

  const [activeView, setActiveView] = useState('all'); // 'all' or 'revision'
  const [modalNotesItem, setModalNotesItem] = useState(null);
  const [modalNotesTrackId, setModalNotesTrackId] = useState(null);
  const [isAddTrackOpen, setIsAddTrackOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [addProblemData, setAddProblemData] = useState(null); // { topicId, topicName }

  const handleOpenNotes = (item, trackId) => {
    setModalNotesItem(item);
    setModalNotesTrackId(trackId);
  };

  const handleOpenAddProblem = (topicId, topicName) => {
    setAddProblemData({ topicId, topicName, trackId: activeTrack?.id });
  };

  const handlePromptAddTopic = () => {
    const topicName = prompt('Enter new topic title (e.g. Dynamic Programming 2D, JVM Internals):');
    if (topicName && topicName.trim()) {
      addTopic(activeTrack.id, { name: topicName.trim() });
    }
  };

  return (
    <div className="min-h-screen bg-[#060A08] text-gray-100 flex">
      {/* Left Icon Dock Sidebar matching screenshot */}
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenAddTrack={() => setIsAddTrackOpen(true)}
        onOpenImport={() => setIsImportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 min-h-screen p-5 sm:p-8 lg:p-10 max-w-7xl mx-auto">
        {/* Top Split Section: Hero + Progress Card (Screenshot Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-8">
          {/* Left Hero (spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <HeroHeader />
          </div>

          {/* Right Progress Card (spans 1 col on lg) */}
          <div className="lg:col-span-1">
            <ProgressCard />
          </div>
        </div>

        {/* View Selection: All Sheets or Starred Revision */}
        {activeView === 'revision' ? (
          <RevisionView onOpenNotes={handleOpenNotes} />
        ) : (
          <>
            {/* Sheet Tabs (Pills: 1. Pattern Wise, 2. Java & Concurrency, 3. Last Minute 100...) */}
            <SheetTabs onOpenAddTrack={() => setIsAddTrackOpen(true)} />

            {/* Active Sheet Card with Progress */}
            <ActiveSheetOverview />

            {/* Search & Filter Controls */}
            <SearchAndFilter />

            {/* List of Topic Accordions */}
            <div className="space-y-4">
              {activeTrack?.topics && activeTrack.topics.length > 0 ? (
                activeTrack.topics.map((topic) => (
                  <TopicAccordion
                    key={topic.id}
                    topic={topic}
                    trackId={activeTrack.id}
                    onOpenNotes={handleOpenNotes}
                    onOpenAddProblem={handleOpenAddProblem}
                  />
                ))
              ) : (
                <div className="glow-card rounded-2xl p-10 text-center border border-[#16241D]">
                  <BookOpen className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">This sheet currently has no topics.</p>
                  <button
                    onClick={handlePromptAddTopic}
                    className="mt-4 px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold text-xs inline-flex items-center space-x-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add First Topic</span>
                  </button>
                </div>
              )}
            </div>

            {/* Add Topic Floating / Bottom Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handlePromptAddTopic}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-dashed border-[#1E3127] hover:border-emerald-500/50 text-gray-400 hover:text-emerald-400 text-xs font-semibold bg-[#0A100D] hover:bg-[#0E1C15]/50 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Topic to "{activeTrack?.name}"</span>
              </button>
            </div>
          </>
        )}
      </main>

      {/* Modals */}
      {modalNotesItem && (
        <NotesModal
          item={modalNotesItem}
          trackId={modalNotesTrackId}
          onClose={() => setModalNotesItem(null)}
        />
      )}

      {isAddTrackOpen && (
        <AddTrackModal
          onClose={() => setIsAddTrackOpen(false)}
        />
      )}

      {isImportOpen && (
        <ImportModal
          onClose={() => setIsImportOpen(false)}
        />
      )}

      {addProblemData && (
        <AddProblemModal
          trackId={addProblemData.trackId}
          topicId={addProblemData.topicId}
          topicName={addProblemData.topicName}
          onClose={() => setAddProblemData(null)}
        />
      )}
    </div>
  );
}
