import React from 'react';

export function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-lg shadow-sm ${className}`}>
      {title && <div className="px-4 py-2 border-b border-slate-100 text-sm font-semibold text-slate-700">{title}</div>}
      <div className="p-4">{children}</div>
    </div>
  );
}

const PILL = {
  slate: 'bg-slate-100 text-slate-700',
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-800',
  red: 'bg-red-100 text-red-700',
  violet: 'bg-violet-100 text-violet-700',
  sky: 'bg-sky-100 text-sky-700',
  rose: 'bg-rose-100 text-rose-700'
};
export function Pill({ children, color = 'slate' }) {
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${PILL[color] || PILL.slate}`}>{children}</span>;
}

const CALLOUT = {
  info: 'bg-sky-50 border-sky-300 text-sky-900',
  warn: 'bg-amber-50 border-amber-300 text-amber-900',
  danger: 'bg-red-50 border-red-300 text-red-900',
  tip: 'bg-emerald-50 border-emerald-300 text-emerald-900',
  theme: 'bg-violet-50 border-violet-400 text-violet-900'
};
export function Callout({ kind = 'info', title, children }) {
  return (
    <div className={`border-l-4 p-3 rounded-r ${CALLOUT[kind] || CALLOUT.info} my-3`}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="text-sm prose-tight">{children}</div>
    </div>
  );
}

export function Theme({ title, children }) {
  return (
    <div className="my-4 border-2 border-violet-300 bg-violet-50 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-violet-700 text-lg">★</span>
        <span className="text-xs uppercase tracking-wider font-bold text-violet-700">Big Theme</span>
      </div>
      {title && <div className="font-bold text-violet-900 mb-1">{title}</div>}
      <div className="text-sm text-violet-900 prose-tight">{children}</div>
    </div>
  );
}

export function Table({ headers, rows, dense = false }) {
  return (
    <div className="overflow-x-auto my-3">
      <table className="min-w-full text-sm border border-slate-200 rounded">
        <thead className="bg-slate-100">
          <tr>{headers.map((h, i) => <th key={i} className={`${dense ? 'px-2 py-1.5' : 'px-3 py-2'} text-left font-semibold text-slate-700 border-b border-slate-200`}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
              {r.map((c, j) => <td key={j} className={`${dense ? 'px-2 py-1.5' : 'px-3 py-2'} border-b border-slate-100 align-top`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DifficultyChip({ level }) {
  const map = {
    E: 'bg-emerald-100 text-emerald-700',
    M: 'bg-yellow-100 text-yellow-800',
    H: 'bg-red-100 text-red-700'
  };
  const label = { E: 'Easy', M: 'Medium', H: 'Hard' }[level] || '';
  if (!level) return null;
  return <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${map[level]}`} title={label}>{level}</span>;
}

// Reusable inline SVG primitives for content-relevant diagrams
export function SvgFrame({ width = 460, height = 200, children, label }) {
  return (
    <figure className="my-3">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, border: '1px solid #cbd5e1', borderRadius: 6, background: '#fafbfc' }}>
        {children}
      </svg>
      {label && <figcaption className="text-xs text-slate-500 mt-1 italic">{label}</figcaption>}
    </figure>
  );
}

export function AnchorImage({ src, alt, caption, source, width }) {
  const url = `${import.meta.env.BASE_URL}images/raw/${src}`;
  return (
    <figure className="my-4">
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className="rounded-lg border border-slate-200 shadow-sm bg-white max-w-full h-auto mx-auto block"
        style={width ? { maxWidth: width } : {}}
      />
      {(caption || source) && (
        <figcaption className="mt-1.5 text-xs text-slate-600 italic max-w-prose">
          {caption}
          {source && <span className="block not-italic text-[10px] text-slate-400 mt-0.5">Source: {source}</span>}
        </figcaption>
      )}
    </figure>
  );
}

export function ImgGrid({ children, cols = 2 }) {
  const colMap = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };
  return <div className={`grid gap-4 ${colMap[cols] || colMap[2]}`}>{children}</div>;
}

export function ArrowRight({ x1, y, x2, color = '#0f172a', label, lblColor = '#475569' }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 - 6} y2={y} stroke={color} strokeWidth="2" />
      <polygon points={`${x2},${y} ${x2 - 8},${y - 4} ${x2 - 8},${y + 4}`} fill={color} />
      {label && <text x={(x1 + x2) / 2} y={y - 6} textAnchor="middle" fontSize="11" fill={lblColor}>{label}</text>}
    </g>
  );
}
