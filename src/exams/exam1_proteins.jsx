import React from 'react';
import { Callout, Table, Pill, Theme, SvgFrame, AnchorImage, ImgGrid } from '../components/Visual.jsx';

// Kept SVGs only where they're genuinely better than a lecture image: titration shape, peptide planarity, Hb/Mb curves
const TitrationCurveSVG = (
  <SvgFrame width={460} height={220} label="Generic AA titration curve. pK₁ (~2) = α-COOH; pK₂ (~9) = α-NH₃⁺; pI = midpoint of the two pKa values that flank the zwitterion.">
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

const HbCurveSVG = (
  <SvgFrame width={460} height={220} label="Mb (red) is hyperbolic (single binding site). Hb (blue) is sigmoidal (cooperativity across 4 subunits). Right-shifted (purple) = +BPG / +CO₂ / ↓pH → lower O₂ affinity → release in tissues.">
    <line x1="50" y1="190" x2="430" y2="190" stroke="#475569" />
    <line x1="50" y1="20" x2="50" y2="190" stroke="#475569" />
    <text x="240" y="208" fontSize="10" fill="#475569">pO₂ (torr)</text>
    <text x="20" y="100" fontSize="10" fill="#475569" transform="rotate(-90 20 100)">% O₂ saturation</text>
    <path d="M50,190 Q80,40 200,30 Q330,28 430,28" fill="none" stroke="#dc2626" strokeWidth="2.5" />
    <text x="380" y="40" fontSize="10" fill="#dc2626">Mb (hyperbolic)</text>
    <path d="M50,188 C100,185 130,170 160,140 C200,90 240,50 290,40 C350,32 410,30 430,30" fill="none" stroke="#0284c7" strokeWidth="2.5" />
    <text x="290" y="100" fontSize="10" fill="#0284c7">Hb (sigmoidal)</text>
    <path d="M50,188 C120,185 170,180 200,160 C240,120 290,70 340,50 C380,40 420,35 430,33" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 3" />
    <text x="220" y="170" fontSize="10" fill="#7c3aed">Hb +BPG / +CO₂ / ↓pH</text>
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
          title: 'Four biomolecule classes — and what makes lipids the odd one out',
          content: (
            <>
              <Theme title="Proteins are polymers of amino acids — defined by sequence. Lipids are the only class NOT defined by a polymer backbone; they're defined by hydrophobicity.">
                Past exam: "Raw milk is a mixture of lipids, carbohydrates, proteins (including <em>functional enzymes</em>), live cells, vitamins, and water. Which defining feature of living organisms is <strong>absent</strong> in fresh raw milk?" → <strong>Capacity to change over time by gradual evolution</strong>. A pile of biomolecules ≠ life.
              </Theme>
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
                Increasing size: <strong>amino acid &lt; protein &lt; ribosome &lt; mitochondrion</strong>. A free amino acid is ~100 Da; a typical protein is 5–500 kDa; a ribosome is ~2.5 MDa; a mitochondrion is a μm-scale organelle. Past exam asked exactly this ordering.
              </Callout>
            </>
          )
        },
        {
          id: 'living-features',
          title: 'What defines living chemistry',
          content: (
            <>
              <p>Per the lecture, the four "alive" criteria the milk-vs-cell question tests:</p>
              <ul>
                <li><strong>Defined function for every component</strong></li>
                <li><strong>High degree of complexity</strong> (biopolymers everywhere)</li>
                <li><strong>Biomolecules capable of catalysis &amp; interplay</strong> (enzymes acting on substrates)</li>
                <li><strong>Capacity to change over time by gradual evolution</strong> ← this is the one a static milk sample can't satisfy</li>
              </ul>
              <Callout kind="info" title="Past exam framing">
                The trap: students see "raw milk has live cells that die before dividing" and get confused. The cells are dying — there's no replication, no inheritance, no evolution. So the answer is "capacity to change over time by gradual evolution."
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'aa-structure',
      title: '§2 Amino Acid Structure, Stereochemistry & the 20 R-groups',
      subtitle: 'L-α-AAs · classifying by polarity, charge, and special features',
      blocks: [
        {
          id: 'aa-general',
          title: 'General structure: L-α-amino acid',
          content: (
            <>
              <Theme>All proteinogenic AAs are <strong>L-α-amino acids</strong>: an α-carbon bonded to –NH₃⁺, –COO⁻, –H, and a side chain R. Glycine (R = H) is the only achiral one.</Theme>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e1_aa_022.jpeg"
                  alt="3D ball-and-stick model of an α-amino acid showing α-carbon, amino group, carboxyl group, hydrogen, and R side chain"
                  caption="Lecture model of the α-amino acid skeleton. Notice the α-carbon (cyan) is the chiral center: four distinct groups (NH₃⁺ blue, COO⁻ red, H, and R purple) → L-configuration in all proteinogenic AAs except glycine. Past exam tip: only the side-chain R changes among the 20 AAs."
                  source="BCH 335 lecture (Wk 2 Ch 3)"
                />
                <AnchorImage
                  src="e1_aa_040.jpeg"
                  alt="Comparison of L-alanine and D-alanine in three projections"
                  caption="L vs D forms of alanine. The α-NH₃⁺ points LEFT in the L-Fischer projection (CORN mnemonic when looking from H toward Cα: COOH–R–NH₂ counterclockwise = L). Mammalian proteins use only L-AAs. Past-exam recurring distractor: 'similar primary structures, different tertiary' (false for two homologs)."
                  source="BCH 335 lecture (Wk 2 Ch 3)"
                />
              </ImgGrid>
              <ul>
                <li><strong>α-carbon</strong> = chiral center (except Gly).</li>
                <li>At physiological pH (~7.4) the AA is a <strong>zwitterion</strong>: –NH₃⁺ and –COO⁻ simultaneously, net charge 0 if R is neutral.</li>
                <li>4-hydroxyproline (a post-translational modification of proline in collagen) is non-standard — it's NOT one of the 20 standard AAs.</li>
              </ul>
            </>
          )
        },
        {
          id: 'aa-classify',
          title: 'Classifying the 20 AAs by R-group',
          subtitle: 'Nonpolar aliphatic · aromatic · polar uncharged · acidic · basic · special',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e1_aa_043.jpeg"
                  alt="Nonpolar aliphatic R groups: glycine, alanine, proline, valine, leucine, isoleucine, methionine"
                  caption="Nonpolar aliphatic R-groups (G, A, V, L, I, M, P). Branched chains (V, L, I) cluster in hydrophobic cores. Methionine is the universal start codon (AUG). Glycine has only H — smallest, most flexible. Proline's R loops back to the α-N → cyclic (imino acid), kinks the chain."
                  source="Lehninger fig used in lecture"
                />
                <AnchorImage
                  src="e1_aa_002.jpeg"
                  alt="Aromatic R groups: phenylalanine, tyrosine, tryptophan"
                  caption="Aromatic R-groups (F, Y, W). All three absorb 280 nm UV — Trp is the strongest absorber by far. Tyrosine has a phenolic –OH that can be phosphorylated. Past exam: 'Which AA would you incorporate to maximize UV absorption?' → Tryptophan."
                />
                <AnchorImage
                  src="e1_aa_005.jpeg"
                  alt="Polar uncharged R groups: serine, threonine, cysteine, asparagine, glutamine"
                  caption="Polar uncharged R-groups (S, T, C, N, Q). The hydroxyls of Ser/Thr (and Tyr from the aromatic group) are the targets of phosphorylation. Asn is the target of N-linked glycosylation. Cysteine's thiol forms disulfide bonds. Past exam: 'Which functional group could be phosphorylated?' → hydroxyl (–OH)."
                />
                <AnchorImage
                  src="e1_aa_007.jpeg"
                  alt="Positively charged R groups: lysine, arginine, histidine"
                  caption="Basic R-groups (K, R, H). Lys & Arg are positive at pH 7. Histidine's imidazole pKa ≈ 6.0 — the only R-group that titrates near physiological pH, so it dominates buffering and acid/base catalysis (catalytic triads, Bohr effect). Lysine's three pKas (~2, ~9, ~10.5) give it three buffering regions."
                />
                <AnchorImage
                  src="e1_aa_008.jpeg"
                  alt="Negatively charged R groups: aspartate, glutamate"
                  caption="Acidic R-groups (D, E). Both deprotonated at pH 7 (R-pKa ~3.9 and ~4.1). Form salt bridges with K/R, coordinate metal ions, and act as general bases (e.g., Asp in the chymotrypsin catalytic triad)."
                />
                <AnchorImage
                  src="e1_aa_006.jpeg"
                  alt="Two cysteine residues forming a disulfide bond between their thiol groups"
                  caption="Cysteine disulfide bond. Two –SH groups oxidize to a covalent S–S (cystine), which stabilizes the tertiary structure of secreted/extracellular proteins (insulin, antibodies). Reducing agents (β-ME, DTT, TCEP) cleave them. Past exam: 'Of three peptides, which changes structure with a reducing agent?' → the one with disulfide-bonded Cys."
                />
              </ImgGrid>
              <Callout kind="tip" title="Helpful map: 4 buckets + 1 special quartet">
                Memorize: <strong>Nonpolar aliphatic / aromatic / polar uncharged / charged (acidic + basic)</strong> + the special quartet → <strong>Gly (smallest), Pro (rigid), Cys (S–S), Met (start)</strong>. From here you can predict every property: UV (W &gt; Y &gt; F), phosphorylation (S/T/Y), salt bridges (K/R + D/E), catalysis (H, D, S, C), helix-breakers (P, G).
              </Callout>
              <Callout kind="info" title="Past exam — H-bond donor R-groups at pH 7">
                "Which AAs would you include for max H-bond interactions through their R-groups?" → reach for <strong>Asn / Gln / Ser / Thr / Tyr</strong> (uncharged polar with –OH or amide). Lys/Arg also H-bond via their charged groups; Met & Pro do not H-bond well via R.
              </Callout>
            </>
          )
        },
        {
          id: 'twenty-aa-table',
          title: 'The "20 AAs at a glance" reference card',
          content: (
            <>
              <AnchorImage
                src="e1_aa_013.png"
                alt="Reference chart of the 20 standard amino acids organized by chemical properties"
                caption="Single-card view of all 20 — organized by polarity and charge. Use this as your one-look reference: small/nonpolar (G, A) → branched aliphatic (V, L, I) → aromatic (F, Y, W) → polar uncharged (S, T, N, Q, C, M) → acidic (D, E) → basic (K, R, H) → special (P, G)."
                source="BCH 335 reference card (lecture)"
              />
              <Callout kind="warn" title="Tripeptide trick (Past exam)">
                Given Trp-Lys-Asp, Gly-Gln-Asn, Val-His-Leu, Asp-His-Glu, Arg-Val-Tyr:
                <ul>
                  <li>Most positive at pH 7? → <strong>Arg-Val-Tyr</strong> (Arg always +1; Tyr/Val neutral; α-termini cancel)</li>
                  <li>Phosphorylatable? → the one with <strong>Ser/Thr/Tyr</strong> → <strong>Arg-Val-Tyr</strong></li>
                  <li>Most UV absorption? → the one with <strong>Trp</strong> → <strong>Trp-Lys-Asp</strong></li>
                </ul>
              </Callout>
            </>
          )
        },
        {
          id: 'special-residues',
          title: 'Glycine and Proline — special structural roles',
          content: (
            <>
              <AnchorImage
                src="e1_aa_018.png"
                alt="4-hydroxyproline structure"
                caption="4-hydroxyproline: a post-translational modification of proline (catalyzed by prolyl hydroxylase, vitamin-C dependent). Found heavily in collagen — stabilizes the triple helix. Reminder: 4-Hyp is NOT one of the 20 standard proteinogenic amino acids."
                source="BCH 335 lecture"
              />
              <Table
                headers={["Residue", "Why special", "Structural consequence"]}
                rows={[
                  ["Glycine", "R = H, smallest, no chirality, ↑φ/ψ flexibility", "found at tight turns; destabilizes α-helices because high entropy in unfolded state; abundant in collagen"],
                  ["Proline", "R loops back to α-N → cyclic imino acid", "rigid, restricts φ; β-turn / kink; helix-breaker; only AA with significant cis peptide bond population"]
                ]}
              />
              <Callout kind="warn" title="Why proline ruins an α-helix">
                Proline's nitrogen has no NH to donate to the helix's H-bond pattern, AND its ring locks φ near −60°. Mid-helix proline → kink. Past-exam answer: a peptide with mid-chain proline 'would struggle to form an α-helix due to the cyclic structure between the amino N and the R-group.'
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'ph-pka',
      title: '§3 pH, pKa, Henderson–Hasselbalch & Buffers',
      subtitle: 'How charge depends on pH; buffering happens within ±1 of a pKa',
      blocks: [
        {
          id: 'henderson-h',
          title: 'Henderson–Hasselbalch and "pH > pKa → deprotonated"',
          content: (
            <>
              <Theme>pH = pKa + log([A⁻]/[HA]). When pH = pKa, half-protonated. When pH ≫ pKa, deprotonated (no proton). When pH ≪ pKa, protonated.</Theme>
              <AnchorImage
                src="e1_ch12_069.jpeg"
                alt="Acetic acid / acetate equilibrium with Ka and Kw equations"
                caption="Acetate buffer system. Acetic acid (CH₃COOH) ⇌ acetate (CH₃COO⁻) + H⁺. Ka = [H⁺][Ac⁻]/[HAc]. The Henderson–Hasselbalch is just the negative log of Ka rearranged for pH. Use this anytime you need to figure out the protonation state of any side chain."
                source="BCH 335 lecture (Ch 1–2)"
              />
              <p><strong>Worked example (past exam)</strong>: A solution of acetic acid (pKa 4.75) has pH 6.75. The ratio HA : A⁻ = ?</p>
              <p>6.75 = 4.75 + log(A⁻/HA) → log = 2 → A⁻/HA = 100 → <strong>HA : A⁻ = 1 : 100</strong>.</p>
              <Callout kind="tip" title="What HH does (and doesn't) do">
                HH <strong>relates pH, pKa, and the ratio of conjugate base to acid</strong>. It does NOT determine molecular weight from pH, and it works fine for di- and tri-protic acids — apply it stepwise per pKa. Past exam tested this distinction.
              </Callout>
              <p>For a free α-AA with neutral R, pI = (pK₁ + pK₂)/2, with pK₁ ≈ 2 (–COOH) and pK₂ ≈ 9 (–NH₃⁺) → pI ≈ 5.5.</p>
              <p>For an AA with an ionizable R (D, E, K, R, H, C, Y), pI = average of the two pKa values that flank the zwitterion. Identify the zwitterion form first, then average the pKas above and below it.</p>
            </>
          )
        },
        {
          id: 'titration-curve',
          title: 'Titration curves & buffer regions',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e1_aa_009.jpeg"
                  alt="Glycine titration curve showing pK1, pK2, pI, and buffering regions"
                  caption="Glycine titration: two flat regions (around pK₁ ≈ 2.34 and pK₂ ≈ 9.6) — those are buffer regions. The midpoint between them (pH ≈ 5.97) is pI. At pI, glycine is a pure zwitterion and has the WORST buffering capacity (steepest part of the curve)."
                  source="Lehninger fig (BCH 335 lecture)"
                />
                <AnchorImage
                  src="e1_aa_012.jpeg"
                  alt="Histidine titration curve showing three buffering regions"
                  caption="Histidine titration: three flat regions because the imidazole R-group (pKa ~6.0) is ionizable. His is the only standard AA whose R-group buffers near physiological pH — that's why it dominates active-site chemistry (catalytic triads, Bohr-effect proton acceptor)."
                  source="Lehninger fig (BCH 335 lecture)"
                />
              </ImgGrid>
              {TitrationCurveSVG}
              <Callout kind="info" title="Past exam — when does Lys buffer best?">
                Lysine has THREE pKa values (~2, ~9, ~10.5) — three buffering regions. So a Lys solution buffers around pH 0.5–2.5 (covers pK₁), around 8–10, and around 9.5–10.5. Around the pI region (between any two pKa values), buffering is at its <em>worst</em> — that's the steep stretch.
              </Callout>
            </>
          )
        },
        {
          id: 'zwitterion',
          title: 'Predicting net charge at any pH',
          content: (
            <>
              <p>Given any AA at any pH, walk through every ionizable group:</p>
              <ol>
                <li>α-COOH (pKa ~2): at pH &gt; 2 → deprotonated (–COO⁻); at pH &lt; 2 → protonated (–COOH)</li>
                <li>α-NH₃⁺ (pKa ~9): at pH &lt; 9 → protonated (–NH₃⁺); at pH &gt; 9 → deprotonated (–NH₂)</li>
                <li>R-group: apply pH-vs-pKa rule with the R-group pKa</li>
                <li>Sum the charges</li>
              </ol>
              <Table
                dense
                headers={["AA", "R-group pKa", "R-group charge at pH 7"]}
                rows={[
                  ["Asp / Glu", "~3.9 / ~4.1", "−1 (deprotonated)"],
                  ["His", "~6.0", "near neutral; partial +"],
                  ["Cys", "~8.3", "0 (still –SH)"],
                  ["Tyr", "~10.5", "0 (still –OH)"],
                  ["Lys", "~10.5", "+1 (still –NH₃⁺)"],
                  ["Arg", "~12.5", "+1 (still guanidinium⁺)"],
                ]}
              />
              <Callout kind="warn" title="Citric acid past-exam (3 carboxylates, pKas 3.1, 4.8, 6.4 at pH 4.8)">
                pH 4.8 ≫ pKa1 (3.1) → fully deprotonated there. pH 4.8 ≪ pKa3 (6.4) → fully protonated there. pH = pKa2 → 50/50 at the middle group. So: "essentially all citric acid molecules are deprotonated at one position, fully protonated at one position, and 50%-protonated at the middle position."
              </Callout>
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
          title: 'Peptide bond formation = condensation; cleavage = hydrolysis',
          content: (
            <>
              <Theme>The peptide bond is a <strong>condensation</strong> (loss of water) between the α-COOH of one AA and the α-NH₂ of the next. For an n-residue peptide, <strong>(n − 1)</strong> waters are released.</Theme>
              <AnchorImage
                src="e1_aa_031.png"
                alt="Two amino acids forming a dipeptide via condensation, releasing one water"
                caption="Peptide-bond formation: the α-carboxyl of AA1 attacks the α-amino of AA2, releasing one water (the carboxyl OH and an amino H). The new peptide bond is between the carbonyl C of AA1 and the amide N of AA2. Cleavage is the reverse — hydrolysis, water IN."
                source="BCH 335 lecture (Wk 2 Ch 3)"
              />
              <Callout kind="info" title="Past exam — 'What atoms participate?'">
                "A peptide bond is formed between (a) the alpha-N of one amino acid and the carbonyl C of another, (b) ..." → answer is <strong>(a)</strong>. NOT alpha-C to alpha-C; NOT alpha-N to alpha-N.
              </Callout>
              <Callout kind="info" title="Past exam — 'Breaking a peptide bond is an example of:'">
                Hydrolysis (water added across the C–N bond). NOT condensation (that's formation), NOT redox.
              </Callout>
            </>
          )
        },
        {
          id: 'peptide-bond-planar',
          title: 'The peptide bond is planar — no rotation around C–N',
          content: (
            <>
              <AnchorImage
                src="e1_aa_011.png"
                alt="Cis and trans peptide bond conformations"
                caption="Resonance gives the peptide C–N bond ~40% double-bond character → six atoms (Cα–C(=O)–N(–H)–Cα) are coplanar and CANNOT rotate around C–N. Trans (left) is ~1000× more common than cis (right). Proline is the main exception — cis-Pro reaches ~10–30% because the Pro ring removes the Cα–H steric clash."
                source="BCH 335 lecture (Wk 2 Ch 3)"
              />
              <Callout kind="info" title="Past exam — 'The plane drawn behind the peptide bond indicates:'">
                <strong>Absence of rotation around the C–N bond because of its partial double-bond character.</strong> NOT free rotation; NOT rotation around the α-carbon (which IS free); NOT steric hindrance from C=O.
              </Callout>
              <p>What rotates freely:</p>
              <ul>
                <li><strong>φ (phi)</strong>: rotation around the N–Cα bond</li>
                <li><strong>ψ (psi)</strong>: rotation around the Cα–C(carbonyl) bond</li>
                <li><strong>ω (omega)</strong>: rotation around the peptide C–N — locked at 180° (trans) or 0° (cis)</li>
              </ul>
              <p>Allowed φ/ψ combinations cluster into the α-helix and β-sheet regions of a Ramachandran plot. Glycine has the loosest range (no R-group sterics); proline the tightest.</p>
            </>
          )
        }
      ]
    },
    {
      id: 'protein-structure',
      title: '§5 Levels of Protein Structure',
      subtitle: '1° → 2° → 3° → 4°; what bonds hold each level',
      blocks: [
        {
          id: 'four-levels',
          title: 'The four levels and their stabilizing forces',
          content: (
            <>
              <AnchorImage
                src="e1_mod4_027.jpeg"
                alt="Four levels of protein structure: primary, secondary, tertiary, quaternary"
                caption="The hierarchical view: amino-acid sequence (primary) folds into local helices/sheets (secondary), which pack into a 3D fold (tertiary). Multi-chain proteins assemble into quaternary structure. Critically: 1° is held by COVALENT peptide bonds; 2°/3°/4° are mostly NON-COVALENT (H-bonds, hydrophobic effect, ionic, vdW), with disulfides as the covalent exception."
                source="Lehninger fig (BCH 335 lecture)"
              />
              <Theme>1° = covalent peptide bonds. 2°–4° = mostly <strong>non-covalent</strong> (H-bonds, hydrophobic effect, ionic, van der Waals) <strong>+ disulfides</strong> when covalent stabilization is needed.</Theme>
              <Table
                headers={["Level", "What it is", "Held by"]}
                rows={[
                  ["1°", "AA sequence written N→C", "covalent peptide bonds"],
                  ["2°", "α-helix, β-sheet, β-turn, random coil", "backbone H-bonds (C=O···H–N)"],
                  ["3°", "full 3D fold of one polypeptide", "hydrophobic effect (dominant), H-bonds, ionic (salt bridges), vdW, disulfides"],
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
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e1_mod4_010.jpeg"
                  alt="Right-handed α-helix showing 3.6 residues per turn and i, i+4 hydrogen bonding"
                  caption="The right-handed α-helix: ~3.6 residues per turn, pitch 5.4 Å. The KEY backbone H-bond pattern is C=O of residue i ↔ N–H of residue i+4 (4 residues away in sequence). R-groups project OUTWARD from the helix axis."
                />
                <AnchorImage
                  src="e1_mod4_009.png"
                  alt="α-helix dipole with positive N-terminus and negative C-terminus"
                  caption="The helix macrodipole: aligned backbone amides give the N-terminus a partial POSITIVE charge and the C-terminus a partial NEGATIVE charge. To stabilize: place ACIDIC residues (Asp/Glu) at the N-terminus and BASIC residues (Lys/Arg) at the C-terminus. Past-exam tested AA placement."
                />
              </ImgGrid>
              <ul>
                <li>Right-handed; ~3.6 residues/turn; pitch 5.4 Å.</li>
                <li>Backbone C=O of residue <em>i</em> H-bonds to N–H of residue <em>i + 4</em>.</li>
                <li>R-groups project outward.</li>
                <li><strong>Helix breakers</strong>: <strong>Pro</strong> (kink) and <strong>Gly</strong> (too flexible).</li>
              </ul>
            </>
          )
        },
        {
          id: 'beta-sheet',
          title: 'β-sheets and β-turns',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e1_mod4_013.jpeg"
                  alt="Parallel β-sheet showing strands running same direction"
                  caption="Parallel β-sheet: strands run the same direction (N→C aligned). H-bonds between strands are slightly bent → a bit less stable than antiparallel. Strand spacing ~6.5 Å."
                />
                <AnchorImage
                  src="e1_mod4_014.jpeg"
                  alt="Antiparallel β-sheet showing strands running opposite directions"
                  caption="Antiparallel β-sheet: strands run opposite directions. H-bonds are STRAIGHT (collinear) → most stable form of β-sheet. Strand spacing ~7 Å. R-groups alternate above and below the sheet plane."
                />
              </ImgGrid>
              <ul>
                <li>β-strands aligned side by side; H-bonds form <strong>between</strong> strands (NOT within a single strand).</li>
                <li>R-groups alternate above/below the sheet plane.</li>
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
              <Theme>Folding is driven by the <strong>hydrophobic effect</strong> — burying nonpolar R-groups <em>increases</em> the entropy of surrounding water. This is an <em>entropic</em> drive (ΔS&gt;0 for water), not enthalpic.</Theme>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e1_ch12_036.jpeg"
                  alt="Hydrophobic surfaces excluding water with structured cage"
                  caption="Before folding: water forms an ordered, cage-like 'clathrate' shell around exposed hydrophobic surfaces (low water entropy). When two hydrophobic patches come together and exclude water, those caged waters return to bulk → BIG entropy gain for the solvent."
                />
                <AnchorImage
                  src="e1_ch12_037.png"
                  alt="Two hydrophobic surfaces coming together to exclude water"
                  caption="After hydrophobic collapse: hydrophobic groups buried, water released. Net entropy of the system rises despite the protein itself becoming more ordered. This drives the hydrophobic CORE of all globular proteins."
                />
              </ImgGrid>
              <Callout kind="info" title="Past exam — thermodynamics of folding">
                <ul>
                  <li>"Unfolded protein has high entropy due to disordered shape AND high enthalpy because it has fewer stabilizing interactions" → <strong>TRUE</strong></li>
                  <li>"Folding is not spontaneous because enthalpy increases (heat absorbed) when noncovalent interactions form" → <strong>FALSE</strong> (forming H-bonds/vdW <em>releases</em> heat)</li>
                  <li>"Aggregation of hydrophobic regions decreases the entropy of surrounding water" → <strong>FALSE</strong> (it INCREASES water entropy)</li>
                </ul>
              </Callout>
            </>
          )
        },
        {
          id: 'asp-his-saltbridge',
          title: 'Salt-bridge worked example: Asp–His',
          content: (
            <>
              <p>Past-exam scenario: at pH 5.0, an Asp–His ion pair contributes ~15 kJ/mol of favorable folding free energy due to a salt bridge.</p>
              <ul>
                <li><strong>At pH 1.0</strong>: salt bridge breaks. Asp's R-group is protonated (–COOH, neutral). No charge → no electrostatic attraction with His⁺. Folding LOSES that 15 kJ/mol.</li>
                <li><strong>At pH 8.07</strong>: salt bridge also breaks. Now His is mostly deprotonated (neutral imidazole), so the partner charge is gone. Same outcome: no salt bridge.</li>
                <li>The salt bridge only "works" near pH 5–7, where Asp is −1 and His is +1.</li>
              </ul>
              <Callout kind="warn" title="Why this matters for the final">
                Salt bridges flip ON/OFF with pH. If a question asks why a protein denatures at extreme pH, the salt-bridge / R-group-protonation argument is often the answer for moderate pH excursions; H-bonds/hydrophobic for heat; disulfides only for reducing agents.
              </Callout>
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
                  ["Detergents (SDS)", "hydrophobic interactions specifically", "coats hydrophobic surfaces with amphipathic micelles"],
                  ["Urea / Gdn-HCl", "H-bonds + hydrophobic", "competes for H-bond donors and acceptors"],
                  ["β-mercaptoethanol / DTT / TCEP", "DISULFIDES specifically", "reduces –S–S– to 2 –SH"],
                ]}
              />
              <Callout kind="warn" title="Past exam — insulin-receptor question">
                "Which would specifically disrupt hydrophobic interactions in the receptor?" → <strong>Detergents</strong>. Heat is broader; pH targets ionic; reducing agents target disulfides.
              </Callout>
            </>
          )
        },
        {
          id: 'quaternary',
          title: 'Quaternary structure',
          content: (
            <>
              <ul>
                <li>≥ 2 polypeptide chains held together by the same non-covalent interactions as 3° (between the chains).</li>
                <li>Examples: Hb (α₂β₂), insulin receptor (homodimer with disulfide-linked TKD), antibodies.</li>
              </ul>
              <Callout kind="info" title="Past exam — what's at the dimer interface in the insulin receptor?">
                "Which is an example of quaternary structure in the insulin receptor?" → <strong>Tyr-144 dipole-ion interaction with Glu-398 between two monomers</strong> (interaction across chains = 4°). Backbone H-bonds within an α-helix on one chain are 2°/3°. Asp–Lys R-group interactions in the FnIII domain on one chain are 3°, not 4°.
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
              <Theme>Mb is monomeric → hyperbolic O₂ binding. Hb is α₂β₂ → cooperativity → sigmoidal curve. Cooperativity exists because subunits "talk" to each other; Mb has no neighbors to talk to.</Theme>
              {HbCurveSVG}
              <Callout kind="info" title="Past exam — primary vs tertiary structure">
                "Myoglobin and one (monomeric) subunit of hemoglobin have ___" → <strong>different primary structures, similar tertiary structures</strong>. Sequence identity is moderate (~30%); both fold to the conserved globin fold (8 α-helices around heme).
              </Callout>
            </>
          )
        },
        {
          id: 'cooperativity',
          title: 'Cooperativity — T state ↔ R state',
          content: (
            <>
              <ul>
                <li><strong>T (tense)</strong> state: low affinity for O₂. Stabilized by salt bridges between subunits.</li>
                <li><strong>R (relaxed)</strong> state: high affinity. The first O₂ binding pulls the heme iron into the plane of the porphyrin, breaking salt bridges and triggering T → R.</li>
                <li>Each subsequent O₂ binds easier than the last → sigmoidal curve.</li>
              </ul>
              <Callout kind="info" title="Past exam — what contributes DIRECTLY to O₂ affinity?">
                The <strong>heme nitrogens (and the proximal His)</strong> hold the Fe²⁺ that actually binds O₂. The distal His H-bonds the bound O₂ to stabilize it. <strong>Both</strong> directly affect affinity. Past exam expected: 'Both A (heme nitrogen ligand) and B (distal protonated His)'. Fe³⁺ (methemoglobin) cannot bind O₂.
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
                  ["BPG (2,3-bisphosphoglycerate)", "central cavity of T-state Hb (Lys/His)", "stabilizes T → ↓O₂ affinity → unloads in tissues"],
                  ["CO₂", "N-terminus → forms carbamate", "stabilizes T (heterotropic, negative allostery)"],
                  ["H⁺ (low pH)", "His residues", "Bohr effect: ↓pH → ↓O₂ affinity → release in working tissue"],
                  ["CO (carbon monoxide)", "Fe²⁺ heme", "competes with O₂; binds 200× tighter; cooperatively poisons O₂ release on remaining sites. Past-exam 'pick TWO': 'binds Fe²⁺' AND 'binds cooperatively, making O₂ release more difficult'."],
                ]}
              />
              <Callout kind="tip" title="High altitude / chronic hypoxia">
                ↑BPG → curve right-shift → Hb gives up O₂ more easily in tissue despite low pO₂. Physician orders 12 hr later: "What happens to BPG?" → BPG ↑, Hb affinity ↓.
              </Callout>
              <Callout kind="info" title="Past exam — CO₂ binding the N-terminus">
                "CO₂ binding to hemoglobin is considered an example of ___" → <strong>heterotropic, negative allostery</strong>. Heterotropic because CO₂ ≠ O₂; negative because affinity decreases.
              </Callout>
            </>
          )
        },
        {
          id: 'hb-variants',
          title: 'Hb variants — Hb-Providence vs Hb-Barcelona',
          content: (
            <>
              <ul>
                <li><strong>Hb-Providence</strong>: a key Lys (which normally binds BPG via salt bridge) → Asn. BPG can't bind well → loses its T-stabilizing effect → curve shifts <em>left</em> → <strong>↑O₂ affinity</strong>.</li>
                <li><strong>Hb-Barcelona</strong>: His → Asp at α94 — Asp 94 forms a NEW T-stabilizing salt bridge → curve shifts <em>right</em> → <strong>↓O₂ affinity</strong>.</li>
              </ul>
              <Callout kind="warn" title="Past exam — increased affinity?">
                "Which would show <em>increased</em> affinity for O₂?" → <strong>Hb-Providence only</strong>. Barcelona stabilizes T → lower affinity, not higher.
              </Callout>
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
              <Callout kind="tip" title="Past exam — migration on a cation exchanger">
                "Of three peptides, which migrates <em>most slowly</em> (binds tightest) on a cation-exchange column at pH 8.22?" → the one with <strong>most positive charge</strong> at that pH. Count K, R, (and H if relevant) and subtract D, E.
              </Callout>
              <Callout kind="info" title="Past exam — When IEX won't work">
                "p73 has pI 8.22; you ran column at pH 8.22 — why won't IEX purify it?" → at pH = pI, the protein has net 0 charge, so no advantage over any other protein → won't bind selectively.
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
                <li><strong>His-tag affinity</strong>: 6×His binds Ni²⁺-NTA resin; eluted with imidazole. Single-step &gt;95% purity. Past-exam choice for 'most useful' purification.</li>
                <li><strong>2D NMR / x-ray crystallography</strong>: determine 3D coordinates atom-by-atom. Tandem MS = mass info / sequence. CD = secondary-structure content (e.g., %α-helix vs β-sheet).</li>
              </ul>
              <Callout kind="info" title="Past exam — full 3D coordinates?">
                "Which method can determine the COMPLETE 3D coordinates of atoms?" → <strong>2D NMR</strong> (or x-ray crystallography). Tandem MS gives mass, not 3D positions; CD gives secondary-structure content; SDS-PAGE gives molecular weight only.
              </Callout>
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
      { title: '20 AAs → 4 buckets + special quartet', desc: 'Nonpolar / polar uncharged / acidic / basic, plus Gly (small), Pro (rigid), Cys (S–S), Met (start). Trp = UV; Ser/Thr/Tyr = phosphorylation; Asn = N-glycosylation.' }
    ],
    vocab: [
      { term: 'Zwitterion', def: 'AA with simultaneous +/− groups, net charge 0; dominant species at pH ≈ pI.' },
      { term: 'pI', def: 'pH where net charge = 0; equals the average of the two pKa values flanking the zwitterion form.' },
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
      { name: 'Trans peptide bond default', desc: '~1000× more common than cis; proline is the main exception.' },
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
      explanation: 'Lipids are the only biomolecule class defined by a physical property (low water solubility / hydrophobicity) rather than a polymer backbone.',
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
      explanation: 'Tryptophan has the highest molar extinction coefficient at 280 nm (~5500 M⁻¹cm⁻¹). Tyr ~1500; Phe absorbs near 260; His does not absorb at 280.',
      difficulty: 'E'
    },
    {
      q: 'For an AA with pK₁ = 2.35 and pK₂ = 9.78, at what pH would half the molecules have a net positive charge and the other half be neutral?',
      choices: ['pH = 2.35', 'pH = 6.07', 'pH = 9.78', 'Not enough information'],
      correct: 0,
      explanation: 'When pH = pKa of the α-carboxyl, half are −COOH (net +1) and half are −COO⁻ (net 0). That occurs at pH 2.35.',
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
      explanation: '6×His binds Ni²⁺-NTA resin selectively; elute with imidazole.',
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
      explanation: 'The Fe²⁺ binds O₂ directly (proximal His + porphyrin nitrogens hold Fe), and the distal His H-bonds bound O₂. Fe³⁺ (methemoglobin) cannot bind O₂.',
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
      explanation: 'CO competes for Fe²⁺ heme binding (much tighter than O₂) AND its bound Hb behaves like high-affinity Hb that doesn\'t release O₂ easily.',
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
