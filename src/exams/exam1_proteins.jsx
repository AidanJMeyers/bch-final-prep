import React from 'react';
import { Callout, Table, Pill, Theme, SvgFrame, ArrowRight } from '../components/Visual.jsx';

// SVG: titration curve of a generic AA
const TitrationCurveSVG = (
  <SvgFrame width={460} height={220} label="Generic AA titration curve — α-COOH (pK₁ ~2), α-NH₃⁺ (pK₂ ~9). pI = midpoint of the two pK values that flank the zwitterion.">
    <line x1="40" y1="190" x2="430" y2="190" stroke="#475569" />
    <line x1="40" y1="20" x2="40" y2="190" stroke="#475569" />
    <text x="32" y="200" fontSize="10" fill="#475569">0</text>
    <text x="220" y="205" fontSize="10" fill="#475569">Equivalents OH⁻ →</text>
    <text x="14" y="100" fontSize="10" fill="#475569" transform="rotate(-90 14 100)">pH</text>
    <path d="M40,180 Q70,170 90,160 Q110,140 120,110 Q140,90 170,85 Q210,80 230,80 Q255,80 275,110 Q300,150 330,160 Q360,170 400,175" fill="none" stroke="#0284c7" strokeWidth="2.5" />
    <circle cx="105" cy="125" r="4" fill="#16a34a" />
    <text x="115" y="125" fontSize="10" fill="#16a34a">pK₁ (≈2)</text>
    <circle cx="170" cy="85" r="4" fill="#7c3aed" />
    <text x="180" y="80" fontSize="10" fill="#7c3aed">pI (zwitterion)</text>
    <circle cx="290" cy="125" r="4" fill="#dc2626" />
    <text x="300" y="125" fontSize="10" fill="#dc2626">pK₂ (≈9)</text>
    <text x="60" y="170" fontSize="10" fill="#0f172a">+1 net</text>
    <text x="195" y="65" fontSize="10" fill="#0f172a">0 net</text>
    <text x="370" y="160" fontSize="10" fill="#0f172a">−1 net</text>
  </SvgFrame>
);

// SVG: peptide bond / partial double bond
const PeptideBondSVG = (
  <SvgFrame width={460} height={170} label="The peptide bond has partial double-bond character (resonance) → planar, no rotation around C–N. Cα–C and N–Cα bonds rotate freely (φ, ψ).">
    <text x="20" y="30" fontSize="11" fill="#0f172a">Resonance gives peptide bond ~40% double-bond character →  planar 6-atom unit  →  Cα–N bond is rigid.</text>
    <line x1="60" y1="100" x2="120" y2="100" stroke="#0f172a" />
    <text x="50" y="115" fontSize="11" fill="#0f172a">Cα</text>
    <text x="125" y="115" fontSize="11" fill="#0f172a">C</text>
    <line x1="120" y1="100" x2="180" y2="100" stroke="#0f172a" strokeDasharray="4 3" />
    <line x1="120" y1="96" x2="180" y2="96" stroke="#0f172a" />
    <text x="148" y="92" fontSize="10" fill="#dc2626">partial =</text>
    <text x="185" y="115" fontSize="11" fill="#0f172a">N</text>
    <line x1="180" y1="100" x2="240" y2="100" stroke="#0f172a" />
    <text x="245" y="115" fontSize="11" fill="#0f172a">Cα</text>
    <text x="125" y="80" fontSize="11" fill="#dc2626">O=</text>
    <text x="187" y="125" fontSize="11" fill="#16a34a">H–</text>
    <text x="125" y="155" fontSize="10" fill="#475569">trans is ~1000× more common than cis (proline is the exception)</text>
  </SvgFrame>
);

// SVG: Hb O₂ binding curves
const HbCurveSVG = (
  <SvgFrame width={460} height={220} label="Mb is hyperbolic; Hb is sigmoidal (cooperativity). BPG, ↑CO₂ / ↓pH (Bohr) → right-shift → lower O₂ affinity → release in tissues.">
    <line x1="50" y1="190" x2="430" y2="190" stroke="#475569" />
    <line x1="50" y1="20" x2="50" y2="190" stroke="#475569" />
    <text x="240" y="208" fontSize="10" fill="#475569">pO₂ (torr)</text>
    <text x="20" y="100" fontSize="10" fill="#475569" transform="rotate(-90 20 100)">% saturation</text>
    {/* Mb hyperbolic */}
    <path d="M50,190 Q80,40 200,30 Q330,28 430,28" fill="none" stroke="#dc2626" strokeWidth="2.5" />
    <text x="380" y="40" fontSize="10" fill="#dc2626">Mb (hyperbolic)</text>
    {/* Hb T-state right curve sigmoid */}
    <path d="M50,188 C100,185 130,170 160,140 C200,90 240,50 290,40 C350,32 410,30 430,30" fill="none" stroke="#0284c7" strokeWidth="2.5" />
    <text x="290" y="100" fontSize="10" fill="#0284c7">Hb (sigmoidal)</text>
    {/* Right shifted */}
    <path d="M50,188 C120,185 170,180 200,160 C240,120 290,70 340,50 C380,40 420,35 430,33" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 3" />
    <text x="220" y="170" fontSize="10" fill="#7c3aed">Hb +BPG / +CO₂ / ↓pH</text>
    {/* Tissues / lungs */}
    <line x1="120" y1="20" x2="120" y2="190" stroke="#94a3b8" strokeDasharray="3 3" />
    <text x="100" y="18" fontSize="10" fill="#475569">tissues</text>
    <line x1="370" y1="20" x2="370" y2="190" stroke="#94a3b8" strokeDasharray="3 3" />
    <text x="358" y="18" fontSize="10" fill="#475569">lungs</text>
  </SvgFrame>
);

const exam = {
  id: 1,
  title: 'Exam 1 — Proteins & Amino Acids',
  subtitle: 'AAs · pH/pKa · peptide bonds · 4 levels of structure · folding · hemoglobin',
  sections: [
    {
      id: 'biomolecules',
      title: '§1 The Four Biomolecule Classes & Cell Context',
      subtitle: 'Where proteins live, how big they are, and what defines "alive" chemistry',
      blocks: [
        {
          id: 'biomolecule-overview',
          title: 'The Four Biomolecules — and what makes lipids the odd one out',
          subtitle: 'Proteins · NAs · carbs · lipids',
          content: (
            <>
              <Theme title="Proteins are polymers of amino acids — defined by sequence. Lipids are the only class NOT defined by a polymer backbone; they're defined by hydrophobicity.">
                Past exam: "Raw milk is a mixture of lipids, carbohydrates, proteins (including <em>functional enzymes</em>), live cells, vitamins, and water — which feature is <strong>absent</strong> in fresh raw milk?" → Capacity to <strong>change over time by gradual evolution</strong>. A pile of biomolecules ≠ life.
              </Theme>
              <p>The four classes:</p>
              <Table
                headers={["Class", "Building block", "Defining feature", "Polymer?"]}
                rows={[
                  ["Proteins", "amino acids (20)", "peptide-bonded sequence → folded 3D shape", "yes"],
                  ["Nucleic acids", "nucleotides (4)", "sugar–phosphate backbone, base sequence carries info", "yes"],
                  ["Carbohydrates", "monosaccharides", "polyhydroxy aldehydes/ketones; glycosidic bonds", "yes (often)"],
                  ["Lipids", "—", "defined by hydrophobicity / non-polar solubility, NOT a backbone", "NO"],
                ]}
              />
              <Callout kind="tip" title="Cell-component size order">
                Increasing size: <strong>amino acid &lt; protein &lt; ribosome &lt; mitochondrion</strong>. Past exam asked this directly. (A free amino acid is ~100 Da; a typical protein is 50–500 residues; a ribosome is a megadalton-scale RNP; a mitochondrion is a μm-scale organelle.)
              </Callout>
            </>
          )
        },
        {
          id: 'living-features',
          title: 'What defines "living" chemistry',
          content: (
            <>
              <ul>
                <li><strong>Defined function for every component</strong></li>
                <li><strong>High degree of complexity</strong> (biopolymers)</li>
                <li><strong>Biomolecules capable of catalysis & interplay</strong> (enzymes)</li>
                <li><strong>Capacity to change over time by gradual evolution</strong> ← this is the one a static milk sample lacks</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      id: 'aa-structure',
      title: '§2 Amino Acid Structure, Stereochemistry & Side Chains',
      subtitle: 'L-α-AAs · the 20 R-groups · classifying by polarity, charge, and special features',
      blocks: [
        {
          id: 'aa-general',
          title: 'General amino acid structure',
          content: (
            <>
              <Theme>All proteinogenic AAs are <strong>L-α-amino acids</strong>: an α-carbon with –NH₃⁺, –COO⁻, –H, and a side chain R. Glycine (R = H) is the only one that is achiral.</Theme>
              <ul>
                <li><strong>α-carbon</strong> = chiral center (except Gly).</li>
                <li><strong>L</strong> configuration: in the Fischer projection, –NH₃⁺ points <em>left</em>.</li>
                <li>At physiological pH (7.4) the AA is a <strong>zwitterion</strong>: –NH₃⁺ and –COO⁻ simultaneously, net charge = 0 if R is neutral.</li>
              </ul>
              <SvgFrame width={420} height={170} label="α-amino acid: H₃N⁺–CHR–COO⁻ at pH 7. The side chain R is the only thing that varies among the 20.">
                <text x="40" y="40" fontSize="12" fill="#0f172a">L-α-amino acid (zwitterion at pH 7)</text>
                <line x1="80" y1="100" x2="200" y2="100" stroke="#0f172a" />
                <text x="55" y="105" fontSize="13" fill="#0284c7">H₃N⁺</text>
                <text x="135" y="92" fontSize="13" fill="#0f172a">Cα</text>
                <line x1="145" y1="105" x2="145" y2="140" stroke="#0f172a" />
                <text x="138" y="155" fontSize="12" fill="#16a34a">R</text>
                <line x1="145" y1="100" x2="145" y2="70" stroke="#0f172a" />
                <text x="138" y="65" fontSize="12" fill="#0f172a">H</text>
                <text x="205" y="105" fontSize="13" fill="#dc2626">COO⁻</text>
                <text x="40" y="160" fontSize="11" fill="#475569">All 20 share this skeleton; only R changes.</text>
              </SvgFrame>
            </>
          )
        },
        {
          id: 'aa-classify',
          title: 'Classifying the 20 — and why it matters',
          subtitle: 'Polar vs nonpolar, acidic vs basic, special',
          content: (
            <>
              <Table
                dense
                headers={["Group", "Members", "Why test-relevant"]}
                rows={[
                  ["Nonpolar aliphatic", "G, A, V, L, I, M, P", "buried hydrophobic core; M is the start codon"],
                  ["Aromatic", "F, Y, W", "absorb 280 nm UV (Trp dominates) — used to quantify protein"],
                  ["Polar uncharged", "S, T, N, Q, C", "H-bonders; Ser/Thr/Tyr can be phosphorylated; Asn N-glycosylated"],
                  ["Positive (basic)", "K, R, H", "salt bridges; H pKa ~6 → only one with R-group buffering near pH 7"],
                  ["Negative (acidic)", "D, E", "salt bridges; metal coordination"],
                  ["Special", "G (smallest, flexible), P (kink, restricts φ), C (disulfides)", "structure-breaking / structure-forming roles"],
                ]}
              />
              <Callout kind="tip" title="UV absorbance trick">
                Tryptophan (Trp/W) absorbs the most strongly at 280 nm. To engineer a peptide for "maximum possible UV absorption by that one amino acid" → choose <strong>Trp</strong>. Past exam asked this exact phrasing.
              </Callout>
              <Callout kind="info" title="H-bond donors with R-groups">
                If asked which AAs you'd include for "maximum H-bond interactions through their R-groups at pH 7," reach for <strong>Asn / Gln / Ser / Thr / Tyr</strong> (uncharged polar with –OH or amide), and lysine/arginine for charged H-bonds. Methionine and proline do <em>not</em> H-bond well via R-group.
              </Callout>
              <Callout kind="warn" title="Phosphorylation site">
                Phosphorylation is on the <strong>hydroxyl</strong> of Ser, Thr, or Tyr. Past exam: "Which functional group could be the site of attachment for phosphorylation?" → hydroxyl.
              </Callout>
            </>
          )
        },
        {
          id: 'cysteine-disulfide',
          title: 'Cysteine, disulfide bonds, and reducing agents',
          content: (
            <>
              <p>Two Cys residues can oxidize their –SH groups to form a covalent <strong>S–S disulfide bond</strong> (cystine). Disulfides:</p>
              <ul>
                <li>stabilize tertiary structure of <strong>extracellular / secreted</strong> proteins (insulin, antibodies, ribonuclease)</li>
                <li>are <strong>covalent</strong>, not non-covalent — heat / pH usually won't break them</li>
                <li>are broken by <strong>reducing agents</strong> (β-mercaptoethanol, DTT, TCEP)</li>
              </ul>
              <Callout kind="tip" title="Engineering a disulfide for UV?">
                Past exam: "Which AA would you incorporate to ensure maximum UV absorption?" If the choices include Trp → Trp wins (280 nm). Cys disulfides absorb weakly compared with aromatic rings, so don't pick C.
              </Callout>
              <Callout kind="info" title="Reducing agent in a peptide quiz">
                "Of the three peptides, which one would change structure with the addition of a reducing agent?" → the one containing <strong>Cys</strong> with a disulfide bond.
              </Callout>
            </>
          )
        },
        {
          id: 'special-residues',
          title: 'Glycine and Proline — special structural roles',
          content: (
            <>
              <Table
                headers={["Residue", "Why special", "Structural consequence"]}
                rows={[
                  ["Glycine", "R = H, smallest, no chirality, ↑φ/ψ flexibility", "found at tight turns; <em>destabilizes</em> α-helices because high entropy in unfolded state; collagen"],
                  ["Proline", "R loops back to α-N → cyclic imino acid", "rigid, restricts φ; β-turn / kink; helix-breaker; only AA with cis peptide bond common"]
                ]}
              />
              <Callout kind="warn" title="Why proline ruins an α-helix">
                Proline's nitrogen has no NH to donate to the helix's H-bond pattern, AND its ring locks φ near −60°. So mid-helix proline → a kink. Past exam: a peptide containing proline at position 5 would <em>struggle to form α-helix</em> due to the cyclic structure between the amino N and the R-group.
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'ph-pka',
      title: '§3 pH, pKa, Henderson–Hasselbalch & Buffers',
      subtitle: 'How charge depends on pH; the only buffering pKa is the one that R touches',
      blocks: [
        {
          id: 'henderson-h',
          title: 'Henderson–Hasselbalch and the rule "pH > pKa → deprotonated"',
          content: (
            <>
              <Theme>pH = pKa + log([A⁻]/[HA]). When pH = pKa, half-protonated. When pH ≫ pKa, deprotonated (no proton). When pH ≪ pKa, protonated.</Theme>
              <p>Past exam: "A solution of acetic acid (pKa 4.75) has a pH of 6.75. The ratio of HA to A⁻ is __." Plug in: 6.75 = 4.75 + log(A/HA) → log = 2 → ratio HA:A⁻ = <strong>1:100</strong>.</p>
              <Callout kind="tip" title="What HH does and doesn't do">
                HH <strong>relates pH, pKa, and ratio of conjugate base to acid</strong>. It does NOT determine molecular weight from pH, and it works just as well for di- and tri-protic acids — you just apply it stepwise per pKa. Past exam directly tested this distinction.
              </Callout>
              <p>For a free α-AA with neutral R, pI = (pK₁ + pK₂)/2, where pK₁ ≈ 2 (–COOH) and pK₂ ≈ 9 (–NH₃⁺) → pI ≈ 5.5.</p>
              <p>For an AA with an ionizable R (D, E, K, R, H, C, Y), pI = (pKa of the two groups that flank the zwitterion). Always identify the zwitterion form first, then average the pKa above and below it.</p>
            </>
          )
        },
        {
          id: 'titration-curve',
          title: 'Titration curves and buffer regions',
          subtitle: 'Buffering happens within ±1 of a pKa',
          content: (
            <>
              {TitrationCurveSVG}
              <Callout kind="tip" title="Lysine has 3 buffering regions (pH 0–14)">
                Lysine has three ionizable groups (α-COOH ~2, α-NH₃⁺ ~9, ε-NH₃⁺ ~10.5). Its titration curve is flat at 3 pKa values → 3 buffering regions. Past exam: "Of the four AAs, which has 3 buffering regions between pH 0–14?" → Lys.
              </Callout>
              <Callout kind="info" title="When does a Lys solution buffer?">
                Lys buffers around pH ~2, ~9, and ~10.5 — i.e., when the solution pH is within ±1 of a pKa. So "around pH 0.5, 1.5, 2.5" → yes (it covers pK₁ ~2). "Around the labeled point B" (the pI region) → no — pI is exactly where buffering is <em>worst</em>.
              </Callout>
              <p>Visually on the curve, the <strong>pI</strong> is where the curve is steepest (smallest buffering capacity); the <strong>pKa</strong> values are where the curve is flattest.</p>
            </>
          )
        },
        {
          id: 'zwitterion',
          title: 'Zwitterion form & charge at any pH',
          content: (
            <>
              <p>To draw the zwitterion of any AA at pH 7:</p>
              <ol>
                <li>α-COOH (pKa ~2) → at pH 7, deprotonated → <strong>–COO⁻</strong></li>
                <li>α-NH₃⁺ (pKa ~9) → at pH 7, protonated → <strong>–NH₃⁺</strong></li>
                <li>R-group: apply the same logic with R-group pKa</li>
              </ol>
              <Table
                dense
                headers={["AA", "R-group pKa", "R charge at pH 7"]}
                rows={[
                  ["Asp / Glu", "~3.9 / ~4.1", "−1 (deprotonated)"],
                  ["His", "~6.0", "near neutral; partial +"],
                  ["Cys", "~8.3", "0 (still –SH)"],
                  ["Tyr", "~10.5", "0 (still –OH)"],
                  ["Lys", "~10.5", "+1 (still NH₃⁺)"],
                  ["Arg", "~12.5", "+1 (still guanidinium⁺)"],
                ]}
              />
            </>
          )
        }
      ]
    },
    {
      id: 'peptide-bond',
      title: '§4 Peptide Bonds & Polypeptide Geometry',
      blocks: [
        {
          id: 'peptide-bond-formation',
          title: 'How a peptide bond forms — and what it constrains',
          content: (
            <>
              <Theme>The peptide bond is a <strong>condensation</strong> (loss of water) between the α-COOH of one AA and the α-NH₂ of the next. Each new peptide bond loses 1 water.</Theme>
              <p>Past exam: "How many water molecules were released in the synthesis of this peptide?" → For a peptide of <em>n</em> residues, <strong>(n − 1)</strong> waters released.</p>
              <Callout kind="tip" title="Forming and breaking">
                Bond <em>formation</em> = condensation (water out, energetically uphill — paid for by ATP). Bond <em>cleavage</em> = hydrolysis (water in, downhill).
              </Callout>
              {PeptideBondSVG}
              <Callout kind="info" title="The C–N bond CANNOT rotate">
                Past exam asks: "The plane drawn behind the peptide bond indicates ___" → <strong>absence of rotation around the C–N bond because of its partial double-bond character</strong>. NOT free rotation; NOT rotation around α-carbon (which IS free); NOT steric hindrance from C=O.
              </Callout>
              <p>What the peptide bond IS: between the carbonyl C of one residue and the amide N of the next. Past exam: "A peptide bond is formed between (a) the alpha-N of one and the carbonyl C of another, (b) ..." → answer is <strong>(a)</strong>.</p>
            </>
          )
        },
        {
          id: 'phi-psi',
          title: 'φ, ψ, and the Ramachandran allowed regions',
          content: (
            <>
              <ul>
                <li><strong>φ (phi)</strong>: rotation around N–Cα bond</li>
                <li><strong>ψ (psi)</strong>: rotation around Cα–C(carbonyl) bond</li>
                <li><strong>ω (omega)</strong>: rotation around C–N <em>peptide</em> bond — locked at 180° (trans) or 0° (cis)</li>
              </ul>
              <p>Most allowed combinations of φ/ψ correspond to α-helix (right-handed) or β-sheet. Glycine has the loosest range; proline the tightest (because the ring fixes φ near −60°).</p>
            </>
          )
        }
      ]
    },
    {
      id: 'protein-structure',
      title: '§5 Levels of Protein Structure',
      subtitle: '1° → 2° → 3° → 4°; what bonds hold each one',
      blocks: [
        {
          id: 'four-levels',
          title: 'Four levels and their stabilizing forces',
          content: (
            <>
              <Theme>1° = covalent peptide bonds. 2°–4° = mostly <strong>non-covalent</strong> (H-bonds, hydrophobic effect, ionic, van der Waals) <strong>+ disulfides</strong> when covalent stabilization is needed.</Theme>
              <Table
                headers={["Level", "What it is", "Held by"]}
                rows={[
                  ["1°", "AA sequence written N→C", "covalent peptide bonds"],
                  ["2°", "α-helix, β-sheet, β-turn, random coil", "backbone H-bonds (C=O···H–N)"],
                  ["3°", "full 3D fold of one polypeptide", "hydrophobic effect (dominant), H-bonds, ionic (salt bridges), van der Waals, disulfides"],
                  ["4°", "≥2 polypeptide subunits assembled", "same forces as 3°, applied between chains"],
                ]}
              />
            </>
          )
        },
        {
          id: 'alpha-helix',
          title: 'α-helix specifics',
          content: (
            <>
              <ul>
                <li>Right-handed; ~3.6 residues/turn; pitch 5.4 Å.</li>
                <li>Backbone C=O of residue <em>i</em> H-bonds to N–H of residue <em>i + 4</em>.</li>
                <li>R-groups project <strong>outward</strong> from the helix axis.</li>
                <li><strong>Helix dipole</strong>: positive at N-terminus, negative at C-terminus. Negatively charged R-groups (Asp, Glu) at N-terminus stabilize; positively charged at C-terminus stabilize. Past exam asked about engineering this — Asp (−) at N-term + Lys (+) at C-term stabilize the macrodipole.</li>
                <li>Helix breakers: <strong>Pro</strong> (kink) and <strong>Gly</strong> (too flexible, high entropy cost).</li>
              </ul>
            </>
          )
        },
        {
          id: 'beta-sheet',
          title: 'β-sheets and β-turns',
          content: (
            <>
              <ul>
                <li>β-strands aligned side by side; H-bonds between strands (NOT within a strand).</li>
                <li><strong>Parallel</strong>: strands run same direction; bent H-bonds, slightly less stable.</li>
                <li><strong>Antiparallel</strong>: strands run opposite directions; straight H-bonds, more stable.</li>
                <li>R-groups alternate above and below the sheet plane.</li>
                <li>β-turns are 4-residue 180° hairpins; <strong>Pro and Gly are common at turns</strong>.</li>
              </ul>
            </>
          )
        },
        {
          id: 'tertiary',
          title: 'Tertiary structure & the hydrophobic effect',
          content: (
            <>
              <Theme>Folding is driven by the <strong>hydrophobic effect</strong> — hiding nonpolar R-groups from water increases the entropy of surrounding water. This is an <em>entropic</em> drive, not enthalpic.</Theme>
              <Callout kind="info" title="Past exam, thermodynamics of folding">
                "An unfolded protein has high entropy (disordered) and high enthalpy (because it has fewer stabilizing interactions)." TRUE.
                <br />"Protein folding is not spontaneous because enthalpy increases (heat is absorbed) when noncovalent interactions are formed." FALSE — H-bonds and vdW <em>release</em> heat.
                <br />"The aggregation of hydrophobic regions of a protein decreases the entropy of surrounding water molecules." FALSE — burying hydrophobics <em>increases</em> water's entropy (water no longer has to cage them).
              </Callout>
              <ul>
                <li>Globular proteins → hydrophobic core, polar surface.</li>
                <li>Fibrous proteins (collagen, keratin) → repetitive 2°, structural roles.</li>
                <li>Membrane proteins → hydrophobic surface that contacts the bilayer; polar interior if it's a channel.</li>
              </ul>
            </>
          )
        },
        {
          id: 'asp-his-saltbridge',
          title: 'Salt-bridge worked example: Asp–His',
          content: (
            <>
              <p>Past exam: "At pH 5.0, an Asp–His ion pair contributes ~15 kJ/mol of favorable folding free energy due to a salt bridge."</p>
              <ul>
                <li><strong>At pH 1.0</strong>: salt bridge breaks. Asp's R-group is protonated (–COOH, neutral). No charge → no electrostatic attraction with His⁺. Folding loses that 15 kJ/mol.</li>
                <li><strong>At pH 8.07</strong>: salt bridge also breaks. Now His is mostly deprotonated (neutral imidazole), so the partner charge is gone. Same outcome: no salt bridge.</li>
                <li>The salt bridge only "works" near pH 5–7, where Asp is −1 and His is +1.</li>
              </ul>
            </>
          )
        },
        {
          id: 'denaturation',
          title: 'Denaturation: what disrupts which level',
          content: (
            <>
              <Table
                headers={["Agent", "Disrupts", "How"]}
                rows={[
                  ["Heat", "H-bonds, hydrophobic core", "kinetic energy overwhelms non-covalent forces"],
                  ["pH change", "ionic / salt bridges, sometimes H-bonds", "alters R-group protonation"],
                  ["Detergents (SDS)", "hydrophobic interactions", "coats hydrophobic surfaces with amphipathic micelles"],
                  ["Urea / Gdn-HCl", "H-bonds + hydrophobic", "competes for H-bond donors and acceptors"],
                  ["β-mercaptoethanol / DTT / TCEP", "DISULFIDES specifically", "reduces –S–S– to 2 –SH"],
                ]}
              />
              <Callout kind="warn" title="Insulin-receptor question">
                "Which would specifically disrupt hydrophobic interactions in the receptor?" → <strong>Detergents</strong>. Heat is broader; pH targets ionic; reducing agents target disulfides.
              </Callout>
            </>
          )
        },
        {
          id: 'quaternary',
          title: 'Quaternary structure & stabilizing interactions',
          content: (
            <>
              <ul>
                <li>≥ 2 polypeptide chains held together by the same non-covalent interactions as 3° (between the chains).</li>
                <li>Examples: Hb (α₂β₂), insulin receptor (TKD homodimer connected by disulfide), antibodies.</li>
              </ul>
              <Callout kind="info" title="Insulin receptor practice — what's at the dimer interface">
                "Which is an example of quaternary structure in the insulin receptor?" → Tyr-144 dipole-ion interaction with Glu-398 (C) <em>between two monomers</em>. Backbone H-bonds within an α-helix on one chain are 2°/3°. Asp-Lys R-group interactions in the FnIII domain on one chain are 3° (within one subunit), not 4°.
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'hb-mb',
      title: '§6 Hemoglobin & Myoglobin — allostery in action',
      blocks: [
        {
          id: 'hb-vs-mb',
          title: 'Mb vs Hb — same heme, very different curve',
          content: (
            <>
              <Theme>Mb is monomeric → hyperbolic O₂ binding. Hb is α₂β₂ → cooperativity → sigmoidal curve. Cooperativity exists because subunits "talk" to each other; Mb has no neighbors.</Theme>
              {HbCurveSVG}
              <p>Past exam: "Myoglobin and one (monomeric) subunit of hemoglobin have ___" → <strong>different primary structures, similar tertiary structures</strong>. Sequence-wise they're not identical, but they fold to the same globin fold.</p>
            </>
          )
        },
        {
          id: 'cooperativity',
          title: 'Cooperativity — T state ↔ R state',
          content: (
            <>
              <ul>
                <li><strong>T (tense)</strong> state: low affinity for O₂. Stabilized by salt bridges (e.g., between His-146 of one β and Lys/Asp of the partner α subunit).</li>
                <li><strong>R (relaxed)</strong> state: high affinity. The first O₂ binding pulls the heme iron into the plane of the porphyrin, breaking salt bridges and triggering T → R.</li>
                <li>Each subsequent O₂ binds easier than the last → sigmoidal curve.</li>
              </ul>
              <Callout kind="info" title="What contributes directly to O₂ affinity?">
                The <strong>heme nitrogens (and the proximal His)</strong> hold the Fe²⁺ that actually binds O₂. The distal His H-bonds the bound O₂ to stabilize it. Both directly affect affinity. The α-helix backbone <em>positioning</em> of those residues matters indirectly. Past exam picked "Both A (heme nitrogen ligand) and B (distal protonated His)" — both contribute.
              </Callout>
            </>
          )
        },
        {
          id: 'allosteric-effectors',
          title: 'BPG, the Bohr effect, and CO₂',
          content: (
            <>
              <Table
                headers={["Effector", "Where it binds", "Effect"]}
                rows={[
                  ["BPG (2,3-bisphosphoglycerate)", "central cavity of T-state Hb (binds Lys/His residues)", "stabilizes T → ↓O₂ affinity → unloads in tissue"],
                  ["CO₂", "N-terminus → forms carbamate", "stabilizes T (negative allostery)"],
                  ["H⁺ (low pH)", "His residues", "Bohr effect: ↓pH → ↓O₂ affinity → release in working tissue"],
                  ["CO (carbon monoxide)", "Fe²⁺ heme", "competes with O₂; binds 200× tighter; cooperatively poisons all 4 subunits → makes O₂ release harder. PICK TWO answers: 'binds Fe²⁺' AND 'binds cooperatively, making O₂ release more difficult'."],
                ]}
              />
              <Callout kind="tip" title="High altitude / chronic hypoxia">
                ↑BPG → Hb gives up O₂ more easily in tissue → red curve shifts <em>right</em> → less O₂ available "in stress" → tissues see more delivery despite lower pO₂. Physician orders 12 hr later: "What happens to BPG?" → BPG ↑, Hb affinity ↓.
              </Callout>
            </>
          )
        },
        {
          id: 'hb-variants',
          title: 'Hb variants and what increases affinity',
          content: (
            <>
              <ul>
                <li><strong>Hb-Providence</strong>: a key Lys (which normally binds BPG via salt bridge) → Asn. BPG can't bind well → curve shifts <em>left</em> → ↑O₂ affinity (BPG normally lowers affinity).</li>
                <li><strong>Hb-Barcelona</strong>: His → Asp at position 94 of α — Asp 94 forms a salt bridge that <em>stabilizes T</em>. T-state stabilization → low affinity → curve shifts <em>right</em>.</li>
              </ul>
              <p>Past exam: "Which would show <em>increased</em> affinity for O₂?" → <strong>Hb-Providence only</strong>. (Barcelona stabilizes T → lower affinity, not higher.)</p>
            </>
          )
        }
      ]
    },
    {
      id: 'methods',
      title: '§7 Lab methods — purification & structure determination',
      blocks: [
        {
          id: 'sds-page-iex',
          title: 'SDS-PAGE, ion-exchange, and pI logic',
          content: (
            <>
              <ul>
                <li><strong>SDS-PAGE</strong>: SDS coats proteins uniformly negative → separates by <em>size</em> (smallest runs farthest).</li>
                <li><strong>Ion-exchange chromatography</strong>: cation exchanger (negative resin) binds <em>positively charged</em> proteins; anion exchanger (positive resin) binds <em>negatively charged</em>. The buffer pH dictates the protein's net charge.</li>
                <li>If the buffer pH = protein's pI → net charge 0 → won't bind either column.</li>
              </ul>
              <Callout kind="tip" title="Migration on a cation exchanger">
                "Of three peptides, which migrates <em>most slowly</em> on a cation-exchange column at pH 8.22 (i.e., binds tightest)?" → the one with <strong>most positive charge</strong> at pH 8.22. Positive R-groups dominate when pH is well below the pKa of K/R, so count Lys + Arg + (His if relevant).
              </Callout>
              <Callout kind="info" title="When IEX won't work">
                "p73 has pI 8.22; you ran column at pH 8.22 — explain why IEX won't conduct purification" → at pH = pI, the protein has net 0 charge, so it has no advantage over any other protein and won't be retained vs. competitors.
              </Callout>
            </>
          )
        },
        {
          id: 'his-tag-affinity',
          title: 'His-tag affinity & x-ray crystallography',
          content: (
            <>
              <ul>
                <li><strong>His-tag affinity</strong>: 6×His binds Ni²⁺ resin; eluted with imidazole. Effective for tagged recombinant proteins. Past exam asked which method is "most useful" for purifying a tagged human-brain protein → <strong>(b) affinity using a His-tag epitope</strong>.</li>
                <li><strong>2D NMR / x-ray crystallography</strong>: determine 3D coordinates atom-by-atom. Tandem MS = mass info. Circular dichroism = secondary-structure content.</li>
              </ul>
            </>
          )
        }
      ]
    }
  ],
  keyReview: {
    themes: [
      { title: 'pH ↔ pKa governs charge', desc: 'Henderson–Hasselbalch + the rule "pH > pKa → deprotonated" lets you predict every R-group state, every salt bridge, every titration question.' },
      { title: 'The peptide bond is planar and trans', desc: 'No rotation around C–N (partial double bond, ω = 180°). Only φ and ψ rotate. Pro restricts φ; Gly is the most flexible.' },
      { title: 'Folding is driven by water entropy', desc: 'The hydrophobic effect (entropy of surrounding water) is the dominant thermodynamic driver. H-bonds, vdW, ionic, disulfides do the rest.' },
      { title: 'Cooperativity needs ≥ 2 subunits', desc: 'Mb (1 chain) → hyperbolic. Hb (4 chains) → sigmoidal. T-stabilizers (BPG, CO₂, H⁺) right-shift; mutations that block T stabilization left-shift.' },
      { title: '20 AAs → 4 buckets', desc: 'Nonpolar / polar uncharged / acidic / basic, plus the special quartet (Gly small, Pro rigid, Cys S–S, Met start). Trp = UV; Ser/Thr/Tyr = phosphorylation; Asn = N-glycosylation.' }
    ],
    vocab: [
      { term: 'Zwitterion', def: 'AA with simultaneous +/− groups, net charge 0; dominant species at pH ≈ pI.' },
      { term: 'pI', def: 'pH where net charge = 0; equals the average of the two pKa values flanking the zwitterion.' },
      { term: 'φ (phi)', def: 'Dihedral angle around N–Cα; rotates freely except where Pro restricts it.' },
      { term: 'ψ (psi)', def: 'Dihedral around Cα–C; rotates freely.' },
      { term: 'ω (omega)', def: 'Dihedral around the peptide C–N; locked trans (180°), planar.' },
      { term: 'Cooperativity', def: 'Binding at one site changes affinity at another — needs allosteric quaternary structure.' },
      { term: 'Bohr effect', def: '↓pH or ↑CO₂ shifts Hb to T state → releases O₂ in working tissues.' },
      { term: 'Disulfide bond', def: 'Covalent S–S between two Cys; broken by reducing agents (β-ME, DTT).' },
      { term: 'Hydrophobic effect', tag: 'driver', tagColor: 'violet', def: 'Entropic driving force of folding: hiding nonpolar R-groups frees water.' },
      { term: 'Salt bridge', def: 'Electrostatic R-group ↔ R-group attraction (e.g., Asp⁻ ↔ Lys⁺); pH-sensitive.' }
    ],
    laws: [
      { name: 'Henderson–Hasselbalch', desc: 'pH = pKa + log([A⁻]/[HA]). Predicts protonation, ratio, and buffer windows.' },
      { name: 'Buffer rule of ±1', desc: 'A weak acid buffers within ±1 pH unit of its pKa.' },
      { name: 'Trans peptide bond default', desc: '~1000× more common than cis; proline is the main exception (cis–Pro is ~10–30%).' },
      { name: 'Helix dipole rule', desc: 'N-term of helix is partially +; C-term partially −. Place D/E at N-term and K/R at C-term to stabilize.' },
      { name: 'i, i+4 H-bonding', desc: 'In α-helix, backbone C=O of residue i bonds to N–H of i+4.' }
    ],
    methods: [
      { name: 'Ion-exchange (IEX)', desc: 'Bind by net charge at given pH. Cation exchanger holds + proteins; anion exchanger holds − proteins. At pH = pI, no binding.' },
      { name: 'SDS-PAGE', desc: 'SDS coats proteins (uniform −/mass) → separates by molecular weight.' },
      { name: 'Affinity (His-tag)', desc: 'Recombinant tag binds Ni²⁺; elute with imidazole. High-purity in one step.' },
      { name: 'Size-exclusion (gel filtration)', desc: 'Big proteins exit first (don\'t enter beads); smallest exit last.' },
      { name: '2D NMR / x-ray crystallography', desc: 'Determine atomic 3D structure. CD = secondary structure content. MS = mass.' }
    ],
    diagrams: [
      { title: 'AA titration curve & pI', visual: TitrationCurveSVG, caption: 'pI is the midpoint between the two pKa values that flank the zwitterion form.' },
      { title: 'Peptide bond geometry', visual: PeptideBondSVG, caption: 'Resonance gives the C–N partial double-bond character → planar, no rotation; trans dominates.' },
      { title: 'Hb vs Mb O₂ binding', visual: HbCurveSVG, caption: 'BPG / CO₂ / H⁺ right-shift Hb (lower affinity, releases O₂ in tissue).' }
    ]
  },
  questions: [
    {
      q: 'Which feature is unique to lipids relative to proteins, nucleic acids, and carbohydrates?',
      choices: [
        'They are polymers of repeating monomers',
        'They are defined by hydrophobicity rather than a backbone',
        'They always carry a net charge at pH 7',
        'They are catalytically active'
      ],
      correct: 1,
      explanation: 'Lipids are the only biomolecule class defined by a physical property (low water solubility / hydrophobicity) rather than a polymer backbone. They are not polymers.',
      difficulty: 'E'
    },
    {
      q: 'A protein has a peptide of n residues. How many water molecules were released during synthesis?',
      choices: ['n', 'n − 1', 'n + 1', '2n'],
      correct: 1,
      explanation: 'Each peptide bond is a condensation that releases one water. n residues link by (n − 1) peptide bonds → (n − 1) waters.',
      difficulty: 'E'
    },
    {
      q: 'Which amino acid would you incorporate to MAXIMIZE absorbance at 280 nm?',
      choices: ['Histidine', 'Tyrosine', 'Tryptophan', 'Phenylalanine'],
      correct: 2,
      explanation: 'Tryptophan has the highest molar extinction coefficient at 280 nm (~5500 M⁻¹cm⁻¹). Tyr is ~1500; Phe absorbs near 260; His does not absorb at 280 strongly.',
      difficulty: 'E'
    },
    {
      q: 'For the molecule with pK₁ = 2.35 and pK₂ = 9.78, at what pH would half the molecules have a net positive charge and the other half be neutral?',
      choices: ['pH = 2.35', 'pH = 6.07', 'pH = 9.78', 'Not enough information'],
      correct: 0,
      explanation: 'When pH = pKa of the α-carboxyl, half are −COOH (net +1 because α-NH3+ is still on) and half are −COO⁻ (net 0). That occurs at pH 2.35.',
      difficulty: 'M'
    },
    {
      q: 'Acetic acid (pKa 4.75) at pH 6.75. The ratio of HA : A⁻ is approximately:',
      choices: ['1 : 100', '100 : 1', '1 : 20', '20 : 1'],
      correct: 0,
      explanation: 'pH = pKa + log(A/HA). 6.75 = 4.75 + log(A/HA) → log = 2 → A/HA = 100, so HA : A⁻ = 1 : 100.',
      difficulty: 'M'
    },
    {
      q: 'At a pH equal to the pI of a peptide:',
      choices: [
        'Only the amino and carboxyl termini contribute to charge',
        'The total net charge is zero',
        'Each individual R-group has zero charge',
        'The peptide cannot exist in solution'
      ],
      correct: 1,
      explanation: 'pI is by definition the pH where the *sum* of charges on the peptide = 0. Individual side chains can still be ± — they just cancel.',
      difficulty: 'M'
    },
    {
      q: 'The breaking of a peptide bond between two amino acids is an example of a(n):',
      choices: ['Condensation', 'Hydrolysis', 'Oxidation–reduction', 'Isomerization'],
      correct: 1,
      explanation: 'A water molecule is added across the C–N bond → hydrolysis. Formation is condensation; breaking is hydrolysis.',
      difficulty: 'E'
    },
    {
      q: 'Which AA contains 3 distinct buffering regions between pH 0 and 14?',
      choices: ['Aspartate', 'Glutamate', 'Lysine', 'Alanine'],
      correct: 2,
      explanation: 'Lysine has 3 ionizable groups (α-COOH, α-NH₃⁺, ε-NH₃⁺) → 3 pKa values → 3 buffer regions.',
      difficulty: 'M'
    },
    {
      q: 'A peptide bond is planar and CANNOT rotate because:',
      choices: [
        'The C=O group introduces steric strain',
        'The C–N bond has partial double-bond character due to resonance',
        'The α-carbons are sp²-hybridized',
        'Hydrogen bonding from R-groups locks rotation'
      ],
      correct: 1,
      explanation: 'Resonance delocalizes the carbonyl lone pair onto N, giving the C–N bond ~40% double-bond character — planar and no rotation.',
      difficulty: 'M'
    },
    {
      q: 'Which interaction is an example of QUATERNARY structure in the insulin receptor (a TKD homodimer)?',
      choices: [
        'A hydrogen bond between Asn-711 in the FnIII domain and Val-56 in insulin',
        'A backbone H-bond within an α-helix on one chain',
        'Tyr-144 making a dipole–ion interaction with Glu-398 between two monomers',
        'A peptide bond between Arg-885 and Ile-886 within one chain'
      ],
      correct: 2,
      explanation: 'Quaternary = between two separate polypeptide chains. The Tyr-144 / Glu-398 contact across the dimer interface is the only between-monomers interaction.',
      difficulty: 'H'
    },
    {
      q: 'Which would specifically disrupt HYDROPHOBIC interactions in a folded receptor (and leave other interactions relatively intact)?',
      choices: ['Reducing agents', 'Detergents', 'Heat', 'pH change'],
      correct: 1,
      explanation: 'Detergents are amphipathic; they coat hydrophobic surfaces with micelles, peeling apart hydrophobic cores. Reducing agents target disulfides; heat hits everything; pH targets ionic.',
      difficulty: 'M'
    },
    {
      q: 'Mb and one (monomeric) subunit of Hb have:',
      choices: [
        'Different primary structures, different tertiary structures',
        'Different primary structures, similar tertiary structures',
        'Similar primary structures, different tertiary structures',
        'Similar primary structures, similar tertiary structures'
      ],
      correct: 1,
      explanation: 'Sequence identity is moderate but not high; both fold to the same globin fold (8 α-helices around heme). Conserved tertiary, divergent primary.',
      difficulty: 'M'
    },
    {
      q: 'Which method would best PURIFY a recombinant 6×His-tagged protein from a complex lysate?',
      choices: [
        'SDS-PAGE',
        'Affinity chromatography on Ni²⁺ resin',
        'Differential centrifugation followed by size-exclusion',
        'Dialysis'
      ],
      correct: 1,
      explanation: '6×His binds Ni²⁺-NTA resin selectively; elute with imidazole. Single-step >95% purity is typical.',
      difficulty: 'E'
    },
    {
      q: 'What part of hemoglobin DIRECTLY contributes to its affinity for O₂?',
      choices: [
        'A heme nitrogen lone pair (and the proximal His)',
        'The distal protonated histidine that H-bonds bound O₂',
        'Both A and B',
        'Fe³⁺ in the heme'
      ],
      correct: 2,
      explanation: 'The Fe²⁺ binds O₂ directly (proximal His + porphyrin nitrogens hold Fe), and the distal His H-bonds the bound O₂. Fe³⁺ (methemoglobin) cannot bind O₂.',
      difficulty: 'H'
    },
    {
      q: 'A patient ascends to high altitude. After 12 h, what change to BPG and Hb O₂ affinity occurs?',
      choices: [
        'BPG ↓, Hb affinity ↑',
        'BPG ↑, Hb affinity ↓',
        'BPG ↑, Hb affinity ↑',
        'BPG ↓, Hb affinity ↓'
      ],
      correct: 1,
      explanation: 'Chronic hypoxia raises 2,3-BPG, which stabilizes T-state → lowers O₂ affinity → improves O₂ release in tissues.',
      difficulty: 'M'
    },
    {
      q: 'Why is CO toxic? PICK the BEST single answer.',
      choices: [
        'It binds Fe²⁺ ~200× tighter than O₂ AND when it binds one heme it cooperatively stabilizes Hb in a state that releases O₂ poorly',
        'It oxidizes Fe²⁺ to Fe³⁺',
        'It blocks BPG binding',
        'It acidifies blood'
      ],
      correct: 0,
      explanation: 'CO competes for Fe²⁺ heme binding (much tighter than O₂) AND its bound Hb behaves like high-affinity Hb that doesn\'t release O₂ easily — even un-CO-bound subunits hold their O₂ in tissues.',
      difficulty: 'H'
    },
    {
      q: 'Hb-Providence has a Lys → Asn substitution at the BPG binding site. Compared with wild type, this Hb has:',
      choices: ['Lower O₂ affinity', 'Higher O₂ affinity', 'Same affinity', 'No O₂ binding'],
      correct: 1,
      explanation: 'BPG can no longer bind well → loses its T-stabilizing effect → curve shifts left → higher O₂ affinity.',
      difficulty: 'H'
    },
    {
      q: 'Which AA is MOST likely a phosphorylation site?',
      choices: ['Leucine', 'Serine', 'Glycine', 'Phenylalanine'],
      correct: 1,
      explanation: 'Phosphorylation is on hydroxyls — Ser, Thr, or Tyr. Leu/Gly/Phe lack reactive –OH groups.',
      difficulty: 'E'
    },
    {
      q: 'Of three peptides separated by SDS-PAGE, which would migrate the SHORTEST distance?',
      choices: ['The shortest peptide', 'The peptide with the most negative R-groups', 'The longest peptide', 'The peptide with disulfides'],
      correct: 2,
      explanation: 'SDS-PAGE separates by size; smallest peptides run farthest. Longest moves least.',
      difficulty: 'E'
    },
    {
      q: 'Citric acid (3 carboxylates, pKa values ~3.1, 4.8, 6.4). At pH 4.8, which statement is TRUE?',
      choices: [
        'All molecules have net −1',
        'All molecules have net −2',
        'All three carboxyls are deprotonated in all molecules',
        'All three carboxyls are protonated in all molecules',
        'Essentially all molecules are deprotonated at one position, fully protonated at one position, and 50% protonated at the middle (pKa = pH) position'
      ],
      correct: 4,
      explanation: 'pH well above pKa1 (3.1) → fully deprotonated there. pH well below pKa3 (6.4) → fully protonated there. pH = pKa2 (4.8) → 50/50 at the middle group.',
      difficulty: 'H'
    }
  ]
};

export default exam;
