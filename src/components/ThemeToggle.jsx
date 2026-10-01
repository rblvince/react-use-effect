import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'theme';

// qualunque valore diverso da "dark" (chiave assente, valore sporco) vale "light"
function getSavedTheme() {
  return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getSavedTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.classList.toggle('light', !isDark);

    // gira prima di ogni nuovo effetto e allo smontaggio: la pagina torna light
    return () => {
      root.classList.remove('dark');
      root.classList.add('light');
    };
  }, [isDark]);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
        {isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
      </button>
      <p className="text-sm text-slate-500">Tema attivo: {isDark ? 'scuro' : 'chiaro'}</p>
    </div>
  );
}
