import React, { createContext, useContext, useState, useEffect } from 'react';

const THEMES = [
  {
    id: 'black',
    name: 'OLED Black',
    label: 'Black',
    mode: 'dark',
    dotColor: '#000000',
    description: 'Pure pitch black background with deep graphite cards and neon emerald accents',
    vars: {
      '--bg-app': '#000000',
      '--bg-header': '#0C0C0F',
      '--bg-card': '#121217',
      '--bg-card-sub': '#1A1A22',
      '--bg-card-hover': '#242430',
      '--border-main': '#282836',
      '--border-sub': '#38384C',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#E4E4E7',
      '--text-muted': '#A1A1AA',
      '--accent': '#10B981',
      '--accent-sub': 'rgba(16, 185, 129, 0.16)',
      '--accent-border': 'rgba(16, 185, 129, 0.35)',
      '--accent-text': '#34D399',
      '--accent-btn-text': '#000000',
      '--accent-glow': '0 0 16px -2px rgba(16, 185, 129, 0.45)'
    }
  },
  {
    id: 'white',
    name: 'Pure White',
    label: 'White',
    mode: 'light',
    dotColor: '#FFFFFF',
    description: 'Crisp clean studio white background with pure white cards and high-contrast dark text',
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
      '--accent-text': '#1D4ED8',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 4px 14px 0 rgba(37, 99, 235, 0.25)'
    }
  },
  {
    id: 'cream',
    name: 'Warm Cream',
    label: 'Cream',
    mode: 'light',
    dotColor: '#F5EFEB',
    description: 'Warm luxury cream linen with warm ivory cards, espresso text and amber terracotta accents',
    vars: {
      '--bg-app': '#FBF8F3',
      '--bg-header': '#FFFDF9',
      '--bg-card': '#FFFFFF',
      '--bg-card-sub': '#F4ECE1',
      '--bg-card-hover': '#EAE0D2',
      '--border-main': '#E5DCCE',
      '--border-sub': '#D5C7B3',
      '--text-primary': '#261C14',
      '--text-secondary': '#4F3E30',
      '--text-muted': '#7D6855',
      '--accent': '#D97706',
      '--accent-sub': 'rgba(217, 119, 6, 0.12)',
      '--accent-border': 'rgba(217, 119, 6, 0.32)',
      '--accent-text': '#B45309',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 4px 14px 0 rgba(217, 119, 6, 0.25)'
    }
  },
  {
    id: 'navy',
    name: 'Ocean Navy',
    label: 'Navy',
    mode: 'dark',
    dotColor: '#1E3A8A',
    description: 'Distinct deep ocean navy blue background with rich blue cards and sky cyan accents',
    vars: {
      '--bg-app': '#0B132B',
      '--bg-header': '#101B3D',
      '--bg-card': '#15224F',
      '--bg-card-sub': '#1C2D66',
      '--bg-card-hover': '#24387E',
      '--border-main': '#283F8A',
      '--border-sub': '#3653B3',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#CBD5E1',
      '--text-muted': '#94A3B8',
      '--accent': '#38BDF8',
      '--accent-sub': 'rgba(56, 189, 248, 0.16)',
      '--accent-border': 'rgba(56, 189, 248, 0.35)',
      '--accent-text': '#38BDF8',
      '--accent-btn-text': '#0B132B',
      '--accent-glow': '0 0 16px -2px rgba(56, 189, 248, 0.45)'
    }
  },
  {
    id: 'forest',
    name: 'Forest Emerald',
    label: 'Forest',
    mode: 'dark',
    dotColor: '#059669',
    description: 'Deep evergreen pine background with dark forest cards and bright mint accents',
    vars: {
      '--bg-app': '#071A12',
      '--bg-header': '#0C241B',
      '--bg-card': '#103024',
      '--bg-card-sub': '#163F30',
      '--bg-card-hover': '#1E503E',
      '--border-main': '#225C47',
      '--border-sub': '#2D775D',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#D1FAE5',
      '--text-muted': '#86EFAC',
      '--accent': '#10B981',
      '--accent-sub': 'rgba(16, 185, 129, 0.16)',
      '--accent-border': 'rgba(16, 185, 129, 0.35)',
      '--accent-text': '#34D399',
      '--accent-btn-text': '#051C12',
      '--accent-glow': '0 0 16px -2px rgba(16, 185, 129, 0.45)'
    }
  },
  {
    id: 'amber',
    name: 'Sunset Charcoal',
    label: 'Amber',
    mode: 'dark',
    dotColor: '#D97706',
    description: 'Rich dark charcoal warmth with glowing golden amber accents',
    vars: {
      '--bg-app': '#17120C',
      '--bg-header': '#211A11',
      '--bg-card': '#2A2117',
      '--bg-card-sub': '#382C1F',
      '--bg-card-hover': '#473828',
      '--border-main': '#554331',
      '--border-sub': '#6B553E',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#FED7AA',
      '--text-muted': '#D6D3D1',
      '--accent': '#F59E0B',
      '--accent-sub': 'rgba(245, 158, 11, 0.16)',
      '--accent-border': 'rgba(245, 158, 11, 0.35)',
      '--accent-text': '#FBBF24',
      '--accent-btn-text': '#17120C',
      '--accent-glow': '0 0 16px -2px rgba(245, 158, 11, 0.45)'
    }
  }
];

const THEME_STORAGE_KEY = 'study_tracker_theme_v3';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES.some(t => t.id === saved)) {
        return saved;
      }
    } catch (e) {}
    return 'black';
  });

  const activeTheme = THEMES.find(t => t.id === currentThemeId) || THEMES[0];

  // Apply CSS custom properties and attributes to document root AND body directly
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, currentThemeId);
    } catch (e) {}

    const root = document.documentElement;
    root.setAttribute('data-theme', currentThemeId);
    root.classList.toggle('dark', activeTheme.mode === 'dark');
    root.classList.toggle('light', activeTheme.mode === 'light');

    // Set all CSS variables on both root and body
    Object.entries(activeTheme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
      document.body.style.setProperty(key, val);
    });

    // Directly set document body background and text color to ensure zero bleed or lag
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
