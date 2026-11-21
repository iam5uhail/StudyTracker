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
  Flame,
  Palette,
  Sun,
  Moon,
  Download,
  Smartphone,
  Share2,
  Check,
  X
} from 'lucide-react';
import { useLearning } from './context/LearningContext';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard'); // 'dashboard', 'progress', 'roadmap'
  const [activeNotesData, setActiveNotesData] = useState(null); // { dayNumber, task }
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const dropdownRef = useRef(null);

  const { activeDayNumber, progressStats } = useLearning();
  const { theme, switchTheme, themes, activeTheme, isDark } = useTheme();

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
                140 Java Topics + DSA • Starts 21 Nov 2026
              </p>
            </div>
          </div>

          {/* Desktop Center Navigation Tabs (Hidden on mobile, uses bottom dock instead) */}
          <nav className="hidden md:flex items-center space-x-1 bg-theme-card border border-theme-border p-1 rounded-2xl text-xs sm:text-sm shadow-sm flex-shrink-0">
            <button
              onClick={() => setActiveNav('dashboard')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
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
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
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
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeNav === 'roadmap'
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Roadmap</span>
            </button>
          </nav>

          {/* Right Header Controls: Day Pill, Streak, Install & Theme Selector */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs flex-shrink-0">
            {/* Active Day Pill (Visible on both mobile & desktop) */}
            <div className="flex items-center space-x-1 sm:space-x-1.5 bg-theme-card border border-theme-border px-2 sm:px-2.5 py-1 rounded-xl text-xs whitespace-nowrap shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-theme-accent animate-pulse" />
              <span className="text-theme-muted font-medium text-[11px] sm:text-xs">Day</span>
              <strong className="text-theme-text font-mono font-bold text-[11px] sm:text-xs">{activeDayNumber}</strong>
            </div>

            {/* Streak Pill */}
            <div className="flex items-center space-x-1 bg-theme-card border border-theme-border px-2 sm:px-2.5 py-1 rounded-xl text-xs text-theme-accentText whitespace-nowrap shadow-sm">
              <Flame className="w-3.5 h-3.5 text-theme-accent" />
              <span className="font-mono font-bold text-[11px] sm:text-xs">{progressStats.streak}d</span>
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

      {/* Modern Footer (Desktop only) */}
      <footer 
        className="hidden md:block border-t border-theme-border py-5 text-center text-xs text-theme-muted"
        style={{ backgroundColor: activeTheme.vars['--bg-header'] }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>StudyTracker • 70-Day Target Plan Starting 21 Nov 2026</span>
          <span className="text-theme-accentText font-medium">Daily Goal: 2 Core Java Topics + 1 Rising Brain DSA Problem</span>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Dock (Like a Native Mobile App) */}
      <nav 
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-theme-border shadow-2xl backdrop-blur-md px-3 py-2 transition-colors duration-200"
        style={{ backgroundColor: activeTheme.vars['--bg-header'] }}
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button
            onClick={() => {
              setActiveNav('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-4 rounded-2xl transition-all ${
              activeNav === 'dashboard'
                ? 'text-theme-accent font-bold scale-105'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <div className={`p-1 rounded-xl ${activeNav === 'dashboard' ? 'bg-theme-accentSub text-theme-accent' : ''}`}>
              <Target className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => {
              setActiveNav('progress');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-4 rounded-2xl transition-all ${
              activeNav === 'progress'
                ? 'text-theme-accent font-bold scale-105'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <div className={`p-1 rounded-xl ${activeNav === 'progress' ? 'bg-theme-accentSub text-theme-accent' : ''}`}>
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Progress</span>
          </button>

          <button
            onClick={() => {
              setActiveNav('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-4 rounded-2xl transition-all ${
              activeNav === 'roadmap'
                ? 'text-theme-accent font-bold scale-105'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <div className={`p-1 rounded-xl ${activeNav === 'roadmap' ? 'bg-theme-accentSub text-theme-accent' : ''}`}>
              <Map className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Roadmap</span>
          </button>
        </div>
      </nav>

      {/* Simple Notes Modal */}
      {activeNotesData && (
        <SimpleNotesModal
          taskData={activeNotesData}
          onClose={() => setActiveNotesData(null)}
        />
      )}

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
