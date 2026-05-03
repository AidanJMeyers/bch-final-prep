// Past MCQs reconstructed verbatim (paraphrased where handwriting was unclear) from prior BCH 335 exams.
// Structure: source labels which past exam each came from.

export const pastMCQs = [
  // ===== Exam I (Proteins, Spring 2026) =====
  {
    source: 'Exam I',
    q: 'Raw (unpasteurized) milk is a mixture of lipids, carbohydrates, proteins (including functional enzymes), a few live cells that die before dividing, ions, vitamins, and water. Which of the following defining features of living organisms is ABSENT in fresh raw milk?',
    choices: [
      'A defined function for each component',
      'A high degree of complexity, including biopolymers',
      'Biomolecules capable of catalysis and interplay among chemical components',
      'Capacity to change over time by gradual evolution'
    ],
    correct: 3,
    explanation: 'A static pile of biomolecules cannot evolve. The other three are present in milk (enzymes catalyze, biopolymers are present, components have function).',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Which functional group IS part of the structure of tryptophan (drawn with an indole ring + alanine backbone)?',
    choices: ['Ether', 'Ester', 'Amine', 'Acetyl'],
    correct: 2,
    explanation: 'Trp has an α-amine (–NH₂ on the α-carbon) and an indole NH. Both are amine functional groups. No ether/ester/acetyl on Trp.',
    difficulty: 'E'
  },
  {
    source: 'Exam I',
    q: 'For the amino acid drawn (pK₁ = 2.35, pK₂ = 9.78), at what pH would half the molecules in solution have a net positive charge and the other half be net neutral?',
    choices: ['pH = 2.35', 'pH = 6.07', 'pH = 9.78', 'There is not enough information to answer'],
    correct: 0,
    explanation: 'When pH = pK₁ (2.35), half are protonated (–COOH, net +1 because α-NH₃⁺ is still present) and half are deprotonated (–COO⁻, net 0).',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Which of the following has the cellular components arranged in order of INCREASING size?',
    choices: [
      'Amino acid < protein < mitochondrion < ribosome',
      'Amino acid < ribosome < protein < mitochondrion',
      'Amino acid < protein < ribosome < mitochondrion',
      'Mitochondrion < ribosome < protein < amino acid'
    ],
    correct: 2,
    explanation: 'Amino acid (~100 Da) < typical protein (10–500 kDa) < ribosome (~2.5 MDa) < mitochondrion (μm-scale organelle).',
    difficulty: 'E'
  },
  {
    source: 'Exam I',
    q: 'If a reaction has a large, positive change in free energy (ΔG ≫ 0), then it will proceed slowly.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'A large positive ΔG means the reaction does NOT proceed in the forward direction at all (under those conditions). Speed is unrelated to ΔG sign — kinetics depends on activation energy.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'The Henderson–Hasselbalch equation:',
    choices: [
      'allows the determination of the molecular weight of a weak acid from its pH alone',
      'does not explain the behavior of di- or tri-basic weak acids',
      'is useful when both the pH and the pKa are unknown',
      'relates the pH of a solution to the pKa and the concentrations of acid and conjugate base'
    ],
    correct: 3,
    explanation: 'pH = pKa + log([A⁻]/[HA]) — that is exactly the relationship.',
    difficulty: 'E'
  },
  {
    source: 'Exam I',
    q: 'A solution of acetic acid (pKa = 4.75) has pH 6.75. The ratio of HA : A⁻ is approximately:',
    choices: ['1 HA : 100 A⁻', '100 HA : 1 A⁻', '1 HA : 20 A⁻', '20 HA : 1 A⁻'],
    correct: 0,
    explanation: '6.75 = 4.75 + log(A/HA) → log = 2 → A/HA = 100 → HA : A⁻ = 1 : 100.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Citric acid is a tricarboxylic acid with pKa values of 3.1, 4.8, and 6.4. At pH 4.8, which statement is TRUE?',
    choices: [
      'All citric acid molecules have a net charge of −1',
      'All citric acid molecules have a net charge of −2',
      'Essentially all citric acid molecules are deprotonated in all three positions',
      'Essentially all citric acid molecules are protonated in all three positions',
      'Essentially all citric acid molecules are deprotonated at one position, fully protonated at one position, and 50%-protonated at the middle (pKa = pH) position'
    ],
    correct: 4,
    explanation: 'pH 4.8 ≫ pKa1 (3.1) → fully deprotonated there. pH 4.8 ≪ pKa3 (6.4) → fully protonated there. pH = pKa2 → 50/50 at the middle group.',
    difficulty: 'H'
  },
  {
    source: 'Exam I',
    q: 'At the isoelectric pH (pI) of any peptide:',
    choices: [
      'only the amino and carboxyl termini contribute to charge',
      'the total net charge is zero',
      'there is zero charge on each individual R group',
      'the peptide will not exist in solution'
    ],
    correct: 1,
    explanation: 'pI by definition = pH where net charge sums to zero. Individual R-groups can still be ± — they just cancel.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'The breaking of a peptide bond between two amino acids is an example of a(n) ___ reaction.',
    choices: ['condensation', 'hydrolysis', 'oxidation–reduction', 'isomerization'],
    correct: 1,
    explanation: 'Hydrolysis = water added across the C–N bond. Formation = condensation; breaking = hydrolysis.',
    difficulty: 'E'
  },
  {
    source: 'Exam I',
    q: 'In a titration curve of lysine (with NaOH), when is a solution of lysine able to buffer best?',
    choices: [
      'Lysine cannot ever have any buffering capacity',
      'When the solution is around a pH = 0.5, 1.5, and 2.5 (covers pK₁ ~2)',
      'When the solution is around the pH labeled "B" (the pI region, midway between two pKa values)',
      'When the solution is between pH 9.5 and 10.5'
    ],
    correct: 3,
    explanation: 'Lysine buffers within ±1 of any pKa. pK_R for the ε-amine is ~10.5, so 9.5–10.5 is a buffer window. Around the pI (option C), buffering is at its WORST.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'In the diagram, the plane drawn behind the peptide bond indicates:',
    choices: [
      'absence of rotation around the C–N bond because of its partial double-bond character',
      'rotation around the alpha-carbon — N bond',
      'a region of steric hindrance determined by the large C=O group',
      'an unusually flexible point of the polypeptide'
    ],
    correct: 0,
    explanation: 'Resonance gives the peptide C–N bond ~40% double-bond character → planar, no rotation. Cα–N (φ) and Cα–C (ψ) DO rotate.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Refer to the four tripeptides: Trp-Lys-Asp, Gly-Gln-Asn, Val-His-Leu, Asp-His-Glu, Arg-Val-Tyr. Which ONE is the MOST positively charged at pH 7?',
    choices: ['Trp-Lys-Asp', 'Gly-Gln-Asn', 'Val-His-Leu', 'Asp-His-Glu', 'Arg-Val-Tyr'],
    correct: 4,
    explanation: 'Arg-Val-Tyr: Arg (+1), Val (0), Tyr (0) = +1, plus α-NH₃⁺ at N-term and α-COO⁻ at C-term cancel. Best of the bunch: Arg gives the strongest positive at pH 7.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Of the four tripeptides above, which could be PHOSPHORYLATED on a hydroxyl R-group?',
    choices: ['Trp-Lys-Asp', 'Gly-Gln-Asn', 'Val-His-Leu', 'Asp-His-Glu', 'Arg-Val-Tyr'],
    correct: 4,
    explanation: 'Phosphorylation requires an –OH on Ser/Thr/Tyr. Arg-Val-Tyr has Tyr → eligible for phosphorylation.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Of the four tripeptides, which absorbs the MOST ultraviolet light per mole?',
    choices: ['Trp-Lys-Asp', 'Gly-Gln-Asn', 'Val-His-Leu', 'Asp-His-Glu', 'Arg-Val-Tyr'],
    correct: 0,
    explanation: 'Trp has by far the strongest 280-nm absorbance (ε ≈ 5500 M⁻¹cm⁻¹). The others have either no aromatic side chain (Gly/Gln/Asn) or weaker absorbers (His).',
    difficulty: 'E'
  },
  {
    source: 'Exam I',
    q: 'Select the TRUE statement regarding the thermodynamics of protein folding.',
    choices: [
      'An unfolded protein has high entropy due to its disordered shape and high enthalpy because it has fewer stabilizing interactions',
      'Protein folding is not spontaneous because enthalpy increases (heat is absorbed) when noncovalent interactions are formed',
      'The aggregation of hydrophobic regions of a protein decreases the entropy of surrounding water molecules'
    ],
    correct: 0,
    explanation: 'Unfolded chains have many conformations (high S) and few stabilizing contacts (high H). Forming noncovalent contacts releases heat (H decreases), and burying hydrophobics releases water → INCREASES water entropy.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Hydrogen bonding is required for which of the following at pH 7.7 in the insulin-receptor structure?',
    choices: [
      'A peptide bond between the transmembrane (TM) domain and the FnIII domain',
      'Asp–Lys R-group interactions',
      'Gly–Pro R-group interactions',
      'Stabilizing alpha helices in the TM domain'
    ],
    correct: 3,
    explanation: 'α-helix backbone is held by C=O ··· H–N hydrogen bonds. Peptide bonds are covalent, not H-bonds; Asp–Lys would be ionic; Gly–Pro is non-polar.',
    difficulty: 'H'
  },
  {
    source: 'Exam I',
    q: 'Which of the following would specifically disrupt HYDROPHOBIC interactions of the insulin receptor?',
    choices: ['Reducing agents', 'Detergents', 'Heat', 'pH change'],
    correct: 1,
    explanation: 'Detergents are amphipathic and coat hydrophobic surfaces. Reducing agents target disulfides; heat and pH affect everything but don\'t specifically target hydrophobic forces.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'Which method can determine the COMPLETE three-dimensional coordinates of the atoms in the depicted protein?',
    choices: ['Tandem mass spectrometry', 'Circular dichroism spectroscopy', '2D NMR', 'SDS-PAGE'],
    correct: 2,
    explanation: 'Tandem MS gives sequence/mass info. CD gives secondary-structure content. 2D NMR (or x-ray crystallography) gives full 3D coordinates.',
    difficulty: 'M'
  },
  {
    source: 'Exam I',
    q: 'If you were going to PURIFY a protein from a human brain sample, which would be MOST useful?',
    choices: [
      'Affinity purification using an epitope tag (such as a His-tag) followed by x-ray crystallography',
      'Differential centrifugation followed by size-exclusion chromatography',
      'SDS-PAGE followed by dialysis'
    ],
    correct: 0,
    explanation: 'For purifying (rather than analyzing) a tagged recombinant protein, His-tag affinity is the standard one-step option. SDS-PAGE denatures proteins; dialysis won\'t purify by sequence.',
    difficulty: 'M'
  },

  // ===== Exam II (Hemoglobin / Enzymes) =====
  {
    source: 'Exam II',
    q: 'Which of the following interactions would you expect to have the HIGHEST dissociation constant (weakest binding)?',
    choices: [
      'An IgG antibody binding to an antigenic protein in a Western blot',
      'A hormone binding to its hormone receptor',
      'A sugar substrate binding to the active site of an oxidoreductase'
    ],
    correct: 2,
    explanation: 'Substrates have the weakest binding (large Kd) — must be reversible to allow turnover. Antibody–antigen and hormone–receptor are tighter.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'Looking at experimental binding data for monomeric receptor protein X with three ligand types — which is TRUE about ligand A?',
    choices: [
      'Ligand A has the lowest affinity for protein X relative to ligands B and C',
      'Ligand A has the strongest non-covalent interactions in total',
      'Ligand A binds irreversibly to Protein X',
      'Ligand A has a high Kd relative to typical biological interactions (>10 μM)'
    ],
    correct: 0,
    explanation: 'Affinity is inverse of Kd. Lowest affinity = highest Kd. The data showed ligand A with the largest Kd of the three.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'Myoglobin and one (monomeric) subunit of hemoglobin have:',
    choices: [
      'different primary structures, different tertiary structures',
      'different primary structures, similar tertiary structures',
      'similar primary structures, different tertiary structures',
      'similar primary structures, similar tertiary structures'
    ],
    correct: 1,
    explanation: 'Sequence identity is moderate (~30%); both fold to the conserved globin fold (8 α-helices around heme).',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'What part(s) of hemoglobin DIRECTLY contribute to its affinity for O₂?',
    choices: [
      'A heme nitrogen lone pair',
      'A distal protonated histidine',
      'Fe³⁺',
      'Both A and B'
    ],
    correct: 3,
    explanation: 'The proximal heme N (with Fe²⁺) holds the iron; the distal His H-bonds bound O₂. Fe³⁺ (methemoglobin) cannot bind O₂.',
    difficulty: 'H'
  },
  {
    source: 'Exam II',
    q: 'You order an ascent to high altitude. Twelve hours later you measure 2,3-BPG and Hb O₂ affinity. What changed?',
    choices: [
      'BPG decreased; Hb O₂ affinity decreased',
      'BPG increased; Hb O₂ affinity decreased',
      'BPG increased; Hb O₂ affinity increased',
      'BPG decreased; Hb O₂ affinity increased'
    ],
    correct: 1,
    explanation: 'Chronic hypoxia raises 2,3-BPG, which stabilizes T-state Hb → curve shifts right → lower O₂ affinity → better tissue release.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'Hemoglobin has a ___ affinity for oxygen in the lungs, where it is predominantly in the ___ conformation.',
    choices: [
      'lower; relaxed (R)',
      'lower; tense (T)',
      'higher; tense (T)',
      'higher; relaxed (R)'
    ],
    correct: 3,
    explanation: 'Lungs (high pO₂) → R state → high O₂ affinity → loads O₂. Tissues (low pO₂) → T state → releases O₂.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'In peripheral tissues, when oxygen content is low, CO₂ binds hemoglobin by binding the N-terminus of the protein, which stabilizes the T state. CO₂ binding is considered an example of:',
    choices: ['Negative allostery', 'Cooperativity', 'Heterotropic, positive allostery', 'Heterotropic, negative allostery'],
    correct: 3,
    explanation: 'CO₂ is a different molecule than O₂ → heterotropic. It lowers O₂ affinity → negative allostery. Together: heterotropic, negative allostery.',
    difficulty: 'H'
  },
  {
    source: 'Exam II',
    q: 'Carbon monoxide (CO) is toxic chiefly because (PICK TWO):',
    choices: [
      'It binds the porphyrin portion of hemoglobin and prevents binding of O₂',
      'It binds the Fe²⁺ in hemoglobin and prevents binding of O₂',
      'It causes heme to release from hemoglobin',
      'It binds cooperatively to hemoglobin, making oxygen release more difficult'
    ],
    correct: 1,
    explanation: 'CO binds Fe²⁺ ~200× tighter than O₂ AND when CO binds one heme, it cooperatively stabilizes Hb in a state that holds O₂ tightly — even uncompensated subunits can\'t release O₂.',
    difficulty: 'H',
    altCorrect: 3
  },
  {
    source: 'Exam II',
    q: 'There are 500+ naturally occurring variants of human hemoglobin. Hb-Providence has Asn in place of a key Lys (where BPG normally binds the central cavity). Compared with wild-type, Hb-Providence:',
    choices: [
      'Has lower O₂ affinity',
      'Has higher O₂ affinity',
      'Cannot bind O₂',
      'Is unaffected'
    ],
    correct: 1,
    explanation: 'BPG can no longer bind well → loses its T-stabilizing effect → curve shifts left → higher O₂ affinity.',
    difficulty: 'H'
  },
  {
    source: 'Exam II',
    q: 'The role of an enzyme in an enzyme-catalyzed reaction is to:',
    choices: [
      'bind a transition state intermediate so it cannot be converted back to substrate',
      'shift the equilibrium of the reaction toward the products',
      'increase the rate at which substrate is converted into product',
      'make the free energy change for the overall reaction more favorable'
    ],
    correct: 2,
    explanation: 'Enzymes lower Ea, increasing rate. They cannot change ΔG° or shift equilibrium.',
    difficulty: 'E'
  },
  {
    source: 'Exam II',
    q: 'Which best describes the INDUCED-FIT model of enzyme activity?',
    choices: [
      'The enzyme\'s active site is rigid and perfectly complements the substrate shape',
      'The substrate permanently alters the enzyme\'s structure upon binding',
      'The enzyme active site changes shape slightly to better accommodate the substrate upon binding',
      'The substrate binds only if the enzyme is in a final, fully active conformation'
    ],
    correct: 2,
    explanation: 'Koshland induced fit: substrate binding triggers the enzyme to close around it, ensuring the chemistry only happens with the right substrate.',
    difficulty: 'E'
  },
  {
    source: 'Exam II',
    q: 'You discover a new enzyme called ENZY. Which is a viable hypothesis for how ENZY could be regulated?',
    choices: [
      'A post-translational modification turns ENZY off',
      'An increase in Ca²⁺ concentration turns ENZY on',
      'Proteolysis activates ENZY (zymogen)',
      'Any one or more of the above is possible'
    ],
    correct: 3,
    explanation: 'PTM, allosteric Ca²⁺, and proteolytic activation are all real mechanisms. Multiple are viable.',
    difficulty: 'E'
  },
  {
    source: 'Exam II',
    q: 'What does the depicted protease mechanism share with chymotrypsin?',
    choices: [
      'Both mechanisms include nucleophilic attack by an aspartate',
      'Both mechanisms include nucleophilic attack by a deprotonated water molecule',
      'Both have the same substrate specificity',
      'Both are examples of covalent catalysis mechanisms'
    ],
    correct: 1,
    explanation: 'In chymotrypsin (serine protease) the deacylation step is water attack; in aspartyl proteases, water attack is the only catalytic step. Both share that.',
    difficulty: 'H'
  },
  {
    source: 'Exam II',
    q: 'PMSF inactivates serine proteases by binding covalently to the catalytic serine. The covalent bond is NOT cleaved by the enzyme. This is an example of what kind of inhibition?',
    choices: ['Competitive', 'Mixed', 'Irreversible', 'Allosteric'],
    correct: 2,
    explanation: 'A covalent, uncleaved inactivator = irreversible inhibition.',
    difficulty: 'E'
  },
  {
    source: 'Exam II',
    q: 'Which best describes the Michaelis–Menten steady-state assumption?',
    choices: [
      '[S] does not change because the reaction is at equilibrium',
      'Forward and reverse reactions occur at identical rates',
      '[ES] remains constant because its rate of formation equals its rate of breakdown',
      '[E]free stays constant because the enzyme is fully saturated at all times'
    ],
    correct: 2,
    explanation: '[ES] reaches a stable concentration; formed as fast as broken down. Not equilibrium and not full saturation.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'How could the depicted protease lower the activation energy of the cleavage reaction?',
    choices: [
      'By energy released from non-covalent substrate–enzyme interactions',
      'By restricting the free motion of the substrate in the active site',
      'By positioning the substrate optimally',
      'All of the above are true'
    ],
    correct: 3,
    explanation: 'All of these — pre-organized active-site contacts, proximity, and orientation — collectively lower the activation energy.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'Arginase catalyzes arginine + H₂O → ornithine + urea. Which class of enzyme is arginase?',
    choices: ['Ligase', 'Oxidoreductase', 'Hydrolase', 'Isomerase'],
    correct: 2,
    explanation: 'Cleaving a covalent bond using water → hydrolase by definition.',
    difficulty: 'E'
  },
  {
    source: 'Exam II',
    q: 'A transition-state analog enzyme inhibitor of arginase would:',
    choices: [
      'Bind covalently to the enzyme',
      'Bind at an allosteric site on the transition-state structure of the arginine-arginase complex',
      'Exhibit mixed inhibition kinetics',
      'Physically resemble the transition-state structure of the arginine–arginase complex'
    ],
    correct: 3,
    explanation: 'TS analogs are designed to mimic the geometry/electronics of the TS, binding tightly and reversibly. They typically show competitive kinetics.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'On a Lineweaver–Burk plot for an enzyme obeying MM kinetics that binds only the FREE enzyme (not ES), which inhibitor pattern is observed?',
    choices: [
      'Same y-intercept, different x-intercept (competitive)',
      'Parallel lines (uncompetitive)',
      'Same x-intercept, different y-intercept (pure noncompetitive)',
      'Both intercepts shift in opposite directions'
    ],
    correct: 0,
    explanation: 'Free-enzyme-only binding = competitive: same Vmax, increased apparent Km.',
    difficulty: 'M'
  },
  {
    source: 'Exam II',
    q: 'For ATCase, which is TRUE?',
    choices: [
      'ATCase exhibits classic Michaelis–Menten kinetics',
      'ATP acts as a competitive inhibitor of ATCase at low [substrate]',
      'ATCase is allosterically inhibited by CTP',
      'CTP binds the active site irreversibly, reducing substrate turnover',
      'Aspartate binding causes a shift to the R state, illustrating positive cooperativity'
    ],
    correct: 2,
    explanation: 'CTP (end-product of pyrimidine synthesis) is the canonical feedback inhibitor of ATCase, binding the regulatory subunit to stabilize T. (E is also true but C is the strongest single answer.)',
    difficulty: 'M'
  },

  // ===== Exam III (Carbs / NA / Glycolysis) =====
  {
    source: 'Exam III',
    q: 'For the reaction A → B with ΔG° = +19 kJ/mol under standard biochemical conditions, the reaction:',
    choices: [
      'will never reach equilibrium',
      'will proceed slowly',
      'will proceed spontaneously from A to B',
      'will proceed spontaneously from B to A'
    ],
    correct: 3,
    explanation: 'A positive ΔG° means the equilibrium lies far on the substrate side; under standard conditions the reverse direction is spontaneous (A ← B).',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'For the reaction A → B with ΔG° = −41 kJ/mol, the reaction starts with 10 mM A. The reaction:',
    choices: [
      'A and B have reached equilibrium concentrations',
      'B formation is kinetically slow',
      'B will not proceed spontaneously from A to B',
      'will proceed spontaneously from A to B',
      'has stalled because it is impossible to reach equilibrium given the best free-energy path'
    ],
    correct: 3,
    explanation: 'A large negative ΔG° drives the forward reaction.',
    difficulty: 'E'
  },
  {
    source: 'Exam III',
    q: 'What is the name of the molecule depicted (open-chain D-mannose with C2 epimer of glucose)?',
    choices: ['D-glucose', 'D-mannose', 'D-galactose', 'D-fructose'],
    correct: 1,
    explanation: 'C2 epimer of glucose is mannose. C4 epimer is galactose.',
    difficulty: 'E'
  },
  {
    source: 'Exam III',
    q: 'Proteins that are post-translationally modified with covalently linked carbohydrates are called:',
    choices: ['glycoproteins', 'lipoproteins', 'phosphoproteins', 'nucleoproteins'],
    correct: 0,
    explanation: 'Glycoproteins. O-linked through Ser/Thr; N-linked through Asn.',
    difficulty: 'E'
  },
  {
    source: 'Exam III',
    q: 'The polysaccharide cellulose is most similar to ___ in terms of its solubility.',
    choices: ['chitin', 'glucose', 'glycogen', 'starch'],
    correct: 0,
    explanation: 'Cellulose (β-1,4-glucan) and chitin (β-1,4-GlcNAc) are both fibrous and insoluble. Glycogen and starch are α-linked and water-dispersible.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Which must be true of a molecule that tastes sweet to humans?',
    choices: [
      'The molecule must be a disaccharide',
      'The molecule must be able to bind to a receptor (taste receptor)',
      'The molecule must be able to be digested by humans'
    ],
    correct: 1,
    explanation: 'Sweetness is signaled by binding to T1R2-T1R3 sweet taste receptors. Many sweet molecules are NOT disaccharides (sucralose, aspartame) and need not be digested.',
    difficulty: 'E'
  },
  {
    source: 'Exam III',
    q: 'Heparin is an unbranched glycosaminoglycan that regulates ___.',
    choices: [
      'taste perception',
      'formation of blood vessels and clotting',
      'absorption of cholesterol',
      'protein glycosylation'
    ],
    correct: 1,
    explanation: 'Heparin / heparan sulfate are sulfated GAGs important for anticoagulation (binds antithrombin III) and angiogenesis.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Considering A (UTP) and B (a deoxynucleoside triphosphate where the base is uracil), A is/are:',
    choices: ['UTP', 'standard substrate for a PCR reaction', 'standard component of mature DNA', 'none of these'],
    correct: 0,
    explanation: 'UTP (uridine triphosphate) is the RNA building block for U incorporation. Not part of DNA (T is used in DNA, not U).',
    difficulty: 'E'
  },
  {
    source: 'Exam III',
    q: 'Which base composition is possible for a single-stranded RNA?',
    choices: [
      '5% A, 45% G, 45% C, 0% T, 5% U',
      '25% A, 25% G, 25% C, 0% T, 25% U',
      '35% A, 10% G, 30% C, 0% T, 25% U',
      'All of these are correct'
    ],
    correct: 3,
    explanation: 'In ssRNA, base composition need not satisfy A=U, G=C (those are dsDNA Chargaff rules). Any composition that excludes T and totals 100% is allowed.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Which is NOT TRUE of all naturally occurring dsDNA?',
    choices: [
      'Nucleotides are connected by 3′,5′-phosphodiester bonds and the strands are held together by hydrogen bonds',
      'A always equals T (and G = C) in dsDNA',
      'It is a left-handed helix (a.k.a. Z-DNA)',
      'The two complementary strands are antiparallel'
    ],
    correct: 2,
    explanation: 'B-DNA (the cellular form) is RIGHT-handed. Z-DNA exists transiently in some contexts but is not the norm.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Which is NOT a feature of purines and pyrimidines?',
    choices: [
      'Capable of both donating and accepting hydrogen bonds',
      'Planarity due to delocalized electrons in conjugated double bonds',
      'Capable of absorbing ultraviolet light',
      'Exist in isolation (as free-floating bases) in the cytoplasm'
    ],
    correct: 3,
    explanation: 'Free purines/pyrimidines are not free-floating in healthy cells — they are part of nucleotides/nucleosides; free bases get scavenged or degraded.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'In the process of cloning a vector to express a tagged protein, which of the following steps occurred FIRST?',
    choices: [
      'Cutting the vector with a restriction endonuclease',
      'Confirming the ligation using gel electrophoresis',
      'Confirming the sequence of the vector encoding the protein using Sanger DNA sequencing',
      'Running a Western blot for the tag'
    ],
    correct: 0,
    explanation: 'Order: cut vector → ligate insert → confirm by gel + Sanger sequencing → express → confirm by Western. First step is cutting.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'You set up a PCR. Tube contains: forward and reverse primers, thermostable DNA polymerase, template DNA, water, pH 8.8 buffer with salts and detergent. Optimal activity is at 72 °C with pH 8.8 buffered (with salts and detergent). Which mistake did you make?',
    choices: [
      'Forgot to include the dNTPs',
      'Used too low a temperature for denaturation',
      'Forgot to include reverse transcriptase',
      'Should have used pH 6.0 buffer'
    ],
    correct: 0,
    explanation: 'No dNTPs → polymerase has nothing to extend with → no amplification.',
    difficulty: 'E'
  },
  {
    source: 'Exam III',
    q: 'Plasmid vectors should be ___ the size of the bacterial genome they replicate in.',
    choices: ['BIGGER THAN', 'SMALLER THAN', 'THE SAME SIZE AS', 'irrelevant — size doesn\'t matter'],
    correct: 1,
    explanation: 'Plasmids are normally smaller than the bacterial genome to replicate efficiently and be retained.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Which of the following dsDNA strands could be a palindromic site for restriction-enzyme cloning?',
    choices: [
      '5′-CC-GTGTGT-3′ / 3′-GG-CACACA-5′',
      '5′-TACGGT-3′ / 3′-ATGCCA-5′',
      '5′-GAATTC-3′ / 3′-CTTAAG-5′',
      '5′-AAATAA-3′ / 3′-TTTATT-5′'
    ],
    correct: 2,
    explanation: 'GAATTC reverse-complement is GAATTC — the EcoRI palindrome.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'This reaction (ATP + glucose → ADP + glucose-6-phosphate, ΔG° hydrolysis = −16 kJ/mol or so) is one step in which metabolic process?',
    choices: ['Glycolysis', 'Pentose phosphate pathway', 'Gluconeogenesis', 'Oxidation–reduction'],
    correct: 0,
    explanation: 'Hexokinase step 1 of glycolysis. (PPP also uses G6P as starting material — so we are in the same upstream step.)',
    difficulty: 'E'
  },
  {
    source: 'Exam III',
    q: 'If the concentrations of all reactants are maintained at 1.00 M and products at 0.10 M, which way does the reaction proceed?',
    choices: ['Forward', 'Reverse', 'It is at equilibrium', 'It cannot proceed at all'],
    correct: 0,
    explanation: 'ΔG = ΔG° + RT ln([P]/[R]). If [P]/[R] = 0.1, the ln term is negative; combined with a not-too-positive ΔG°, ΔG ends up < 0 → forward.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'The steps of glycolysis between glyceraldehyde-3-phosphate and pyruvate involve all of the following EXCEPT:',
    choices: [
      'phosphoryl group transfer to ADP',
      'the pentose phosphate pathway',
      'oxidation of NADH to NAD⁺',
      'a dehydration reaction'
    ],
    correct: 1,
    explanation: 'GAP → pyruvate (steps 6–10) is part of glycolysis, not PPP. It includes phosphoryl group transfers (PGK, PK), generation of NADH at GAPDH (so "oxidation of NADH to NAD⁺" goes the wrong direction; the reaction generates NADH from NAD⁺), and a dehydration at enolase. The PPP option is the one that doesn\'t belong.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Which would INCREASE the production of glucose-1-phosphate (a glycogen breakdown product)?',
    choices: [
      'Increasing flux of glucose-6-phosphate to the pentose phosphate pathway',
      'Binding of glucose-6-phosphate to its receptor in myocytes',
      'Low AMP levels in cells (high energy charge)',
      'High glucose-6-phosphate levels'
    ],
    correct: 3,
    explanation: 'Glycogen phosphorolysis (G1P production) is favored when G6P is abundant (allosteric inhibition of GP is off) and AMP is high (allosteric activator). High G6P would feedback-inhibit glycogen phosphorylase under some conditions; the most direct exam-style answer is the option that pulls more glycogen flux. (NB — this question style is ambiguous; pay attention to professor framing.)',
    difficulty: 'H'
  },
  {
    source: 'Exam III',
    q: 'F-2,6-BP is a "side" metabolite of glycolysis. It activates AND relieves the allosteric inhibitory effect of ATP on which glycolytic enzyme?',
    choices: ['Hexokinase', 'Phosphofructokinase-1 (PFK-1)', 'Pyruvate kinase', 'GAPDH'],
    correct: 1,
    explanation: 'F-2,6-BP is the most potent allosteric activator of PFK-1 — it raises Vmax at low [F6P] and overcomes ATP inhibition.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Which is TRUE regarding the Cori cycle?',
    choices: [
      'Glucose is transported toward the liver',
      'Glucose-6-phosphate is converted to glucose by glucose-6-phosphatase in skeletal muscle',
      'Lactate is converted into pyruvate by lactate dehydrogenase in the skeletal muscle',
      'NADH is generated by a dehydrogenase in the skeletal muscle (e.g., GAPDH)'
    ],
    correct: 3,
    explanation: 'Muscle generates NADH at GAPDH (and consumes it at LDH to keep glycolysis running). Glucose flows from liver to muscle, not the reverse. Muscle lacks G6Pase. Liver (not muscle) handles lactate → pyruvate after Cori transport.',
    difficulty: 'M'
  },
  {
    source: 'Exam III',
    q: 'Which is TRUE regarding AMPK?',
    choices: [
      'AMPK is activated when ATP is high',
      'AMPK upregulates glycogen synthesis',
      'AMPK upregulates glucose uptake in muscles',
      'AMPK upregulates insulin secretion'
    ],
    correct: 2,
    explanation: 'AMPK fires when AMP rises (energy crisis). It upregulates glucose uptake in muscle and FA oxidation; it inhibits anabolism (glycogen, FA, cholesterol synthesis).',
    difficulty: 'M'
  },

  // ===== Exam IV (CAC / ETC / Lipids) — taken from the actual past Exam IV =====
  {
    source: 'Exam IV',
    q: 'Which characteristic is unique to lipids compared to the three other major groups of biomolecules?',
    choices: [
      'Lipids can be energy storage molecules',
      'Lipid molecules contain mostly hydrogen, carbon, and oxygen atoms',
      'Lipids are mostly hydrophobic',
      'Lipids are polymers'
    ],
    correct: 2,
    explanation: 'Hydrophobicity is the defining feature of lipids; they are not polymers.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Which observation explains why lipids are better than carbohydrates for long-term energy storage?',
    choices: [
      'Lipids are more reduced than carbohydrates',
      'Lipids are stored in the same cells that have the enzymes to metabolize them',
      'Lipids are more chemically inert (non-reactive) than carbohydrates'
    ],
    correct: 0,
    explanation: 'Reduced FA carbons release more ATP per gram on oxidation. Anhydrous storage adds to the advantage.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Of three depicted molecules, which is most likely to be PART OF a substance that birds use for water-proofing or that plants use to prevent evaporation?',
    choices: ['A long-chain wax (long-chain ester)', 'A triacylglycerol', 'A phospholipid', 'A sterol'],
    correct: 0,
    explanation: 'Waxes (long-chain ester of fatty alcohol + FA) form the protective cuticle on plants and feather coatings on birds.',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'Which fatty acid is most likely to be liquid at room temperature?',
    choices: ['18:0 (stearate)', '18:1Δ9 (oleate)', '20:0 (arachidate)', '16:0 (palmitate)'],
    correct: 1,
    explanation: 'Cis double bonds kink the chain and lower the melting point. Among these, 18:1Δ9 (oleate) is the only unsaturated one → liquid at room T.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Which fatty acid is INCORRECTLY named?',
    choices: ['12:0', '16:1Δ9', '20:5Δ4,6,8,12,15'],
    correct: 2,
    explanation: 'A "Δ4,6,…" naming has a 1-carbon gap between consecutive double bonds, which is not allowed (double bonds must be separated by at least one CH₂ — i.e., methylene-interrupted).',
    difficulty: 'H'
  },
  {
    source: 'Exam IV',
    q: 'Which lipid provides rigidity to plasma membranes?',
    choices: ['Phosphatidylcholine', 'Sphingomyelin', 'Cholesterol', 'Phosphatidylinositol'],
    correct: 2,
    explanation: 'Cholesterol stiffens the membrane between fluid and gel phases. PC, SM, PI are common phospholipids but do not have cholesterol\'s rigidity-buffering effect.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Which is NOT TRUE of a lipid raft?',
    choices: [
      'They are dynamic (ever-changing)',
      'They are an ordered microdomain of plasma membranes',
      'They have a relatively high concentration of cholesterol',
      'They include specific proteins',
      'They are consistent with the traditional fluid-mosaic model of membrane structure'
    ],
    correct: 4,
    explanation: 'Rafts are ordered microdomains, contradicting the pure fluid-mosaic model.',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'Which is a TRUE statement about ABO blood types?',
    choices: [
      'A patient with type O blood lacks enzymes needed to attach fatty acids to sphingosine',
      'A patient with type AB blood will generate antibodies to attack type O glycosphingolipids during a type O transfusion',
      'A patient with type B blood has the same number of monosaccharides attached to their type-determining glycosphingolipids as a patient with type A blood',
      'A patient with type O blood has enzymes that attach multiple different monosaccharides to the terminal position of their type-determining glycosphingolipids'
    ],
    correct: 2,
    explanation: 'A and B antigens differ only in the terminal sugar (GalNAc for A; Gal for B), not in the count.',
    difficulty: 'H'
  },
  {
    source: 'Exam IV',
    q: 'Which principle is NOT illustrated by the pyruvate dehydrogenase complex?',
    choices: [
      'When working in a complex, enzymes can prevent loss of products due to substrate channeling',
      'Organisms use a few key currencies that are redundant between pathways',
      'ATP hydrolysis is often coupled to drive unfavorable biosynthetic reactions',
      'Higher organisms use membrane-bound organelles to control metabolism'
    ],
    correct: 2,
    explanation: 'PDH does not use ATP hydrolysis. It captures energy as NADH and acetyl-CoA via oxidation.',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'Where is the pyruvate dehydrogenase complex located within a eukaryotic cell?',
    choices: ['Cytoplasm', 'Mitochondrial membrane', 'Mitochondrial matrix', 'Mitochondrial intermembrane space'],
    correct: 2,
    explanation: 'PDH is a soluble matrix complex.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Which is a redox reaction in the citric acid cycle?',
    choices: [
      'Isomerization by dehydration/rehydration',
      'Substrate-level phosphorylation',
      'Claisen condensation',
      'Dehydrogenation'
    ],
    correct: 3,
    explanation: 'Dehydrogenations (ICDH, αKG-DH, succinate-DH, malate-DH) are the redox steps. The other three describe other CAC reactions but are not redox.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Oxaloacetate uniformly labeled with ¹⁴C condenses with unlabeled acetyl-CoA. After ONE pass of the CAC back to OAA, what fraction of the original radioactivity remains in OAA?',
    choices: ['all', '1/2', '1/3', '1/4', 'none'],
    correct: 1,
    explanation: 'CAC releases 2 CO₂ per turn from the 6-carbon citrate. Because succinate is symmetric, half of the released carbons come from the original OAA pool — so half the original radioactivity remains.',
    difficulty: 'H'
  },
  {
    source: 'Exam IV',
    q: 'Malonate is a competitive inhibitor of succinate dehydrogenase. If malonate is added to isolated mitochondria oxidizing pyruvate, which substrate would you expect to INCREASE in concentration?',
    choices: ['Succinate', 'Succinate dehydrogenase', 'Fumarate', 'FADH₂'],
    correct: 0,
    explanation: 'Block the enzyme → its substrate (succinate) accumulates upstream of the block.',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'Which is NOT TRUE about citrate synthase function?',
    choices: [
      'Binding of oxaloacetate to citrate synthase causes a conformational change',
      'The induced fit of citrate synthase to its substrates ensures the enzyme is most active when oxaloacetate levels are LOW',
      'Citrate synthase catalyzes a condensation reaction',
      'Acetyl-CoA cannot bind citrate synthase until OAA has induced a conformational change that creates its binding site'
    ],
    correct: 1,
    explanation: 'Induced fit means the enzyme is most active when its substrate is HIGH (the active site closes correctly when OAA is bound).',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'Which is TRUE regarding ANAPLEROTIC reactions?',
    choices: [
      'They can replenish CAC intermediates using non-CAC enzymes',
      'They produce glutamate by transamination of α-ketoglutarate in all tissues',
      'They require enzymes that are essential in all tissues',
      'They produce pyruvate to maintain constant CAC intermediate levels'
    ],
    correct: 0,
    explanation: 'Anaplerosis = non-CAC reactions that refill CAC intermediates (e.g., pyruvate carboxylase: pyruvate → OAA).',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'Which is TRUE regarding the role of CAC in anabolism?',
    choices: [
      'CAC intermediates can be used to make fatty acids and sterols',
      'CAC intermediates can be used to make diverse amino acids',
      'CAC intermediates can be used to make neurotransmitters',
      'All of the above are true'
    ],
    correct: 3,
    explanation: 'CAC is amphibolic — its intermediates feed FA synthesis (citrate → cytosolic acetyl-CoA), AA synthesis (α-KG → Glu, OAA → Asp), heme (succinyl-CoA), and more.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'How would you expect the CAC to respond to a rapid INCREASE in [NADH]/[NAD⁺] ratio in the mitochondrial matrix?',
    choices: [
      'CAC rate would not change',
      'CAC rate would have decreased flux (slow)',
      'CAC would speed up',
      'Only the NAD⁺-dependent enzymes would slow'
    ],
    correct: 1,
    explanation: 'NADH directly inhibits ICDH, αKG-DH (and PDH); plus there\'s less NAD⁺ for the dehydrogenases to use.',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'How many REDOX reactions occur between pyruvate and one turn of the citric acid cycle (counting only inside CAC)?',
    choices: ['2', '3', '4', '5'],
    correct: 2,
    explanation: 'Inside CAC: ICDH (NADH), αKG-DH (NADH), succinate-DH (FADH₂), malate-DH (NADH) = 4. (If you include PDH, the total is 5.)',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'In what molecule do the carbons in the acetyl group of acetyl-CoA end up FULLY OXIDIZED?',
    choices: ['Oxaloacetate', 'CO₂', 'Citrate', 'Pyruvate'],
    correct: 1,
    explanation: 'Two CO₂ per turn (released at ICDH and αKG-DH). The acetyl carbons ultimately exit as CO₂.',
    difficulty: 'M'
  },
  {
    source: 'Exam IV',
    q: 'When electrons collected by the citric acid cycle are delivered to the electron transport chain, which carriers bring them?',
    choices: ['ATP', 'NADH and FADH₂', 'GTP and FADH₂', 'H₂O₂'],
    correct: 1,
    explanation: 'NADH (from ICDH, αKG-DH, MDH; also PDH outside CAC) enters at Complex I; FADH₂ (from succinate DH and from β-oxidation) enters at Complex II.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Which functional group on Coenzyme A captures an acetyl group to make acetyl-CoA?',
    choices: ['hydroxyl', 'carboxyl', 'thiol', 'amine'],
    correct: 2,
    explanation: 'CoA has a free –SH on its β-mercaptoethylamine arm. The thioester bond is high-energy.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'Calcium ions ___ the citric acid cycle.',
    choices: ['Stimulate', 'Inhibit', 'Play no role in'],
    correct: 0,
    explanation: 'Ca²⁺ stimulates ICDH and α-KG-DH (and PDH-phosphatase). Mitochondrial Ca²⁺ rises with workload.',
    difficulty: 'E'
  },
  {
    source: 'Exam IV',
    q: 'PDH is allosterically ___ when ADP levels are LOW.',
    choices: ['Inhibited', 'Activated', 'Unaffected'],
    correct: 0,
    explanation: 'Low ADP → high ATP → PDH-kinase active → phosphorylates and inactivates PDH.',
    difficulty: 'M'
  }
];
