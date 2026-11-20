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
  ChevronDown,
  Download,
  Smartphone,
  Share2,
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

  // PWA Install prompt listener
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
    });

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      setIsStandalone(true);
    }

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

          {/* Right Header Controls: Status Badges, Install App & Theme Switcher */}
          <div className="flex items-center space-x-2 text-xs">
            {/* Install PWA App Button (Shows when not running as standalone app) */}
            {!isStandalone && (
              <button
                onClick={handleInstallApp}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-theme-accentBorder bg-theme-accentSub text-theme-accentText hover:bg-theme-accent hover:text-theme-accentBtnText font-bold shadow-sm transition-all"
                title="Install as App on Phone or PC"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="text-xs">Install App</span>
              </button>
            )}

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
                <div 
                  className="absolute right-0 mt-2 w-64 rounded-2xl border border-theme-border shadow-2xl p-2 z-[9999] space-y-1"
                  style={{
                    backgroundColor: activeTheme.vars['--bg-card'],
                    color: activeTheme.vars['--text-primary'],
                    boxShadow: isDark 
                      ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--border-main)' 
                      : '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--border-main)'
                  }}
                >
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
                            className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0 shadow-sm"
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
      <footer 
        className="border-t border-theme-border py-5 text-center text-xs text-theme-muted"
        style={{ backgroundColor: activeTheme.vars['--bg-header'] }}
      >
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

      {/* Install App Guide Modal */}
      {showInstallGuide && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
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
                  <h3 className="text-base font-bold text-theme-text">Install StudyTracker App</h3>
                  <p className="text-xs text-theme-muted">Use as a standalone app on your device</p>
                </div>
              </div>
              <button onClick={() => setShowInstallGuide(false)} className="text-theme-muted hover:text-theme-text p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-theme-secondary leading-relaxed">
              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3.5 space-y-1.5">
                <strong className="text-theme-text block text-xs">📱 On Android (Chrome / Edge):</strong>
                <span>Tap the top browser menu <strong className="text-theme-text">(⋮)</strong> and select <strong className="text-theme-accentText">"Install App"</strong> or <strong className="text-theme-accentText">"Add to Home Screen"</strong>.</span>
              </div>

              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3.5 space-y-1.5">
                <strong className="text-theme-text block text-xs">🍎 On iPhone / iPad (Safari):</strong>
                <span>Tap the bottom <strong className="text-theme-text">Share</strong> button (box with arrow <Share2 className="w-3 h-3 inline text-theme-accent" />) and choose <strong className="text-theme-accentText">"Add to Home Screen"</strong>.</span>
              </div>

              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3.5 space-y-1.5">
                <strong className="text-theme-text block text-xs">💻 On PC / Mac (Chrome / Edge / Brave):</strong>
                <span>Click the install icon in the URL address bar or select <strong className="text-theme-accentText">"Install StudyTracker"</strong> from the browser menu.</span>
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
