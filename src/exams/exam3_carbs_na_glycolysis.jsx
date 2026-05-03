import React from 'react';
import { Callout, Table, Theme, SvgFrame, AnchorImage, ImgGrid } from '../components/Visual.jsx';

// Pathway-style SVG kept for the glycolysis cheatsheet — gives a quick at-a-glance summary
const GlycolysisOverviewSVG = (
  <SvgFrame width={460} height={290} label="Glycolysis: priming (steps 1–5, costs 2 ATP) → cleavage → payoff (steps 6–10, makes 4 ATP, 2 NADH). Net per glucose: 2 pyruvate + 2 ATP + 2 NADH.">
    <text x="20" y="22" fontSize="12" fill="#0f172a" fontWeight="700">Glycolysis (10 steps)</text>
    {[
      ['1. HK', 'glucose → G6P', 'ATP → ADP', '#dc2626', 'irreversible'],
      ['2. PGI', 'G6P → F6P', 'isomerase', '#475569', ''],
      ['3. PFK-1', 'F6P → F1,6BP', 'ATP → ADP', '#dc2626', 'irreversible / committed'],
      ['4. Aldolase', 'F1,6BP → DHAP + G3P', 'cleavage', '#475569', ''],
      ['5. TPI', 'DHAP ⇌ G3P', 'isomerase', '#475569', ''],
      ['6. GAPDH', 'G3P → 1,3-BPG', '+ NAD⁺ → NADH', '#16a34a', 'redox'],
      ['7. PGK', '1,3-BPG → 3-PG', 'ADP → ATP', '#0284c7', 'subst. lvl phos.'],
      ['8. PGM', '3-PG → 2-PG', 'isomerase', '#475569', ''],
      ['9. Enolase', '2-PG → PEP', 'water out', '#475569', ''],
      ['10. PK', 'PEP → pyruvate', 'ADP → ATP', '#dc2626', 'irreversible'],
    ].map((row, i) => (
      <g key={i} transform={`translate(20, ${36 + i * 24})`}>
        <text x="0" y="12" fontSize="10" fill={row[3]} fontWeight="700">{row[0]}</text>
        <text x="80" y="12" fontSize="10" fill="#0f172a">{row[1]}</text>
        <text x="240" y="12" fontSize="10" fill={row[3]}>{row[2]}</text>
        <text x="340" y="12" fontSize="9" fill={row[3]}>{row[4]}</text>
      </g>
    ))}
  </SvgFrame>
);

const exam = {
  id: 3,
  title: 'Exam 3 — Carbs · Nucleic Acids · Glycolysis · Regulation',
  subtitle: 'Sugar structures · DNA/RNA & PCR/cloning · bioenergetics · glycolysis · GNG · glycogen · regulation',
  sections: [
    {
      id: 'carbs',
      title: '§1 Carbohydrates — structure & nomenclature',
      blocks: [
        {
          id: 'mono',
          title: 'Monosaccharides: aldoses, ketoses, D vs L',
          content: (
            <>
              <Theme>Sugars are <strong>polyhydroxy aldehydes (aldoses) or ketones (ketoses)</strong>. The "D" descriptor depends on the configuration of the chiral carbon FURTHEST from the carbonyl (C5 in glucose).</Theme>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e3_carbs_039.jpeg"
                  alt="D-aldoses family tree from glyceraldehyde through hexoses"
                  caption="The D-aldose family tree — from D-glyceraldehyde (3 C) through tetroses, pentoses (D-ribose), and hexoses (D-glucose, D-mannose, D-galactose). Each step doubles the number of stereoisomers (2ⁿ⁻²). All D-sugars share the same configuration at the chiral C farthest from the carbonyl."
                  source="Lehninger fig (BCH 335 lecture, Ch 7)"
                />
                <AnchorImage
                  src="e3_carbs_040.jpeg"
                  alt="D-mannose, D-glucose, and D-galactose showing C2 and C4 epimers"
                  caption="EPIMERS: D-mannose differs from D-glucose at C2 (C2 epimer); D-galactose differs from D-glucose at C4 (C4 epimer). Same molecular formula, differ at exactly ONE non-anomeric chiral center. Past exam: circle the two structures that are epimers of each other."
                />
              </ImgGrid>
              <ul>
                <li><strong>D-sugars</strong> dominate biology. <strong>L-sugars</strong> are rare (e.g., L-fucose, L-iduronate in heparin).</li>
                <li>Carbon count: triose (3), tetrose (4), pentose (5: ribose, deoxyribose), hexose (6: glucose, fructose, galactose, mannose).</li>
                <li>Linear → cyclic via internal hemiacetal (aldose) or hemiketal (ketose). Cyclization creates a new chiral center at C1 — the <strong>anomeric carbon</strong>.</li>
              </ul>
              <AnchorImage
                src="e3_carbs_002.jpeg"
                alt="Hemiacetal and hemiketal formation from aldose and ketose"
                caption="Cyclization mechanism. An aldose's carbonyl C reacts with a hydroxyl elsewhere on the chain → HEMIACETAL (cyclic, with both OR and OH on C1). A ketose makes a HEMIKETAL. The ring O comes from the chain hydroxyl. The new chiral center at the former carbonyl C = the anomeric carbon."
                source="Lehninger fig (BCH 335 lecture)"
              />
              <Callout kind="tip" title="α vs β anomers">
                After cyclization, the anomeric –OH can point DOWN (α) or UP (β) relative to the CH₂OH at C5. Past exam: 'Draw cyclic α-D-ribose' → furanose ring (5-membered, O between C1 and C4); α anomeric –OH points down; C5-CH₂OH points up (D).
              </Callout>
            </>
          )
        },
        {
          id: 'epimers',
          title: 'Epimers, anomers, & enantiomers — the vocabulary',
          content: (
            <>
              <Table
                headers={["Pair", "Differ at", "Note"]}
                rows={[
                  ["Glucose / Mannose", "C2", "C2 epimers"],
                  ["Glucose / Galactose", "C4", "C4 epimers"],
                  ["α-glucose / β-glucose", "C1 (anomeric only)", "ANOMERS, not epimers"],
                  ["D-glucose / L-glucose", "all chiral centers", "Enantiomers (mirror images)"]
                ]}
              />
              <Callout kind="info" title="Past exam pattern">
                "Circle the two structures that are EPIMERS of each other" — find the pair differing at exactly one non-anomeric chiral C. C1 (anomeric) differences make ANOMERS. All-chiral-C differences make enantiomers.
              </Callout>
            </>
          )
        },
        {
          id: 'glycosidic',
          title: 'Glycosidic bonds & disaccharides',
          content: (
            <>
              <Theme>A glycosidic bond joins the anomeric C of one sugar to a hydroxyl (or another anomeric C) of another. Notation: <strong>α/β-D-Sugar1-(C1→C4)-Sugar2</strong>.</Theme>
              <AnchorImage
                src="e3_carbs_004.jpeg"
                alt="Maltose formation showing alpha 1,4 glycosidic linkage between two glucose units"
                caption="Maltose: two α-D-glucose units linked α(1→4). One glucose contributes its anomeric C1; the second contributes its C4 hydroxyl. The product still has a FREE anomeric C on the right glucose → maltose is a REDUCING sugar."
                source="Lehninger fig (BCH 335 lecture)"
              />
              <Table
                headers={["Disaccharide", "Components", "Linkage", "Reducing?"]}
                rows={[
                  ["Maltose", "Glc + Glc", "α(1→4)", "yes (free anomeric C)"],
                  ["Lactose", "Gal + Glc", "β(1→4)", "yes"],
                  ["Sucrose", "Glc + Fru", "α,β(1↔2)", "NO — both anomeric carbons used"],
                  ["Cellobiose", "Glc + Glc", "β(1→4)", "yes"]
                ]}
              />
              <Callout kind="warn" title="Past exam — sucrose is non-reducing">
                Both anomeric carbons are tied up in the α,β-(1↔2) glycosidic bond → no free hemiacetal → cannot reduce Cu²⁺ in Fehling's. Past exam true/false: "sucrose and lactose each have one glycosidic bond" — TRUE (both have exactly one).
              </Callout>
            </>
          )
        },
        {
          id: 'polysacch',
          title: 'Polysaccharides — storage & structural',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e3_carbs_009.jpeg"
                  alt="Comparison of homopolysaccharides and heteropolysaccharides, branched and unbranched"
                  caption="Polysaccharide architectures: HOMOPOLY (one sugar type) vs HETEROPOLY; BRANCHED vs UNBRANCHED. Glycogen and amylopectin are branched homopoly (α-glucose). Cellulose is unbranched homopoly (β-glucose). Heparin is unbranched HETEROpoly (sulfated GAG)."
                  source="Lehninger fig (BCH 335 lecture)"
                />
                <AnchorImage
                  src="e3_carbs_012.jpeg"
                  alt="Structure of amylose and amylopectin showing branching"
                  caption="Starch components: amylose (linear, α-1,4) and amylopectin (branched, α-1,4 + α-1,6 every ~24–30 residues). Glycogen looks like amylopectin but more highly branched (every ~8–12) — fast mobilization."
                />
              </ImgGrid>
              <AnchorImage
                src="e3_carbs_014.jpeg"
                alt="Cellulose structure with beta 1,4 glycosidic bonds and alternating glucose orientation"
                caption="Cellulose: β-D-glucose units, β(1→4) linked. The β-linkage forces ALTERNATING orientation of glucose monomers, allowing flat, rigid sheets stabilized by H-bonds → fibrous, insoluble. Same logic for chitin (β-(1→4)-GlcNAc). Past exam: 'cellulose is most similar in solubility to ___' → CHITIN."
                source="BCH 335 lecture (Ch 7)"
              />
              <Table
                headers={["Polymer", "Monomer", "Linkage(s)", "Branched?", "Role"]}
                rows={[
                  ["Glycogen", "α-D-glucose", "α(1→4) main, α(1→6) branches", "highly (every ~8–12)", "animal energy storage (liver/muscle)"],
                  ["Starch (amylose)", "α-D-glucose", "α(1→4)", "no", "plant storage"],
                  ["Starch (amylopectin)", "α-D-glucose", "α(1→4) + α(1→6)", "yes (every ~25)", "plant storage"],
                  ["Cellulose", "β-D-glucose", "β(1→4)", "no", "plant cell wall — fibrous, insoluble"],
                  ["Chitin", "β-D-GlcNAc", "β(1→4)", "no", "exoskeleton/fungal walls"],
                  ["Dextran", "α-D-glucose", "α(1→6) main + branches", "yes", "bacterial; dental plaque"]
                ]}
              />
              <Callout kind="info" title="Past exam — glycogen vs amylopectin yields what monomer?">
                Both yield <strong>monomeric glucose</strong> on complete hydrolysis. Glycogen branches every ~8–12 (fast mobilization), amylopectin every ~25. Both "complete hydrolysis yields monomers of?" → glucose.
              </Callout>
            </>
          )
        },
        {
          id: 'gags',
          title: 'GAGs & glycoproteins',
          content: (
            <>
              <AnchorImage
                src="e3_carbs_028.png"
                alt="Glycoprotein cell receptors on plasma membrane recognizing extracellular molecules"
                caption="Glycoprotein cell receptors: surface carbohydrates serve as identity tags for cells, viruses, toxins, hormones. The N- or O-linked glycans determine specificity (e.g., ABO blood groups, HIV gp120 → CD4 + glycan recognition)."
                source="BCH 335 lecture (Ch 7)"
              />
              <ul>
                <li><strong>Glycosaminoglycans (GAGs)</strong>: long, unbranched, anionic disaccharide repeats. Examples: heparin/heparan sulfate (anticoagulant), chondroitin sulfate (cartilage), hyaluronic acid (joints).</li>
                <li><strong>Heparin</strong> is an unbranched glycosaminoglycan that regulates blood-vessel formation/clotting. Past exam fill: "___ is an unbranched glycosaminoglycan that regulates formation of blood vessels." → <strong>heparin / heparan sulfate</strong>.</li>
                <li><strong>Agar</strong> is a heteropolysaccharide found in some cell walls and used as microbiology growth medium.</li>
                <li><strong>Glycoproteins</strong>: O-linked through Ser/Thr; N-linked through Asn. Past exam: "Proteins post-translationally modified with covalently linked carbohydrates are called ___" → <strong>glycoproteins</strong>.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      id: 'na',
      title: '§2 Nucleotides, Nucleic Acids & Lab Methods',
      blocks: [
        {
          id: 'nucleotide',
          title: 'Nucleotide structure',
          content: (
            <>
              <ul>
                <li><strong>Nucleoside</strong> = base + sugar. <strong>Nucleotide</strong> = base + sugar + phosphate(s).</li>
                <li>Bases: <strong>purines</strong> A, G (two rings). <strong>Pyrimidines</strong> C, T, U (one ring).</li>
                <li>RNA: ribose + A, G, C, U. DNA: deoxyribose + A, G, C, T.</li>
                <li>The 2′-OH on ribose makes RNA more reactive (base-catalyzed hydrolysis).</li>
              </ul>
              <Callout kind="info" title="Past exam — UTP vs dUTP">
                A nucleoside triphosphate where the base is uracil = UTP (RNA building block). Adding the SAME base U to deoxyribose makes dUTP — present in DNA only as a synthesis intermediate (rapidly removed). Mature DNA uses T, not U. Test: "UTP is/are: standard substrate for a PCR reaction" → FALSE; "standard component of mature DNA" → FALSE.
              </Callout>
            </>
          )
        },
        {
          id: 'na-features',
          title: 'Nucleic acid structure & features (true/false trap pile)',
          content: (
            <>
              <Table
                headers={["Statement", "True/False", "Why"]}
                rows={[
                  ["Connected by 3′,5′-phosphodiester bonds; strands held by H-bonds", "TRUE", "canonical Watson–Crick"],
                  ["A always equals T (and G = C) in dsDNA", "TRUE", "Chargaff's rule for dsDNA"],
                  ["DNA is a left-handed helix (Z-DNA)", "FALSE", "B-DNA (cellular form) is right-handed"],
                  ["The two strands of dsDNA are antiparallel", "TRUE", "5′→3′ on one, 3′→5′ on the other"],
                  ["A and T pair with two H-bonds; G and C with three", "TRUE", "GC pairing more stable → higher Tm"],
                  ["Purines and pyrimidines absorb UV at 260 nm", "TRUE", "Used to quantify NAs"],
                  ["Free purines/pyrimidines float in healthy cell cytoplasm", "FALSE", "Almost all are part of nucleotides; free bases scavenged"]
                ]}
              />
              <Callout kind="info" title="Past exam — base composition for ssRNA">
                In ssRNA, base composition need NOT satisfy A=U, G=C (those are dsDNA Chargaff rules). Any composition that excludes T and totals 100% is allowed → "all of these are correct."
              </Callout>
            </>
          )
        },
        {
          id: 'thermocycler',
          title: 'PCR thermocycler — what is the buffer for?',
          content: (
            <>
              <ul>
                <li>Steps: <strong>denature</strong> (~95 °C) → <strong>anneal</strong> (~55 °C) → <strong>extend</strong> (~72 °C, optimum for Taq).</li>
                <li>Reagents: thermostable DNA polymerase (Taq), forward + reverse primers, dNTPs, Mg²⁺, template, buffer with salts &amp; detergent.</li>
              </ul>
              <Callout kind="info" title="Past exam: 'Forward and reverse primers, polymerase, template, pH 8.8 buffer, water — which mistake?'">
                Forgot the <strong>dNTPs</strong>. Without dNTPs the polymerase has nothing to extend with.
              </Callout>
              <p>Other key facts:</p>
              <ul>
                <li>Optimal extension at <strong>72 °C</strong>; pH ~8.8 (Taq optimum).</li>
                <li>Each cycle <em>doubles</em> the number of templates (exponential).</li>
                <li>Past exam: "Salt influences melting temperature of dsDNA how?" — <strong>more salt = higher Tm</strong> because cations shield the negatively charged phosphate backbone, allowing strands to stack closer.</li>
              </ul>
            </>
          )
        },
        {
          id: 'cloning',
          title: 'Plasmids, vectors, restriction enzymes & cloning',
          content: (
            <>
              <Callout kind="tip" title="Past exam — vector requirements">
                "Which is required for a plasmid vector to be expressed at two different pHs?" → <strong>two promoters with different pH dependencies</strong>.
              </Callout>
              <ul>
                <li>Plasmids should be <strong>SMALLER</strong> than the bacterial genome to be retained efficiently.</li>
                <li>To clone a gene into a single restriction site, the site must be a <strong>palindromic</strong> sequence (reads the same 5′→3′ on either strand). Example: <strong>GAATTC / CTTAAG</strong> (EcoRI).</li>
                <li>Past-exam progression order: cut vector with restriction enzymes → confirm ligation by gel electrophoresis → confirm sequence by Sanger.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      id: 'bioenergetics',
      title: '§3 Bioenergetics — ΔG, ΔG°′, & coupled reactions',
      blocks: [
        {
          id: 'dg-eqs',
          title: 'ΔG, ΔG°′, K_eq — and how to use them',
          content: (
            <>
              <Theme>ΔG° = standard free-energy change (1 M, pH 7, 25 °C). ΔG = actual cellular free-energy change at real concentrations: <strong>ΔG = ΔG° + RT ln Q</strong>, where Q = [products]/[reactants].</Theme>
              <ul>
                <li>ΔG &lt; 0 → spontaneous in the forward direction.</li>
                <li>ΔG = 0 → equilibrium.</li>
                <li>ΔG &gt; 0 → reaction goes in reverse.</li>
                <li>An enzyme cannot make ΔG &lt; 0; it only makes the kinetics fast.</li>
              </ul>
              <Callout kind="info" title="Past exam — 'A → B has ΔG° = +18 kJ/mol; reaction started with 10 mM A. After 5 hr...'">
                Reaction starts with [A]/[B] = ∞; ΔG° is +18 kJ/mol. Calculate actual ΔG: ΔG = ΔG° + RT ln([B]/[A]). Initially [B]≈0 → ln(small) is very negative, can drive ΔG below 0. So <strong>"the reaction has started, even though products will not exceed reactants"</strong> if final ΔG is barely &lt; 0.
              </Callout>
              <p>Past-exam example: "3-PG → 2-PG (ΔG° = +4.6 kJ/mol)" + "2-PG → PEP (ΔG° = +1.8 kJ/mol)" → overall 3-PG → PEP, ΔG° = +6.4 kJ/mol.</p>
            </>
          )
        },
        {
          id: 'high-energy',
          title: 'Why ATP — and other high-energy compounds',
          content: (
            <>
              <Table
                headers={["Compound", "ΔG° hydrolysis", "Note"]}
                rows={[
                  ["PEP", "−61.9 kJ/mol", "highest in glycolysis; drives PK"],
                  ["1,3-BPG", "−49.4 kJ/mol", "drives PGK (substrate-level phos)"],
                  ["Phosphocreatine", "−43 kJ/mol", "muscle ATP buffer"],
                  ["ATP → ADP", "−30.5 kJ/mol", "central energy currency"],
                  ["Glucose-6-P", "−13.8 kJ/mol", "low-energy phosphoester"],
                  ["3-phosphoglycerate", "−12 to −16 kJ/mol", "low-energy"]
                ]}
              />
              <Callout kind="tip" title="Past exam — 1,3-BPG → 3-PG calculation">
                Hydrolysis of 1,3-BPG releases ~−49.4 kJ/mol. ATP hydrolysis releases ~−30.5 kJ/mol. So ΔG° for "1,3-BPG + ADP → 3-PG + ATP" = (−49.4) − (−30.5) = <strong>~−18.9 kJ/mol</strong>. Energetically very favorable.
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'glycolysis',
      title: '§4 Glycolysis — 10 steps and what controls them',
      blocks: [
        {
          id: 'overview',
          title: 'Overview & net equation',
          content: (
            <>
              <Theme>Glucose + 2 NAD⁺ + 2 ADP + 2 P_i → 2 pyruvate + 2 NADH + 2 H⁺ + 2 ATP + 2 H₂O. Cytosolic. Anaerobic-capable.</Theme>
              <AnchorImage
                src="e3_gng_006.jpeg"
                alt="Glycolysis pathway with G6P branching to PPP and pentose phosphates"
                caption="Glycolysis trunk + branches: glucose → G6P (HK), then G6P branches into the pentose phosphate pathway (PPP) for NADPH + ribose-5-P, OR continues into glycolysis. Important to remember PPP is a parallel cytosolic branch, not part of glycolysis proper."
                source="BCH 335 lecture (GNG and regulation)"
              />
              {GlycolysisOverviewSVG}
              <Callout kind="info" title="Three irreversible (committed) steps">
                Hexokinase, PFK-1, pyruvate kinase. Bypassed in <strong>gluconeogenesis</strong> by glucose-6-phosphatase, FBPase-1, and PEP-carboxykinase + pyruvate carboxylase.
              </Callout>
              <ul>
                <li>Step 6 = the redox step (GAPDH, NAD⁺ → NADH). Past exam: "This reaction is one step in which metabolic process?" → glycolysis.</li>
                <li>Steps 7 (PGK) and 10 (PK) involve <strong>substrate-level phosphorylation</strong>: a high-energy phosphate group is transferred directly to ADP.</li>
                <li>Past exam: "If reactants = 1.00 M and products = 0.10 M, which way does the reaction proceed?" — calculate ΔG = ΔG° + RT ln([P]/[R]). With [P]/[R]=0.1, ΔG &lt; 0 → forward.</li>
              </ul>
            </>
          )
        },
        {
          id: 'hexokinase',
          title: 'Hexokinase isozymes & substrate trapping',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e3_gng_018.jpeg"
                  alt="Hexokinase isozymes glycolytic flux versus enzyme amount"
                  caption="Four mammalian hexokinase isozymes (HK I–IV) catalyze the SAME reaction but have different kinetic properties (different Km, different Vmax response curves). HK IV (glucokinase, in liver and pancreatic β-cells) has high Km (~10 mM) → glucose sensor, only fires when blood glucose is high (after a meal)."
                  source="BCH 335 lecture (GNG)"
                />
                <AnchorImage
                  src="e3_gng_023.png"
                  alt="Hexokinase induced fit closing around glucose"
                  caption="Hexokinase induced fit: glucose binding causes a large conformational closure that brings ATP and glucose into the right geometry. Without glucose bound, water cannot get in to be wastefully phosphorylated. Past-exam classic illustration of induced fit's biological purpose."
                />
              </ImgGrid>
              <Callout kind="warn" title="Past exam — hexokinase isozyme misconception">
                "The four hexokinases catalyze the production of G6P with widely varying standard free energies." → <strong>FALSE</strong>. They use the same substrates → same ΔG°. They differ in <strong>kinetic properties</strong> (Km, regulation), not thermodynamics.
              </Callout>
            </>
          )
        },
        {
          id: 'fermentation',
          title: 'Fermentation, feeder paths & PPP',
          content: (
            <>
              <ul>
                <li>Anaerobic muscle: pyruvate + NADH → lactate + NAD⁺ (regenerates NAD⁺ to keep glycolysis running).</li>
                <li>Yeast: pyruvate → acetaldehyde → ethanol.</li>
              </ul>
              <Callout kind="tip" title="Pentose phosphate pathway (PPP)">
                Generates <strong>NADPH</strong> (reductive biosynthesis &amp; antioxidant defense) and <strong>ribose-5-P</strong> (nucleotide synthesis). Past exam short-answer: "List two cellular functions of NADPH" → reductive biosynthesis (lipids, cholesterol) AND protection from oxidative damage (regenerates glutathione); in plants, photosynthesis.
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'gng',
      title: '§5 Gluconeogenesis & glycogen metabolism',
      blocks: [
        {
          id: 'gng-where',
          title: 'Where & why',
          content: (
            <>
              <Theme>Gluconeogenesis (GNG) makes glucose from non-carb precursors. Mostly in <strong>liver</strong>; some kidney during prolonged fasting. Required during fasting, low-carb diets, prolonged exercise.</Theme>
              <AnchorImage
                src="e3_gng_002.png"
                alt="Liver and muscle glucose metabolism showing the Cori cycle"
                caption="Liver vs muscle in fasting/exercise: liver releases glucose to blood (only liver has glucose-6-phosphatase to dephosphorylate G6P). Muscle takes glucose from blood, runs anaerobic glycolysis → lactate → blood → liver, where the Cori cycle regenerates glucose. Net cost: 6 ATP/glucose paid by liver."
                source="BCH 335 lecture (GNG)"
              />
              <ul>
                <li>Reverses 7 of 10 glycolytic reactions, with <strong>4 unique enzymes</strong> to bypass the 3 irreversible glycolytic steps:
                  <ul>
                    <li>Pyruvate carboxylase (mitochondria) → oxaloacetate</li>
                    <li>PEP carboxykinase (PEPCK) → PEP</li>
                    <li>FBPase-1 → F1,6BP → F6P</li>
                    <li>Glucose-6-phosphatase (liver only!) → glucose</li>
                  </ul>
                </li>
                <li>Past exam: "Most gluconeogenesis takes place in which organ?" → <strong>Liver</strong>.</li>
                <li>Past exam term: "The ability of the body to maintain A at a relatively constant concentration is an example of ___" → <strong>homeostasis</strong>. The rate at which T is converted to R is called <strong>metabolic flux</strong>.</li>
              </ul>
            </>
          )
        },
        {
          id: 'glycogen',
          title: 'Glycogen synthesis & breakdown — coordinately regulated',
          content: (
            <>
              <ul>
                <li><strong>Glycogen synthase</strong> (GS) — adds α(1→4); ACTIVE when DEphosphorylated; phospho-GS is inactive. Insulin → dephosphorylates → GS ON.</li>
                <li><strong>Glycogen phosphorylase</strong> (GP) — cleaves α(1→4) by phosphorolysis (uses Pi, not water!), making glucose-1-phosphate. ACTIVE when phosphorylated. Glucagon/epinephrine → kinase cascade → GP ON.</li>
              </ul>
              <Callout kind="warn" title="Past exam — futile cycle prevention">
                "GS and GP must be coordinately regulated. What's the OTHER reason that one cannot be ON when the other is ON?" → to <strong>prevent a futile cycle</strong> (TRUE). Both running simultaneously would build and break glycogen wastefully, burning ATP/UTP for nothing.
              </Callout>
              <Callout kind="info" title="AMPK truth checks">
                <ul>
                  <li>"AMPK is activated when ATP is HIGH" → <strong>FALSE</strong></li>
                  <li>"AMPK upregulates insulin secretion" → <strong>FALSE</strong></li>
                  <li>"AMPK upregulates glucose uptake in muscles" → <strong>TRUE</strong></li>
                  <li>"AMPK inhibits FA / glycogen / cholesterol synthesis" → <strong>TRUE</strong></li>
                </ul>
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'regulation',
      title: '§6 Metabolic regulation — PFK-1, F-2,6-BP, AMPK, Cori',
      blocks: [
        {
          id: 'pfk1',
          title: 'PFK-1 — the most regulated step in glycolysis',
          content: (
            <>
              <Theme>PFK-1 is the committed step of glycolysis. It senses energy status (ATP, AMP, citrate) and coordinates with gluconeogenesis through F-2,6-BP.</Theme>
              <AnchorImage
                src="e3_gng_025.jpeg"
                alt="PFK-1 regulation by F-2,6-BP, ATP, AMP, and citrate"
                caption="PFK-1 regulation: AMP and F-2,6-BP activate; ATP and citrate inhibit. F-2,6-BP is itself controlled by the bifunctional PFK-2/FBPase-2 enzyme — under insulin, the kinase domain (PFK-2) is active, building F-2,6-BP → glycolysis ON. Under glucagon, the phosphatase (FBPase-2) destroys F-2,6-BP → glycolysis OFF, GNG ON."
                source="BCH 335 lecture (GNG and regulation)"
              />
              <Table
                headers={["Effector", "Effect on PFK-1", "Why"]}
                rows={[
                  ["AMP", "↑ activate", "low energy → run glycolysis"],
                  ["ATP", "↓ inhibit (allosteric)", "high energy → don\'t over-run"],
                  ["Citrate", "↓ inhibit", "CAC has plenty; back off"],
                  ["F-2,6-BP", "↑ activate (potently)", "fed/insulin signal: run glycolysis, OFF GNG"]
                ]}
              />
              <Callout kind="info" title="Past exam — F-2,6-BP">
                "F-2,6-BP is a 'side' metabolite of glycolysis. F-2,6-BP <em>activates</em> AND <em>relieves</em> the allosteric inhibitory effect of ATP on which glycolytic enzyme?" → <strong>PFK-1</strong>.
              </Callout>
            </>
          )
        },
        {
          id: 'cori',
          title: 'The Cori cycle (& glucose–alanine cycle)',
          content: (
            <>
              <p>Cori cycle: muscle does anaerobic glycolysis → produces lactate → blood → liver → GNG → glucose → blood → muscle.</p>
              <Table
                headers={["Statement", "T/F"]}
                rows={[
                  ["Glucose is transported toward the liver", "FALSE — glucose flows liver → muscle"],
                  ["G6P is converted to glucose by glucose-6-phosphatase in skeletal muscle", "FALSE — only LIVER has G6Pase"],
                  ["Lactate is converted into pyruvate by LDH in skeletal muscle", "FALSE in Cori-cycle direction (LIVER does this); muscle LDH usually goes pyruvate → lactate"],
                  ["NADH is generated by a dehydrogenase in skeletal muscle", "TRUE — GAPDH"]
                ]}
              />
            </>
          )
        }
      ]
    }
  ],
  keyReview: {
    themes: [
      { title: 'D vs L; α vs β; epimers vs anomers vs enantiomers', desc: 'Memorize one canonical reference (D-glucose) and reason from there. Anomeric C = the only one that flips on cyclization.' },
      { title: 'PCR / cloning needs the exact reagents', desc: 'Forget any single reagent (most often dNTPs or primers) and amplification fails. Restriction sites must be palindromic.' },
      { title: 'Glycolysis has 3 irreversible regulatory steps', desc: 'HK, PFK-1, PK. PFK-1 is most regulated. F-2,6-BP turns it ON; ATP/citrate OFF.' },
      { title: 'Energy currencies — ATP and NADH', desc: 'ATP for transfer of P-groups (substrate-level phos at PGK and PK). NADH made at GAPDH; oxidized in fermentation or ETC.' },
      { title: 'AMPK = energy crisis sensor', desc: 'High AMP / low ATP → AMPK on → catabolism on, anabolism off.' },
      { title: 'Cori cycle separates muscle effort from liver bookkeeping', desc: 'Muscle makes lactate in anaerobic bursts; liver pays the gluconeogenic ATP cost.' }
    ],
    vocab: [
      { term: 'Glycosidic bond', def: 'C–O–C between anomeric C and an –OH (or another anomeric C). Notation: α/β-(1→4), etc.' },
      { term: 'Reducing sugar', def: 'Has a free anomeric carbon (open-chain aldehyde or hemiketal). Sucrose is non-reducing.' },
      { term: 'Anomer', def: 'Cyclic stereoisomer differing only at the anomeric C (α vs β).' },
      { term: 'Epimer', def: 'Stereoisomer differing at exactly one non-anomeric chiral C (e.g., glucose vs galactose at C4).' },
      { term: 'Phosphodiester bond', def: '3′,5′ linkage between nucleotides — backbone of DNA/RNA.' },
      { term: 'Palindrome', def: 'dsDNA sequence that reads 5′→3′ identically on both strands; recognized by most restriction enzymes.' },
      { term: 'ΔG vs ΔG°', def: 'ΔG = ΔG° + RT ln Q. Cellular ΔG depends on real concentrations, not just ΔG°.' },
      { term: 'Substrate-level phosphorylation', def: 'Direct transfer of P from a substrate to ADP → ATP (PGK and PK in glycolysis; succinyl-CoA synthetase in CAC).' },
      { term: 'Futile cycle', def: 'Two opposing reactions running simultaneously and burning ATP without net flux; cells avoid this by reciprocal regulation.' },
      { term: 'F-2,6-BP', tag: 'allosteric activator', tagColor: 'green', def: 'Most potent allosteric activator of PFK-1; controlled by PFK-2/FBPase-2 bifunctional enzyme.' },
      { term: 'AMPK', tag: 'energy sensor', tagColor: 'amber', def: 'AMP-activated protein kinase. Upregulates glucose uptake in muscle, FA oxidation; downregulates lipid/cholesterol/glycogen synthesis.' }
    ],
    laws: [
      { name: 'ΔG = ΔG° + RT ln Q', desc: 'Cellular spontaneity depends on real concentrations.' },
      { name: 'Watson–Crick base pairing', desc: 'A-T (2 H-bonds), G-C (3 H-bonds); antiparallel; right-handed (B-DNA).' },
      { name: 'Reciprocal regulation', desc: 'Glycolysis and gluconeogenesis (and glycogen synth/breakdown) are oppositely regulated to prevent futile cycles.' },
      { name: 'Salt → Tm', desc: 'Higher [salt] increases Tm by shielding phosphate repulsion.' }
    ],
    methods: [
      { name: 'PCR', desc: 'Denature → anneal → extend at 95/55/72 °C. Needs Taq, primers, dNTPs, Mg²⁺, template, buffer.' },
      { name: 'Sanger sequencing', desc: 'ddNTP chain termination; reads sequence of cloned insert. Past exam: confirm sequence after ligation.' },
      { name: 'Restriction cloning', desc: 'Palindromic site → restriction enzyme cuts both strands at same site → ligate into vector with sticky/blunt ends.' },
      { name: 'Lineweaver–Burk for hexokinase isozymes', desc: 'Hexokinase IV (glucokinase) has high Km (~10 mM) — used as glucose sensor in liver and pancreatic β-cells.' }
    ],
    diagrams: [
      { title: 'Glycolysis 10 steps cheatsheet', visual: GlycolysisOverviewSVG }
    ]
  },
  questions: [
    {
      q: 'Which polysaccharide is most similar to chitin in solubility?',
      choices: ['Glycogen', 'Cellulose', 'Amylopectin', 'Dextran'],
      correct: 1,
      explanation: 'Chitin is β(1→4)-GlcNAc, fibrous, insoluble. Cellulose is β(1→4)-glucose, also fibrous and insoluble.',
      difficulty: 'M'
    },
    {
      q: 'You set up a PCR with: forward and reverse primers, thermostable polymerase, template, water, pH 8.8 buffer. The reaction fails. Why?',
      choices: [
        'You forgot dNTPs',
        'You forgot RNA polymerase',
        'The buffer pH is too high',
        'Taq cannot operate at 72 °C'
      ],
      correct: 0,
      explanation: 'Without dNTPs the polymerase has no monomers to extend with.',
      difficulty: 'E'
    },
    {
      q: 'Which sequence is a palindromic site for restriction-enzyme cloning?',
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
      q: 'Which is NOT true of all naturally occurring dsDNA?',
      choices: [
        'It is a left-handed helix (Z-DNA)',
        'The two strands are antiparallel',
        'Strands are connected by 3′,5′-phosphodiester bonds',
        'A pairs with T using two H-bonds; G with C using three'
      ],
      correct: 0,
      explanation: 'B-DNA (cellular form) is RIGHT-handed.',
      difficulty: 'M'
    },
    {
      q: 'For 1,3-BPG (ΔG° hydrolysis ≈ −49.4 kJ/mol) coupled to ADP → ATP (ΔG° = +30.5 kJ/mol), the overall ΔG° for "1,3-BPG + ADP → 3-PG + ATP" ≈',
      choices: ['−18.9 kJ/mol', '+18.9 kJ/mol', '−80 kJ/mol', '0'],
      correct: 0,
      explanation: 'Sum the ΔG°s: −49.4 + (+30.5) = −18.9 kJ/mol.',
      difficulty: 'M'
    },
    {
      q: 'Which step of glycolysis is the irreversible "committed" step and the most heavily regulated?',
      choices: ['Hexokinase', 'PFK-1', 'Aldolase', 'Pyruvate kinase'],
      correct: 1,
      explanation: 'PFK-1 is the canonical commitment point. Allosterically regulated by AMP/F-2,6-BP (activate) and ATP/citrate (inhibit).',
      difficulty: 'E'
    },
    {
      q: 'Most gluconeogenesis in humans takes place in:',
      choices: ['Skeletal muscle', 'Brain', 'Liver', 'Adipose tissue'],
      correct: 2,
      explanation: 'Liver provides ~90% of GNG; kidney handles the remainder during prolonged fasting.',
      difficulty: 'E'
    },
    {
      q: 'Which is TRUE about AMPK?',
      choices: [
        'AMPK is activated when ATP levels are high',
        'AMPK upregulates glycogen synthesis',
        'AMPK upregulates glucose uptake in muscle',
        'AMPK upregulates insulin secretion'
      ],
      correct: 2,
      explanation: 'AMPK fires when AMP rises (energy crisis). It upregulates glucose uptake and FA oxidation; it inhibits glycogen, FA, and cholesterol synthesis.',
      difficulty: 'M'
    },
    {
      q: 'Glycogen synthase and glycogen phosphorylase must be coordinately regulated. Why?',
      choices: [
        'They share an active-site cysteine',
        'To prevent a futile cycle (and waste of ATP/UTP)',
        'They use the same substrate, glucose',
        'They are encoded on the same operon'
      ],
      correct: 1,
      explanation: 'Both running simultaneously would build and break glycogen wastefully. Insulin/glucagon signaling phosphorylates them oppositely.',
      difficulty: 'M'
    },
    {
      q: 'F-2,6-BP activates AND relieves ATP inhibition of which glycolytic enzyme?',
      choices: ['Hexokinase', 'PFK-1', 'Pyruvate kinase', 'GAPDH'],
      correct: 1,
      explanation: 'F-2,6-BP is the most potent allosteric activator of PFK-1 — it raises activity at low [F6P] and overcomes ATP inhibition.',
      difficulty: 'M'
    },
    {
      q: 'The four human hexokinases catalyze the same reaction; therefore...',
      choices: [
        'They have widely different standard free energies (ΔG°)',
        'They have similar substrates and ΔG°, but different kinetic properties',
        'They are inhibited by glucose-6-phosphate equally',
        'They differ only in their tissue distribution'
      ],
      correct: 1,
      explanation: 'Same chemistry → same ΔG°. Isozymes differ in kinetics — HK IV (glucokinase) has high Km, used as a glucose sensor.',
      difficulty: 'H'
    },
    {
      q: 'The ability of the body to maintain a metabolite at relatively constant concentration is called:',
      choices: ['Allostery', 'Homeostasis', 'Cooperativity', 'Catabolism'],
      correct: 1,
      explanation: 'Homeostasis = regulatory maintenance of internal conditions. Metabolic flux is the rate.',
      difficulty: 'E'
    },
    {
      q: 'In the Cori cycle, lactate flows from working muscle to liver. What does liver do with it?',
      choices: [
        'Converts lactate to pyruvate (LDH), then to glucose via gluconeogenesis',
        'Stores lactate as glycogen directly',
        'Excretes it in urine',
        'Oxidizes it directly in mitochondria for ATP'
      ],
      correct: 0,
      explanation: 'Liver LDH (favoring pyruvate) → pyruvate → GNG → glucose → released to blood → reused by muscle. Net cost: 6 ATP/glucose.',
      difficulty: 'M'
    },
    {
      q: 'The pentose phosphate pathway produces:',
      choices: [
        'NADH and ribose-5-phosphate',
        'NADPH and ribose-5-phosphate',
        'FADH₂ and erythrose-4-phosphate',
        'ATP and pyruvate'
      ],
      correct: 1,
      explanation: 'PPP makes NADPH and ribose-5-P.',
      difficulty: 'E'
    },
    {
      q: 'Sucrose is non-reducing because:',
      choices: [
        'Its glycosidic bond uses both anomeric carbons',
        'It is exclusively in the α-anomeric form',
        'It contains a sulfate group',
        'It is too small to undergo ring opening'
      ],
      correct: 0,
      explanation: 'α(1↔2) glycosidic bond ties up both anomeric carbons → no free hemiacetal → not reducing.',
      difficulty: 'M'
    }
  ]
};

export default exam;
