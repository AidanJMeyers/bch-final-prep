# BCH 335 Final Exam Prep — Interactive Study Dashboard

A theme-driven, exam-organized study dashboard for the BCH 335 cumulative final.

## Structure

The sidebar is organized **by exam**, then by section within each exam:

- **Exam 1 — Proteins & Amino Acids** — biomolecule overview · AA structure · pH/pKa/buffers · peptide bonds · 4 levels of structure · folding · hemoglobin · methods
- **Exam 2 — Enzyme Kinetics & Mechanism** — what enzymes do · MM kinetics · inhibitors · serine proteases · regulation
- **Exam 3 — Carbs / Nucleic Acids / Glycolysis / Regulation** — sugars · NAs / PCR / cloning · bioenergetics · glycolysis · gluconeogenesis · glycogen · regulation
- **Exam 4 — Lipids · CAC · ETC · OxPhos** — lipids/membranes · β-oxidation · PDH · CAC · ETC · ATP synthase

Plus three orthogonal tabs:

- **📜 Past MCQs** — every reconstructed multiple-choice question from prior BCH 335 exams I–IV. Filterable by source.
- **🎯 Cumulative Practice** — fresh mixed MCQs spanning all four exams.
- **📝 Review Later** — all your saved notes in one place; export as Markdown.

Each section has subtabs:
- **Study Guide** — themes, callouts, tables, SVG diagrams.
- **Key Review** — themes, vocab, laws/rules, methods, diagrams.
- **Practice MCQs** — curated multiple choice for that exam.

## Local development

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build into dist/
```

## Deployment

The dashboard is built for GitHub Pages under the path `/bch-final-prep/`.
After `npm run build`, push the `dist/` folder to the `gh-pages` branch (or use a CI workflow).

Repo: https://github.com/AidanJMeyers/bch-final-prep
