import { createContext, useContext, useState, useEffect, useCallback } from 'react';

import '../themes/theme-noir.css';
import '../themes/theme-midnight.css';
import '../themes/theme-azure.css';
import '../themes/theme-crimson.css';

export const THEMES = [
  { id: 'noir',     label: 'Ivory & Ink' },
  { id: 'midnight', label: 'Midnight'    },
  { id: 'azure',    label: 'Deep Ocean'  },
  { id: 'crimson',  label: 'Bordeaux'    },
];

const DEFAULT_THEME = 'noir';
const STORAGE_KEY   = 'artex-theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME
  );

  const applyTheme = useCallback((themeId) => {
    if (!THEMES.find((t) => t.id === themeId)) return;

    document.body.setAttribute('data-theme', themeId);

    sessionStorage.setItem(STORAGE_KEY, themeId);

    setCurrentTheme(themeId);
  }, []);

  // Restore theme on first mount
  useEffect(() => {
    applyTheme(currentTheme);
  }, []);
  return (
    <ThemeContext.Provider value={{ currentTheme, applyTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ── Custom hook ───────────────────────────────────────────────────────
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
