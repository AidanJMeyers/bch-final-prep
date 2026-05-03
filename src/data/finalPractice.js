// Cumulative practice exam — fresh MCQs spanning Exams 1–4. Distribution roughly even.
export const finalPractice = [
  // ---- Exam 1 themes ----
  {
    examTag: 'Exam 1: Proteins',
    q: 'A peptide of 9 residues was synthesized in the cell. How many waters were released?',
    choices: ['7', '8', '9', '10'],
    correct: 1,
    explanation: 'n − 1 peptide bonds → n − 1 waters. 9 residues → 8 waters released.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 1: Proteins',
    q: 'Which AA combination at the N- and C-termini would BEST stabilize an α-helix dipole?',
    choices: ['Lys at N-term, Asp at C-term', 'Asp at N-term, Lys at C-term', 'Gly at both ends', 'Pro at the N-term'],
    correct: 1,
    explanation: 'The helix dipole is + at N-term, − at C-term. A negative R-group (Asp/Glu) at N-term and a positive (Lys/Arg) at C-term stabilize it.',
    difficulty: 'M'
  },
  {
    examTag: 'Exam 1: Proteins',
    q: 'A protein has a salt bridge between Asp and His that contributes ~15 kJ/mol of folding stability at pH 5. At pH 1.0, the salt bridge:',
    choices: ['Strengthens', 'Disappears (Asp protonates → neutral)', 'Reverses sign', 'Becomes covalent'],
    correct: 1,
    explanation: 'Asp pKa ~3.9. At pH 1.0, Asp is protonated (–COOH), neutral. No partner charge → no electrostatic attraction.',
    difficulty: 'H'
  },
  {
    examTag: 'Exam 1: Proteins',
    q: 'Which would best PURIFY a recombinant protein engineered with a 6×His tag?',
    choices: ['SDS-PAGE', 'Ni²⁺-NTA affinity column', '2D NMR', 'Dialysis against urea'],
    correct: 1,
    explanation: 'His-tag affinity (Ni²⁺-NTA) is the standard one-step >95% purity method.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 1: Proteins',
    q: 'Hb-Barcelona has His → Asp at α94, where the new Asp forms a T-stabilizing salt bridge. Compared with wild-type Hb, this variant has:',
    choices: ['Lower O₂ affinity', 'Higher O₂ affinity', 'Same affinity', 'No O₂ binding'],
    correct: 0,
    explanation: 'Stronger T-stabilization → curve shifts right → lower O₂ affinity.',
    difficulty: 'H'
  },

  // ---- Exam 2 themes ----
  {
    examTag: 'Exam 2: Enzymes',
    q: 'A noncompetitive inhibitor binds equally well to E and ES. The Lineweaver–Burk pattern shows:',
    choices: [
      'Same y-intercept, increased x-intercept (competitive look)',
      'Decreased y-intercept (1/Vmax), same x-intercept (1/Km same)',
      'Parallel lines',
      'Lines crossing on the y-axis'
    ],
    correct: 1,
    explanation: 'Pure noncompetitive: Vmax decreases (y-intercept rises), Km unchanged (x-intercept fixed).',
    difficulty: 'H'
  },
  {
    examTag: 'Exam 2: Enzymes',
    q: 'The most useful single comparator of two enzymes\' efficiency is:',
    choices: ['Vmax', 'Km', 'kcat', 'kcat / Km'],
    correct: 3,
    explanation: 'kcat/Km integrates both binding (Km) and turnover (kcat) — the "specificity constant".',
    difficulty: 'M'
  },
  {
    examTag: 'Exam 2: Enzymes',
    q: 'Chymotrypsin\'s catalytic triad is:',
    choices: ['Lys–Asp–Tyr', 'Ser–His–Asp', 'Cys–His–Asn', 'Ser–Glu–Lys'],
    correct: 1,
    explanation: 'Asp orients His; His acts as general base to deprotonate Ser; Ser becomes the nucleophile that attacks the substrate carbonyl.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 2: Enzymes',
    q: 'Hexokinase shows induced fit. Why is induced fit important here?',
    choices: [
      'It allows ATP to phosphorylate water if glucose is unavailable',
      'It ensures the active site closes only when glucose is bound, preventing wasteful ATP hydrolysis with water',
      'It makes the reaction irreversible',
      'It increases the kcat without changing Km'
    ],
    correct: 1,
    explanation: 'Without induced fit, water (similar size) could occupy the active site and consume ATP wastefully. The closed state forms only with glucose bound.',
    difficulty: 'M'
  },

  // ---- Exam 3 themes ----
  {
    examTag: 'Exam 3: Glycolysis',
    q: 'Which is the COMMITTED step of glycolysis (most regulated)?',
    choices: ['Hexokinase', 'PFK-1', 'Aldolase', 'Pyruvate kinase'],
    correct: 1,
    explanation: 'PFK-1 is the gatekeeper. Allosterically activated by AMP and F-2,6-BP; inhibited by ATP and citrate.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 3: Glycolysis',
    q: 'Per glucose, glycolysis nets:',
    choices: ['2 ATP, 2 NADH, 2 pyruvate', '4 ATP, 2 NADH, 2 pyruvate', '2 ATP, 4 NADH, 2 pyruvate', '6 ATP, 0 NADH, 2 pyruvate'],
    correct: 0,
    explanation: 'Net: 2 ATP (4 made − 2 consumed), 2 NADH, 2 pyruvate, 2 H₂O.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 3: Carbs',
    q: 'Sucrose is non-reducing because:',
    choices: [
      'Its glycosidic bond uses both anomeric carbons',
      'It is exclusively in the α-anomeric form',
      'It contains a sulfate group',
      'It is too small to undergo ring opening'
    ],
    correct: 0,
    explanation: 'α(1↔2) glycosidic bond between glucose-C1 and fructose-C2 ties up both anomeric carbons → no free hemiacetal → not reducing.',
    difficulty: 'M'
  },
  {
    examTag: 'Exam 3: Nucleic acids',
    q: 'In dsDNA, A-T pairs share ___ hydrogen bonds and G-C pairs share ___.',
    choices: ['1; 2', '2; 3', '3; 2', '2; 4'],
    correct: 1,
    explanation: 'A-T = 2 H-bonds; G-C = 3 H-bonds. GC-rich regions therefore have higher Tm.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 3: Bioenergetics',
    q: 'Calculate ΔG° for 3-PG → PEP, where 3-PG → 2-PG is +4.6 kJ/mol and 2-PG → PEP is +1.8 kJ/mol:',
    choices: ['+1.8 kJ/mol', '+4.6 kJ/mol', '+6.4 kJ/mol', '+8.2 kJ/mol'],
    correct: 2,
    explanation: 'Sum of consecutive steps: (+4.6) + (+1.8) = +6.4 kJ/mol.',
    difficulty: 'M'
  },

  // ---- Exam 4 themes ----
  {
    examTag: 'Exam 4: Lipids',
    q: 'Which class of lipid is MOST responsible for membrane rigidity in animal cells?',
    choices: ['Triacylglycerols', 'Cholesterol', 'Cardiolipin', 'Wax esters'],
    correct: 1,
    explanation: 'Cholesterol modulates membrane fluidity, providing rigidity at high temperature and preventing rigid packing at low.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 4: CAC',
    q: 'Which CAC enzyme is also embedded in the inner mitochondrial membrane and is part of Complex II of the ETC?',
    choices: ['Citrate synthase', 'Isocitrate DH', 'Succinate DH', 'Malate DH'],
    correct: 2,
    explanation: 'Succinate DH is the only membrane-embedded CAC enzyme; it is also Complex II of the ETC and uses FAD as its prosthetic group.',
    difficulty: 'M'
  },
  {
    examTag: 'Exam 4: ETC',
    q: 'Which complex of the ETC does NOT pump H⁺ across the inner mitochondrial membrane?',
    choices: ['I', 'II', 'III', 'IV'],
    correct: 1,
    explanation: 'Complex II (succinate DH) accepts electrons but does not pump H⁺. Therefore FADH₂ entering at II yields fewer ATP than NADH at I.',
    difficulty: 'E'
  },
  {
    examTag: 'Exam 4: PDH',
    q: 'The PDH reaction releases ___ as a product:',
    choices: ['ATP and NADH', 'NADH, FADH₂, and CO₂', 'NADH, acetyl-CoA, and CO₂', 'GTP and acetyl-CoA'],
    correct: 2,
    explanation: 'Pyruvate + NAD⁺ + CoA-SH → acetyl-CoA + NADH + CO₂. Irreversible.',
    difficulty: 'M'
  },
  {
    examTag: 'Exam 4: Membranes',
    q: 'In a mature plasma membrane, asymmetry between leaflets is maintained primarily by:',
    choices: [
      'Spontaneous flip-flop of phospholipids',
      'ATP-dependent flippases and floppases',
      'Hydrophobic mismatch',
      'Cholesterol gradient'
    ],
    correct: 1,
    explanation: 'Flippases bring lipids inward (PE, PS); floppases push lipids outward (PC, SM). Both are ATP-dependent. Spontaneous flip-flop is exceedingly slow.',
    difficulty: 'M'
  },
  {
    examTag: 'Exam 4: Lipids',
    q: 'Which fatty acid is most likely to remain liquid at refrigerator temperature (~4 °C)?',
    choices: ['16:0 palmitate', '18:0 stearate', '18:3Δ9,12,15 α-linolenate', '20:0 arachidate'],
    correct: 2,
    explanation: 'Three cis double bonds → highly kinked → very low melting point → liquid even at fridge temp.',
    difficulty: 'M'
  },
  {
    examTag: 'Exam 4: CAC',
    q: 'Per ONE acetyl-CoA traversing the CAC, the cycle generates:',
    choices: ['2 NADH, 1 FADH₂, 1 GTP, 2 CO₂', '3 NADH, 1 FADH₂, 1 GTP, 2 CO₂', '3 NADH, 2 FADH₂, 0 GTP, 2 CO₂', '2 NADH, 2 FADH₂, 1 GTP, 3 CO₂'],
    correct: 1,
    explanation: '3 NADH (ICDH, αKG-DH, MDH), 1 FADH₂ (succinate DH), 1 GTP (succinyl-CoA synthetase), 2 CO₂ (released at ICDH and αKG-DH).',
    difficulty: 'M'
  },

  // ---- Cross-cutting / synthesis ----
  {
    examTag: 'Synthesis',
    q: 'A patient has a mutation that prevents pyruvate carboxylase from working. The most direct consequence is impaired:',
    choices: ['Glycolysis', 'Gluconeogenesis (and CAC anaplerosis)', 'β-oxidation', 'ETC complex II'],
    correct: 1,
    explanation: 'PC converts pyruvate → OAA. OAA is needed both for GNG and to refill CAC (anaplerotic). Without PC, both pathways fail.',
    difficulty: 'H'
  },
  {
    examTag: 'Synthesis',
    q: 'Insulin signaling promotes which set of changes?',
    choices: [
      'Glycogen synthesis ON, glycogen breakdown OFF, FA synthesis ON, gluconeogenesis OFF',
      'Glycogen breakdown ON, FA synthesis OFF, gluconeogenesis ON',
      'Both glycogen synthesis and breakdown ON',
      'AMPK ON, anabolism OFF'
    ],
    correct: 0,
    explanation: 'Insulin signals "fed" state: anabolism ON (glycogen synthesis, FA synthesis), catabolism OFF (glycogenolysis, GNG).',
    difficulty: 'M'
  },
  {
    examTag: 'Synthesis',
    q: 'Which best illustrates "compartmentalization is regulation"?',
    choices: [
      'Glycolysis (cytosol) is independent of CAC (matrix); the carnitine shuttle gates FA entry into mito',
      'All metabolic pathways occur in the cytosol',
      'Mitochondrial enzymes have higher Km than cytosolic',
      'Cells regulate by changing pH only'
    ],
    correct: 0,
    explanation: 'Compartmentation lets cells run opposing pathways simultaneously in different rooms; transporters control flow between rooms.',
    difficulty: 'M'
  },
  {
    examTag: 'Synthesis',
    q: 'A cell has high AMP and low ATP. Predict the dominant metabolic state:',
    choices: [
      'AMPK active → catabolism ON, anabolism OFF; PFK-1 ON; PDH ON',
      'Insulin signaling dominant; FA synthesis ON',
      'Glycogen synthesis ON via GS dephosphorylation',
      'CAC fully inhibited'
    ],
    correct: 0,
    explanation: 'AMP → AMPK ON. AMP also activates PFK-1; ADP/Ca²⁺ activate PDH-phosphatase → PDH ON. Catabolism > anabolism.',
    difficulty: 'M'
  },
  {
    examTag: 'Synthesis',
    q: 'Which statement about ENZYME-catalyzed reactions is TRUE in ALL cases?',
    choices: [
      'The enzyme accelerates the forward and reverse reactions equally',
      'The enzyme shifts equilibrium toward product',
      'The enzyme provides the energy for an unfavorable reaction',
      'The enzyme is consumed in the reaction'
    ],
    correct: 0,
    explanation: 'Enzymes lower Ea — by definition equally for forward and reverse. They do not change ΔG, equilibrium, or get consumed.',
    difficulty: 'E'
  },
  {
    examTag: 'Synthesis',
    q: 'A protein researcher denatures a folded enzyme by adding β-mercaptoethanol. Which forces did β-ME directly disrupt?',
    choices: [
      'Hydrophobic interactions',
      'Hydrogen bonds',
      'Disulfide bonds (covalent S–S → 2 –SH)',
      'Ionic salt bridges'
    ],
    correct: 2,
    explanation: 'β-ME (and DTT, TCEP) reduces disulfides specifically. To disrupt other forces you need detergents, urea, heat, or pH change.',
    difficulty: 'E'
  }
];
