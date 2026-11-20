import React, { createContext, useContext, useState, useEffect } from 'react';

// Professional, eye-pleasing website color schemes (Inspired by Visme Design Guidelines & Awwwards)
// Focus on low eye strain, high readability, official aesthetic, and elegant contrast.
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
      '--bg-card-sub': '#0E1713',
      '--bg-card-hover': '#14221C',
      '--border-main': '#18281F',
      '--border-sub': '#22382B',
      '--text-primary': '#F3F4F6',
      '--text-secondary': '#9CA3AF',
      '--text-muted': '#6B7280',
      '--accent': '#10B981',
      '--accent-sub': 'rgba(16, 185, 129, 0.12)',
      '--accent-border': 'rgba(16, 185, 129, 0.28)',
      '--accent-text': '#34D399',
      '--accent-btn-text': '#05140C',
      '--accent-glow': '0 0 16px -2px rgba(16, 185, 129, 0.25)'
    }
  },
  {
    id: 'navy',
    name: 'Corporate Navy',
    label: 'Navy',
    mode: 'dark',
    dotColor: '#38BDF8',
    description: 'Executive Oxford dark navy with soft glacier ice accents — trusted, calm and restful for long study hours',
    vars: {
      '--bg-app': '#0A0E1A',
      '--bg-header': '#0F1424',
      '--bg-card': '#131B30',
      '--bg-card-sub': '#1A243F',
      '--bg-card-hover': '#212E50',
      '--border-main': '#243256',
      '--border-sub': '#304270',
      '--text-primary': '#F1F5F9',
      '--text-secondary': '#CBD5E1',
      '--text-muted': '#7E8EA8',
      '--accent': '#38BDF8',
      '--accent-sub': 'rgba(56, 189, 248, 0.12)',
      '--accent-border': 'rgba(56, 189, 248, 0.28)',
      '--accent-text': '#7DD3FC',
      '--accent-btn-text': '#0A0E1A',
      '--accent-glow': '0 0 16px -2px rgba(56, 189, 248, 0.25)'
    }
  },
  {
    id: 'teal',
    name: 'Deep Teal',
    label: 'Teal',
    mode: 'dark',
    dotColor: '#2DD4BF',
    description: 'Deep ocean slate with muted keppel teal — soothing low-saturation palette recommended for focus',
    vars: {
      '--bg-app': '#0B1315',
      '--bg-header': '#0F1B1E',
      '--bg-card': '#132226',
      '--bg-card-sub': '#1A2E33',
      '--bg-card-hover': '#213940',
      '--border-main': '#243E45',
      '--border-sub': '#31535C',
      '--text-primary': '#F0FDF4',
      '--text-secondary': '#CCFBF1',
      '--text-muted': '#688A92',
      '--accent': '#2DD4BF',
      '--accent-sub': 'rgba(45, 212, 191, 0.12)',
      '--accent-border': 'rgba(45, 212, 191, 0.28)',
      '--accent-text': '#5EEAD4',
      '--accent-btn-text': '#0B1315',
      '--accent-glow': '0 0 16px -2px rgba(45, 212, 191, 0.25)'
    }
  },
  {
    id: 'charcoal',
    name: 'Minimal Charcoal',
    label: 'Charcoal',
    mode: 'dark',
    dotColor: '#94A3B8',
    description: 'Subtle matte graphite with refined steel borders — zero glare and distraction-free',
    vars: {
      '--bg-app': '#111215',
      '--bg-header': '#16171B',
      '--bg-card': '#1B1C22',
      '--bg-card-sub': '#23252C',
      '--bg-card-hover': '#2C2E37',
      '--border-main': '#2F313A',
      '--border-sub': '#3E414D',
      '--text-primary': '#F4F4F5',
      '--text-secondary': '#D4D4D8',
      '--text-muted': '#71717A',
      '--accent': '#94A3B8',
      '--accent-sub': 'rgba(148, 163, 184, 0.14)',
      '--accent-border': 'rgba(148, 163, 184, 0.30)',
      '--accent-text': '#E2E8F0',
      '--accent-btn-text': '#090A0C',
      '--accent-glow': '0 0 16px -2px rgba(148, 163, 184, 0.20)'
    }
  },
  {
    id: 'github',
    name: 'GitHub Dark',
    label: 'GitHub',
    mode: 'dark',
    dotColor: '#238636',
    description: 'Official developer dark canvas with subtle borders and solid forest green accents',
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
      '--accent-glow': '0 2px 10px rgba(37, 99, 235, 0.20)'
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
    return 'black'; // Obsidian Black is the default
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
