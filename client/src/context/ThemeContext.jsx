import React, { createContext, useContext, useState, useEffect } from 'react';

const THEMES = [
  {
    id: 'emerald',
    name: 'Emerald Matrix',
    label: 'Emerald',
    mode: 'dark',
    dotColor: '#10B981',
    description: 'Deep forest obsidian with vibrant emerald green accents',
    vars: {
      '--bg-app': '#060A08',
      '--bg-header': '#080D0A',
      '--bg-card': '#0A100D',
      '--bg-card-sub': '#0D1411',
      '--bg-card-hover': '#131F19',
      '--border-main': '#16241D',
      '--border-sub': '#1E3127',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#D1D5DB',
      '--text-muted': '#9CA3AF',
      '--accent': '#10B981',
      '--accent-sub': 'rgba(16, 185, 129, 0.15)',
      '--accent-border': 'rgba(16, 185, 129, 0.35)',
      '--accent-text': '#34D399',
      '--accent-btn-text': '#05140C',
      '--accent-glow': '0 0 16px -2px rgba(16, 185, 129, 0.4)'
    }
  },
  {
    id: 'indigo',
    name: 'Cyber Indigo',
    label: 'Indigo',
    mode: 'dark',
    dotColor: '#6366F1',
    description: 'Midnight navy cyber with electric indigo & cyan accents',
    vars: {
      '--bg-app': '#070A14',
      '--bg-header': '#0B0F1E',
      '--bg-card': '#0F1528',
      '--bg-card-sub': '#141C34',
      '--bg-card-hover': '#1B2544',
      '--border-main': '#1E2A4A',
      '--border-sub': '#283862',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#CBD5E1',
      '--text-muted': '#94A3B8',
      '--accent': '#6366F1',
      '--accent-sub': 'rgba(99, 102, 241, 0.15)',
      '--accent-border': 'rgba(99, 102, 241, 0.35)',
      '--accent-text': '#818CF8',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 0 16px -2px rgba(99, 102, 241, 0.4)'
    }
  },
  {
    id: 'purple',
    name: 'Neon Amethyst',
    label: 'Purple',
    mode: 'dark',
    dotColor: '#A855F7',
    description: 'Velvet royal purple with radiant amethyst violet accents',
    vars: {
      '--bg-app': '#0A0612',
      '--bg-header': '#0F0A1C',
      '--bg-card': '#140E26',
      '--bg-card-sub': '#1A1232',
      '--bg-card-hover': '#241944',
      '--border-main': '#2C1E52',
      '--border-sub': '#3C2970',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#E2E8F0',
      '--text-muted': '#A1A1AA',
      '--accent': '#A855F7',
      '--accent-sub': 'rgba(168, 85, 247, 0.15)',
      '--accent-border': 'rgba(168, 85, 247, 0.35)',
      '--accent-text': '#C084FC',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 0 16px -2px rgba(168, 85, 247, 0.4)'
    }
  },
  {
    id: 'amber',
    name: 'Sunset Ember',
    label: 'Amber',
    mode: 'dark',
    dotColor: '#F59E0B',
    description: 'Charcoal night warmth with glowing golden amber accents',
    vars: {
      '--bg-app': '#0C0906',
      '--bg-header': '#140F0A',
      '--bg-card': '#1A130C',
      '--bg-card-sub': '#221910',
      '--bg-card-hover': '#2F2317',
      '--border-main': '#382819',
      '--border-sub': '#4D3723',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#FED7AA',
      '--text-muted': '#A8A29E',
      '--accent': '#F59E0B',
      '--accent-sub': 'rgba(245, 158, 11, 0.15)',
      '--accent-border': 'rgba(245, 158, 11, 0.35)',
      '--accent-text': '#FBBF24',
      '--accent-btn-text': '#140B04',
      '--accent-glow': '0 0 16px -2px rgba(245, 158, 11, 0.4)'
    }
  },
  {
    id: 'light',
    name: 'Modern Studio Light',
    label: 'Light',
    mode: 'light',
    dotColor: '#2563EB',
    description: 'Ultra-crisp slate white mode with high-contrast text and blue accents',
    vars: {
      '--bg-app': '#F8FAFC',
      '--bg-header': '#FFFFFF',
      '--bg-card': '#FFFFFF',
      '--bg-card-sub': '#F1F5F9',
      '--bg-card-hover': '#E2E8F0',
      '--border-main': '#E2E8F0',
      '--border-sub': '#CBD5E1',
      '--text-primary': '#0F172A',
      '--text-secondary': '#334155',
      '--text-muted': '#64748B',
      '--accent': '#2563EB',
      '--accent-sub': 'rgba(37, 99, 235, 0.10)',
      '--accent-border': 'rgba(37, 99, 235, 0.30)',
      '--accent-text': '#2563EB',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 4px 14px 0 rgba(37, 99, 235, 0.25)'
    }
  }
];

const THEME_STORAGE_KEY = 'study_tracker_theme_v2';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES.some(t => t.id === saved)) {
        return saved;
      }
    } catch (e) {}
    return 'emerald';
  });

  const activeTheme = THEMES.find(t => t.id === currentThemeId) || THEMES[0];

  // Apply CSS custom properties and attributes to document root whenever theme changes
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, currentThemeId);
    } catch (e) {}

    const root = document.documentElement;
    root.setAttribute('data-theme', currentThemeId);
    root.classList.toggle('dark', activeTheme.mode === 'dark');
    root.classList.toggle('light', activeTheme.mode === 'light');

    // Set all CSS variables
    Object.entries(activeTheme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
  }, [currentThemeId, activeTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentThemeId,
        setTheme: setCurrentThemeId,
        themes: THEMES,
        activeTheme,
        isDark: activeTheme.mode === 'dark'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
