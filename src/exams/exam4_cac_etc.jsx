import React from 'react';
import { Callout, Table, Theme, SvgFrame } from '../components/Visual.jsx';

const CACSummarySVG = (
  <SvgFrame width={460} height={290} label="CAC: 1 acetyl-CoA → 2 CO₂ + 3 NADH + 1 FADH₂ + 1 GTP. Per glucose (2 acetyl-CoAs): 4 CO₂, 6 NADH, 2 FADH₂, 2 GTP.">
    <text x="20" y="22" fontSize="12" fill="#0f172a" fontWeight="700">Citric acid cycle (1 turn = 1 acetyl-CoA in)</text>
    {[
      ['1. Citrate synthase', 'Ac-CoA + OAA → citrate', 'condensation', '#0284c7'],
      ['2. Aconitase', 'citrate → isocitrate', 'isomerization', '#475569'],
      ['3. Isocitrate DH', 'isocitrate → α-KG', 'NAD⁺ → NADH ① + CO₂', '#16a34a'],
      ['4. α-KG DH', 'α-KG → succinyl-CoA', 'NAD⁺ → NADH ② + CO₂', '#16a34a'],
      ['5. Succinyl-CoA synthetase', 'succ-CoA → succinate', 'GDP → GTP (subst-lvl)', '#0284c7'],
      ['6. Succinate DH', 'succinate → fumarate', 'FAD → FADH₂', '#dc2626'],
      ['7. Fumarase', 'fumarate → malate', '+ H₂O', '#475569'],
      ['8. Malate DH', 'malate → OAA', 'NAD⁺ → NADH ③', '#16a34a']
    ].map((row, i) => (
      <g key={i} transform={`translate(20, ${36 + i * 28})`}>
        <text x="0" y="14" fontSize="10" fontWeight="700" fill={row[3]}>{row[0]}</text>
        <text x="120" y="14" fontSize="10" fill="#0f172a">{row[1]}</text>
        <text x="280" y="14" fontSize="10" fill={row[3]}>{row[2]}</text>
      </g>
    ))}
    <text x="20" y="280" fontSize="10" fill="#475569">Net: 3 NADH · 1 FADH₂ · 1 GTP · 2 CO₂ per acetyl-CoA</text>
  </SvgFrame>
);

const ETCArrangementSVG = (
  <SvgFrame width={460} height={210} label="ETC complexes I–IV pump H⁺ across the inner membrane; complex V (ATP synthase) uses the gradient to make ATP. NADH enters at I; FADH₂ at II.">
    <line x1="40" y1="80" x2="430" y2="80" stroke="#94a3b8" strokeWidth="2" />
    <line x1="40" y1="160" x2="430" y2="160" stroke="#94a3b8" strokeWidth="2" />
    <text x="6" y="55" fontSize="10" fill="#475569">IMS (+)</text>
    <text x="6" y="180" fontSize="10" fill="#475569">matrix (−)</text>
    {/* Complex I */}
    <rect x="50" y="80" width="60" height="80" fill="#fef3c7" stroke="#d97706" />
    <text x="60" y="125" fontSize="11" fill="#b45309">I</text>
    <text x="50" y="175" fontSize="9" fill="#475569">NADH→Q</text>
    {/* Complex II */}
    <rect x="120" y="115" width="50" height="45" fill="#fee2e2" stroke="#dc2626" />
    <text x="130" y="142" fontSize="11" fill="#dc2626">II</text>
    <text x="115" y="175" fontSize="9" fill="#475569">FADH₂→Q</text>
    {/* Q */}
    <circle cx="190" cy="120" r="10" fill="#fde68a" stroke="#a16207" />
    <text x="184" y="124" fontSize="10" fill="#a16207">Q</text>
    {/* Complex III */}
    <rect x="210" y="80" width="60" height="80" fill="#dcfce7" stroke="#16a34a" />
    <text x="226" y="125" fontSize="11" fill="#16a34a">III</text>
    {/* cyt c */}
    <circle cx="290" cy="80" r="10" fill="#bae6fd" stroke="#0284c7" />
    <text x="280" y="84" fontSize="9" fill="#0284c7">c</text>
    {/* Complex IV */}
    <rect x="310" y="80" width="60" height="80" fill="#e0e7ff" stroke="#4338ca" />
    <text x="326" y="125" fontSize="11" fill="#4338ca">IV</text>
    <text x="305" y="175" fontSize="9" fill="#475569">→ ½ O₂ → H₂O</text>
    {/* ATP synthase */}
    <rect x="385" y="60" width="40" height="120" fill="#fce7f3" stroke="#be185d" />
    <text x="392" y="125" fontSize="11" fill="#be185d">V</text>
    <text x="380" y="195" fontSize="9" fill="#475569">ATP synth.</text>
    {/* H+ arrows */}
    <text x="80" y="40" fontSize="11" fill="#dc2626">↑ H⁺</text>
    <text x="240" y="40" fontSize="11" fill="#dc2626">↑ H⁺</text>
    <text x="335" y="40" fontSize="11" fill="#dc2626">↑ H⁺</text>
    <text x="395" y="50" fontSize="11" fill="#16a34a">H⁺ ↓</text>
  </SvgFrame>
);

const FluidMosaicSVG = (
  <SvgFrame width={460} height={200} label="Fluid mosaic: lipids and proteins are dynamic. Asymmetry is maintained by flippases/floppases (ATP-dependent); scramblases dissipate it (ATP-independent).">
    <line x1="40" y1="60" x2="430" y2="60" stroke="#475569" strokeDasharray="4 3" />
    <line x1="40" y1="140" x2="430" y2="140" stroke="#475569" strokeDasharray="4 3" />
    {/* Lipids */}
    {[60, 100, 140, 180, 220, 260, 300, 340, 380, 410].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="50" r="8" fill="#fde68a" stroke="#a16207" />
        <line x1={x - 4} y1="58" x2={x - 4} y2="100" stroke="#a16207" strokeWidth="2" />
        <line x1={x + 4} y1="58" x2={x + 4} y2="100" stroke="#a16207" strokeWidth="2" />
        <line x1={x - 4} y1="100" x2={x - 4} y2="142" stroke="#a16207" strokeWidth="2" />
        <line x1={x + 4} y1="100" x2={x + 4} y2="142" stroke="#a16207" strokeWidth="2" />
        <circle cx={x} cy="150" r="8" fill="#fde68a" stroke="#a16207" />
      </g>
    ))}
    {/* Integral protein */}
    <rect x="180" y="40" width="60" height="120" fill="#bae6fd" stroke="#0284c7" />
    <text x="195" y="105" fontSize="10" fill="#0284c7">integral</text>
    {/* Peripheral */}
    <ellipse cx="350" cy="180" rx="20" ry="10" fill="#dcfce7" stroke="#16a34a" />
    <text x="335" y="184" fontSize="9" fill="#16a34a">peripheral</text>
    {/* Cholesterol */}
    <rect x="100" y="80" width="14" height="40" fill="#f3e8ff" stroke="#7c3aed" />
    <text x="80" y="135" fontSize="9" fill="#7c3aed">chol</text>
    <text x="20" y="190" fontSize="10" fill="#475569">Outer leaflet: PC, SM, glycolipids · Inner leaflet: PE, PS, PI</text>
  </SvgFrame>
);

const FAOxidationSVG = (
  <SvgFrame width={460} height={200} label="β-oxidation: each round = oxidation, hydration, oxidation, thiolysis. Loses 2 carbons (1 acetyl-CoA), 1 FADH₂, 1 NADH per round.">
    <text x="20" y="22" fontSize="12" fill="#0f172a" fontWeight="700">β-oxidation cycle (4 steps; OHOT)</text>
    {[
      ['1. Oxidation', 'acyl-CoA → trans-Δ²-enoyl-CoA', 'FAD → FADH₂', '#dc2626'],
      ['2. Hydration', 'enoyl-CoA → 3-hydroxyacyl-CoA', '+ H₂O', '#475569'],
      ['3. Oxidation', '3-hydroxyacyl → 3-ketoacyl-CoA', 'NAD⁺ → NADH', '#16a34a'],
      ['4. Thiolysis', '3-ketoacyl-CoA → acyl-CoA(n−2) + acetyl-CoA', '+ CoA-SH', '#0284c7']
    ].map((row, i) => (
      <g key={i} transform={`translate(20, ${44 + i * 30})`}>
        <text x="0" y="14" fontSize="10" fontWeight="700" fill={row[3]}>{row[0]}</text>
        <text x="100" y="14" fontSize="10" fill="#0f172a">{row[1]}</text>
        <text x="300" y="14" fontSize="10" fill={row[3]}>{row[2]}</text>
      </g>
    ))}
    <text x="20" y="190" fontSize="10" fill="#475569">For palmitate (16:0): 7 rounds → 8 acetyl-CoA, 7 FADH₂, 7 NADH.</text>
  </SvgFrame>
);

const exam = {
  id: 4,
  title: 'Exam 4 — Lipids · Membranes · CAC · ETC · OxPhos',
  subtitle: 'FA structure · membranes · β-oxidation · PDH · CAC · ETC · ATP synthase',
  sections: [
    {
      id: 'lipids',
      title: '§1 Lipids — fatty acids, classification, function',
      blocks: [
        {
          id: 'lipid-overview',
          title: 'Lipid classes & defining property',
          content: (
            <>
              <Theme>The one property all lipids share is <strong>hydrophobicity</strong>. They are NOT polymers, do NOT all carry a –COOH, do NOT all have long chains (sterols). Past exam: "Which characteristic is unique to lipids compared to other biomolecules?" → "<strong>Lipids are mostly hydrophobic.</strong>"</Theme>
              <Table
                headers={["Class", "Examples", "Role"]}
                rows={[
                  ["Storage lipids", "Triacylglycerols (TAGs), waxes", "long-term energy / waterproofing"],
                  ["Membrane lipids", "Glycerophospholipids, sphingolipids, cholesterol", "bilayer structure"],
                  ["Signaling", "Eicosanoids, steroid hormones, PIP₂", "local + systemic signaling"],
                  ["Cofactors / pigments", "Vit K, CoQ, β-carotene, vit E", "ETC, clotting, antioxidant"],
                ]}
              />
              <Callout kind="info" title="Why TAGs beat glycogen for storage">
                (1) more <strong>reduced</strong> → ~9 kcal/g vs ~4 kcal/g; (2) <strong>anhydrous</strong> — no water of hydration; (3) packed densely in lipid droplets. Past exam: "Lipids are <em>more reduced</em> than carbohydrates" — TRUE; "Lipids are more chemically inert" — also true but the energetic answer is the strongest.
              </Callout>
            </>
          )
        },
        {
          id: 'fa-naming',
          title: 'Fatty acid nomenclature (Δ vs ω) & saturation',
          content: (
            <>
              <ul>
                <li>FA: long-chain carboxylic acid, almost always with even number of C, almost always unbranched.</li>
                <li><strong>Saturated</strong>: no C=C → straight, packs tightly → solid at room T (e.g., 16:0 palmitate, 18:0 stearate).</li>
                <li><strong>Cis-unsaturated</strong>: C=C bonds kink the chain → liquid (most plant oils, fish oils).</li>
                <li><strong>Δ-notation</strong>: counts double bonds from the COOH. Example: 18:1Δ9 = oleate, 18:3Δ9,12,15 = α-linolenate.</li>
                <li><strong>ω-notation</strong>: counts from the methyl end. ω-3 (ALA, EPA, DHA) and ω-6 (linoleic) are <strong>essential</strong> — humans can\'t synthesize them.</li>
              </ul>
              <Callout kind="warn" title="Past exam — incorrectly named FA">
                "Which is incorrectly named: A) 12:0, B) 16:1Δ9, C) 20:5Δ4,6,8,12,15?" → C: a Δ4,6,... naming with <strong>conjugated 4,6 double bonds</strong> is impossible in a real FA (we count from one end and double bonds must be separated by at least one CH₂). So C — incorrectly named.
              </Callout>
              <Callout kind="info" title="Liquid at room T">
                "Which FA is most likely liquid at room temperature?" → the one with the most <em>cis</em> double bonds (most kinks). 18:3Δ9,12,15 (linolenate) wins over 16:0 (palmitate, solid) and 20:0 (arachidate, solid).
              </Callout>
              <Callout kind="info" title="Bird/plant uses">
                "Which is most likely part of a substance birds use for waterproofing or plants for evaporation?" → A long-chain <strong>wax</strong> (e.g., long-chain ester of fatty alcohol + FA). Cuticle waxes, beeswax esters.
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'membranes',
      title: '§2 Membranes — structure, dynamics, asymmetry',
      blocks: [
        {
          id: 'fluid-mosaic',
          title: 'Fluid mosaic & lipid rafts',
          content: (
            <>
              {FluidMosaicSVG}
              <ul>
                <li><strong>Cholesterol</strong> provides rigidity to plasma membranes. Past exam: "Which lipid provides rigidity to plasma membranes?" → <strong>cholesterol</strong>.</li>
                <li><strong>Lipid rafts</strong> are ordered microdomains rich in <em>cholesterol</em>, sphingolipids, and specific proteins. Past exam: "Which is NOT TRUE about a lipid raft?" → "They are consistent with the traditional fluid-mosaic model" (FALSE — rafts contradict pure fluid-mosaic by being ordered, microdomain features). Rafts ARE dynamic, ordered, contain cholesterol, contain specific proteins.</li>
                <li>Asymmetry: PC and SM in outer leaflet; PE, PS, PI in inner. Maintained by ATP-dependent <strong>flippases</strong> and <strong>floppases</strong>; <strong>scramblases</strong> dissipate it (ATP-independent, e.g., in apoptosis when PS flips outward).</li>
              </ul>
              <Callout kind="info" title="Past exam — flippase/floppase/scramblase logic">
                Lateral lipid diffusion is fast and spontaneous; <em>vertical</em> (transbilayer) flipping is NOT spontaneous because polar heads have to traverse the hydrophobic core. So flippases/floppases couple to ATP to push lipids across, and scramblases just facilitate spontaneous (slow) random equilibration.
              </Callout>
            </>
          )
        },
        {
          id: 'membrane-proteins',
          title: 'Membrane proteins: integral, peripheral, lipid-anchored',
          content: (
            <>
              <ul>
                <li><strong>Integral</strong>: span the bilayer; require detergents to extract; hydrophobic transmembrane segment usually α-helical.</li>
                <li><strong>Peripheral</strong>: bind one face by polar interactions; come off with high salt or pH change; "responsive to + or − in environment."</li>
                <li><strong>Lipid-anchored (GPI, palmitoyl, prenyl)</strong>: covalently linked to a lipid that inserts into one leaflet.</li>
              </ul>
              <Callout kind="info" title="Past exam — bilayer diagram">
                Label "hydrophilic groups and/or charged amino acids" on the integral protein\'s exterior loops, "hydrophobic anchors" inside the bilayer, "GPI-linked protein" tethered by lipid, "peripheral protein" sitting on a surface, "cholesterol" wedged between phospholipid tails, "sterol rings + hydrocarbon" pointing into the bilayer, "hydrophilic sugar chain" pointing into water.
              </Callout>
            </>
          )
        },
        {
          id: 'abo-blood',
          title: 'ABO blood types & glycosphingolipids',
          content: (
            <>
              <Callout kind="warn" title="Past exam — pick the TRUE statement">
                <strong>"A patient with type O blood has enzymes that attach multiple different monosaccharides to the terminal position of their type-determining glycosphingolipids."</strong> FALSE — the type O ancestor (H antigen) lacks the enzymes that attach the type-specific terminal sugar.
                <br />The TRUE statement: "<strong>A patient with type O blood lacks enzymes needed to attach fatty acids to sphingosine</strong>" — also FALSE; sphingolipid synthesis is intact.
                <br />The right answer: <strong>"A patient with type B blood has the same number of monosaccharides attached to their type-determining glycosphingolipids as a patient with type A."</strong> The A and B antigens differ only in the terminal sugar (GalNAc for A, Gal for B), not the count.
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'fa-catab',
      title: '§3 FA catabolism — activation, transport, β-oxidation',
      blocks: [
        {
          id: 'activation',
          title: 'Activation & carnitine shuttle',
          content: (
            <>
              <ul>
                <li>Step 1 (cytosol): FA + CoA + ATP → acyl-CoA + AMP + 2P_i. Costs the energy of 2 ATP (because ATP → AMP).</li>
                <li><strong>Carnitine shuttle</strong> moves long-chain acyl groups across the mitochondrial inner membrane: CPT-I (outer, regulated by malonyl-CoA), translocase, CPT-II (inner).</li>
                <li><strong>Malonyl-CoA</strong> (the first committed metabolite of FA synthesis) inhibits CPT-I — "don\'t burn what you\'re busy making."</li>
              </ul>
            </>
          )
        },
        {
          id: 'beta-ox',
          title: 'β-oxidation: 4 steps per round',
          content: (
            <>
              {FAOxidationSVG}
              <Callout kind="tip" title="Energy yield from palmitate (16:0)">
                7 rounds × (1 FADH₂ + 1 NADH) + 8 acetyl-CoA. Each acetyl-CoA → 3 NADH + 1 FADH₂ + 1 GTP via CAC. ETC: NADH ~2.5 ATP, FADH₂ ~1.5 ATP. Total ~106 ATP/palmitate (minus 2 for activation = ~104 net).
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'pdh-cac',
      title: '§4 PDH & CAC — the central hub',
      blocks: [
        {
          id: 'pdh',
          title: 'Pyruvate dehydrogenase complex (PDH) — bridge into CAC',
          content: (
            <>
              <Theme>PDH is a <strong>multienzyme complex</strong> in the mitochondrial <strong>matrix</strong>. It oxidatively decarboxylates pyruvate → acetyl-CoA + CO₂ + NADH, irreversibly. Substrate channeling between E1, E2, E3 prevents loss of intermediates.</Theme>
              <ul>
                <li><strong>Coenzymes (5)</strong>: TPP (E1, attacks pyruvate), lipoamide (E2, accepts acetyl), CoA-SH (E2, receives acetyl), FAD (E3, oxidizes lipoamide back), NAD⁺ (E3, regenerates FAD).</li>
                <li>Past exam matches: "TPP attacks the central carbon of pyruvate" · "NAD⁺ oxidizes FADH₂" · "CoA-SH accepts the acetyl from reduced lipoamide" · "TPP attaches and attacks the central C in pyruvate" · "FAD accepts H from reduced lipoamide".</li>
                <li><strong>Regulation</strong>: PDH-kinase phosphorylates PDH and <em>inactivates</em> it (high ATP, NADH, acetyl-CoA → kinase ON). PDH-phosphatase removes the phosphate, activating PDH (high ADP, Ca²⁺ → phosphatase ON).</li>
              </ul>
              <Callout kind="info" title="Past exam — illustrating principles">
                "Which of the following principles is NOT illustrated by PDH? A) when working in a complex, enzymes can prevent loss of products due to substrate channeling B) organisms use a few key currencies redundantly C) ATP hydrolysis is often coupled to drive unfavorable biosynthetic reactions D) higher organisms use membrane-bound organelles to control metabolism." → <strong>(C)</strong>: PDH does NOT use ATP hydrolysis to drive its reaction; it captures energy as NADH and acetyl-CoA.
              </Callout>
              <Callout kind="info" title="Past exam — where is PDH?">
                <strong>(c) in the mitochondrial matrix</strong>. Not the cytoplasm; not the membrane.
              </Callout>
            </>
          )
        },
        {
          id: 'cac-cycle',
          title: 'Citric acid cycle — 8 reactions',
          content: (
            <>
              {CACSummarySVG}
              <ul>
                <li><strong>Per acetyl-CoA</strong>: 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP (or ATP), 0 net OAA (regenerates).</li>
                <li><strong>Per glucose</strong>: 4 CO₂, 6 NADH, 2 FADH₂, 2 GTP, 2 acetyl-CoA used.</li>
                <li><strong>Number of redox steps between pyruvate → end of one CAC turn</strong>: count NADH/FADH₂-producing steps. Pyruvate → acetyl-CoA = 1 (NADH). Inside CAC: ICDH (NADH), αKG-DH (NADH), succinate-DH (FADH₂), malate-DH (NADH) = 4. Total = <strong>5</strong>. Past exam says "<strong>4</strong> redox reactions between pyruvate and one turn of CAC" — this depends on whether you include the PDH step. The exam answer was <strong>4</strong> (counting only inside CAC).</li>
              </ul>
            </>
          )
        },
        {
          id: 'cac-regulation',
          title: 'CAC regulation — three control points',
          content: (
            <>
              <Table
                headers={["Enzyme", "Activator", "Inhibitor"]}
                rows={[
                  ["Citrate synthase", "ADP, OAA (substrate)", "ATP, NADH, citrate, succinyl-CoA"],
                  ["Isocitrate DH", "ADP, Ca²⁺", "ATP, NADH"],
                  ["α-KG DH", "Ca²⁺", "succinyl-CoA, NADH, ATP"]
                ]}
              />
              <Callout kind="info" title="Past exam — flux example">
                "How would CAC respond to a rapid increase in [NADH]/[NAD⁺] in the matrix?" → <strong>CAC would slow down</strong> (NADH inhibits ICDH and α-KGDH; ETC backs up → CAC backs up).
              </Callout>
              <Callout kind="warn" title="Anaplerotic vs cataplerotic">
                Anaplerotic: replenishes CAC intermediates (e.g., pyruvate carboxylase: pyruvate → OAA; transamination of glutamate → α-KG). Cataplerotic: removes intermediates for biosynthesis (citrate → cytosolic Ac-CoA for FA synthesis; α-KG / OAA → AAs).
              </Callout>
              <Callout kind="info" title="Past exam — radio-labeled C tracking">
                "Oxaloacetate uniformly labeled with ¹⁴C condenses with unlabeled acetyl-CoA. After ONE pass of CAC back to OAA, what fraction of original radioactivity remains in OAA?" → <strong>1/2</strong>. Reason: CAC releases 2 CO₂ from the 6-carbon citrate, but the released carbons come from the OAA pool half the time due to symmetry of succinate (a symmetric intermediate). So half the original radioactivity remains.
              </Callout>
            </>
          )
        },
        {
          id: 'cac-irreg',
          title: 'CAC misconceptions / past-exam discriminators',
          content: (
            <>
              <Callout kind="info" title="Common past-exam discriminators">
                <ul>
                  <li>"Which is a redox reaction in the CAC?" → <strong>dehydrogenation</strong> (e.g., succinate DH; NOT isomerization, NOT substrate-level phosphorylation, NOT Claisen condensation).</li>
                  <li>"Which is NOT TRUE of citrate synthase?" → <strong>"Binding of OAA to citrate synthase causes a conformational change"</strong> is TRUE. The FALSE option is "the induced fit ensures the enzyme is most active when oxaloacetate levels are LOW" — actually most active when OAA is HIGH.</li>
                  <li>"Malonate is a competitive inhibitor of <strong>succinate dehydrogenase</strong>." If added during pyruvate oxidation, what accumulates? → <strong>succinate</strong> (the substrate of the blocked enzyme).</li>
                </ul>
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'etc-atp',
      title: '§5 ETC, ATP synthase & oxidative phosphorylation',
      blocks: [
        {
          id: 'etc',
          title: 'ETC complexes I–IV',
          content: (
            <>
              {ETCArrangementSVG}
              <Table
                headers={["Complex", "Reaction", "Pumps H⁺?"]}
                rows={[
                  ["I (NADH-Q oxidoreductase)", "NADH → Q · QH₂", "yes (4 H⁺)"],
                  ["II (Succinate-Q reductase)", "FADH₂ → Q · QH₂", "no"],
                  ["III (Q-cyt c oxidoreductase)", "QH₂ → cyt c (Q-cycle)", "yes (4 H⁺ net)"],
                  ["IV (cyt c oxidase)", "cyt c → ½O₂ → H₂O", "yes (2 H⁺)"]
                ]}
              />
              <Callout kind="info" title="Past exam — electron carriers">
                "When electrons are collected by the citric acid cycle in the acetyl group of acetyl-CoA and up fully oxidized: what carriers deliver them to ETC?" → <strong>NADH and FADH₂</strong>. NADH from PDH, ICDH, αKG-DH, MDH; FADH₂ from succinate DH (and from β-oxidation).
              </Callout>
              <Callout kind="info" title="Past exam — Are ALL Q reductase enzymes regulated identically?">
                Complex II is also part of CAC (succinate DH), so it is NOT pumping H⁺; the others (I, III, IV) do pump.
              </Callout>
            </>
          )
        },
        {
          id: 'atp-synthase',
          title: 'ATP synthase (Complex V) — the rotary motor',
          content: (
            <>
              <ul>
                <li>F₀ part: membrane-embedded, c-ring rotates as H⁺ flows down its electrochemical gradient.</li>
                <li>F₁ part: 3 αβ catalytic sites cycle through L (loose), T (tight, makes ATP), O (open, releases ATP) conformations as the γ subunit rotates.</li>
                <li>~3 H⁺ flow per ATP synthesized; with proton transport, ~4 H⁺/ATP total.</li>
                <li>Coupling: NADH → ~2.5 ATP; FADH₂ → ~1.5 ATP.</li>
              </ul>
              <Callout kind="tip" title="Uncouplers (DNP, thermogenin/UCP1)">
                Uncouplers carry H⁺ across the inner membrane, dissipating the proton gradient as heat. Brown adipose tissue uses UCP1 for non-shivering thermogenesis. ATP synthesis stops; oxygen consumption skyrockets.
              </Callout>
            </>
          )
        },
        {
          id: 'oxphos-misc',
          title: 'OxPhos quick discriminators',
          content: (
            <>
              <Callout kind="info" title="Past exam — anaplerotic / catabolism / etc">
                <ul>
                  <li>"Which is true regarding anaplerotic reactions?" → <strong>"They can replenish CAC intermediates using non-CAC enzymes."</strong></li>
                  <li>"Which is true regarding the role of CAC in anabolism?" → <strong>"All of the above"</strong> — CAC intermediates can be used to make FAs and sterols, diverse AAs, and neurotransmitters.</li>
                  <li>"Which functional group captures an acetyl group to make acetyl-CoA?" → <strong>thiol</strong> (SH on CoA).</li>
                  <li>"Calcium ions ___ the citric acid cycle." → <strong>STIMULATE</strong> (Ca²⁺ activates ICDH and α-KGDH).</li>
                  <li>"PDH is allosterically <em>inhibited</em>/<em>activated</em>/<em>unaffected</em> when ADP levels are LOW." → <strong>INHIBITED</strong> (because if ADP is low, ATP is high → PDH-kinase ON → PDH inactive).</li>
                </ul>
              </Callout>
            </>
          )
        }
      ]
    }
  ],
  keyReview: {
    themes: [
      { title: 'Reduction = energy', desc: 'Lipids store more energy than carbs because they\'re more reduced. Oxidation in CAC + ETC harvests reducing power as NADH/FADH₂ and converts it into ATP via the proton gradient.' },
      { title: 'Compartmentalization is regulation', desc: 'Glycolysis (cytosol) → pyruvate → mito (PDH, CAC, ETC). Carnitine shuttle controls FA entry. Malonyl-CoA blocks β-oxidation when FA synthesis is on.' },
      { title: 'Substrate-level vs oxidative phosphorylation', desc: 'Substrate-level: PGK, PK in glycolysis; succinyl-CoA synthetase in CAC. OxPhos: ATP synthase using H⁺ gradient.' },
      { title: 'Common control logic — energy charge', desc: 'High ATP / NADH / acetyl-CoA → catabolism off (PDH inactive, CAC throttled). High ADP / AMP / Ca²⁺ → catabolism on.' },
      { title: 'Membranes are fluid mosaic + asymmetric', desc: 'Fluidity from phospholipids and cholesterol; asymmetry maintained by ATP-driven flippases. Lipid rafts deviate from pure fluid mosaic.' }
    ],
    vocab: [
      { term: 'Triacylglycerol', def: 'Three FAs esterified to glycerol — the energy storage molecule.' },
      { term: 'Phospholipid', def: 'Glycerol or sphingosine + 2 FAs + phosphate-headgroup; bilayer-forming.' },
      { term: 'Lipid raft', def: 'Cholesterol/sphingolipid-rich ordered membrane microdomain — concentrates specific proteins.' },
      { term: 'β-oxidation', def: '4-step spiral that shortens an acyl-CoA by 2 C, producing 1 acetyl-CoA, 1 NADH, 1 FADH₂ per round.' },
      { term: 'Carnitine shuttle', def: 'CPT-I/translocase/CPT-II transports long-chain acyl groups across mito inner membrane.' },
      { term: 'Anaplerotic', def: 'Reaction that replenishes CAC intermediates (pyruvate carboxylase is the classic).' },
      { term: 'Substrate channeling', def: 'Multi-enzyme complex hands intermediates from one active site to the next without releasing them — PDH is the canonical example.' },
      { term: 'Proton-motive force', def: 'Δp = ΔpH + Δψ across inner mito membrane; drives ATP synthase.' },
      { term: 'Uncoupler', def: 'Carries H⁺ across the inner membrane, collapsing Δp — generates heat instead of ATP (DNP, UCP1).' }
    ],
    laws: [
      { name: 'Mitchell\'s chemiosmotic hypothesis', desc: 'ETC pumps H⁺ creating an electrochemical gradient; ATP synthase uses gradient to phosphorylate ADP.' },
      { name: 'Compartmentation rule', desc: 'PDH, CAC, ETC, β-oxidation are all in mitochondria; FA synthesis and PPP are cytosolic.' },
      { name: 'Energy charge rule', desc: 'High ATP/ADP+AMP shuts down catabolism, ramps up biosynthesis; low charge → opposite.' }
    ],
    methods: [
      { name: 'Radio-tracing', desc: '¹⁴C-labeling tells you which carbons survive a metabolic round; classic CAC question (1/2 of original after one turn).' },
      { name: 'Inhibitor probing', desc: 'Malonate blocks succinate DH → succinate accumulates. Rotenone blocks Complex I.' },
      { name: 'Detergent lysis', desc: 'Extracts integral membrane proteins by disrupting hydrophobic interactions.' }
    ],
    diagrams: [
      { title: 'CAC at a glance', visual: CACSummarySVG },
      { title: 'ETC arrangement', visual: ETCArrangementSVG },
      { title: 'β-oxidation 4 steps', visual: FAOxidationSVG },
      { title: 'Fluid mosaic membrane', visual: FluidMosaicSVG }
    ]
  },
  questions: [
    {
      q: 'Which is unique to lipids relative to carbs / proteins / NAs?',
      choices: [
        'Lipids can be energy storage molecules',
        'Lipid molecules contain mostly H, C, O',
        'Lipids are mostly hydrophobic',
        'Lipids are polymers'
      ],
      correct: 2,
      explanation: 'Lipids are defined by hydrophobicity, not by a polymer backbone. They are not polymers.',
      difficulty: 'E'
    },
    {
      q: 'A reason fats are better than carbs for long-term energy storage:',
      choices: [
        'Lipids are more oxidized than carbohydrates',
        'Lipids are stored in the same cells that have the enzymes to metabolize them',
        'Lipids are more chemically reduced (yield more ATP per gram on oxidation) AND store anhydrously',
        'Lipids freeze in the liver more easily than glycogen'
      ],
      correct: 2,
      explanation: 'Reduced FAs release more energy on oxidation; anhydrous storage saves mass. Lipids are MORE reduced (not oxidized).',
      difficulty: 'E'
    },
    {
      q: 'Which fatty acid is most likely LIQUID at room temperature?',
      choices: ['16:0 (palmitate)', '18:0 (stearate)', '18:3Δ9,12,15 (α-linolenate)', '20:0 (arachidate)'],
      correct: 2,
      explanation: 'Cis double bonds kink the chain → can\'t pack → low melting point → liquid at room T. α-linolenate has 3 cis double bonds.',
      difficulty: 'E'
    },
    {
      q: 'A plasma membrane is given rigidity primarily by:',
      choices: ['Cholesterol', 'Triacylglycerols', 'GPI-anchored proteins', 'PIP₂ in inner leaflet'],
      correct: 0,
      explanation: 'Cholesterol stiffens fluid bilayers (and fluidizes very ordered ones at low T). It is NOT in TAGs (those are storage); not in GPI; PIP₂ is signaling.',
      difficulty: 'E'
    },
    {
      q: 'Which is NOT TRUE of a lipid raft?',
      choices: [
        'They are dynamic (ever-changing)',
        'They are an ordered microdomain of plasma membranes',
        'They have a relatively high concentration of cholesterol',
        'They include specific proteins',
        'They are consistent with the traditional fluid-mosaic model of membrane structure'
      ],
      correct: 4,
      explanation: 'Rafts contradict the pure fluid-mosaic model by being ORDERED microdomains. Everything else is true.',
      difficulty: 'M'
    },
    {
      q: 'Which is NOT illustrated by the pyruvate dehydrogenase complex?',
      choices: [
        'When working in a complex, enzymes can prevent loss of products to substrate channeling',
        'Organisms use a few key currencies redundantly between pathways (NAD⁺)',
        'ATP hydrolysis is often coupled to drive unfavorable biosynthetic reactions',
        'Higher organisms use membrane-bound organelles to control metabolism'
      ],
      correct: 2,
      explanation: 'PDH does not use ATP hydrolysis to drive its reaction; it captures energy from oxidation in NADH and acetyl-CoA. The other three are illustrated.',
      difficulty: 'M'
    },
    {
      q: 'Where in a eukaryotic cell is the PDH complex located?',
      choices: ['Cytoplasm', 'Mitochondrial intermembrane space', 'Mitochondrial matrix', 'Inner mitochondrial membrane'],
      correct: 2,
      explanation: 'PDH lives in the matrix, where it has access to incoming pyruvate (via pyruvate carrier) and the CAC enzymes.',
      difficulty: 'E'
    },
    {
      q: 'Which is a redox reaction in the citric acid cycle?',
      choices: ['Isomerization by dehydration/rehydration', 'Substrate-level phosphorylation', 'Claisen condensation', 'Dehydrogenation'],
      correct: 3,
      explanation: 'Dehydrogenations (ICDH, αKG-DH, succinate-DH, malate-DH) are the redox steps. Aconitase is isomerization; SCS is substrate-level phosphorylation; citrate synthase is a Claisen condensation.',
      difficulty: 'E'
    },
    {
      q: 'Oxaloacetate uniformly ¹⁴C-labeled condenses with unlabeled acetyl-CoA. After ONE pass of CAC, what fraction of the original ¹⁴C remains in OAA?',
      choices: ['all', '1/2', '1/3', '1/4', 'none'],
      correct: 1,
      explanation: 'Two carbons leave as CO₂ at ICDH and αKG-DH. Because succinate is symmetric, half the released CO₂ comes from the original OAA carbons. Net: half of the original label remains in OAA.',
      difficulty: 'H'
    },
    {
      q: 'Malonate is a competitive inhibitor of succinate dehydrogenase. If added during isolated mitochondrial pyruvate oxidation, which intermediate accumulates?',
      choices: ['Succinate', 'Succinate dehydrogenase (it builds up)', 'Fumarate', 'FADH₂'],
      correct: 0,
      explanation: 'Block the enzyme → its substrate (succinate) accumulates upstream. Fumarate and downstream metabolites would decrease.',
      difficulty: 'M'
    },
    {
      q: 'Which is NOT TRUE about citrate synthase function?',
      choices: [
        'Binding of oxaloacetate causes a conformational change',
        'The induced fit of citrate synthase ensures it is most active when oxaloacetate is LOW',
        'Citrate synthase catalyzes a condensation reaction',
        'Acetyl-CoA cannot bind citrate synthase until OAA has induced a conformational change'
      ],
      correct: 1,
      explanation: 'Induced fit makes the enzyme most active when its substrate (OAA) is HIGH — that\'s when the active site closes correctly. The other three are accurate.',
      difficulty: 'M'
    },
    {
      q: 'Which is TRUE regarding ANAPLEROTIC reactions?',
      choices: [
        'They can replenish CAC intermediates using non-CAC enzymes',
        'They produce glutamate by transamination of α-ketoglutarate in all tissues',
        'They require enzymes that are essential in all tissues',
        'They produce pyruvate to maintain constant CAC intermediate levels'
      ],
      correct: 0,
      explanation: 'Anaplerosis: pyruvate → OAA via pyruvate carboxylase, glutamate → α-KG via transamination, etc. It refills CAC intermediates from non-CAC sources.',
      difficulty: 'M'
    },
    {
      q: 'How does CAC respond to a rapid INCREASE in [NADH]/[NAD⁺] in the matrix?',
      choices: [
        'CAC rate would not change',
        'CAC rate would have decreased flux (slow down)',
        'CAC would speed up to consume the NADH',
        'CAC would slow down only because there is no NAD⁺ left'
      ],
      correct: 1,
      explanation: 'Both effects: NADH allosterically inhibits ICDH and α-KGDH, AND there is less NAD⁺ available for the dehydrogenases. CAC slows.',
      difficulty: 'M'
    },
    {
      q: 'Which functional group captures an acetyl group to make acetyl-CoA?',
      choices: ['hydroxyl', 'carboxyl', 'thiol (–SH)', 'amine'],
      correct: 2,
      explanation: 'CoA has a free –SH on its β-mercaptoethylamine arm. The thioester acetyl-CoA is high-energy because thioesters are less resonance-stabilized than oxoesters.',
      difficulty: 'E'
    },
    {
      q: 'Calcium ions ___ the citric acid cycle.',
      choices: ['Stimulate', 'Inhibit', 'Play no role in', 'Only act on PDH'],
      correct: 0,
      explanation: 'Ca²⁺ activates isocitrate DH and α-KG DH (and PDH-phosphatase). Mitochondrial Ca²⁺ rises with workload → CAC speeds up.',
      difficulty: 'E'
    },
    {
      q: 'PDH is allosterically ___ when ADP levels are LOW.',
      choices: ['Inhibited', 'Activated', 'Unaffected', 'Reset to baseline'],
      correct: 0,
      explanation: 'Low ADP → high ATP → PDH-kinase active → phosphorylates and inactivates PDH. PDH is inhibited.',
      difficulty: 'M'
    },
    {
      q: 'Match: ___ attaches and attacks the central carbon of pyruvate during PDH catalysis.',
      choices: ['NAD⁺', 'CoA-SH', 'TPP (thiamine pyrophosphate)', 'FADH₂'],
      correct: 2,
      explanation: 'TPP\'s carbanion attacks pyruvate\'s C2 to form hydroxyethyl-TPP, kicking off CO₂.',
      difficulty: 'M'
    },
    {
      q: 'Which is a vesicle as opposed to a micelle?',
      choices: [
        'Single layer of amphipathic molecules around an aqueous interior',
        'Bilayer arrangement enclosing an aqueous interior',
        'Random aggregate of triacylglycerols',
        'Pure cholesterol crystal'
      ],
      correct: 1,
      explanation: 'Vesicle = bilayer enclosing water. Micelle = single layer with hydrophobic tails inside, no aqueous interior. Both form spontaneously to minimize hydrophobic exposure to water.',
      difficulty: 'E'
    },
    {
      q: 'For palmitate (16:0), how many ROUNDS of β-oxidation are required?',
      choices: ['8', '7', '16', '4'],
      correct: 1,
      explanation: 'Each round removes 2 carbons. From 16 → need 7 rounds to make 8 acetyl-CoA (the last round produces 2 acetyl-CoAs from a 4-carbon intermediate).',
      difficulty: 'M'
    },
    {
      q: 'Which complex of the ETC does NOT pump protons across the inner mitochondrial membrane?',
      choices: ['I', 'II', 'III', 'IV'],
      correct: 1,
      explanation: 'Complex II (succinate-Q reductase = succinate DH) does not pump H⁺. Therefore FADH₂ entering at II yields fewer ATP than NADH entering at I.',
      difficulty: 'E'
    }
  ]
};

export default exam;
