import React from 'react';
import { Callout, Table, Theme, SvgFrame, AnchorImage, ImgGrid } from '../components/Visual.jsx';

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
              <Theme>The one property all lipids share is <strong>hydrophobicity</strong>. They are NOT polymers, do NOT all carry a –COOH, do NOT all have long chains (sterols). Past exam: "Which characteristic is unique to lipids?" → "<strong>Lipids are mostly hydrophobic.</strong>"</Theme>
              <AnchorImage
                src="e4_lip_006.jpeg"
                alt="Saturated and unsaturated fatty acid chains showing tight vs loose packing"
                caption="Saturated FAs (left) pack tightly because their straight zig-zag chains nestle together — solid at room T (e.g., butter, lard). cis-Unsaturated FAs (right) have kinked chains that prevent dense packing — liquid at room T (oils). This single principle explains every membrane-fluidity, melting-point, and solubility question on the exam."
                source="Lehninger fig (BCH 335 lecture, Lipids in-class)"
              />
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
                (1) more <strong>reduced</strong> → ~9 kcal/g vs ~4 kcal/g for carbs. (2) <strong>anhydrous</strong> — no water of hydration. (3) packed densely in lipid droplets. Past exam: "Lipids are <em>more reduced</em> than carbohydrates" — TRUE.
              </Callout>
            </>
          )
        },
        {
          id: 'fa-naming',
          title: 'Fatty acid nomenclature (Δ vs ω) & saturation',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e4_lip_001.png"
                  alt="Structures of saturated fatty acids and unsaturated fatty acids showing zig-zag chains and cis double bonds"
                  caption="Saturated (top) vs unsaturated (bottom) FA structures. The cis double bond introduces a ~30° kink that prevents tight packing. trans double bonds (uncommon naturally; common in partially hydrogenated oils) are nearly straight and pack like saturated."
                  source="BCH 335 lecture (Lipids in-class)"
                />
                <AnchorImage
                  src="e4_lip_013.png"
                  alt="Omega-3 fatty acids: ALA (18:3), EPA (20:5), DHA (22:6)"
                  caption="ω-3 essential fatty acids. ω-3 means the last double bond is 3 carbons from the methyl end. ALA (18:3, plant), EPA (20:5, fish), DHA (22:6, fish) — humans convert ALA → EPA → DHA inefficiently, so dietary fish/flax matters for brain membranes and clotting balance."
                  source="BCH 335 lecture (Lipids in-class)"
                />
              </ImgGrid>
              <ul>
                <li>FA: long-chain carboxylic acid, almost always with even number of C, almost always unbranched.</li>
                <li><strong>Saturated</strong>: no C=C → straight, packs tightly → solid at room T (palmitate 16:0, stearate 18:0).</li>
                <li><strong>Cis-unsaturated</strong>: kinked chains → liquid (oleate 18:1Δ9, linolenate 18:3Δ9,12,15).</li>
                <li><strong>Δ-notation</strong>: counts double bonds from –COOH. <strong>ω-notation</strong>: counts from –CH₃ end. ω-3 (ALA, EPA, DHA) and ω-6 (linoleic) are <strong>essential</strong>.</li>
              </ul>
              <Callout kind="warn" title="Past exam — incorrectly named FA">
                "Which is incorrectly named: A) 12:0, B) 16:1Δ9, C) 20:5Δ4,6,8,12,15?" → <strong>C</strong>: a "Δ4,6,..." naming has only one CH₂ between consecutive double bonds, which violates the methylene-interrupted rule (cis double bonds in real FAs must be separated by at least one CH₂).
              </Callout>
              <Callout kind="info" title="Past exam — liquid at room T">
                "Which FA is most likely liquid at room temperature?" → most cis double bonds wins. 18:3Δ9,12,15 (linolenate) over 16:0 (palmitate, solid) and 20:0 (arachidate, solid).
              </Callout>
              <Callout kind="info" title="Past exam — bird/plant uses">
                "Which is most likely part of a substance birds use for waterproofing or plants for evaporation prevention?" → <strong>a long-chain wax</strong> (long-chain FA esterified to long-chain alcohol). Cuticle waxes, beeswax esters.
              </Callout>
            </>
          )
        },
        {
          id: 'tag-storage',
          title: 'Triacylglycerols — the storage form',
          content: (
            <>
              <AnchorImage
                src="e4_lip_023.jpeg"
                alt="Triacylglycerol structure: glycerol esterified with three fatty acids"
                caption="TAG: glycerol backbone (3 hydroxyls) esterified with three fatty acids. The three FA tails can be different ('mixed TAG'). Stored in lipid droplets in adipocytes — anhydrous, dense, 6× more energy per gram than glycogen. Past exam: 'Lipids are stored in the same cells with enzymes to metabolize them' is a TRUE distractor that's NOT the strongest answer."
                source="Lehninger fig (BCH 335 lecture)"
              />
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
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e4_mem_004.jpeg"
                  alt="Fluid mosaic membrane model with phospholipids, cholesterol, integral and peripheral proteins"
                  caption="Fluid mosaic model: phospholipid bilayer (yellow heads, gray tails) is fluid; integral proteins (blue) span the bilayer with hydrophobic transmembrane domains (often α-helical); peripheral proteins bind one face by polar interactions; cholesterol (orange) is wedged between phospholipid tails to modulate fluidity."
                  source="BCH 335 lecture (Membranes)"
                />
                <AnchorImage
                  src="e4_mem_007.jpeg"
                  alt="Lipid raft microdomain rich in cholesterol, sphingolipids, and specific proteins"
                  caption="Lipid raft: an ordered microdomain enriched in cholesterol, sphingolipids, and GPI-anchored proteins. Raft-resident proteins concentrate in these patches for signaling/trafficking. Lipid rafts CONTRADICT the strict fluid-mosaic model by being ordered."
                />
              </ImgGrid>
              <ul>
                <li><strong>Cholesterol</strong> provides RIGIDITY to plasma membranes. Past exam: "Which lipid provides rigidity to plasma membranes?" → <strong>cholesterol</strong>.</li>
                <li><strong>Lipid rafts</strong>: dynamic, ordered, cholesterol-rich, contain specific proteins. Past exam: "Which is NOT TRUE about a lipid raft?" → <strong>"They are consistent with the traditional fluid-mosaic model"</strong> — that's the FALSE option (rafts contradict pure fluid mosaic).</li>
                <li>Asymmetry: PC and SM in outer leaflet; PE, PS, PI in inner. Maintained by ATP-dependent <strong>flippases / floppases</strong>. <strong>Scramblases</strong> dissipate asymmetry (ATP-independent, e.g., in apoptosis when PS flips outward).</li>
              </ul>
              <Callout kind="info" title="Past exam — flippase / floppase / scramblase logic">
                Lateral lipid diffusion is fast and spontaneous. <em>Vertical</em> (transbilayer) flipping is NOT spontaneous — polar heads have to traverse the hydrophobic core. So flippases/floppases couple to ATP to push lipids across; scramblases facilitate spontaneous random equilibration.
              </Callout>
            </>
          )
        },
        {
          id: 'membrane-proteins',
          title: 'Membrane proteins: integral, peripheral, lipid-anchored',
          content: (
            <>
              <AnchorImage
                src="e4_mem_002.jpeg"
                alt="Cross-section of plasma membrane showing integral, peripheral, GPI-anchored proteins, and cholesterol"
                caption="Bilayer cross-section. Label everything: hydrophilic head groups face water; hydrophobic tails inside; integral proteins have hydrophobic transmembrane segments and hydrophilic loops outside; peripheral proteins sit on a surface (responsive to charge/polar environment); GPI-linked proteins are anchored by a lipid; cholesterol's sterol rings + hydrocarbon tail point into the bilayer; sugar chains extend into water on the outer face."
                source="BCH 335 lecture (Membranes in-class)"
              />
              <ul>
                <li><strong>Integral</strong>: span the bilayer; require detergents to extract; transmembrane segment usually α-helical.</li>
                <li><strong>Peripheral</strong>: bind one face by polar interactions; come off with high salt or pH change.</li>
                <li><strong>Lipid-anchored (GPI, palmitoyl, prenyl)</strong>: covalently linked to a lipid that inserts into one leaflet.</li>
              </ul>
            </>
          )
        },
        {
          id: 'abo-blood',
          title: 'ABO blood types & glycosphingolipids',
          content: (
            <>
              <Callout kind="warn" title="Past exam — pick the TRUE statement">
                The TRUE statement: <strong>"A patient with type B blood has the same number of monosaccharides attached to their type-determining glycosphingolipids as a patient with type A blood."</strong> The A and B antigens differ only in the TERMINAL sugar (GalNAc for A, Gal for B), not in the count. The other distractors (type O lacks enzymes to attach FAs to sphingosine; type AB makes anti-O antibodies) are FALSE.
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
                <li>Step 1 (cytosol): FA + CoA + ATP → acyl-CoA + AMP + 2P_i. Costs the energy of TWO ATP equivalents (because ATP → AMP).</li>
                <li><strong>Carnitine shuttle</strong> moves long-chain acyl groups across the inner mitochondrial membrane: CPT-I (outer) → translocase → CPT-II (inner).</li>
                <li><strong>Malonyl-CoA</strong> (first committed metabolite of FA SYNTHESIS) inhibits CPT-I — "don't burn what you're busy making."</li>
              </ul>
            </>
          )
        },
        {
          id: 'beta-ox',
          title: 'β-oxidation: 4 steps per round (mnemonic: O-H-O-T)',
          content: (
            <>
              <Table
                headers={["Step", "Reaction", "Product / cofactor"]}
                rows={[
                  ["1. Oxidation", "acyl-CoA → trans-Δ²-enoyl-CoA", "FAD → FADH₂"],
                  ["2. Hydration", "enoyl-CoA → 3-hydroxyacyl-CoA", "+ H₂O across the double bond"],
                  ["3. Oxidation", "3-hydroxyacyl-CoA → 3-ketoacyl-CoA", "NAD⁺ → NADH"],
                  ["4. Thiolysis", "3-ketoacyl-CoA → acyl-CoA(n−2) + acetyl-CoA", "+ CoA-SH attacks β-carbon"],
                ]}
              />
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
          id: 'stage-overview',
          title: 'The 3-stage view of fuel oxidation',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e4_cac_000.jpeg"
                  alt="Stage 1 acetyl-CoA production from amino acids, fatty acids, and glucose via PDH and beta-oxidation"
                  caption="Stage 1 — Acetyl-CoA production. Carbohydrates (glycolysis → pyruvate → PDH), fatty acids (β-oxidation), and ketogenic amino acids all converge on acetyl-CoA. PDH is the IRREVERSIBLE entry of carb-derived carbon into oxidation."
                  source="Lehninger fig (BCH 335 lecture, CAC InClass)"
                />
                <AnchorImage
                  src="e4_cac_011.jpeg"
                  alt="Stage 2 acetyl-CoA oxidation through citric acid cycle producing CO2, NADH, FADH2"
                  caption="Stage 2 — Acetyl-CoA oxidation in the CAC. The 2-carbon acetyl group enters; 2 CO₂ leave; 4 oxidation steps generate 3 NADH + 1 FADH₂; 1 substrate-level GTP. The cycle regenerates oxaloacetate, which combines with the next acetyl-CoA."
                />
              </ImgGrid>
              <AnchorImage
                src="e4_cac_022.jpeg"
                alt="Stage 3 electron transfer chain coupled to oxidative phosphorylation"
                caption="Stage 3 — Electron transfer & oxidative phosphorylation. NADH and FADH₂ from stages 1+2 deliver electrons to the ETC, pumping H⁺ across the inner membrane. The proton gradient drives ATP synthase to make ~26 ATP per glucose. This is the bulk of cellular ATP."
                source="Lehninger fig (BCH 335 lecture)"
              />
              <Table
                headers={['Stage', 'Location', 'Fuel in', 'Key products']}
                rows={[
                  ['Glycolysis', 'Cytosol', 'Glucose', '2 pyruvate, 2 ATP, 2 NADH'],
                  ['PDH reaction', 'Mito. matrix', 'Pyruvate', 'Acetyl-CoA, CO₂, NADH'],
                  ['Citric acid cycle', 'Mito. matrix', 'Acetyl-CoA', '2 CO₂, 3 NADH, FADH₂, GTP'],
                  ['ETC + OxPhos', 'Inner mito. membrane', 'NADH, FADH₂, O₂', 'H₂O, ~26 ATP']
                ]}
              />
            </>
          )
        },
        {
          id: 'pdh',
          title: 'Pyruvate dehydrogenase complex (PDH) — bridge into CAC',
          content: (
            <>
              <Theme>PDH is a <strong>multienzyme complex</strong> in the mitochondrial <strong>matrix</strong>. It oxidatively decarboxylates pyruvate → acetyl-CoA + CO₂ + NADH, irreversibly. <strong>Substrate channeling</strong> between E1, E2, E3 prevents loss of intermediates.</Theme>
              <AnchorImage
                src="e4_cac_013.jpeg"
                alt="Pyruvate dehydrogenase complex reaction diagram with TPP, lipoate, FAD cofactors"
                caption="PDH overall reaction: pyruvate + CoA-SH + NAD⁺ → acetyl-CoA + CO₂ + NADH. Three catalytic enzymes (E1, E2, E3) and FIVE cofactors (TPP on E1, lipoamide on E2, CoA-SH co-substrate, FAD on E3, NAD⁺ co-substrate). The lipoyllysine swinging arm of E2 channels the acetyl group from E1 → E2 → E3."
                source="Lehninger fig (BCH 335 lecture)"
              />
              <Table
                headers={['Cofactor', 'Vitamin source', 'Bound to', 'Role']}
                rows={[
                  ['TPP', 'B1 (thiamine)', 'E1 (prosthetic)', 'Decarboxylation; attacks central C of pyruvate'],
                  ['Lipoyllysine', '(lipoic acid)', 'E2 (prosthetic)', 'Swinging arm carrier; oxidizes/reduces'],
                  ['CoA-SH', 'B5 (pantothenate)', 'Co-substrate', 'Thiol that captures the acetyl group'],
                  ['FAD', 'B2 (riboflavin)', 'E3 (prosthetic)', 'Re-oxidizes lipoyl disulfide'],
                  ['NAD⁺', 'B3 (niacin)', 'Co-substrate', 'Final e⁻ acceptor → NADH']
                ]}
              />
              <Callout kind="info" title="Past exam — match cofactor to direct role">
                "TPP attaches and attacks the central C of pyruvate" · "NAD⁺ oxidizes FADH₂" · "CoA-SH accepts the acetyl from reduced lipoamide" · "FAD accepts H from reduced lipoamide".
              </Callout>
              <Callout kind="warn" title="What PDH does NOT illustrate (past exam trap)">
                "Which is NOT illustrated by PDH? A) substrate channeling B) redundant currencies C) ATP hydrolysis driving unfavorable biosynthetic reactions D) membrane organelles" → <strong>(C)</strong>. PDH is driven by oxidative decarboxylation; it does NOT use ATP hydrolysis.
              </Callout>
              <Callout kind="info" title="Past exam — Where is PDH?">
                <strong>Mitochondrial matrix.</strong> Soluble. NOT cytoplasm; NOT membrane.
              </Callout>
              <p><strong>Regulation</strong>: PDH-kinase phosphorylates and INACTIVATES PDH (high ATP, NADH, acetyl-CoA → kinase ON). PDH-phosphatase removes the phosphate to ACTIVATE PDH (high ADP, Ca²⁺ → phosphatase ON).</p>
            </>
          )
        },
        {
          id: 'cac-cycle',
          title: 'Citric acid cycle — 8 reactions, 4 redox steps',
          content: (
            <>
              <AnchorImage
                src="e4_cac_020.jpeg"
                alt="Complete citric acid cycle showing all 8 enzymes, intermediates, and energy yield"
                caption="One CAC turn: acetyl-CoA + OAA → citrate (citrate synthase, condensation, ΔG° = −32.2 kJ/mol — irreversible). Citrate → isocitrate (aconitase, isomerization). Isocitrate → α-KG + CO₂ + NADH (ICDH, REDOX, irreversible). α-KG → succinyl-CoA + CO₂ + NADH (αKG-DH, REDOX, irreversible). Succinyl-CoA → succinate + GTP (substrate-level phosphorylation). Succinate → fumarate + FADH₂ (succinate DH/Complex II, REDOX). Fumarate → malate (fumarase, hydration). Malate → OAA + NADH (MDH, REDOX). Net: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂ per acetyl-CoA."
                source="Lehninger fig (BCH 335 lecture)"
              />
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e4_cac_005.jpeg"
                  alt="Citrate synthase mechanism showing acetyl-CoA condensation with oxaloacetate"
                  caption="Citrate synthase mechanism: Asp acts as base to deprotonate the methyl carbon of acetyl-CoA → enolate intermediate → attacks the carbonyl C of OAA → citroyl-CoA → hydrolysis releases citrate + CoA-SH. ΔG° = −32.2 kJ/mol → irreversible. Heavily regulated (inhibited by ATP, NADH, succinyl-CoA, citrate)."
                />
                <AnchorImage
                  src="e4_cac_012.jpeg"
                  alt="Alpha-ketoglutarate dehydrogenase complex reaction"
                  caption="α-KG dehydrogenase complex: structurally analogous to PDH (same E1/E2/E3 architecture; same five cofactors). αKG + NAD⁺ + CoA-SH → succinyl-CoA + CO₂ + NADH. Heavily regulated by NADH, succinyl-CoA, ATP (product inhibition + energy charge sensing)."
                />
              </ImgGrid>
              <Callout kind="info" title="Past exam — number of redox reactions">
                "How many redox reactions occur between pyruvate and one turn of CAC?" → counting only INSIDE the CAC: ICDH (NADH), αKG-DH (NADH), succinate-DH (FADH₂), MDH (NADH) = <strong>4</strong>. (If you include PDH, it's 5.)
              </Callout>
            </>
          )
        },
        {
          id: 'cac-regulation',
          title: 'CAC regulation — three control points',
          content: (
            <>
              <AnchorImage
                src="e4_cac_023.jpeg"
                alt="CAC regulation diagram showing activators and inhibitors at citrate synthase, isocitrate DH, and alpha-ketoglutarate DH"
                caption="CAC regulation summary. Three irreversible/regulated steps: citrate synthase (inhibited by ATP, NADH, succinyl-CoA, citrate; activated by ADP, OAA), isocitrate DH (activated by ADP, Ca²⁺; inhibited by ATP, NADH), αKG-DH (activated by Ca²⁺; inhibited by succinyl-CoA, NADH, ATP). Pattern: high energy charge → cycle slows; high Ca²⁺ (workload signal) → cycle speeds up."
                source="Lehninger fig (BCH 335 lecture)"
              />
              <Table
                headers={["Enzyme", "Activator", "Inhibitor"]}
                rows={[
                  ["Citrate synthase", "ADP, OAA (substrate)", "ATP, NADH, citrate, succinyl-CoA"],
                  ["Isocitrate DH", "ADP, Ca²⁺", "ATP, NADH"],
                  ["α-KG DH", "Ca²⁺", "succinyl-CoA, NADH, ATP"]
                ]}
              />
              <Callout kind="info" title="Past exam — flux example">
                "How would CAC respond to a rapid increase in [NADH]/[NAD⁺]?" → <strong>CAC would slow down</strong>. NADH allosterically inhibits ICDH and αKG-DH; less NAD⁺ available for the dehydrogenases.
              </Callout>
              <Callout kind="warn" title="Anaplerotic vs cataplerotic">
                Anaplerotic = REPLENISHES CAC intermediates (pyruvate carboxylase: pyruvate → OAA; transamination of glutamate → α-KG). Cataplerotic = REMOVES intermediates for biosynthesis (citrate → cytosolic Ac-CoA for FA synthesis; α-KG / OAA → AAs).
              </Callout>
              <Callout kind="info" title="Past exam — radio-labeled C tracking">
                "OAA uniformly labeled with ¹⁴C condenses with unlabeled acetyl-CoA. After ONE pass of CAC back to OAA, what fraction of original radioactivity remains in OAA?" → <strong>1/2</strong>. CAC releases 2 CO₂ from the 6-carbon citrate, but because succinate is a SYMMETRIC molecule, half the released CO₂ comes from the original OAA carbons. So half remains.
              </Callout>
            </>
          )
        },
        {
          id: 'cac-discriminators',
          title: 'CAC misconceptions / past-exam discriminators',
          content: (
            <>
              <Callout kind="info" title="Common past-exam discriminators">
                <ul>
                  <li>"Which is a redox reaction in the CAC?" → <strong>dehydrogenation</strong>. NOT isomerization, NOT substrate-level phosphorylation, NOT Claisen condensation.</li>
                  <li>"Which is NOT TRUE of citrate synthase?" → <strong>"the induced fit ensures the enzyme is most active when OAA levels are LOW"</strong>. Induced fit makes the enzyme active when OAA is HIGH.</li>
                  <li>"Malonate is a competitive inhibitor of <strong>succinate dehydrogenase</strong>." If added, what accumulates? → <strong>succinate</strong> (substrate of the blocked enzyme).</li>
                  <li>"In what molecule do the carbons of acetyl-CoA end up FULLY OXIDIZED?" → <strong>CO₂</strong>.</li>
                  <li>"Which functional group captures an acetyl group to make acetyl-CoA?" → <strong>thiol</strong> (–SH on CoA).</li>
                  <li>"Calcium ions ___ the citric acid cycle." → <strong>STIMULATE</strong> (Ca²⁺ activates ICDH and α-KGDH).</li>
                  <li>"PDH is allosterically ___ when ADP levels are LOW." → <strong>INHIBITED</strong> (low ADP = high ATP → PDH-kinase ON → PDH inactive).</li>
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
              <AnchorImage
                src="e4_etc_006.jpeg"
                alt="Electron transport chain showing complexes I, II, III, IV in inner mitochondrial membrane"
                caption="Full ETC arrangement (intermembrane space ABOVE, matrix BELOW). Electrons flow from NADH (Complex I) and FADH₂ (Complex II/succinate DH) through ubiquinone (Q) → Complex III → cytochrome c → Complex IV → ½ O₂ → H₂O. Complexes I, III, and IV pump H⁺ across the inner membrane. Complex II does NOT pump H⁺ — that's why FADH₂ yields fewer ATP than NADH."
                source="Lehninger fig (BCH 335 lecture, ETC)"
              />
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e4_etc_001.jpeg"
                  alt="Complex I structure showing membrane arm, matrix arm, FMN, and Fe-S clusters"
                  caption="Complex I (NADH:Q oxidoreductase): the largest complex. Two arms — one membrane-embedded (proton pumping), one matrix-protruding (where NADH binds and electrons enter via FMN, then a series of Fe-S clusters). Each NADH oxidized → 4 H⁺ pumped."
                />
                <AnchorImage
                  src="e4_etc_002.jpeg"
                  alt="Ubiquinone, semiquinone radical, and ubiquinol redox states"
                  caption="Ubiquinone (Q) is a small lipid-soluble e⁻ carrier in the inner membrane. Cycles among Q (oxidized) ↔ semiquinone (·QH) ↔ QH₂ (ubiquinol, fully reduced). Carries 2e⁻ + 2H⁺ at a time."
                />
              </ImgGrid>
              <Table
                headers={["Complex", "Reaction", "Pumps H⁺?"]}
                rows={[
                  ["I (NADH:Q oxidoreductase)", "NADH → Q · QH₂", "yes (4 H⁺)"],
                  ["II (Succinate:Q reductase = succinate DH)", "FADH₂ → Q · QH₂", "NO"],
                  ["III (Q-cyt c oxidoreductase)", "QH₂ → cyt c (Q-cycle)", "yes (4 H⁺ net)"],
                  ["IV (cyt c oxidase)", "cyt c → ½O₂ → H₂O", "yes (2 H⁺)"]
                ]}
              />
              <Callout kind="info" title="Past exam — electron carriers">
                "When CAC electrons are collected and fully oxidized, which carriers deliver them to the ETC?" → <strong>NADH and FADH₂</strong>. NADH (PDH, ICDH, αKG-DH, MDH) → Complex I; FADH₂ (succinate DH, β-oxidation) → Complex II.
              </Callout>
            </>
          )
        },
        {
          id: 'atp-synthase',
          title: 'ATP synthase (Complex V) — the rotary motor',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e4_etc_017.jpeg"
                  alt="ATP synthase F1 head top view showing alpha and beta subunits with binding states"
                  caption="ATP synthase F₁ (top view). Three β catalytic subunits cycle through three conformations as the central γ-stalk rotates: O (open, binds ADP+Pi), L (loose, holds them), T (tight, makes ATP). One full γ rotation produces 3 ATP."
                  source="Lehninger fig (BCH 335 lecture, ATP synthesis)"
                />
                <AnchorImage
                  src="e4_etc_018.jpeg"
                  alt="ATP synthase rotary mechanism with binding-change model"
                  caption="Binding-change model. As H⁺ flows through F₀ down its electrochemical gradient, the c-ring + γ-stalk rotates; each rotation step forces the β subunits through O→L→T conformational cycle, releasing one ATP per 120° step. ~3 H⁺ per ATP synthesized; with proton transport into the matrix for Pi, ~4 H⁺/ATP total."
                />
              </ImgGrid>
              <ul>
                <li>F₀ is membrane-embedded; the c-ring rotates as H⁺ flows.</li>
                <li>F₁ is the catalytic head with 3 αβ pairs.</li>
                <li>NADH → ~2.5 ATP. FADH₂ → ~1.5 ATP.</li>
              </ul>
              <Callout kind="tip" title="Uncouplers (DNP, thermogenin/UCP1)">
                Uncouplers carry H⁺ across the inner membrane, dissipating the proton gradient as HEAT. ATP synthesis stops; oxygen consumption skyrockets. Brown adipose tissue uses UCP1 for non-shivering thermogenesis. DNP was an obesity drug in the 1930s — fatal at high doses.
              </Callout>
            </>
          )
        },
        {
          id: 'oxphos-misc',
          title: 'OxPhos quick discriminators',
          content: (
            <>
              <Callout kind="info" title="Past-exam quick discriminators">
                <ul>
                  <li>"Which is true regarding ANAPLEROTIC reactions?" → <strong>"They can replenish CAC intermediates using non-CAC enzymes."</strong></li>
                  <li>"Which is true regarding the role of CAC in anabolism?" → <strong>"All of the above"</strong> — CAC intermediates make FAs/sterols, AAs, neurotransmitters.</li>
                  <li>"Which complex of the ETC does NOT pump H⁺?" → <strong>Complex II</strong>.</li>
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
      { title: 'Reduction = energy', desc: 'Lipids store more energy than carbs because they\'re more reduced. Oxidation in CAC + ETC harvests reducing power as NADH/FADH₂ and converts it to ATP via the proton gradient.' },
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
      { name: 'Energy charge rule', desc: 'High ATP/(ADP+AMP) shuts down catabolism, ramps up biosynthesis; low charge → opposite.' }
    ],
    methods: [
      { name: 'Radio-tracing', desc: '¹⁴C-labeling tells you which carbons survive a metabolic round; classic CAC question (1/2 of original after one turn).' },
      { name: 'Inhibitor probing', desc: 'Malonate blocks succinate DH → succinate accumulates. Rotenone blocks Complex I.' },
      { name: 'Detergent lysis', desc: 'Extracts integral membrane proteins by disrupting hydrophobic interactions.' }
    ],
    diagrams: []
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
      explanation: 'Lipids are defined by hydrophobicity. They are not polymers.',
      difficulty: 'E'
    },
    {
      q: 'A reason fats are better than carbs for long-term energy storage:',
      choices: [
        'Lipids are more oxidized than carbohydrates',
        'Lipids are stored in the same cells with the metabolizing enzymes',
        'Lipids are more chemically reduced AND store anhydrously',
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
      explanation: 'Cis double bonds kink the chain → can\'t pack → low melting point. α-linolenate has 3 cis double bonds.',
      difficulty: 'E'
    },
    {
      q: 'A plasma membrane is given rigidity primarily by:',
      choices: ['Cholesterol', 'Triacylglycerols', 'GPI-anchored proteins', 'PIP₂ in inner leaflet'],
      correct: 0,
      explanation: 'Cholesterol modulates membrane fluidity and provides rigidity.',
      difficulty: 'E'
    },
    {
      q: 'Which is NOT TRUE of a lipid raft?',
      choices: [
        'They are dynamic',
        'They are an ordered microdomain of plasma membranes',
        'They have a relatively high concentration of cholesterol',
        'They include specific proteins',
        'They are consistent with the traditional fluid-mosaic model of membrane structure'
      ],
      correct: 4,
      explanation: 'Rafts are ORDERED microdomains, contradicting the pure fluid-mosaic model.',
      difficulty: 'M'
    },
    {
      q: 'Which is NOT illustrated by the pyruvate dehydrogenase complex?',
      choices: [
        'Substrate channeling between active sites',
        'Use of redundant currencies (NAD⁺) between pathways',
        'ATP hydrolysis coupled to drive an unfavorable reaction',
        'Mitochondrial localization'
      ],
      correct: 2,
      explanation: 'PDH does not use ATP hydrolysis. It captures energy as NADH and acetyl-CoA via oxidative decarboxylation.',
      difficulty: 'M'
    },
    {
      q: 'Where in a eukaryotic cell is the PDH complex located?',
      choices: ['Cytoplasm', 'Mitochondrial intermembrane space', 'Mitochondrial matrix', 'Inner mitochondrial membrane'],
      correct: 2,
      explanation: 'PDH is a soluble matrix complex.',
      difficulty: 'E'
    },
    {
      q: 'Which is a redox reaction in the citric acid cycle?',
      choices: [
        'Isomerization by dehydration/rehydration',
        'Substrate-level phosphorylation',
        'Claisen condensation',
        'Dehydrogenation'
      ],
      correct: 3,
      explanation: 'Dehydrogenations (ICDH, αKG-DH, succinate-DH, malate-DH) are the redox steps.',
      difficulty: 'E'
    },
    {
      q: 'OAA uniformly ¹⁴C-labeled condenses with unlabeled acetyl-CoA. After ONE pass of CAC, what fraction of the original ¹⁴C remains in OAA?',
      choices: ['all', '1/2', '1/3', '1/4', 'none'],
      correct: 1,
      explanation: 'CAC releases 2 CO₂ per turn; succinate is symmetric, so half the released CO₂ comes from the original OAA carbons.',
      difficulty: 'H'
    },
    {
      q: 'Malonate is a competitive inhibitor of succinate dehydrogenase. If added during isolated mitochondrial pyruvate oxidation, which intermediate accumulates?',
      choices: ['Succinate', 'Succinate dehydrogenase', 'Fumarate', 'FADH₂'],
      correct: 0,
      explanation: 'Block the enzyme → its substrate (succinate) accumulates upstream.',
      difficulty: 'M'
    },
    {
      q: 'Which is NOT TRUE about citrate synthase function?',
      choices: [
        'OAA binding causes a conformational change',
        'The induced fit ensures the enzyme is most active when OAA is LOW',
        'It catalyzes a condensation reaction',
        'Acetyl-CoA cannot bind until OAA has induced a conformational change'
      ],
      correct: 1,
      explanation: 'Induced fit makes the enzyme most active when OAA is HIGH.',
      difficulty: 'M'
    },
    {
      q: 'Which is TRUE regarding ANAPLEROTIC reactions?',
      choices: [
        'They can replenish CAC intermediates using non-CAC enzymes',
        'They produce glutamate by transamination of α-KG in all tissues',
        'They require enzymes essential in all tissues',
        'They produce pyruvate to maintain CAC intermediate levels'
      ],
      correct: 0,
      explanation: 'Anaplerosis = non-CAC reactions that refill CAC intermediates (e.g., pyruvate carboxylase: pyruvate → OAA).',
      difficulty: 'M'
    },
    {
      q: 'How would CAC respond to a rapid INCREASE in [NADH]/[NAD⁺] in the matrix?',
      choices: [
        'CAC rate would not change',
        'CAC rate would have decreased flux (slow down)',
        'CAC would speed up to consume the NADH',
        'CAC would slow only because there is no NAD⁺ left'
      ],
      correct: 1,
      explanation: 'Both effects: NADH allosterically inhibits ICDH and αKG-DH AND there is less NAD⁺ for the dehydrogenases.',
      difficulty: 'M'
    },
    {
      q: 'Which functional group captures an acetyl group to make acetyl-CoA?',
      choices: ['hydroxyl', 'carboxyl', 'thiol (–SH)', 'amine'],
      correct: 2,
      explanation: 'CoA has a free –SH on its β-mercaptoethylamine arm. The thioester is high-energy.',
      difficulty: 'E'
    },
    {
      q: 'Calcium ions ___ the citric acid cycle.',
      choices: ['Stimulate', 'Inhibit', 'Play no role in', 'Only act on PDH'],
      correct: 0,
      explanation: 'Ca²⁺ activates ICDH and αKG-DH (and PDH-phosphatase).',
      difficulty: 'E'
    },
    {
      q: 'PDH is allosterically ___ when ADP levels are LOW.',
      choices: ['Inhibited', 'Activated', 'Unaffected', 'Reset to baseline'],
      correct: 0,
      explanation: 'Low ADP → high ATP → PDH-kinase active → phosphorylates and inactivates PDH.',
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
        'Bilayer enclosing an aqueous interior',
        'Random aggregate of triacylglycerols',
        'Pure cholesterol crystal'
      ],
      correct: 1,
      explanation: 'Vesicle = bilayer enclosing water. Micelle = single layer with hydrophobic tails inside, no aqueous interior.',
      difficulty: 'E'
    },
    {
      q: 'For palmitate (16:0), how many ROUNDS of β-oxidation are required?',
      choices: ['8', '7', '16', '4'],
      correct: 1,
      explanation: 'Each round removes 2 carbons. 16 → need 7 rounds; the last round produces 2 acetyl-CoAs from a 4-carbon intermediate.',
      difficulty: 'M'
    },
    {
      q: 'Which complex of the ETC does NOT pump protons?',
      choices: ['I', 'II', 'III', 'IV'],
      correct: 1,
      explanation: 'Complex II (succinate-Q reductase = succinate DH) does not pump H⁺. Therefore FADH₂ entering at II yields fewer ATP than NADH at I.',
      difficulty: 'E'
    }
  ]
};

export default exam;
