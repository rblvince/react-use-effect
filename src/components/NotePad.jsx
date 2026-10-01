import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';

const STORAGE_KEY = 'notepad-text';

export default function NotePad() {
  // lazy initializer: localStorage viene letto solo al primo render
  const [text, setText] = useState(() => localStorage.getItem(STORAGE_KEY) ?? '');

  const count = `${text.length} ${text.length === 1 ? 'carattere' : 'caratteri'}`;

  // testo vuoto = niente chiave, così dopo "Svuota" l'effetto non la rimette
  useEffect(() => {
    if (text) {
      localStorage.setItem(STORAGE_KEY, text);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [text]);

  useEffect(() => {
    document.title = count;
  }, [count]);

  function handleClear() {
    setText('');
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Note
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder="Scrivi qui: il testo resta anche se ricarichi la pagina"
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </label>
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{count}</p>
        <button
          onClick={handleClear}
          disabled={!text}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-600"
        >
          <Trash2 size={16} />
          Svuota
        </button>
      </div>
    </div>
  );
}
