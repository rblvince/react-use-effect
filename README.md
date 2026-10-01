# react-use-effect

Esercizi Boolean su `useEffect`: un componente React per ogni esercizio.

## Stack

Vite + React + Tailwind CSS (`@tailwindcss/vite`) + icone [Lucide](https://lucide.dev).

## Esercizi

- **Blocco note persistente** (`NotePad`): il testo della textarea viene salvato in `localStorage` a ogni modifica e recuperato al ricaricamento (lazy initializer di `useState`). Sotto c'è il numero di caratteri, che compare anche nel titolo della tab. "Svuota" cancella il testo e la chiave salvata; con il testo vuoto l'effetto fa `removeItem` invece di `setItem`, così la chiave non ricompare.
- **Tema chiaro / scuro** (`ThemeToggle`): il pulsante alterna tema chiaro e scuro, il tema viene salvato in `localStorage` (un valore non valido ricade su chiaro) e un effetto mette la classe `light` o `dark` su `<html>`. Il dark mode di Tailwind è basato su classe (`@custom-variant dark` in `index.css`). Con "Nascondi ThemeToggle" il componente viene smontato e la cleanup riporta la pagina al tema chiaro; rimostrandolo torna il tema salvato.
- **Dimensioni della finestra** (`WindowSize`): larghezza e altezza aggiornate in tempo reale con un listener su `resize` (rimosso nella cleanup) e un badge con il breakpoint: mobile sotto i 768px, tablet sotto i 992px, desktop oltre. Il breakpoint è calcolato nel render, non è uno stato.

## Sviluppo

```bash
npm install
npm run dev
```
