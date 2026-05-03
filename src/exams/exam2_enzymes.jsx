import React from 'react';
import { Callout, Table, Theme, SvgFrame } from '../components/Visual.jsx';

const MMCurveSVG = (
  <SvgFrame width={460} height={220} label="Michaelis–Menten: hyperbolic v vs [S]. Vmax = saturation; Km = [S] at v = ½Vmax. Km is INVERSELY related to apparent affinity for substrate.">
    <line x1="50" y1="190" x2="430" y2="190" stroke="#475569" />
    <line x1="50" y1="20" x2="50" y2="190" stroke="#475569" />
    <text x="240" y="208" fontSize="10" fill="#475569">[S]</text>
    <text x="20" y="100" fontSize="10" fill="#475569" transform="rotate(-90 20 100)">v₀</text>
    <path d="M50,190 Q90,150 130,110 Q200,55 280,40 Q360,32 430,30" fill="none" stroke="#0284c7" strokeWidth="2.5" />
    <line x1="50" y1="30" x2="430" y2="30" stroke="#94a3b8" strokeDasharray="4 3" />
    <text x="370" y="22" fontSize="10" fill="#475569">Vmax</text>
    <line x1="50" y1="110" x2="430" y2="110" stroke="#94a3b8" strokeDasharray="4 3" />
    <text x="370" y="105" fontSize="10" fill="#475569">½ Vmax</text>
    <line x1="160" y1="110" x2="160" y2="190" stroke="#dc2626" strokeDasharray="3 3" />
    <text x="155" y="200" fontSize="10" fill="#dc2626">Km</text>
  </SvgFrame>
);

const LBPlotSVG = (
  <SvgFrame width={460} height={220} label="Lineweaver–Burk (double-reciprocal): y-intercept = 1/Vmax; x-intercept = −1/Km; slope = Km/Vmax.">
    <line x1="200" y1="20" x2="200" y2="200" stroke="#475569" />
    <line x1="40" y1="150" x2="430" y2="150" stroke="#475569" />
    <text x="430" y="145" fontSize="10" fill="#475569">1/[S]</text>
    <text x="205" y="20" fontSize="10" fill="#475569">1/v</text>
    <line x1="80" y1="190" x2="400" y2="60" stroke="#0284c7" strokeWidth="2.5" />
    <circle cx="200" cy="125" r="4" fill="#16a34a" />
    <text x="208" y="125" fontSize="10" fill="#16a34a">y-int = 1/Vmax</text>
    <circle cx="140" cy="150" r="4" fill="#dc2626" />
    <text x="78" y="170" fontSize="10" fill="#dc2626">x-int = −1/Km</text>
  </SvgFrame>
);

const InhibitorLBSVG = (
  <SvgFrame width={460} height={250} label="Lineweaver–Burk inhibitor patterns. Competitive: same y-int (Vmax), worse Km. Uncompetitive: parallel — both 1/Vmax and 1/Km change. Mixed/noncompetitive: same x-int (pure noncompetitive) or different both.">
    <text x="20" y="30" fontSize="12" fill="#0f172a">Three patterns on Lineweaver–Burk</text>
    {/* Competitive */}
    <g transform="translate(20,50)">
      <text x="0" y="10" fontSize="11" fill="#475569">Competitive</text>
      <line x1="60" y1="0" x2="60" y2="120" stroke="#475569" />
      <line x1="0" y1="100" x2="140" y2="100" stroke="#475569" />
      <line x1="20" y1="120" x2="135" y2="40" stroke="#0284c7" strokeWidth="2" />
      <line x1="35" y1="120" x2="135" y2="55" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="60" cy="78" r="3" fill="#16a34a" />
      <text x="0" y="135" fontSize="9" fill="#475569">same Vmax · ↑Km</text>
    </g>
    {/* Uncompetitive */}
    <g transform="translate(170,50)">
      <text x="0" y="10" fontSize="11" fill="#475569">Uncompetitive</text>
      <line x1="60" y1="0" x2="60" y2="120" stroke="#475569" />
      <line x1="0" y1="100" x2="140" y2="100" stroke="#475569" />
      <line x1="10" y1="115" x2="135" y2="40" stroke="#0284c7" strokeWidth="2" />
      <line x1="20" y1="115" x2="145" y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
      <text x="0" y="135" fontSize="9" fill="#475569">parallel · both ↓ same factor</text>
    </g>
    {/* Mixed/Noncompetitive */}
    <g transform="translate(320,50)">
      <text x="0" y="10" fontSize="11" fill="#475569">Mixed / Noncomp.</text>
      <line x1="60" y1="0" x2="60" y2="120" stroke="#475569" />
      <line x1="0" y1="100" x2="140" y2="100" stroke="#475569" />
      <line x1="20" y1="120" x2="135" y2="40" stroke="#0284c7" strokeWidth="2" />
      <line x1="20" y1="120" x2="135" y2="20" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
      <text x="0" y="135" fontSize="9" fill="#475569">same x-int = pure noncomp.</text>
    </g>
  </SvgFrame>
);

const exam = {
  id: 2,
  title: 'Exam 2 — Enzyme Kinetics & Mechanism',
  subtitle: 'Catalysis · MM kinetics · inhibitors · chymotrypsin · regulation',
  sections: [
    {
      id: 'enzyme-basics',
      title: '§1 What enzymes do (and don\'t do)',
      blocks: [
        {
          id: 'role',
          title: 'Role of an enzyme in a catalyzed reaction',
          content: (
            <>
              <Theme>An enzyme <strong>lowers the activation energy</strong> by stabilizing the transition state. It does <strong>NOT</strong> change ΔG°, ΔG, the equilibrium, or which products are favored — just the kinetic barrier.</Theme>
              <ul>
                <li>Speeds <em>both</em> forward and reverse reactions equally.</li>
                <li>Does NOT shift the equilibrium concentration of products.</li>
                <li>Does NOT make a reaction more thermodynamically favorable.</li>
                <li>Does NOT bind a substrate intermediate that "cannot be converted back" — the TS analog binds tightly but is reversible.</li>
              </ul>
              <Callout kind="info" title="Past exam framing">
                "The role of an enzyme in an enzyme-catalyzed reaction is to:" → <strong>increase the rate at which substrate is converted into product</strong>. Always.
              </Callout>
              <SvgFrame width={460} height={210} label="Reaction coordinate: the catalyzed reaction (orange) has a lower activation energy than uncatalyzed (blue). ΔG (S → P) is the same.">
                <line x1="40" y1="180" x2="430" y2="180" stroke="#475569" />
                <line x1="40" y1="20" x2="40" y2="180" stroke="#475569" />
                <text x="220" y="200" fontSize="10" fill="#475569">reaction coordinate →</text>
                <text x="20" y="100" fontSize="10" fill="#475569" transform="rotate(-90 20 100)">free energy</text>
                <path d="M70,140 Q160,40 260,140 Q330,180 400,165" fill="none" stroke="#0284c7" strokeWidth="2" />
                <text x="120" y="36" fontSize="10" fill="#0284c7">uncatalyzed Ea</text>
                <path d="M70,140 Q170,90 260,140 Q330,180 400,165" fill="none" stroke="#f97316" strokeWidth="2.5" />
                <text x="180" y="86" fontSize="10" fill="#f97316">catalyzed Ea (lower)</text>
                <line x1="70" y1="140" x2="400" y2="165" stroke="#94a3b8" strokeDasharray="3 3" />
                <text x="60" y="135" fontSize="11" fill="#16a34a">S</text>
                <text x="405" y="160" fontSize="11" fill="#16a34a">P</text>
              </SvgFrame>
            </>
          )
        },
        {
          id: 'binding-models',
          title: 'Lock-and-key vs induced-fit',
          content: (
            <>
              <Table
                headers={["Model", "Description", "Use case"]}
                rows={[
                  ["Lock-and-key", "Active site is rigid and pre-shaped to fit substrate exactly", "Useful first-pass; rare in real enzymes"],
                  ["Induced-fit", "Substrate binding causes the enzyme to change shape, ensuring catalysis only when right substrate is bound", "Most enzymes (e.g., hexokinase, citrate synthase). Substrate selectivity, prevents wasteful catalysis."]
                ]}
              />
              <Callout kind="tip" title="Why induced fit matters for hexokinase">
                Hexokinase binds glucose → induced fit closes around it → ATP can now phosphorylate glucose. Without induced fit, water (similar size) could occupy the site and ATP would hydrolyze wastefully. Past exam tests this directly: induced fit "ensures the enzyme is most active when substrate levels are high (oxaloacetate for citrate synthase)."
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'mm-kinetics',
      title: '§2 Michaelis–Menten kinetics',
      subtitle: 'Vmax, Km, kcat, kcat/Km',
      blocks: [
        {
          id: 'mm-eqn',
          title: 'The MM equation and the steady-state assumption',
          content: (
            <>
              <Theme>v = (Vmax · [S]) / (Km + [S]). Steady state: <strong>[ES] is constant</strong> — formed as fast as it is broken down.</Theme>
              {MMCurveSVG}
              <Callout kind="info" title="Past exam — which is the steady-state assumption?">
                The CORRECT statement: "The concentration of the enzyme–substrate complex remains constant because its rate of formation equals its rate of breakdown." NOT: rate is zero (that's equilibrium). NOT: enzyme is fully saturated (that's high [S] only). NOT: substrate concentration doesn't change (that's a different assumption sometimes used).
              </Callout>
              <ul>
                <li><strong>Vmax</strong> (units M/s): max rate at saturating [S]. Vmax = kcat × [E]ₜ.</li>
                <li><strong>Km</strong> (units M): [S] at v = ½Vmax. <em>Lower</em> Km = higher apparent affinity; <em>higher</em> Km = lower affinity.</li>
                <li><strong>kcat</strong> (turnover number, s⁻¹): how many substrate molecules each active site converts per second at saturation. kcat = Vmax / [E]ₜ.</li>
                <li><strong>kcat / Km</strong> (specificity constant, M⁻¹s⁻¹): catalytic efficiency, useful for comparing enzymes or substrates.</li>
              </ul>
            </>
          )
        },
        {
          id: 'lb-plot',
          title: 'Lineweaver–Burk (double-reciprocal) plots',
          content: (
            <>
              {LBPlotSVG}
              <ul>
                <li>Take 1/v on y, 1/[S] on x → straight line.</li>
                <li>y-intercept = 1/Vmax; x-intercept = −1/Km; slope = Km/Vmax.</li>
                <li>Past exam calculation: from a LB plot with [E] = 333 μM and y-int = 0.15 (1/(M/s)) → Vmax = 1/0.15 = 6.67 M/s. kcat = Vmax/[E] = 6.67/0.333 = ~20 s⁻¹ → "0.5 mM" answer in the worked-example formats.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      id: 'inhibitors',
      title: '§3 Inhibitors — the four types',
      blocks: [
        {
          id: 'inhibitor-table',
          title: 'How each inhibitor changes Km, Vmax, and the LB plot',
          content: (
            <>
              <Table
                headers={["Type", "Where it binds", "Apparent Km", "Vmax", "LB plot"]}
                rows={[
                  ["Competitive", "Free E (active site, mimics S)", "↑", "unchanged", "Same y-int, different slope, different x-int"],
                  ["Uncompetitive", "ES only (allosterically)", "↓", "↓ (same factor)", "Parallel lines"],
                  ["Mixed", "Both E and ES (different affinities)", "↑ or ↓", "↓", "Lines cross to left of y-axis"],
                  ["Noncompetitive (pure)", "Both E and ES with same affinity", "unchanged", "↓", "Lines cross on x-axis (same Km)"],
                  ["Irreversible (e.g., PMSF)", "Covalent on active site", "n/a", "↓ proportional to functional E", "looks like noncompetitive — but no Km change because the surviving E is unchanged"]
                ]}
              />
              {InhibitorLBSVG}
              <Callout kind="warn" title="PMSF = irreversible serine-active-site inactivator">
                PMSF (phenyl-methane-sulfonyl-fluoride) covalently sulfonylates the active-site serine of serine proteases. Past exam: "The covalent bond is not cleaved by the enzyme. This is an example of what kind of inhibition?" → <strong>irreversible</strong>.
              </Callout>
              <Callout kind="info" title="Reading a kinetics graph">
                "If enzymes P and Z catalyze the same reaction but kcat of Z is much higher than P, which must be true when the enzyme is saturated with substrate?" → <strong>Vmax for P is higher than that of Z</strong>... wait — careful. kcat = Vmax/[E]. Higher kcat → higher Vmax at the same [E]. So at saturation, Z is faster (more product per second). The exam version asks the inverse and expects "P makes more product per unit time per molecule" if kcat_P &gt; kcat_Z.
              </Callout>
            </>
          )
        },
        {
          id: 'allostery',
          title: 'Allosteric (cooperative) regulation — sigmoidal kinetics',
          content: (
            <>
              <ul>
                <li>Allosteric enzymes are typically multi-subunit; binding at one site changes affinity at another.</li>
                <li>Kinetics curve is <strong>sigmoidal</strong>, not hyperbolic.</li>
                <li>Examples on the final: <strong>ATCase</strong> (CTP feedback inhibitor; ATP activator); <strong>PFK-1</strong> (AMP/F-2,6-BP activate; ATP/citrate inhibit); <strong>glycogen phosphorylase</strong> (covalent modification + AMP/ATP).</li>
              </ul>
              <Callout kind="info" title="ATCase past-exam options">
                <ul>
                  <li>"ATCase exhibits classic MM kinetics" — FALSE (sigmoidal).</li>
                  <li>"ATP acts as a competitive inhibitor at low [S] and noncompetitive at high [S]" — FALSE; ATP is an allosteric <em>activator</em>.</li>
                  <li>"ATCase is allosterically inhibited by CTP" — TRUE (feedback from end product of pyrimidine synthesis).</li>
                  <li>"CTP binds the active site irreversibly, reducing turnover" — FALSE; CTP binds the regulatory subunit, reversibly.</li>
                  <li>"Aspartate binding causes a shift to R state, illustrating cooperativity" — TRUE.</li>
                </ul>
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'serine-protease',
      title: '§4 Serine proteases & chymotrypsin mechanism',
      blocks: [
        {
          id: 'catalytic-triad',
          title: 'The catalytic triad: Ser–His–Asp',
          content: (
            <>
              <Theme>Chymotrypsin uses a <strong>charge-relay system</strong>: Asp orients His, which deprotonates Ser to attack the substrate's carbonyl. Ser becomes a strong nucleophile only because of the triad.</Theme>
              <SvgFrame width={460} height={170} label="Catalytic triad: Asp–H···His–H···Ser–OH. His acts as a general base, abstracting Ser's proton; Asp stabilizes the protonated His.">
                <text x="40" y="40" fontSize="12" fill="#0f172a">Catalytic triad</text>
                <text x="60" y="100" fontSize="13" fill="#0284c7">Asp (–COO⁻)</text>
                <text x="180" y="100" fontSize="13" fill="#7c3aed">His (imidazole)</text>
                <text x="320" y="100" fontSize="13" fill="#dc2626">Ser (–OH)</text>
                <line x1="135" y1="95" x2="180" y2="95" stroke="#475569" strokeDasharray="3 2" />
                <line x1="245" y1="95" x2="320" y2="95" stroke="#475569" strokeDasharray="3 2" />
                <text x="80" y="140" fontSize="10" fill="#475569">"charge relay" — Asp orients His → His base activates Ser → Ser nucleophile attacks carbonyl C of substrate</text>
              </SvgFrame>
              <p>Mechanism in 2 phases:</p>
              <ol>
                <li><strong>Acylation</strong>: Ser attacks substrate carbonyl → tetrahedral intermediate → collapses, kicking out the C-terminal fragment as an amine. Ser is now <em>covalently acylated</em>.</li>
                <li><strong>Deacylation</strong>: water (activated by His) attacks acyl-enzyme → second tetrahedral intermediate → free Ser, free carboxylate product.</li>
              </ol>
              <Callout kind="tip" title="Past exam — what does protease share with chymotrypsin?">
                "Both mechanisms involve nucleophilic attack by a deprotonated water molecule" — TRUE for the deacylation step in both. (For the acylation step, an aspartate or a serine is the nucleophile, depending on whether it\'s an aspartyl protease or a serine protease.)
              </Callout>
              <Callout kind="info" title="Metalloprotease vs aspartyl vs serine protease">
                A "metalloprotease" uses a metal (often Zn²⁺) to polarize a water for attack — Tyr can stabilize the oxyanion intermediate. Past exam: "This is a metalloprotease where Zn stabilizes the tetrahedral intermediate" was the correct read for that diagram.
              </Callout>
            </>
          )
        },
        {
          id: 'lower-Ea',
          title: 'How proteases lower Ea',
          content: (
            <>
              <ul>
                <li><strong>Release energy from non-covalent E·S interactions</strong> (pre-organized active site).</li>
                <li><strong>Restrict free motion of the substrate</strong> (orientation effect — proximity).</li>
                <li><strong>Position the substrate</strong> in the optimal geometry for transition-state stabilization.</li>
                <li>All of the above are true (past exam). General base/acid catalysis and covalent catalysis both contribute.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      id: 'regulation',
      title: '§5 Enzyme regulation modalities',
      blocks: [
        {
          id: 'reg-modes',
          title: 'Five ways enzymes get regulated',
          content: (
            <>
              <ol>
                <li><strong>Substrate availability</strong> — kinetic, easiest to forget on multiple choice.</li>
                <li><strong>Allosteric activators / inhibitors</strong> (ATP, AMP, citrate, F-2,6-BP).</li>
                <li><strong>Covalent modification</strong> (phosphorylation reversibly turns enzymes on/off; PDH-kinase phosphorylates PDH to <em>inactivate</em> it; glycogen phosphorylase is activated by phosphorylation).</li>
                <li><strong>Proteolytic activation (zymogens)</strong> — chymotrypsinogen → chymotrypsin; trypsinogen → trypsin. Once cut, irreversible.</li>
                <li><strong>Synthesis / degradation</strong> — slowest, most lasting (gene-expression level).</li>
              </ol>
              <Callout kind="info" title="Past exam — viable hypothesis for activating ENZY?">
                Options were: (a) PTM turns ENZY off; (b) ↑Ca²⁺ turns ENZY on; (c) proteolysis activates ENZY (zymogen); (d) Any one or more of the above. Answer: <strong>(d) any/all are viable</strong> — all three are real cellular mechanisms.
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'kinetics-edge',
      title: '§6 Edge-case kinetics scenarios',
      blocks: [
        {
          id: 'arginase',
          title: 'Arginase mechanism & inhibitor design',
          content: (
            <>
              <p>Arginase converts arginine → ornithine + urea, by hydrolytic cleavage of the C–N of the guanidinium R-group.</p>
              <ul>
                <li><strong>Class</strong>: hydrolase (it breaks a C–N bond using water). Past exam answer.</li>
                <li><strong>TS analog</strong>: a TS-analog inhibitor would <em>physically resemble the transition state</em> of the reaction (high-energy bond geometry). It binds reversibly, very tightly, and would <em>look</em> like the unstable TS — not like the substrate or like the product.</li>
                <li>If the TS-analog inhibitor follows MM (i.e., reversible) AND binds only the free enzyme, it is <strong>competitive</strong>. The LB plot would show same Vmax (same y-intercept), increased Km (worse apparent affinity).</li>
              </ul>
            </>
          )
        },
        {
          id: 'pH-effect',
          title: 'pH effects and metalloproteases',
          content: (
            <>
              <p>If a protease has max activity at pH 7 with a sharp drop below 6.5, it usually means an active-site His (pKa ~6) needs to be <em>deprotonated</em> to act as a base. Drop pH below 6.5 → His protonated → loses its catalytic role.</p>
              <Callout kind="info" title="Past exam pick">
                "One likely interpretation of this pH effect:" → <strong>"a histidine on the enzyme is involved in the reaction"</strong> (specifically, free imidazole base).
              </Callout>
            </>
          )
        }
      ]
    }
  ],
  keyReview: {
    themes: [
      { title: 'Enzymes don\'t move equilibrium', desc: 'They lower Ea by stabilizing the transition state. ΔG° is unchanged.' },
      { title: 'Km is a binding/affinity proxy', desc: 'Lower Km = higher apparent affinity. Vmax is a property of the catalytic step (kcat × [E]).' },
      { title: 'Inhibitor type → distinct LB signature', desc: 'Competitive: same Vmax, ↑Km. Uncompetitive: parallel. Mixed: both change. Pure noncomp: same Km, ↓Vmax.' },
      { title: 'Allosteric kinetics are sigmoidal', desc: 'ATCase, PFK-1, glycogen phosphorylase. Activators (ATP for ATCase; AMP for PFK-1) shift toward R; inhibitors (CTP; ATP/citrate for PFK-1) toward T.' },
      { title: 'Catalytic triad', desc: 'Ser-His-Asp charge relay. Two tetrahedral intermediates per substrate. PMSF irreversibly sulfonylates Ser.' }
    ],
    vocab: [
      { term: 'Vmax', def: 'Max velocity at saturating [S]; Vmax = kcat × [E]ₜ.' },
      { term: 'Km', def: '[S] at half-Vmax; lower Km = tighter apparent binding.' },
      { term: 'kcat', def: 'Turnover number; molecules of S converted per active site per second at saturation.' },
      { term: 'kcat/Km', def: 'Specificity constant; best comparator of catalytic efficiency.' },
      { term: 'Steady-state', def: '[ES] is constant — formation = breakdown. Underlies MM derivation.' },
      { term: 'Allosteric', def: 'Regulation by ligand binding at a site distinct from the active site, often inducing T↔R.' },
      { term: 'Zymogen', def: 'Inactive proenzyme activated by proteolytic cleavage (chymotrypsinogen → chymotrypsin).' },
      { term: 'Transition state analog', def: 'Inhibitor that mimics the TS geometry — typically the tightest reversible binders.' }
    ],
    laws: [
      { name: 'Michaelis–Menten', desc: 'v = Vmax[S] / (Km + [S]). Hyperbolic. Assumes steady-state ES.' },
      { name: 'Lineweaver–Burk', desc: '1/v = (Km/Vmax)·(1/[S]) + 1/Vmax. Straight line for MM enzymes.' },
      { name: 'Inhibitor effect rules', desc: 'Competitive: Vmax fixed, Km↑. Uncompetitive: both ↓ same factor. Mixed: both change. Noncomp: Vmax↓, Km same.' }
    ],
    methods: [
      { name: 'Initial-rate kinetics', desc: 'Measure v₀ at [S] varied; fit MM or LB. Repeat at fixed [I] for inhibitor type.' },
      { name: 'Pre-steady-state burst', desc: 'Catches a covalent intermediate (e.g., chymotrypsin acyl-enzyme) — single turnover before steady state.' },
      { name: 'Active-site labeling', desc: 'Affinity inhibitors (e.g., PMSF, TPCK) covalently mark catalytic residues.' }
    ],
    diagrams: [
      { title: 'MM hyperbolic curve', visual: MMCurveSVG },
      { title: 'Lineweaver–Burk', visual: LBPlotSVG },
      { title: 'Inhibitor patterns', visual: InhibitorLBSVG }
    ]
  },
  questions: [
    {
      q: 'The MM steady-state assumption is best stated as:',
      choices: [
        '[S] does not change because the reaction is at equilibrium',
        'The forward and reverse rates of the catalyzed reaction are identical',
        '[ES] remains constant because its rate of formation equals its rate of breakdown',
        '[E]free is zero — all enzyme is saturated'
      ],
      correct: 2,
      explanation: 'Steady state means the ES intermediate accumulates to a stable concentration; formation rate = breakdown rate. It does not require equilibrium nor full saturation.',
      difficulty: 'M'
    },
    {
      q: 'A competitive inhibitor (e.g., a TS analog that binds only free E) will:',
      choices: [
        'Increase apparent Km, leave Vmax unchanged',
        'Decrease Vmax, leave Km unchanged',
        'Decrease both Vmax and Km equally',
        'Increase Vmax'
      ],
      correct: 0,
      explanation: 'Competitive inhibitors fight S for the active site → can be overcome by ↑[S] (Vmax unchanged), but apparent Km rises because more S is needed to reach ½Vmax.',
      difficulty: 'M'
    },
    {
      q: 'PMSF reacts with the active-site serine of chymotrypsin and the bond is NOT cleaved by the enzyme. This is an example of:',
      choices: ['Competitive inhibition', 'Mixed inhibition', 'Irreversible inhibition', 'Allosteric inhibition'],
      correct: 2,
      explanation: 'A covalent, non-cleaved bond inactivates the enzyme permanently — irreversible inhibition.',
      difficulty: 'E'
    },
    {
      q: 'The induced-fit model best describes which?',
      choices: [
        'A rigid active site that perfectly complements substrate shape',
        'A substrate that permanently alters the enzyme upon binding',
        'An active site that changes shape slightly to better accommodate substrate after binding',
        'A substrate that binds only in the transition state'
      ],
      correct: 2,
      explanation: 'Induced fit = active site adjusts to substrate after initial binding. Lock-and-key would be the rigid version; Koshland\'s induced fit is the textbook reality.',
      difficulty: 'E'
    },
    {
      q: 'You discover an enzyme called ENZY. Which of the following is a viable hypothesis for how ENZY could be regulated in the cell?',
      choices: [
        'A post-translational modification turns ENZY off',
        'An increase in Ca²⁺ concentration turns ENZY on',
        'Proteolysis activates ENZY (zymogen)',
        'Any one or more of the above'
      ],
      correct: 3,
      explanation: 'PTM, allosteric activation by Ca²⁺, and zymogen activation are all real mechanisms. Multiple are viable, so "any/all" is correct.',
      difficulty: 'E'
    },
    {
      q: 'Both serine proteases (e.g., chymotrypsin) and aspartyl proteases share which mechanistic feature?',
      choices: [
        'Both involve nucleophilic attack by an aspartate',
        'Both involve nucleophilic attack by a deprotonated water molecule',
        'Both have the same substrate specificity',
        'Both are covalent catalysis'
      ],
      correct: 1,
      explanation: 'Both mechanisms feature attack by a water that is deprotonated by a general base (His for serine proteases; Asp for aspartyl). Substrate specificity differs; only serine proteases use covalent catalysis (acyl-enzyme).',
      difficulty: 'H'
    },
    {
      q: 'A protease loses activity sharply below pH 6.5 with maximum at pH 7.0. The simplest interpretation:',
      choices: [
        'The enzyme is a metalloprotease',
        'A histidine on the enzyme participates in catalysis',
        'The substrate becomes protonated and unreactive',
        'The mechanism requires tyrosine to stabilize an oxyanion'
      ],
      correct: 1,
      explanation: 'His pKa ~6. Above 6.5, His is mostly the basic imidazole form (catalytically active); below, it protonates and loses base function.',
      difficulty: 'M'
    },
    {
      q: 'On a Lineweaver–Burk plot, the y-intercept is 0.5 (units of 1/(M·s⁻¹)) and the x-intercept is −2 (units of 1/M). What are Vmax and Km?',
      choices: [
        'Vmax = 2 M/s, Km = 0.5 M',
        'Vmax = 0.5 M/s, Km = 2 M',
        'Vmax = 0.5 M/s, Km = 0.5 M',
        'Vmax = 2 M/s, Km = 2 M'
      ],
      correct: 0,
      explanation: 'y-int = 1/Vmax → Vmax = 1/0.5 = 2. x-int = −1/Km → Km = 1/|−2|·hmm, careful: x-intercept is −1/Km so Km = 1/2 = 0.5. Vmax = 2 M/s, Km = 0.5 M.',
      difficulty: 'H'
    },
    {
      q: 'For the depicted protease, "the energy changes shown as arrows labeled A and B" are:',
      choices: [
        'Overall free energy (ΔG) for the uncatalyzed and catalyzed reactions',
        'Overall free energy (ΔG) for catalyzed and uncatalyzed reactions',
        'Energy needed to convert substrate to the transition state in the uncatalyzed reaction; energy needed to convert substrate to the transition state in the catalyzed reaction',
        'Energy released upon achieving the transition state of the uncatalyzed; energy released upon achieving the transition state of the catalyzed'
      ],
      correct: 2,
      explanation: 'Arrows from S → TS represent the activation energy (Ea). One is the uncatalyzed Ea (taller); the other the catalyzed Ea (shorter). ΔG (S → P) is shown by a different arrow and unaffected by the enzyme.',
      difficulty: 'M'
    },
    {
      q: 'Which term best describes the substrate concentration at which an enzyme runs at half its maximal velocity (and approximates the enzyme\'s affinity for substrate)?',
      choices: ['Vmax', 'Km', 'kcat', 'kcat/Km'],
      correct: 1,
      explanation: 'Km is by definition [S] at v = ½Vmax. It is inversely related to apparent affinity.',
      difficulty: 'E'
    },
    {
      q: 'If kcat for enzyme P is 10× higher than kcat for enzyme Z (same [E], same substrate, same Km), which is true at saturation?',
      choices: [
        'P has higher Vmax than Z',
        'Z has higher Vmax than P',
        'Vmax is the same; only Km differs',
        '[S] at saturation is higher for P'
      ],
      correct: 0,
      explanation: 'Vmax = kcat × [E]. Higher kcat at the same [E] → higher Vmax → P makes more product per second when saturated.',
      difficulty: 'M'
    },
    {
      q: 'Allosteric enzyme ATCase is regulated by:',
      choices: [
        'CTP (allosteric inhibitor — feedback) and ATP (allosteric activator)',
        'CTP as a competitive inhibitor at the catalytic site',
        'ATP as a competitive inhibitor that becomes noncompetitive at high substrate',
        'NAD⁺ binding the regulatory subunit'
      ],
      correct: 0,
      explanation: 'CTP (end-product of pyrimidine synthesis) inhibits ATCase by binding the regulatory subunit (T-state stabilizer). ATP, signaling abundant purines, activates ATCase to balance pyrimidine production.',
      difficulty: 'M'
    },
    {
      q: 'Arginase converts arginine → ornithine + urea (hydrolysis of a C–N bond). What enzyme class is arginase?',
      choices: ['Ligase', 'Oxidoreductase', 'Hydrolase', 'Isomerase'],
      correct: 2,
      explanation: 'A reaction that uses water to break a covalent bond is by definition a hydrolase.',
      difficulty: 'E'
    },
    {
      q: 'A transition-state analog inhibitor of arginase would:',
      choices: [
        'Bind covalently to the enzyme',
        'Bind at an allosteric site on the transition-state structure of the arginine–arginase complex',
        'Exhibit mixed inhibition kinetics',
        'Physically resemble the transition state of the arginine–arginase complex'
      ],
      correct: 3,
      explanation: 'TS analogs imitate the geometry/electronics of the transition state — that\'s why they bind tightly. Reversible, typically competitive.',
      difficulty: 'M'
    },
    {
      q: 'On a Lineweaver–Burk plot for an enzyme obeying MM kinetics, an inhibitor binds <em>only the free enzyme</em>. The plot will show:',
      choices: [
        'Same y-intercept, increased x-intercept slope (competitive)',
        'Same x-intercept, decreased y-intercept (mixed/noncompetitive)',
        'Parallel lines (uncompetitive)',
        'Lower Vmax with same Km'
      ],
      correct: 0,
      explanation: 'Binding free E only = competitive: same Vmax (y-intercept unchanged), apparent Km increases, lines pivot at the y-axis.',
      difficulty: 'M'
    }
  ]
};

export default exam;
