import React from 'react';
import { Callout, Table, Theme, SvgFrame } from '../components/Visual.jsx';

const GlycolysisOverviewSVG = (
  <SvgFrame width={460} height={290} label="Glycolysis: priming (steps 1–5, costs 2 ATP) → cleavage → payoff (steps 6–10, makes 4 ATP, 2 NADH). Net: glucose → 2 pyruvate + 2 ATP + 2 NADH.">
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

const HaworthGlucoseSVG = (
  <SvgFrame width={420} height={210} label="α-D-glucopyranose: anomeric C1 –OH points DOWN (α). β: points UP. CH₂OH at C5 points UP for D-sugars in standard orientation.">
    <polygon points="80,140 130,100 200,100 240,140 200,180 130,180" fill="none" stroke="#0f172a" strokeWidth="2" />
    <text x="63" y="145" fontSize="13" fill="#dc2626">O</text>
    <text x="125" y="98" fontSize="11" fill="#0f172a">C2</text>
    <text x="200" y="98" fontSize="11" fill="#0f172a">C3</text>
    <text x="245" y="145" fontSize="11" fill="#0f172a">C4</text>
    <text x="200" y="195" fontSize="11" fill="#0f172a">C5</text>
    <text x="105" y="195" fontSize="11" fill="#16a34a">C1 (anomeric)</text>
    <line x1="120" y1="180" x2="120" y2="200" stroke="#0f172a" />
    <text x="92" y="212" fontSize="11" fill="#dc2626">α-OH (down)</text>
    <line x1="200" y1="100" x2="220" y2="80" stroke="#0f172a" />
    <text x="218" y="76" fontSize="11" fill="#16a34a">CH₂OH (C6, up)</text>
    <text x="40" y="36" fontSize="13" fill="#0f172a" fontWeight="700">α-D-glucopyranose</text>
  </SvgFrame>
);

const AMPKLogicSVG = (
  <SvgFrame width={460} height={170} label="AMPK senses energy crisis (high AMP, low ATP). It activates catabolism (glucose uptake, β-oxidation) and inhibits anabolism (fatty acid / cholesterol / glycogen synthesis).">
    <text x="20" y="25" fontSize="12" fill="#0f172a" fontWeight="700">AMPK = master energy sensor</text>
    <rect x="30" y="50" width="120" height="40" fill="#fee2e2" stroke="#dc2626" />
    <text x="50" y="76" fontSize="12" fill="#dc2626">↑ AMP / ↓ ATP</text>
    <line x1="155" y1="70" x2="200" y2="70" stroke="#0f172a" />
    <polygon points="200,70 192,66 192,74" fill="#0f172a" />
    <rect x="205" y="50" width="100" height="40" fill="#fef3c7" stroke="#d97706" />
    <text x="226" y="76" fontSize="12" fill="#b45309">AMPK ON</text>
    <line x1="310" y1="60" x2="360" y2="40" stroke="#16a34a" />
    <polygon points="360,40 352,38 352,46" fill="#16a34a" />
    <line x1="310" y1="80" x2="360" y2="100" stroke="#dc2626" />
    <polygon points="360,100 352,96 352,104" fill="#dc2626" />
    <text x="365" y="38" fontSize="11" fill="#16a34a">↑ glucose uptake (muscle)</text>
    <text x="365" y="55" fontSize="11" fill="#16a34a">↑ FA β-oxidation</text>
    <text x="365" y="105" fontSize="11" fill="#dc2626">↓ glycogen / FA / cholest. synth.</text>
    <text x="20" y="145" fontSize="10" fill="#475569">Past exam: "AMPK upregulates glucose uptake in muscle" — TRUE; "AMPK is activated when ATP is high" — FALSE.</text>
  </SvgFrame>
);

const exam = {
  id: 3,
  title: 'Exam 3 — Carbs · Nucleic Acids · Glycolysis · Regulation',
  subtitle: 'Sugar structures · DNA/RNA & PCR/cloning · bioenergetics · glycolysis · gluconeogenesis · glycogen · regulation',
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
              <Theme>Sugars are <strong>polyhydroxy aldehydes (aldoses) or ketones (ketoses)</strong>. The "D" descriptor depends on the configuration of the chiral C <em>furthest</em> from the carbonyl (C5 in glucose).</Theme>
              <ul>
                <li><strong>D-sugars</strong> dominate biology. <strong>L-sugars</strong> are rare (e.g., L-fucose, L-iduronate in heparin).</li>
                <li>Carbon count: triose (3), tetrose (4), pentose (5: ribose, deoxyribose), hexose (6: glucose, fructose, galactose, mannose).</li>
                <li>Linear → cyclic via internal hemiacetal (aldose) or hemiketal (ketose). Cyclization creates a new chiral center at C1 — the <strong>anomeric carbon</strong>.</li>
                <li><strong>α anomer</strong>: C1 –OH on opposite face from C6 (down in Haworth). <strong>β anomer</strong>: same face (up). Anomers interconvert by mutarotation.</li>
              </ul>
              {HaworthGlucoseSVG}
              <Callout kind="tip" title="Drawing alpha-ribose">
                Past exam: "Draw cyclic α-D-ribose." Ribose forms a furanose (5-membered, O between C1 and C4). α-anomeric –OH points <em>down</em>. C5-CH₂OH points <em>up</em> (D).
              </Callout>
            </>
          )
        },
        {
          id: 'epimers',
          title: 'Epimers, anomers, & stereodescriptors',
          content: (
            <>
              <Table
                headers={["Pair", "Differ at", "Note"]}
                rows={[
                  ["Glucose / Mannose", "C2", "C2 epimers"],
                  ["Glucose / Galactose", "C4", "C4 epimers"],
                  ["α-glucose / β-glucose", "C1 (anomeric only)", "These are anomers, not epimers"],
                  ["D-glucose / L-glucose", "all chiral centers", "enantiomers (mirror images)"]
                ]}
              />
              <Callout kind="info" title="Past exam — circle the two epimers">
                If two sugars differ at exactly ONE non-anomeric chiral C → epimers. If they differ at C1 (anomeric) → anomers. If at all chiral C → enantiomers.
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
              <Table
                headers={["Disaccharide", "Components", "Linkage", "Reducing?"]}
                rows={[
                  ["Maltose", "Glc + Glc", "α(1→4)", "yes (free anomeric C on second Glc)"],
                  ["Lactose", "Gal + Glc", "β(1→4)", "yes"],
                  ["Sucrose", "Glc + Fru", "α,β(1↔2)", "NO — both anomeric carbons used"],
                  ["Cellobiose", "Glc + Glc", "β(1→4)", "yes"]
                ]}
              />
              <Callout kind="warn" title="Sucrose is non-reducing">
                Both anomeric carbons are tied up in the glycosidic bond — no free hemiacetal → cannot reduce Cu²⁺ in Fehling's. Past exam: "true/false: sucrose and lactose each have one glycosidic bond." TRUE — both have exactly one.
              </Callout>
            </>
          )
        },
        {
          id: 'polysacch',
          title: 'Polysaccharides — storage & structural',
          content: (
            <>
              <Table
                headers={["Polymer", "Monomer", "Linkage(s)", "Branched?", "Role"]}
                rows={[
                  ["Glycogen", "α-D-glucose", "α(1→4) main, α(1→6) branches", "highly (every ~8–12)", "animal energy storage (liver/muscle)"],
                  ["Starch (amylose)", "α-D-glucose", "α(1→4)", "no", "plant storage"],
                  ["Starch (amylopectin)", "α-D-glucose", "α(1→4) + α(1→6)", "yes (every ~25)", "plant storage"],
                  ["Cellulose", "β-D-glucose", "β(1→4)", "no", "plant cell wall — most similar to chitin in solubility (both fibrous, insoluble)"],
                  ["Chitin", "β-D-GlcNAc", "β(1→4)", "no", "exoskeleton/fungal walls"],
                  ["Dextran", "α-D-glucose", "α(1→6) main + branches", "yes", "bacterial; dental plaque"]
                ]}
              />
              <Callout kind="info" title="Past exam — cellulose vs chitin">
                "The polysaccharide cellulose is most similar to ___ in terms of its solubility." → <strong>chitin</strong> (both β(1→4)-linked, fibrous, insoluble).
              </Callout>
              <Callout kind="info" title="Glycogen vs. starch (amylopectin) — animal vs plant">
                Both branched α-glucan polymers. Glycogen branches every ~8–12 (highly branched, fast mobilization); amylopectin every ~25 (less branched). Both yield <strong>monomeric glucose</strong> on complete hydrolysis. Past exam table: "Complete hydrolysis yields monomers of?" → glucose for both.
              </Callout>
            </>
          )
        },
        {
          id: 'gags',
          title: 'GAGs & glycoproteins',
          content: (
            <>
              <ul>
                <li><strong>Glycosaminoglycans (GAGs)</strong>: long, unbranched, anionic disaccharide repeats. Examples: heparin/heparan sulfate (anticoagulant), chondroitin sulfate (cartilage), hyaluronic acid (joints).</li>
                <li><strong>Heparin</strong> is an unbranched glycosaminoglycan that regulates blood-vessel formation/clotting. Past exam fill: "___ is an unbranched glycosaminoglycan that regulates formation of blood vessels." → <strong>heparin / heparan sulfate</strong>.</li>
                <li><strong>Agar</strong> is a heteropolysaccharide found in some cell walls and used as a microbiology growth medium.</li>
                <li><strong>Glycoproteins</strong>: proteins with O- or N-linked glycans (Ser/Thr → O-linked; Asn → N-linked). Past exam: "Proteins post-translationally modified with covalently linked carbohydrates are called ___" → <strong>glycoproteins</strong>.</li>
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
            </>
          )
        },
        {
          id: 'na-features',
          title: 'Nucleic acid structure & features',
          content: (
            <>
              <Table
                headers={["Statement", "True/False", "Why"]}
                rows={[
                  ["Nucleotides are connected by 3′,5′-phosphodiester bonds and the strands are held together by H-bonds", "TRUE", "the canonical Watson–Crick model"],
                  ["A always equals T (and G = C) in dsDNA", "TRUE", "Chargaff's rule for dsDNA"],
                  ["DNA is a left-handed helix (Z-DNA)", "FALSE", "B-form DNA (the cellular form) is right-handed"],
                  ["The two strands of dsDNA are antiparallel", "TRUE", "5′→3′ on one, 3′→5′ on the other"],
                  ["A and T pair with two H-bonds; G and C with three", "TRUE", "GC pairing more stable"],
                  ["Purines and pyrimidines can absorb UV light", "TRUE", "260 nm — used to quantify nucleic acids"],
                  ["Purines/pyrimidines exist as free-floating bases in the cytoplasm of healthy cells", "FALSE", "almost all are sugar/phosphate-bound; free purines are scavenged or degraded"]
                ]}
              />
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
              <Callout kind="info" title="Past exam: 'You set up and run a PCR. In the test tube: forward and reverse primers, thermostable DNA polymerase, template DNA, and pH 8.8 buffered agent (with salts and detergent), water. Which mistake did you make?'">
                Forgot the <strong>dNTPs</strong>. Without dNTPs the polymerase has nothing to extend with.
              </Callout>
              <p>Other key facts:</p>
              <ul>
                <li>Optimal extension at <strong>72 °C</strong>; pH ~8.8 (Taq optimum).</li>
                <li>Each cycle <em>doubles</em> the number of templates (exponential).</li>
                <li>Past exam: "Explain how salt influences the melting temperature of dsDNA" — <strong>more salt = higher Tm</strong> because cations shield the negatively charged phosphate backbone, allowing strands to stack closer.</li>
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
                "Which of the following is required for a plasmid vector to be expressed at two different pHs?" → <strong>two promoters with different pH dependencies</strong>. (Standard plasmid features: origin of replication, antibiotic resistance, multiple cloning site, promoter — but expression at two pHs needs two promoters.)
              </Callout>
              <ul>
                <li>Plasmids are typically &lt; the bacterial genome to be retained efficiently. Past exam: "Plasmid vectors should be SMALLER than the bacterial genome (the same size as) for retention."</li>
                <li>To clone a gene of interest into a vector at a single restriction site, the site must be a <strong>palindromic</strong> sequence — the same when read 5′→3′ on either strand. Past exam: pick the dsDNA sequence that reads as a palindrome, e.g., <strong>GAATTC / CTTAAG</strong> (EcoRI).</li>
                <li>Past exam progress order: cut vector with restriction enzymes → confirm ligation by gel electrophoresis → confirm sequence by Sanger.</li>
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
              <Theme>ΔG° = standard free-energy change at standard conditions (1 M, pH 7, 25 °C). ΔG = actual cellular free-energy change at real concentrations: <strong>ΔG = ΔG° + RT ln Q</strong>, where Q = [products]/[reactants].</Theme>
              <ul>
                <li>ΔG &lt; 0 → spontaneous in the forward direction.</li>
                <li>ΔG = 0 → equilibrium.</li>
                <li>ΔG &gt; 0 → reaction goes in reverse.</li>
                <li>An enzyme cannot make ΔG &lt; 0; it only makes the kinetics fast.</li>
              </ul>
              <Callout kind="info" title="Past exam — 'A → B has ΔG = +18 kJ/mol; reaction started with 10 mM A. After 5 hr...'">
                Reaction starts with [A]/[B] = ∞, but ΔG° is +18 kJ/mol. To check whether reaction started, calculate ΔG: ΔG = ΔG° + RT ln([B]/[A]). Initially [B]≈0 → ln(small) is very negative, can drive ΔG below 0. So <strong>"the reaction has started, even though products will not exceed reactants"</strong> if final ΔG is barely &lt; 0. Or "B will reach equilibrium" if enough time passes.
              </Callout>
              <p>"3-phosphoglycerate → 2-PG (ΔG° = +4.6 kJ/mol) AND 2-PG → PEP (ΔG° = +1.8 kJ/mol)." Calculate overall: 3-PG → PEP, ΔG° = (+4.6) + (+1.8) = <strong>+6.4 kJ/mol</strong>.</p>
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
                Hydrolysis of 1,3-BPG → 3-PG releases ~−49.4 kJ/mol. ATP hydrolysis releases ~−30.5 kJ/mol. ΔG° for "1,3-BPG + ADP → 3-PG + ATP" = (−49.4) − (−30.5) = <strong>~−18.9 kJ/mol</strong>. Coupled, energetically very favorable.
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
              {GlycolysisOverviewSVG}
              <Callout kind="info" title="Three irreversible (committed) steps">
                Hexokinase, PFK-1, pyruvate kinase. These are bypassed in <strong>gluconeogenesis</strong> by glucose-6-phosphatase, FBPase-1, and PEP-carboxykinase + pyruvate carboxylase.
              </Callout>
              <ul>
                <li>Step 6 is the <strong>oxidation–reduction step</strong> (GAPDH, NAD⁺ → NADH). Past exam: "This reaction is one step in which of the following metabolic processes?" → glycolysis (step 6).</li>
                <li>Steps 7 (PGK) and 10 (PK) involve <strong>substrate-level phosphorylation</strong>: a high-energy phosphate group is transferred directly to ADP.</li>
                <li>Past exam: "If the concentrations of all reactants are maintained at 1.00 M and products at 0.10 M, which way does the reaction proceed?" — calculate ΔG = ΔG° + RT ln([P]/[R]). With [P]/[R] very small and ΔG° not too positive, ΔG &lt; 0 → forward.</li>
              </ul>
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
                <li>Yeast: pyruvate → acetaldehyde → ethanol (ethanol fermentation).</li>
                <li>Past exam ranking: "The steps of glycolysis between glyceraldehyde-3-P and pyruvate involve all of the following EXCEPT..." → all of them happen except the wrong-direction one (look for "phosphoryl group transfer to ADP" — yes, in steps 7 &amp; 10; "oxidation of NADH to NAD⁺" — NO; that\'s the reverse, wrong direction).</li>
              </ul>
              <Callout kind="tip" title="Pentose phosphate pathway (PPP)">
                Generates <strong>NADPH</strong> (reductive biosynthesis &amp; antioxidant defense) and <strong>ribose-5-P</strong> (nucleotide synthesis). Past exam short-answer: "List two cellular functions of NADPH" → <em>(1) reductive biosynthesis (lipids, cholesterol)</em>; <em>(2) protection from oxidative damage (regenerates glutathione)</em>; in plants, photosynthesis.
              </Callout>
              <Callout kind="info" title="Past exam — increased flux to PPP">
                "Which would increase production of glucose-1-phosphate?" — this asks about glycogen breakdown. "Which would increase production of glucose to enter PPP?" → <strong>binding of glucose-6-phosphate to its receptor in myocytes</strong> ... (or the answer that pulls G6P into the PPP rather than glycolysis).
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
              <Theme>Gluconeogenesis (GNG) makes glucose from non-carbohydrate precursors. Mostly in <strong>liver</strong>; small contribution from kidney. Required during fasting, low-carb diets, prolonged exercise.</Theme>
              <ul>
                <li>Reverses 7 of 10 glycolytic reactions, with <strong>4 unique enzymes</strong> to bypass the 3 irreversible glycolytic steps:
                  <ul>
                    <li>Pyruvate carboxylase (mitochondria) → oxaloacetate</li>
                    <li>PEP carboxykinase (PEPCK) → PEP</li>
                    <li>FBPase-1 → F1,6BP → F6P</li>
                    <li>Glucose-6-phosphatase → glucose</li>
                  </ul>
                </li>
                <li>Past exam: "Most gluconeogenesis takes place in which organ?" → <strong>Liver</strong>.</li>
                <li>Past exam term: "The ability of the body to maintain A at a relatively constant concentration is an example of the condition we call ___" → <strong>homeostasis</strong>. The rate at which T is converted to R is called <strong>metabolic flux</strong>.</li>
              </ul>
            </>
          )
        },
        {
          id: 'glycogen',
          title: 'Glycogen synthesis & breakdown',
          content: (
            <>
              <ul>
                <li><strong>Glycogen synthase</strong> (GS) — adds α(1→4); activated when dephosphorylated; phosphorylated form is inactive (insulin signaling reverses this).</li>
                <li><strong>Glycogen phosphorylase</strong> (GP) — cleaves α(1→4); produces glucose-1-phosphate by phosphorolysis (uses Pi, not water!). Activated by phosphorylation (glucagon/epinephrine cascade).</li>
                <li>Past exam: "Glycogen synthase and glycogen phosphorylase must be coordinately regulated... what's the OTHER reason that one cannot be ON when the other is ON?" → to <strong>prevent a futile cycle</strong> (TRUE).</li>
                <li>Past exam: "AMPK is activated when ATP is high" → <strong>FALSE</strong>. "AMPK upregulates insulin secretion" → <strong>FALSE</strong>. "AMPK upregulates glucose uptake in muscles" → <strong>TRUE</strong>. "AMPK increases the urge to exercise" — silly phrasing but → ambiguous; the right ones are TRUE for the muscle-uptake and lipid-synthesis-inhibition statements.</li>
              </ul>
              {AMPKLogicSVG}
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
              <Table
                headers={["Effector", "Effect on PFK-1", "Why"]}
                rows={[
                  ["AMP", "↑ activate", "low energy → run glycolysis"],
                  ["ATP", "↓ inhibit (allosteric)", "high energy → don\'t over-run"],
                  ["Citrate", "↓ inhibit", "CAC has plenty; back off"],
                  ["F-2,6-BP", "↑ activate (potently)", "fed/insulin signal: run glycolysis, OFF gluconeogenesis"]
                ]}
              />
              <Callout kind="info" title="Past exam — multiple-choice">
                "F-2,6-BP is a 'side' metabolite of glycolysis... F-2,6-BP <em>activates</em> AND <em>relieves</em> the allosteric inhibitory effect of ATP on one glycolytic enzyme. Which?" → <strong>PFK-1</strong> (Phosphofructokinase).
              </Callout>
              <Callout kind="info" title="Hexokinase isozymes">
                Past exam: "The four human hexokinases catalyze the production of glucose-6-phosphate with widely varying standard free energies." → <strong>FALSE</strong>. They use the same substrates → same ΔG°. They differ in <strong>kinetic properties</strong> (Km, regulation). Hexokinase IV (glucokinase) has high Km — used in liver/pancreas to sense high glucose.
              </Callout>
            </>
          )
        },
        {
          id: 'cori',
          title: 'The Cori cycle (& glucose–alanine cycle)',
          content: (
            <>
              <p>Cori cycle: muscle does anaerobic glycolysis → produces lactate → blood → liver → gluconeogenesis → glucose → blood → muscle. Past exam asks the directionality and the byproduct.</p>
              <Table
                headers={["Statement", "T/F"]}
                rows={[
                  ["Glucose is transported toward the liver", "FALSE — glucose goes liver → muscle"],
                  ["Glucose-6-phosphate is converted into glucose by glucose-6-phosphatase in the skeletal muscle", "FALSE — only liver has G6Pase"],
                  ["Lactate is converted into pyruvate by lactate dehydrogenase in the skeletal muscle", "TRUE in liver after Cori, but more often: muscle generates lactate in glycolysis (LDH reverse). The Cori-cycle direction in liver is lactate → pyruvate."],
                  ["NADH is generated by a dehydrogenase in the skeletal muscle", "TRUE — GAPDH, also LDH consumes NADH to make lactate"]
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
      { term: 'Phosphodiester bond', def: '3′,5′ linkage between nucleotides — the backbone of DNA/RNA.' },
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
      { name: 'Lineweaver–Burk for glycolytic enzymes', desc: 'Hexokinase isozymes have widely different Km — high Km in glucokinase = liver/β-cell sensor.' }
    ],
    diagrams: [
      { title: 'Glycolysis 10 steps', visual: GlycolysisOverviewSVG },
      { title: 'α-D-glucose Haworth', visual: HaworthGlucoseSVG },
      { title: 'AMPK signaling', visual: AMPKLogicSVG }
    ]
  },
  questions: [
    {
      q: 'Which of these polysaccharides is most similar to chitin in solubility?',
      choices: ['Glycogen', 'Cellulose', 'Amylopectin', 'Dextran'],
      correct: 1,
      explanation: 'Chitin is β(1→4)-GlcNAc, fibrous, insoluble. Cellulose is β(1→4)-glucose, also fibrous and insoluble. Glycogen and amylopectin are soluble α-glucans; dextran is also α-linked.',
      difficulty: 'M'
    },
    {
      q: 'You set up a PCR with: forward and reverse primers, thermostable polymerase, template DNA, water, and pH 8.8 buffer with salts and detergent. The reaction fails. Why?',
      choices: [
        'You forgot dNTPs',
        'You forgot RNA polymerase',
        'The buffer pH is too high',
        'Taq cannot operate at 72 °C'
      ],
      correct: 0,
      explanation: 'Without dNTPs the polymerase has no monomers to extend with. pH 8.8 is correct for Taq; 72 °C is the optimum extension temperature.',
      difficulty: 'E'
    },
    {
      q: 'Which sequence is BIGGER than the same size as the bacterial genome and contains a palindromic site for restriction-enzyme cloning?',
      choices: [
        '5′-GGATCC-3′ paired with 3′-CCTAGG-5′ (palindromic)',
        '5′-GAATTC-3′ paired with 3′-CTTAAG-5′ (palindromic) — and the plasmid should be SMALLER than the bacterial genome',
        'The sequence on a single strand only',
        'Any sequence — palindromicity is irrelevant'
      ],
      correct: 1,
      explanation: 'EcoRI site (GAATTC) is palindromic. Plasmids should be smaller than the bacterial genome to be efficiently retained as extrachromosomal elements.',
      difficulty: 'H'
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
      explanation: 'Cellular dsDNA is right-handed (B-DNA). Z-DNA exists transiently and is left-handed but is not the canonical form.',
      difficulty: 'M'
    },
    {
      q: 'For 1,3-BP-glycerate (ΔG° hydrolysis ≈ −49.4 kJ/mol) coupled to ADP → ATP (ΔG° = +30.5 kJ/mol), the overall ΔG° for "1,3-BPG + ADP → 3-PG + ATP" is approximately:',
      choices: ['−18.9 kJ/mol', '+18.9 kJ/mol', '−80 kJ/mol', '0'],
      correct: 0,
      explanation: 'Sum the ΔG°s of the two half-reactions in the same direction: −49.4 + (+30.5) = −18.9 kJ/mol.',
      difficulty: 'M'
    },
    {
      q: 'Which step of glycolysis is the irreversible "committed" step and the most heavily regulated?',
      choices: ['Hexokinase (step 1)', 'PFK-1 (step 3)', 'Aldolase (step 4)', 'Pyruvate kinase (step 10)'],
      correct: 1,
      explanation: 'PFK-1 is the committed step. It is allosterically regulated by AMP/F-2,6-BP (activate) and ATP/citrate (inhibit). HK and PK are also irreversible but PFK-1 is the canonical commitment point.',
      difficulty: 'E'
    },
    {
      q: 'Most gluconeogenesis in humans takes place in:',
      choices: ['Skeletal muscle', 'Brain', 'Liver', 'Adipose tissue'],
      correct: 2,
      explanation: 'Liver provides ~90% of GNG; kidney handles the remainder during prolonged fasting. Muscle lacks glucose-6-phosphatase, so it cannot release free glucose.',
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
      explanation: 'AMPK fires when AMP rises (energy crisis). It upregulates glucose uptake (GLUT4 translocation in muscle) and FA oxidation; it inhibits glycogen, FA, and cholesterol synthesis.',
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
      explanation: 'If both ran simultaneously, the cell would build glycogen and break it down at the same time, wasting energy. Insulin/glucagon signaling phosphorylates them oppositely.',
      difficulty: 'M'
    },
    {
      q: 'F-2,6-BP activates AND relieves ATP inhibition of which glycolytic enzyme?',
      choices: ['Hexokinase', 'PFK-1', 'Pyruvate kinase', 'GAPDH'],
      correct: 1,
      explanation: 'F-2,6-BP is the most potent allosteric activator of PFK-1 — it both raises its activity at low [F6P] and overcomes inhibition by ATP.',
      difficulty: 'M'
    },
    {
      q: 'The four human hexokinases catalyze the same reaction; therefore...',
      choices: [
        'They have widely different standard free energies (ΔG°)',
        'They have similar substrates and ΔG°, but different kinetic properties (Km, V, regulation)',
        'They are inhibited by glucose-6-phosphate equally',
        'They differ only in their tissue distribution'
      ],
      correct: 1,
      explanation: 'Same chemistry → same ΔG°. Isozymes differ in kinetics (e.g., HK IV / glucokinase has high Km, low Vmax — used as a glucose sensor in liver and pancreatic β-cells).',
      difficulty: 'H'
    },
    {
      q: 'The ability of the body to maintain a metabolite at relatively constant concentration is called:',
      choices: ['Allostery', 'Homeostasis', 'Cooperativity', 'Catabolism'],
      correct: 1,
      explanation: 'Homeostasis = the regulatory maintenance of internal conditions. Metabolic flux is the rate at which one is converted to the other.',
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
      explanation: 'Liver LDH (favoring pyruvate) → pyruvate → GNG → glucose → released to blood → reused by muscle. Net cost: 6 ATP/glucose, paid by liver.',
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
      explanation: 'PPP makes NADPH (reductive biosynthesis, oxidative defense via glutathione) and ribose-5-P (nucleotide synthesis).',
      difficulty: 'E'
    },
    {
      q: 'Which sugar is non-reducing because both its anomeric carbons are tied up in the glycosidic bond?',
      choices: ['Maltose', 'Lactose', 'Cellobiose', 'Sucrose'],
      correct: 3,
      explanation: 'Sucrose: α,β-(1↔2) joins glucose-C1 and fructose-C2 — both anomeric. No free hemiacetal → no reducing aldehyde available.',
      difficulty: 'E'
    }
  ]
};

export default exam;
