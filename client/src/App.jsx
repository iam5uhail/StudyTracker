import React, { useState, useRef, useEffect } from 'react';
import { 
  DashboardView,
  ProgressView,
  RoadmapView,
  SimpleNotesModal
} from './components';
import { 
  Target, 
  TrendingUp, 
  Map, 
  Brain, 
  Calendar,
  Flame,
  Palette,
  Check,
  Sun,
  Moon,
  ChevronDown
} from 'lucide-react';
import { useLearning } from './context/LearningContext';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard'); // 'dashboard', 'progress', 'roadmap'
  const [activeNotesData, setActiveNotesData] = useState(null); // { dayNumber, task }
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { activeDayNumber, progressStats } = useLearning();
  const { theme, setTheme, themes, activeTheme, isDark } = useTheme();

  const handleOpenNotes = (dayNumber, task) => {
    setActiveNotesData({ dayNumber, task });
  };

  // Close theme dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text flex flex-col font-sans antialiased transition-colors duration-200">
      {/* Top Navbar Header */}
      <header className="border-b border-theme-border bg-theme-header/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText shadow-theme-glow transition-all">
              <Brain className="w-5 h-5 text-theme-accent" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base font-bold text-theme-text tracking-tight">StudyTracker</h1>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-theme-accentSub text-theme-accentText border border-theme-accentBorder">
                  Daily Goal
                </span>
              </div>
              <p className="text-xs text-theme-muted hidden sm:block">
                140 Core Java Topics + Rising Brain DSA â€¢ Starts 21 Nov 2026
              </p>
            </div>
          </div>

          {/* 3 Main Navigation Tabs: Dashboard, Progress, Roadmap */}
          <nav className="flex items-center space-x-1 bg-theme-card border border-theme-border p-1 rounded-2xl text-xs sm:text-sm shadow-sm">
            <button
              onClick={() => setActiveNav('dashboard')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
                activeNav === 'dashboard'
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveNav('progress')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
                activeNav === 'progress'
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Progress</span>
            </button>

            <button
              onClick={() => setActiveNav('roadmap')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
                activeNav === 'roadmap'
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Roadmap</span>
            </button>
          </nav>

          {/* Right Header Controls: Status Badges & Theme Switcher */}
          <div className="flex items-center space-x-2 text-xs">
            {/* Active Day Pill (Hidden on mobile) */}
            <div className="hidden lg:flex items-center space-x-2 bg-theme-card border border-theme-border px-3 py-1.5 rounded-xl shadow-sm">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span className="text-theme-muted">Active:</span>
              <strong className="text-theme-text font-mono">Day {activeDayNumber}</strong>
            </div>

            {/* Streak Pill */}
            <div className="hidden md:flex items-center space-x-1.5 bg-theme-card border border-theme-border px-3 py-1.5 rounded-xl text-theme-accentText shadow-sm">
              <Flame className="w-3.5 h-3.5 text-theme-accent" />
              <span className="font-mono font-bold">{progressStats.streak}d Streak</span>
            </div>

            {/* Dynamic Theme Switcher Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center space-x-2 bg-theme-card hover:bg-theme-cardSub border border-theme-border px-3 py-1.5 rounded-xl text-theme-text shadow-sm transition-all focus:outline-none"
                title="Select Theme"
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20 flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: activeTheme.dotColor }}
                />
                <span className="font-semibold text-xs hidden sm:inline">
                  {activeTheme.label}
                </span>
                {isDark ? (
                  <Moon className="w-3.5 h-3.5 text-theme-muted" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                )}
                <ChevronDown className="w-3.5 h-3.5 text-theme-muted" />
              </button>

              {/* Theme Dropdown Menu */}
              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-theme-card border border-theme-border shadow-2xl p-2 z-50 space-y-1">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-theme-muted border-b border-theme-border flex items-center justify-between">
                    <span>Select Color Theme</span>
                    <Palette className="w-3.5 h-3.5" />
                  </div>

                  {themes.map((t) => {
                    const isSelected = t.id === theme;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-theme-accentSub text-theme-accentText border border-theme-accentBorder font-bold'
                            : 'text-theme-secondary hover:text-theme-text hover:bg-theme-cardSub'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/20 flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: t.dotColor }}
                          />
                          <div className="text-left">
                            <span className="block font-semibold">{t.name}</span>
                            <span className="text-[10px] text-theme-muted capitalize">{t.mode} Mode</span>
                          </div>
                        </div>

                        {isSelected && (
                          <Check className="w-4 h-4 text-theme-accent flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeNav === 'dashboard' && (
          <DashboardView onOpenNotes={handleOpenNotes} />
        )}

        {activeNav === 'progress' && (
          <ProgressView />
        )}

        {activeNav === 'roadmap' && (
          <RoadmapView onOpenNotes={handleOpenNotes} />
        )}
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-theme-border py-5 text-center text-xs text-theme-muted bg-theme-header">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>StudyTracker â€¢ 70-Day Target Plan Starting 21 Nov 2026</span>
          <span className="text-theme-accentText font-medium">Daily Goal: 2 Core Java Topics + 1 Rising Brain DSA Problem</span>
        </div>
      </footer>

      {/* Simple Notes Modal */}
      {activeNotesData && (
        <SimpleNotesModal
          taskData={activeNotesData}
          onClose={() => setActiveNotesData(null)}
        />
      )}
    </div>
  );
}
