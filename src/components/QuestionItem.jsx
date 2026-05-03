import React, { useEffect, useState } from 'react';
import { storage } from '../storage';
import CommentBox from './CommentBox.jsx';
import { DifficultyChip } from './Visual.jsx';

export default function QuestionItem({ storageKey, q, index, onAnswered }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(null);

  useEffect(() => {
    (async () => {
      const saved = await storage.get(storageKey);
      if (saved && typeof saved === 'object') {
        setSelected(saved.selected ?? null);
        setSubmitted(!!saved.submitted);
        setCorrect(saved.correct ?? null);
      }
    })();
  }, [storageKey]);

  const submit = async () => {
    if (selected == null) return;
    const isCorrect = selected === q.correct;
    setSubmitted(true);
    setCorrect(isCorrect);
    await storage.set(storageKey, { selected, submitted: true, correct: isCorrect });
    onAnswered?.(isCorrect);
  };

  const reset = async () => {
    setSelected(null);
    setSubmitted(false);
    setCorrect(null);
    await storage.remove(storageKey);
    onAnswered?.(null, true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-4">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="font-semibold text-slate-800 flex-1">
          <span className="text-slate-500 mr-2">Q{index + 1}.</span>
          {q.q}
          {q.source && <div className="text-[11px] font-normal text-slate-400 mt-1">{q.source}</div>}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {q.difficulty && <DifficultyChip level={q.difficulty} />}
          {submitted && (
            <span className={`text-xs px-2 py-1 rounded font-semibold whitespace-nowrap ${correct ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
              {correct ? 'Correct ✓' : 'Incorrect ✗'}
            </span>
          )}
        </div>
      </div>
      {q.visual && <div className="my-3">{q.visual}</div>}

      <div className="space-y-2">
        {q.choices.map((choice, i) => {
          const isSelected = selected === i;
          const isCorrectAnswer = submitted && i === q.correct;
          const isWrongSelected = submitted && isSelected && i !== q.correct;
          return (
            <label
              key={i}
              className={`flex items-start gap-3 p-2.5 rounded border cursor-pointer transition ${
                isCorrectAnswer ? 'border-emerald-400 bg-emerald-50' :
                isWrongSelected ? 'border-red-400 bg-red-50' :
                isSelected ? 'border-sky-400 bg-sky-50' :
                'border-slate-200 hover:bg-slate-50'
              } ${submitted ? 'cursor-default' : ''}`}
            >
              <input
                type="radio"
                name={storageKey}
                disabled={submitted}
                checked={isSelected}
                onChange={() => setSelected(i)}
                className="mt-1 accent-sky-600"
              />
              <div className="text-sm text-slate-800 flex-1">
                <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                {choice}
              </div>
            </label>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-3">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={selected == null}
            className="px-4 py-2 text-sm font-semibold bg-sky-600 text-white rounded hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >Submit</button>
        ) : (
          <button onClick={reset} className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300">
            Try Again
          </button>
        )}
      </div>

      {submitted && (
        <div className={`mt-3 p-3 rounded-md text-sm leading-relaxed ${correct ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'}`}>
          <div className="font-semibold mb-1">Explanation</div>
          <div>{q.explanation}</div>
        </div>
      )}

      <CommentBox storageKey={storageKey} label="Note" />
    </div>
  );
}
