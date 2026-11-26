import React, { useState, useRef, useEffect } from 'react';
import { 
  DashboardView,
  ProgressView,
  RoadmapView,
  JavaPracticeView,
  DSAPracticeSheetView,
  SimpleNotesModal
} from './components';
import { 
  Target, 
  TrendingUp, 
  Map, 
  Brain, 
  Palette,
  Sun,
  Moon,
  Download,
  Smartphone,
  Share2,
  Check,
  X,
  Coffee,
  BookOpen,
  Terminal,
  BarChart3
} from 'lucide-react';
import { useLearning } from './context/LearningContext';
import { useTheme } from './context/ThemeContext';

const ACTIVE_NAV_STORAGE_KEY = 'study_tracker_active_nav_v1';

export default function App() {
  const [activeNav, setActiveNav] = useState(() => {
    try {
      const saved = localStorage.getItem(ACTIVE_NAV_STORAGE_KEY);
      if (saved && ['dashboard', 'java-lectures', 'java-practice', 'dsa-practice', 'progress', 'progress-tracking', 'roadmap'].includes(saved)) {
        return saved;
      }
    } catch (e) {}
    return 'java-lectures'; // 'java-lectures', 'java-practice', 'dsa-practice', 'progress-tracking'
  });

  useEffect(() => {
    try {
      localStorage.setItem(ACTIVE_NAV_STORAGE_KEY, activeNav);
    } catch (e) {}
  }, [activeNav]);

  const [activeNotesData, setActiveNotesData] = useState(null); // { dayNumber, task }
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const dropdownRef = useRef(null);

  const { activeDayNumber, activeDay, progressStats, syncStatus, setActiveDayNumber } = useLearning();
  const { theme, switchTheme, themes, activeTheme, isDark } = useTheme();

  // Progress metrics for active day
  const dayTasks = activeDay?.tasks || [];
  const totalDayTasks = dayTasks.length;
  const completedDayTasks = dayTasks.filter(t => t.completed).length;
  const dayProgressPct = totalDayTasks > 0 ? (completedDayTasks / totalDayTasks) * 100 : 0;
  const isDayFullyComplete = totalDayTasks > 0 && completedDayTasks === totalDayTasks;

  const [openAccordionTaskId, setOpenAccordionTaskId] = useState(null);

  const handleOpenNotes = (dayNumber, task) => {
    if (dayNumber) setActiveDayNumber(dayNumber);
    if (task?.id) setOpenAccordionTaskId(task.id);
    setActiveNav('java-lectures');
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

  // PWA Install prompt listener & standalone detection
  useEffect(() => {
    const isRunningStandalone = 
      window.matchMedia('(display-mode: standalone)').matches || 
      window.navigator.standalone === true;

    if (isRunningStandalone) {
      setIsStandalone(true);
      return;
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsStandalone(true);
      }
      setDeferredPrompt(null);
    } else {
      setShowInstallGuide(true);
    }
  };

  return (
    <div 
      className="min-h-screen bg-theme-bg text-theme-text flex flex-col font-sans antialiased transition-colors duration-200"
      style={{
        backgroundColor: activeTheme.vars['--bg-app'],
        color: activeTheme.vars['--text-primary']
      }}
    >
      {/* Top Navbar Header */}
      <header 
        className="border-b border-theme-border sticky top-0 z-40 transition-colors duration-200 shadow-sm"
        style={{
          backgroundColor: activeTheme.vars['--bg-header']
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Brand Logo & Title */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText shadow-theme-glow transition-all flex-shrink-0">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-theme-accent" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-1.5">
                <h1 className="text-sm sm:text-base font-bold text-theme-text tracking-tight truncate">
                  StudyTracker
                </h1>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-theme-accentSub text-theme-accentText border border-theme-accentBorder hidden md:inline-block">
                  Daily Goal
                </span>
              </div>
              <p className="text-[11px] text-theme-muted hidden lg:block truncate">
                140 Java Lectures + 140 Practice Drills • 3+3 Goal / Day • Starts 21 Nov 2026
              </p>
            </div>
          </div>

          {/* Desktop Center Navigation Tabs (Hidden on mobile, uses bottom dock instead) */}
          <nav className="hidden md:flex items-center space-x-1 bg-theme-card border border-theme-border p-1 rounded-2xl text-xs sm:text-sm shadow-sm flex-shrink-0">
            {/* 1. Java Lectures & Notes */}
            <button
              onClick={() => setActiveNav('java-lectures')}
              className={`group flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold transition-all duration-200 active:scale-95 whitespace-nowrap ${
                (activeNav === 'java-lectures' || activeNav === 'dashboard')
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
              }`}
            >
              <BookOpen className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              <span>Java Lectures & Notes</span>
            </button>

            {/* 2. Java Practice */}
            <button
              onClick={() => setActiveNav('java-practice')}
              className={`group flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold transition-all duration-200 active:scale-95 whitespace-nowrap ${
                activeNav === 'java-practice'
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
              }`}
            >
              <Coffee className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                activeNav === 'java-practice' ? 'text-inherit' : 'text-amber-400 group-hover:text-amber-300'
              }`} />
              <span>Java Practice</span>
            </button>

            {/* 3. Progress & Tracking Records */}
            <button
              onClick={() => setActiveNav('progress-tracking')}
              className={`group flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold transition-all duration-200 active:scale-95 whitespace-nowrap ${
                (activeNav === 'progress-tracking' || activeNav === 'progress' || activeNav === 'roadmap')
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
              }`}
            >
              <BarChart3 className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                (activeNav === 'progress-tracking' || activeNav === 'progress' || activeNav === 'roadmap') ? 'text-inherit' : 'text-cyan-400'
              }`} />
              <span>Progress & Records</span>
            </button>
          </nav>

          {/* Right Header Controls: Day Pill with integrated Save/Sync dot, Install & Theme Selector */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs flex-shrink-0">
            {/* Active Day Pill (Circular progress border ring + complete full green state) */}
            <div 
              className="flex items-center space-x-2 bg-theme-card border border-theme-border px-2.5 py-1 rounded-xl text-xs whitespace-nowrap shadow-sm cursor-default select-none"
              title={`Day ${activeDayNumber} • ${completedDayTasks}/${totalDayTasks} completed (${Math.round(dayProgressPct)}%) • ${isDayFullyComplete ? 'Full Day Complete & Saved' : completedDayTasks > 0 ? 'Partially Saved to Cloud' : syncStatus === 'saving' ? 'Saving...' : 'Not Started'}`}
            >
              {/* Dynamic Circular Progress Indicator */}
              <div className="relative w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 -rotate-90 transform" viewBox="0 0 16 16">
                  {/* Track ring */}
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="text-theme-border"
                  />
                  {/* Progress border ring (emerald green for completed portion) */}
                  {dayProgressPct > 0 && (
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      fill="transparent"
                      stroke="#10b981"
                      strokeWidth="2.2"
                      strokeDasharray={37.7}
                      strokeDashoffset={37.7 * (1 - dayProgressPct / 100)}
                      strokeLinecap="round"
                      className="transition-all duration-500 ease-out"
                    />
                  )}
                  {/* Center Dot: full green if complete, pulsing amber if saving, theme dot if 0% */}
                  <circle
                    cx="8"
                    cy="8"
                    r={isDayFullyComplete ? 4.5 : 2.5}
                    fill={
                      isDayFullyComplete
                        ? '#10b981'
                        : syncStatus === 'saving'
                        ? '#fbbf24'
                        : completedDayTasks > 0
                        ? '#10b981'
                        : 'currentColor'
                    }
                    className={`transition-all duration-300 ${
                      isDayFullyComplete
                        ? 'filter drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]'
                        : syncStatus === 'saving'
                        ? 'animate-pulse'
                        : completedDayTasks === 0
                        ? 'text-theme-accent'
                        : ''
                    }`}
                  />
                </svg>
              </div>

              <span className="text-theme-muted font-medium text-[11px] sm:text-xs">Day</span>
              <strong className="text-theme-text font-mono font-bold text-[11px] sm:text-xs">{activeDayNumber}</strong>
            </div>

            {/* Install App Button (Desktop only, mobile has install banner or menu) */}
            {!isStandalone && (
              <button
                onClick={handleInstallApp}
                className="hidden lg:flex items-center space-x-1 px-2.5 py-1 rounded-xl border border-theme-border bg-theme-card hover:bg-theme-cardSub text-theme-secondary hover:text-theme-text transition-all whitespace-nowrap text-xs shadow-sm"
                title="Install App"
              >
                <Download className="w-3.5 h-3.5 text-theme-accent" />
                <span className="font-semibold text-[11px]">Install</span>
              </button>
            )}

            {/* Visual Theme Switcher — compact pill */}
            <div className="relative" ref={dropdownRef}>
              {/* Trigger button: rounded pill showing current theme dot + mode icon */}
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border border-theme-border bg-theme-card hover:bg-theme-cardSub shadow-sm transition-all focus:outline-none"
                title="Pick Theme"
              >
                {/* Active colour swatch dot */}
                <span
                  className="w-4 h-4 rounded-md border border-black/10 shadow-sm flex-shrink-0"
                  style={{ backgroundColor: activeTheme.dotColor }}
                />
                {isDark
                  ? <Moon className="w-3.5 h-3.5 text-theme-muted" />
                  : <Sun  className="w-3.5 h-3.5 text-amber-500" />
                }
              </button>

              {/* Compact pill theme picker */}
              {themeDropdownOpen && (
                <>
                  {/* backdrop */}
                  <div
                    className="theme-panel-backdrop fixed inset-0 z-[9997]"
                    onClick={() => setThemeDropdownOpen(false)}
                  />

                  {/* Floating card — 3 curated themes */}
                  <div
                    className="theme-panel-card absolute right-0 z-[9998] rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                      top: 'calc(100% + 10px)',
                      width: 240,
                      padding: '12px',
                      backgroundColor: activeTheme.vars['--bg-card'],
                      border: `1.5px solid ${activeTheme.vars['--border-sub']}`,
                      boxShadow: isDark
                        ? '0 20px 40px -6px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06)'
                        : '0 20px 40px -6px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.05)',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-theme-border">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-theme-muted">
                        Select Theme
                      </span>
                      <Palette className="w-3.5 h-3.5 text-theme-accent" />
                    </div>

                    {/* 3 Theme Options */}
                    <div className="space-y-1.5">
                      {themes.map(t => {
                        const isSelected = t.id === theme;
                        return (
                          <button
                            key={t.id}
                            onClick={e => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              switchTheme(t.id, rect.left + rect.width / 2, rect.top + rect.height / 2);
                              setThemeDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-theme-accentSub border border-theme-accentBorder text-theme-accentText shadow-sm'
                                : 'hover:bg-theme-cardSub text-theme-secondary hover:text-theme-text border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-2.5">
                              <span
                                className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0 shadow-sm"
                                style={{ backgroundColor: t.dotColor }}
                              />
                              <span>{t.name}</span>
                            </div>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - pb-24 on mobile ensures bottom nav dock never overlaps content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-8 pb-24 md:pb-8">
        <div key={activeNav} className="animate-page-enter">
          {(activeNav === 'java-lectures' || activeNav === 'dashboard') && (
            <DashboardView 
              openAccordionTaskId={openAccordionTaskId} 
              onClearOpenAccordionTaskId={() => setOpenAccordionTaskId(null)} 
              onNavigate={(tab) => setActiveNav(tab)}
            />
          )}

          {activeNav === 'java-practice' && (
            <JavaPracticeView />
          )}

          {activeNav === 'dsa-practice' && (
            <DSAPracticeSheetView />
          )}

          {(activeNav === 'progress-tracking' || activeNav === 'progress' || activeNav === 'roadmap') && (
            <ProgressView onOpenNotes={handleOpenNotes} />
          )}
        </div>
      </main>

      {/* Modern Footer (Desktop only) */}
      <footer 
        className="hidden md:block border-t border-theme-border py-5 text-center text-xs text-theme-muted"
        style={{ backgroundColor: activeTheme.vars['--bg-header'] }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>StudyTracker • 47-Day Sprint Starting 21 Nov 2026</span>
          <span className="text-theme-accentText font-medium">Daily Goal: 3 Core Java Topics + 3 Java Practice Drills</span>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Dock (Like a Native Mobile App) */}
      <nav 
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-theme-border shadow-2xl backdrop-blur-md px-2 py-2 transition-colors duration-200"
        style={{ backgroundColor: activeTheme.vars['--bg-header'] }}
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* 1. Lectures */}
          <button
            onClick={() => {
              setActiveNav('java-lectures');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-2xl transition-all duration-200 active:scale-95 ${
              (activeNav === 'java-lectures' || activeNav === 'dashboard')
                ? 'text-theme-accent font-bold scale-105'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <div className={`p-1 rounded-xl transition-colors duration-200 ${(activeNav === 'java-lectures' || activeNav === 'dashboard') ? 'bg-theme-accentSub text-theme-accent' : ''}`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Lectures</span>
          </button>

          {/* 2. Java Practice */}
          <button
            onClick={() => {
              setActiveNav('java-practice');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-2xl transition-all duration-200 active:scale-95 ${
              activeNav === 'java-practice'
                ? 'text-theme-accent font-bold scale-105'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <div className={`p-1 rounded-xl transition-colors duration-200 ${activeNav === 'java-practice' ? 'bg-theme-accentSub text-theme-accent' : ''}`}>
              <Coffee className={`w-5 h-5 transition-transform duration-200 ${activeNav === 'java-practice' ? 'text-theme-accent' : 'text-amber-400'}`} />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Java Lab</span>
          </button>

          {/* 3. Progress & Records */}
          <button
            onClick={() => {
              setActiveNav('progress-tracking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-2xl transition-all duration-200 active:scale-95 ${
              (activeNav === 'progress-tracking' || activeNav === 'progress' || activeNav === 'roadmap')
                ? 'text-theme-accent font-bold scale-105'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <div className={`p-1 rounded-xl transition-colors duration-200 ${(activeNav === 'progress-tracking' || activeNav === 'progress' || activeNav === 'roadmap') ? 'bg-theme-accentSub text-theme-accent' : ''}`}>
              <BarChart3 className={`w-5 h-5 ${(activeNav === 'progress-tracking' || activeNav === 'progress' || activeNav === 'roadmap') ? 'text-theme-accent' : 'text-cyan-400'}`} />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Records</span>
          </button>
        </div>
      </nav>



      {/* Install App Guide Modal */}
      {showInstallGuide && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="rounded-3xl border border-theme-border p-6 max-w-md w-full shadow-2xl space-y-4"
            style={{ backgroundColor: activeTheme.vars['--bg-card'] }}
          >
            <div className="flex items-center justify-between border-b border-theme-border pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText">
                  <Smartphone className="w-4 h-4 text-theme-accent" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-theme-text">Install StudyTracker</h3>
                  <p className="text-xs text-theme-muted">Save as an App on your home screen</p>
                </div>
              </div>
              <button onClick={() => setShowInstallGuide(false)} className="text-theme-muted hover:text-theme-text p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-theme-secondary leading-relaxed">
              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3.5 space-y-1">
                <strong className="text-theme-text block text-xs">📱 Android (Chrome / Edge / Samsung Internet):</strong>
                <span>Open browser menu <strong className="text-theme-text">(⋮)</strong> and tap <strong className="text-theme-accentText">"Install App"</strong> or <strong className="text-theme-accentText">"Add to Home Screen"</strong>.</span>
              </div>

              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3.5 space-y-1">
                <strong className="text-theme-text block text-xs">🍎 iPhone / iPad (Safari):</strong>
                <span>Tap the bottom <strong className="text-theme-text">Share</strong> icon (<Share2 className="w-3 h-3 inline text-theme-accent" />) and tap <strong className="text-theme-accentText">"Add to Home Screen"</strong>.</span>
              </div>

              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3.5 space-y-1">
                <strong className="text-theme-text block text-xs">💻 Windows / Mac (Chrome / Edge / Brave):</strong>
                <span>Click the install icon in the address bar or choose <strong className="text-theme-accentText">"Install StudyTracker"</strong> from browser settings.</span>
              </div>
            </div>

            <button
              onClick={() => setShowInstallGuide(false)}
              className="w-full py-2.5 rounded-xl font-bold text-xs bg-theme-accent text-theme-accentBtnText shadow-theme-glow hover:opacity-90"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
