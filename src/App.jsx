import { useState } from 'react';
import Section from './components/Section';
import NotePad from './components/NotePad';
import ThemeToggle from './components/ThemeToggle';
import WindowSize from './components/WindowSize';

function App() {
  const [showToggle, setShowToggle] = useState(true);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">React useEffect</h1>
      <Section title="1. Blocco note persistente">
        <NotePad />
      </Section>
      <Section title="2. Tema chiaro / scuro">
        <button
          onClick={() => setShowToggle(!showToggle)}
          className="self-start text-sm font-medium text-slate-700 underline"
        >
          {showToggle ? 'Nascondi ThemeToggle' : 'Mostra ThemeToggle'}
        </button>
        {showToggle && <ThemeToggle />}
      </Section>
      <Section title="3. Dimensioni della finestra">
        <WindowSize />
      </Section>
    </main>
  );
}

export default App;
