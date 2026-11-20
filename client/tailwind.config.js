/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg-app)',
          header: 'var(--bg-header)',
          card: 'var(--bg-card)',
          cardSub: 'var(--bg-card-sub)',
          cardHover: 'var(--bg-card-hover)',
          border: 'var(--border-main)',
          borderSub: 'var(--border-sub)',
          text: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          accent: 'var(--accent)',
          accentSub: 'var(--accent-sub)',
          accentBorder: 'var(--accent-border)',
          accentText: 'var(--accent-text)',
          accentBtnText: 'var(--accent-btn-text)',
        },
        diff: {
          easy: '#10B981',
          medium: '#F59E0B',
          hard: '#EF4444',
        }
      },
      boxShadow: {
        'theme-glow': 'var(--accent-glow)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
