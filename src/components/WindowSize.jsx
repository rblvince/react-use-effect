import { useEffect, useState } from 'react';

const badgeStyles = {
  mobile: 'bg-amber-100 text-amber-800',
  tablet: 'bg-sky-100 text-sky-800',
  desktop: 'bg-green-100 text-green-800',
};

function getBreakpoint(width) {
  if (width < 768) return 'mobile';
  if (width < 992) return 'tablet';
  return 'desktop';
}

export default function WindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // valore derivato: si calcola nel render, niente stato né effetto in più
  const breakpoint = getBreakpoint(size.width);

  return (
    <div className="flex items-center justify-between">
      <p className="text-lg font-semibold text-slate-900">
        {size.width} × {size.height} px
      </p>
      <span className={`rounded-full px-3 py-1 text-sm font-medium ${badgeStyles[breakpoint]}`}>
        {breakpoint}
      </span>
    </div>
  );
}
