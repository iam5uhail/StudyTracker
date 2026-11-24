import React, { createContext, useContext, useState, useEffect } from 'react';

// Streamlined 3 Themes requested:
// 1. "white in blue" - Clean crisp white background with royal blue accents
// 2. "cream" - Warm eye-pleasing cream / latte with caramel accents
// 3. "black" - Sleek obsidian dark theme matching NamasteDev (pitch dark + glowing amber)
const THEMES = [
  {
    id: 'black',
    name: 'Namaste Black',
    label: 'Black',
    mode: 'dark',
    dotColor: '#F59E0B',
    description: 'Pitch dark obsidian background with glowing warm amber accents and high-contrast cards (as in Namaste DSA)',
    vars: {
      '--bg-app': '#08090C',
      '--bg-header': '#0B0C10',
      '--bg-card': '#111217',
      '--bg-card-sub': '#17181F',
      '--bg-card-hover': '#1E2028',
      '--border-main': '#21232B',
      '--border-sub': '#2D303C',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#D1D5DB',
      '--text-muted': '#9CA3AF',
      '--accent': '#F59E0B',
      '--accent-sub': 'rgba(245, 158, 11, 0.14)',
      '--accent-border': 'rgba(245, 158, 11, 0.35)',
      '--accent-text': '#FBBF24',
      '--accent-btn-text': '#000000',
      '--accent-glow': '0 0 20px -2px rgba(245, 158, 11, 0.35)'
    }
  },
  {
    id: 'white-blue',
    name: 'White in Blue',
    label: 'White Blue',
    mode: 'light',
    dotColor: '#2563EB',
    description: 'Clean crisp white dashboard with royal blue accents and slate typography',
    vars: {
      '--bg-app': '#F8FAFC',
      '--bg-header': '#FFFFFF',
      '--bg-card': '#FFFFFF',
      '--bg-card-sub': '#F1F5F9',
      '--bg-card-hover': '#E2E8F0',
      '--border-main': '#CBD5E1',
      '--border-sub': '#94A3B8',
      '--text-primary': '#0F172A',
      '--text-secondary': '#334155',
      '--text-muted': '#475569',
      '--accent': '#2563EB',
      '--accent-sub': 'rgba(37, 99, 235, 0.10)',
      '--accent-border': 'rgba(37, 99, 235, 0.25)',
      '--accent-text': '#1D4ED8',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 0 16px -2px rgba(37, 99, 235, 0.25)'
    }
  },
  {
    id: 'cream',
    name: 'Warm Cream',
    label: 'Cream',
    mode: 'light',
    dotColor: '#D97706',
    description: 'Comfortable warm parchment cream background with soft ivory cards and rich caramel accents',
    vars: {
      '--bg-app': '#FAF7F2',
      '--bg-header': '#F5F0E6',
      '--bg-card': '#FFFFFF',
      '--bg-card-sub': '#F7F3EC',
      '--bg-card-hover': '#EEE7DC',
      '--border-main': '#D6D3D1',
      '--border-sub': '#A8A29E',
      '--text-primary': '#1C1917',
      '--text-secondary': '#292524',
      '--text-muted': '#57534E',
      '--accent': '#D97706',
      '--accent-sub': 'rgba(217, 119, 6, 0.12)',
      '--accent-border': 'rgba(217, 119, 6, 0.28)',
      '--accent-text': '#B45309',
      '--accent-btn-text': '#FFFFFF',
      '--accent-glow': '0 0 16px -2px rgba(217, 119, 6, 0.25)'
    }
  }
];

const ThemeContext = createContext(null);
const THEME_STORAGE_KEY = 'study_app_theme_v3_clean';

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES.find(t => t.id === saved)) return saved;
    } catch (e) {}
    return 'black'; // Default to black as shown in user's Namaste DSA screenshot
  });

  const activeTheme = THEMES.find(t => t.id === theme) || THEMES[0];
  const isDark = activeTheme.mode === 'dark';

  // Apply CSS custom properties to :root
  const applyThemeVars = (themeObj) => {
    const root = document.documentElement;
    Object.entries(themeObj.vars).forEach(([prop, val]) => {
      root.style.setProperty(prop, val);
    });
    if (themeObj.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Switch theme with optional View Transition animation
  const switchTheme = (newThemeId, clientX, clientY) => {
    const target = THEMES.find(t => t.id === newThemeId);
    if (!target) return;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, newThemeId);
    } catch (e) {}

    if (!document.startViewTransition) {
      applyThemeVars(target);
      setThemeState(newThemeId);
      return;
    }

    try {
      const x = clientX ?? window.innerWidth / 2;
      const y = clientY ?? 0;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.classList.add('theme-switching');
      const transition = document.startViewTransition(() => {
        applyThemeVars(target);
        setThemeState(newThemeId);
      });

      transition.ready.then(() => {
        try {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
              ]
            },
            {
              duration: 350,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              pseudoElement: '::view-transition-new(root)'
            }
          ).finished.finally(() => {
            document.documentElement.classList.remove('theme-switching');
          });
        } catch (e) {
          document.documentElement.classList.remove('theme-switching');
        }
      }).catch(() => {
        document.documentElement.classList.remove('theme-switching');
      });
    } catch (e) {
      applyThemeVars(target);
      setThemeState(newThemeId);
    }
  };

  useEffect(() => {
    applyThemeVars(activeTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme: (id) => switchTheme(id),
      switchTheme,
      themes: THEMES,
      activeTheme,
      isDark
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
