import React, { useEffect, useState } from 'react';
import ExamView from './components/ExamView.jsx';
import PracticeExamView from './components/PracticeExamView.jsx';
import PastMCQsView from './components/PastMCQsView.jsx';
import ReviewLaterView from './components/ReviewLaterView.jsx';
import { exams } from './data/exams.js';
import { pastMCQs } from './data/pastMCQs.js';
import { finalPractice } from './data/finalPractice.js';
import { storage, resetAll } from './storage';

export default function App() {
  const [active, setActive] = useState(() => localStorage.getItem('bchfinal:activeTab') || 'exam-1');
  const [progress, setProgress] = useState({});
  const [noteCount, setNoteCount] = useState(0);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => { localStorage.setItem('bchfinal:activeTab', active); }, [active]);

  const refreshProgress = async () => {
    const allKeys = await storage.keys();
    const p = {};
    for (const exam of exams) {
      const blocks = exam.sections.flatMap((s) => s.blocks.map((b) => ({ s: s.id, b: b.id })));
      let reviewed = 0;
      for (const { s, b } of blocks) {
        const v = await storage.get(`bchfinal:e${exam.id}:s${s}:b${b}:reviewed`);
        if (v) reviewed++;
      }
      p[`exam-${exam.id}`] = { reviewed, total: blocks.length };
    }
    const past = await Promise.all(pastMCQs.map((_, i) => storage.get(`bchfinal:past:q${i}`)));
    p['past'] = { reviewed: past.filter((s) => s && s.submitted).length, total: pastMCQs.length };
    const fin = await Promise.all(finalPractice.map((_, i) => storage.get(`bchfinal:final:q${i}`)));
    p['practice'] = { reviewed: fin.filter((s) => s && s.submitted).length, total: finalPractice.length };
    setProgress(p);

    const commentKeys = allKeys.filter((k) => k.startsWith('bchfinal:') && k.endsWith(':comment'));
    const count = (await Promise.all(commentKeys.map((k) => storage.get(k))))
      .filter((v) => v && String(v).trim()).length;
    setNoteCount(count);
  };

  useEffect(() => {
    refreshProgress();
    const id = setInterval(refreshProgress, 2000);
    return () => clearInterval(id);
  }, []);

  const navigate = (target, anchor) => {
    setActive(target);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  };

  const currentExam = exams.find((e) => `exam-${e.id}` === active);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-slate-200 min-h-screen sticky top-0 max-h-screen overflow-y-auto scrollbar-thin">
        <div className="p-5 border-b border-slate-800">
          <div className="text-xs uppercase tracking-wider text-sky-400 font-bold">Final Exam Prep</div>
          <div className="text-xl font-bold text-white mt-1">BCH 335</div>
          <div className="text-xs text-slate-400 mt-1">Cumulative review · saves progress locally</div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold px-2 mb-1 mt-2">Exams</div>
          {exams.map((ex) => {
            const p = progress[`exam-${ex.id}`] || { reviewed: 0, total: 0 };
            const isActive = active === `exam-${ex.id}`;
            return (
              <button
                key={ex.id}
                onClick={() => setActive(`exam-${ex.id}`)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
                  isActive ? 'bg-sky-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className={`text-xs font-bold mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>{ex.id}</span>
                <span className="flex-1">
                  <div className="font-semibold leading-tight">{ex.title}</div>
                  <div className={`text-[10px] mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                    {p.reviewed}/{p.total} reviewed
                  </div>
                </span>
              </button>
            );
          })}
          <div className="my-3 border-t border-slate-800" />
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold px-2 mb-1">Practice</div>
          <button
            onClick={() => setActive('past')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
              active === 'past' ? 'bg-rose-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-base">📜</span>
            <span className="flex-1">
              <div className="font-semibold">Past MCQs</div>
              <div className={`text-[10px] mt-0.5 ${active === 'past' ? 'text-rose-100' : 'text-slate-500'}`}>{progress.past?.reviewed || 0}/{pastMCQs.length} answered</div>
            </span>
          </button>
          <button
            onClick={() => setActive('practice')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
              active === 'practice' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-base">🎯</span>
            <span className="flex-1">
              <div className="font-semibold">Cumulative Practice</div>
              <div className={`text-[10px] mt-0.5 ${active === 'practice' ? 'text-emerald-100' : 'text-slate-500'}`}>{progress.practice?.reviewed || 0}/{finalPractice.length} answered</div>
            </span>
          </button>
          <button
            onClick={() => setActive('review')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
              active === 'review' ? 'bg-amber-500 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-base">📝</span>
            <span className="flex-1">
              <div className="font-semibold">Review Later</div>
              <div className={`text-[10px] mt-0.5 ${active === 'review' ? 'text-amber-100' : 'text-slate-500'}`}>{noteCount} note{noteCount === 1 ? '' : 's'}</div>
            </span>
          </button>
        </nav>
        <div className="p-3 border-t border-slate-800">
          <button onClick={() => setShowReset(true)} className="w-full px-3 py-2 text-xs font-semibold bg-red-900/40 text-red-300 rounded hover:bg-red-900/70">
            Reset All Progress
          </button>
        </div>
      </aside>

      {/* Mobile top nav */}
      <div className="md:hidden fixed top-0 inset-x-0 z-20 bg-slate-900 text-white overflow-x-auto scrollbar-thin flex gap-1 px-2 py-2 border-b border-slate-800">
        {exams.map((ex) => {
          const p = progress[`exam-${ex.id}`] || { reviewed: 0, total: 0 };
          const isActive = active === `exam-${ex.id}`;
          return (
            <button key={ex.id} onClick={() => setActive(`exam-${ex.id}`)} className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${isActive ? 'bg-sky-600' : 'bg-slate-800'}`}>
              Ex{ex.id} · {p.reviewed}/{p.total}
            </button>
          );
        })}
        <button onClick={() => setActive('past')} className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${active === 'past' ? 'bg-rose-600' : 'bg-slate-800'}`}>📜 Past</button>
        <button onClick={() => setActive('practice')} className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${active === 'practice' ? 'bg-emerald-600' : 'bg-slate-800'}`}>🎯 Practice</button>
        <button onClick={() => setActive('review')} className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${active === 'review' ? 'bg-amber-500' : 'bg-slate-800'}`}>📝 {noteCount}</button>
      </div>

      <main className="flex-1 min-w-0 md:pt-0 pt-14">
        {active === 'past' ? (
          <PastMCQsView items={pastMCQs} />
        ) : active === 'practice' ? (
          <PracticeExamView exam={finalPractice} />
        ) : active === 'review' ? (
          <ReviewLaterView exams={exams} finalExam={finalPractice} pastMCQs={pastMCQs} onNavigate={navigate} />
        ) : currentExam ? (
          <ExamView exam={currentExam} />
        ) : (
          <div className="p-10 text-slate-500">Select an exam.</div>
        )}
        <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-xs text-slate-400">
          BCH 335 final-exam study dashboard · progress saved in your browser · built by Aidan Meyers
        </footer>
      </main>

      {showReset && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reset all progress?</h3>
            <p className="text-sm text-slate-600 mb-5">
              This clears every review checkbox, confidence rating, comment, and practice answer. Cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowReset(false)} className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300">Cancel</button>
              <button onClick={async () => { await resetAll(); setShowReset(false); window.location.reload(); }} className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-700">Reset Everything</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
