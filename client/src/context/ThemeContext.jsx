import React, { createContext, useContext, useState, useEffect } from 'react';

const THEMES = [
  {
    id: 'black',
    name: 'Obsidian Black',
    label: 'Black',
    mode: 'dark',
    dotColor: '#10B981',
    description: 'The signature dark obsidian black background with sleek dark surfaces and emerald accents',
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
      '--accent-glow': '0 0 16px -2px rgba(16, 185, 129, 0.35)'
    }
  },
  {
    id: 'cream',
    name: 'Notion Cream',
    label: 'Cream',
    mode: 'light',
    dotColor: '#9A5B32',
    description: 'Warm organic linen paper with pure white cards, espresso text and terracotta bronze',
    vars: {
      '--bg-app': '#FBF9F5',
      '--bg-header': '#FFFFFF',
      '--bg-card': '#FFFFFF',
      '--bg-card-sub': '#F5F1E8',
      '--bg-card-hover': '#ECE5DA',
      '--border-main': '#E8E2D6',
      '--border-sub': '#D8D0C2',
      '--text-primary': '#23211E',
      '--text-secondary': '#4D4741',
      '--text-muted': '#7C746B',
      '--accent': '#9A5B32',
      '--accent-sub': 'rgba(154, 91, 50, 0.10)',
      '--accent-border': 'rgba(154, 91, 50, 0.26)',
      '--accent-text': '#844C27',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 2px 10px rgba(154, 91, 50, 0.18)'
    }
  },
  {
    id: 'white',
    name: 'Studio White',
    label: 'White',
    mode: 'light',
    dotColor: '#2563EB',
    description: 'Crisp minimal slate white with pure white cards and high-contrast dark slate text (Stripe style)',
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
      '--accent-sub': 'rgba(37, 99, 235, 0.08)',
      '--accent-border': 'rgba(37, 99, 235, 0.24)',
      '--accent-text': '#1D4ED8',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 2px 10px rgba(37, 99, 235, 0.2)'
    }
  },
  {
    id: 'linear',
    name: 'Linear Dark',
    label: 'Slate',
    mode: 'dark',
    dotColor: '#5E6AD2',
    description: 'Sophisticated dark graphite with refined purple-indigo accents (Linear style)',
    vars: {
      '--bg-app': '#0C0D11',
      '--bg-header': '#111218',
      '--bg-card': '#161720',
      '--bg-card-sub': '#1D1F2A',
      '--bg-card-hover': '#252735',
      '--border-main': '#272A38',
      '--border-sub': '#34384A',
      '--text-primary': '#F1F3F9',
      '--text-secondary': '#C2C6D6',
      '--text-muted': '#7E849B',
      '--accent': '#5E6AD2',
      '--accent-sub': 'rgba(94, 106, 210, 0.12)',
      '--accent-border': 'rgba(94, 106, 210, 0.28)',
      '--accent-text': '#828DF8',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 2px 10px rgba(94, 106, 210, 0.25)'
    }
  },
  {
    id: 'github',
    name: 'GitHub Dark',
    label: 'GitHub',
    mode: 'dark',
    dotColor: '#238636',
    description: 'Classic developer dark canvas with subtle borders and solid green accents',
    vars: {
      '--bg-app': '#0D1117',
      '--bg-header': '#161B22',
      '--bg-card': '#161B22',
      '--bg-card-sub': '#21262D',
      '--bg-card-hover': '#292E36',
      '--border-main': '#30363D',
      '--border-sub': '#424A53',
      '--text-primary': '#E6EDF3',
      '--text-secondary': '#C9D1D9',
      '--text-muted': '#8B949E',
      '--accent': '#238636',
      '--accent-sub': 'rgba(35, 134, 54, 0.14)',
      '--accent-border': 'rgba(35, 134, 54, 0.32)',
      '--accent-text': '#3FB950',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 2px 10px rgba(35, 134, 54, 0.22)'
    }
  }
];

const THEME_STORAGE_KEY = 'study_tracker_theme_v5';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES.some(t => t.id === saved)) {
        return saved;
      }
    } catch (e) {}
    return 'black'; // Earlier Black is the default
  });

  const activeTheme = THEMES.find(t => t.id === currentThemeId) || THEMES[0];

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, currentThemeId);
    } catch (e) {}

    const root = document.documentElement;
    root.setAttribute('data-theme', currentThemeId);
    root.classList.toggle('dark', activeTheme.mode === 'dark');
    root.classList.toggle('light', activeTheme.mode === 'light');

    Object.entries(activeTheme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
      document.body.style.setProperty(key, val);
    });

    document.body.style.backgroundColor = activeTheme.vars['--bg-app'];
    document.body.style.color = activeTheme.vars['--text-primary'];
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
