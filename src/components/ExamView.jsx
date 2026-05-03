import React, { useEffect, useState } from 'react';
import StudyBlock, { confidenceColors } from './StudyBlock.jsx';
import QuestionItem from './QuestionItem.jsx';
import KeyReview from './KeyReview.jsx';
import { storage } from '../storage';

const SUBTABS = [
  { id: 'study', label: 'Study Guide' },
  { id: 'review', label: 'Key Review' },
  { id: 'practice', label: 'Practice MCQs' }
];

export default function ExamView({ exam }) {
  const [subtab, setSubtab] = useState('study');
  const [reviewedState, setReviewedState] = useState({});
  const [confState, setConfState] = useState({});
  const [qState, setQState] = useState({});
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancel = false;
    (async () => {
      const r = {}, c = {}, q = {};
      await Promise.all(exam.sections.flatMap((s) => s.blocks.map(async (b) => {
        const key = `${s.id}-${b.id}`;
        r[key] = await storage.get(`bchfinal:e${exam.id}:s${s.id}:b${b.id}:reviewed`);
        c[key] = await storage.get(`bchfinal:e${exam.id}:s${s.id}:b${b.id}:confidence`);
      })));
      const qs = exam.questions || [];
      await Promise.all(qs.map(async (_, i) => {
        q[i] = await storage.get(`bchfinal:e${exam.id}:q${i}`);
      }));
      if (!cancel) { setReviewedState(r); setConfState(c); setQState(q); }
    })();
    return () => { cancel = true; };
  }, [exam.id, tick]);

  const totalBlocks = exam.sections.reduce((acc, s) => acc + s.blocks.length, 0);
  const reviewedCount = Object.values(reviewedState).filter(Boolean).length;
  const pct = totalBlocks ? Math.round((reviewedCount / totalBlocks) * 100) : 0;

  const qList = exam.questions || [];
  const correctCount = Object.values(qState).filter((s) => s && s.correct).length;
  const answeredCount = Object.values(qState).filter((s) => s && s.submitted).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <header className="mb-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h1 className="text-3xl font-bold text-slate-900">{exam.title}</h1>
          <div className="text-sm text-slate-500">Exam {exam.id}</div>
        </div>
        {exam.subtitle && <p className="text-slate-600 mt-1">{exam.subtitle}</p>}
      </header>

      <div className="flex gap-1 border-b border-slate-200 mb-6 overflow-x-auto">
        {SUBTABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setSubtab(t.id)}
            className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition whitespace-nowrap ${
              subtab === t.id
                ? 'border-sky-600 text-sky-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {subtab === 'study' && (
        <div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-slate-900">Progress & Sections</h2>
              <div className="text-sm font-semibold text-slate-700">{reviewedCount}/{totalBlocks} reviewed · {pct}%</div>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all" style={{ width: `${pct}%` }} />
            </div>
            <div className="space-y-3">
              {exam.sections.map((s) => (
                <div key={s.id}>
                  <div className="font-semibold text-slate-800 mb-1 mt-2">
                    <a href={`#section-${s.id}`} className="hover:underline">§ {s.title}</a>
                    <span className="ml-2 text-xs font-normal text-slate-500">{s.blocks.length} block{s.blocks.length === 1 ? '' : 's'}</span>
                  </div>
                  <ul className="space-y-1">
                    {s.blocks.map((b) => {
                      const key = `${s.id}-${b.id}`;
                      const isReviewed = !!reviewedState[key];
                      const conf = Number(confState[key] || 0);
                      return (
                        <li key={b.id}>
                          <a href={`#block-${s.id}-${b.id}`} className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-slate-50">
                            <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${isReviewed ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                              {isReviewed ? '✓' : '○'}
                            </span>
                            <span className={`inline-block w-3 h-3 rounded-full ${conf ? confidenceColors[conf].split(' ')[0] : 'bg-slate-200'}`} />
                            <span className="text-sm text-slate-700 flex-1">{b.title}</span>
                            {conf > 0 && <span className="text-[11px] text-slate-500">{conf}/5</span>}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {exam.sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="scroll-mt-24 mb-8">
              <div className="bg-gradient-to-r from-sky-700 to-indigo-700 text-white rounded-lg px-5 py-3 mb-4 shadow">
                <h2 className="text-xl font-bold">{s.title}</h2>
                {s.subtitle && <p className="text-sky-100 text-sm mt-0.5">{s.subtitle}</p>}
              </div>
              {s.blocks.map((b) => (
                <StudyBlock
                  key={b.id}
                  examId={exam.id}
                  sectionId={s.id}
                  block={b}
                  onStateChange={() => setTick((t) => t + 1)}
                />
              ))}
            </section>
          ))}
        </div>
      )}

      {subtab === 'review' && <KeyReview keyReview={exam.keyReview} />}

      {subtab === 'practice' && (
        <div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6 flex flex-wrap gap-4 items-center justify-between shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Practice MCQs</h2>
              <p className="text-sm text-slate-600">{qList.length} questions for this exam</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">{correctCount}</div>
                <div className="text-xs text-slate-500">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">{answeredCount}/{qList.length}</div>
                <div className="text-xs text-slate-500">Answered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">{answeredCount ? Math.round((correctCount/answeredCount)*100) : 0}%</div>
                <div className="text-xs text-slate-500">Score</div>
              </div>
            </div>
          </div>
          {qList.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-500">No practice MCQs for this exam yet.</div>
          )}
          {qList.map((q, i) => (
            <QuestionItem
              key={i}
              storageKey={`bchfinal:e${exam.id}:q${i}`}
              q={q}
              index={i}
              onAnswered={() => setTick((t) => t + 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
