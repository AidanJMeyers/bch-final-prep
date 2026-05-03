import React, { useEffect, useState } from 'react';
import QuestionItem from './QuestionItem.jsx';
import { storage } from '../storage';

export default function PastMCQsView({ items }) {
  const [state, setState] = useState({});
  const [tick, setTick] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    (async () => {
      const s = {};
      await Promise.all(items.map(async (_, i) => {
        s[i] = await storage.get(`bchfinal:past:q${i}`);
      }));
      setState(s);
    })();
  }, [tick, items]);

  const groups = Array.from(new Set(items.map((q) => q.source || 'Other')));
  const filtered = items
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => filter === 'all' || q.source === filter);

  const answered = Object.values(state).filter((s) => s && s.submitted);
  const correct = answered.filter((s) => s.correct).length;
  const total = items.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-rose-700 via-amber-700 to-amber-500 text-white rounded-xl p-6 mb-6 shadow-lg">
        <h1 className="text-3xl font-bold">📜 Past Exam MCQs</h1>
        <p className="text-amber-100 mt-1">Reconstructed multiple-choice items from Exams I–IV. The professor reuses styles, distractors, and themes — these are the highest-yield practice on the dashboard.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6 shadow-sm flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-6">
          <div className="text-center"><div className="text-3xl font-bold text-emerald-600">{correct}</div><div className="text-xs text-slate-500">Correct</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-slate-900">{answered.length}/{total}</div><div className="text-xs text-slate-500">Answered</div></div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded-full text-xs font-semibold ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>All ({items.length})</button>
          {groups.map((g) => {
            const n = items.filter((q) => q.source === g).length;
            return (
              <button key={g} onClick={() => setFilter(g)} className={`px-3 py-1 rounded-full text-xs font-semibold ${filter === g ? 'bg-rose-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{g} ({n})</button>
            );
          })}
        </div>
      </div>

      {filtered.map(({ q, i }) => (
        <QuestionItem key={i} storageKey={`bchfinal:past:q${i}`} q={q} index={i} onAnswered={() => setTick((t) => t + 1)} />
      ))}
    </div>
  );
}
