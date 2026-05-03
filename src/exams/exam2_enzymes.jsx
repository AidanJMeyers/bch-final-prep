import React from 'react';
import { Callout, Table, Theme, SvgFrame, AnchorImage, ImgGrid } from '../components/Visual.jsx';

// Kept SVGs for the kinetic plots — these are pedagogical and benefit from clean inline rendering
const MMCurveSVG = (
  <SvgFrame width={460} height={220} label="Michaelis–Menten: hyperbolic v vs [S]. Vmax = saturation; Km = [S] at v = ½Vmax. Lower Km = higher apparent affinity for substrate.">
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
  <SvgFrame width={460} height={220} label="Lineweaver–Burk (double-reciprocal): y-int = 1/Vmax; x-int = −1/Km; slope = Km/Vmax.">
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
  <SvgFrame width={460} height={250} label="LB inhibitor signatures. Competitive: same y-int (Vmax unchanged), worse Km. Uncompetitive: parallel lines. Pure noncompetitive: same x-int (Km unchanged), lower Vmax.">
    <text x="20" y="30" fontSize="12" fill="#0f172a">Three patterns on Lineweaver–Burk</text>
    <g transform="translate(20,50)">
      <text x="0" y="10" fontSize="11" fill="#475569">Competitive</text>
      <line x1="60" y1="0" x2="60" y2="120" stroke="#475569" />
      <line x1="0" y1="100" x2="140" y2="100" stroke="#475569" />
      <line x1="20" y1="120" x2="135" y2="40" stroke="#0284c7" strokeWidth="2" />
      <line x1="35" y1="120" x2="135" y2="55" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="60" cy="78" r="3" fill="#16a34a" />
      <text x="0" y="135" fontSize="9" fill="#475569">same Vmax · ↑Km</text>
    </g>
    <g transform="translate(170,50)">
      <text x="0" y="10" fontSize="11" fill="#475569">Uncompetitive</text>
      <line x1="60" y1="0" x2="60" y2="120" stroke="#475569" />
      <line x1="0" y1="100" x2="140" y2="100" stroke="#475569" />
      <line x1="10" y1="115" x2="135" y2="40" stroke="#0284c7" strokeWidth="2" />
      <line x1="20" y1="115" x2="145" y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
      <text x="0" y="135" fontSize="9" fill="#475569">parallel · both ↓ same factor</text>
    </g>
    <g transform="translate(320,50)">
      <text x="0" y="10" fontSize="11" fill="#475569">Pure Noncomp.</text>
      <line x1="60" y1="0" x2="60" y2="120" stroke="#475569" />
      <line x1="0" y1="100" x2="140" y2="100" stroke="#475569" />
      <line x1="20" y1="120" x2="135" y2="40" stroke="#0284c7" strokeWidth="2" />
      <line x1="20" y1="120" x2="135" y2="20" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
      <text x="0" y="135" fontSize="9" fill="#475569">same x-int · ↓Vmax</text>
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
          title: 'Role of an enzyme: lower Ea, NOT shift equilibrium',
          content: (
            <>
              <Theme>An enzyme <strong>lowers the activation energy</strong> by stabilizing the transition state. It does <strong>NOT</strong> change ΔG°, ΔG, the equilibrium, or which products are favored — just the kinetic barrier.</Theme>
              <AnchorImage
                src="e2_kin_002.png"
                alt="Reaction coordinate diagram comparing uncatalyzed and catalyzed reactions"
                caption="Reaction coordinate. The peak (transition state, TS) is the bottleneck. The catalyst (enzyme) lowers Ea by stabilizing the TS — pulls the activation energy hump DOWN. Critically, ΔG° (S → P, the energy difference between substrate and product) is UNCHANGED — only the kinetic path is improved. Past exam: 'role of an enzyme' → increases the rate at which substrate is converted into product."
                source="BCH 335 lecture (Mod. 6 Kinetics)"
              />
              <ul>
                <li>Speeds <em>both</em> forward and reverse reactions equally.</li>
                <li>Does NOT shift equilibrium concentrations.</li>
                <li>Does NOT make a thermodynamically unfavorable reaction favorable.</li>
                <li>Does NOT bind a substrate intermediate that "cannot be converted back."</li>
              </ul>
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
                  ["Lock-and-key (Fischer)", "Active site is rigid and pre-shaped to fit substrate exactly", "Useful first-pass; rare in real enzymes"],
                  ["Induced-fit (Koshland)", "Substrate binding causes the enzyme to change shape, ensuring catalysis only when right substrate is bound", "Most enzymes (hexokinase, citrate synthase). Substrate selectivity, prevents wasteful catalysis."]
                ]}
              />
              <Callout kind="tip" title="Why induced fit matters for hexokinase">
                Hexokinase binds glucose → induced fit closes around it → ATP can now phosphorylate glucose. Without induced fit, water (similar size) could occupy the site and ATP would hydrolyze wastefully. Past-exam phrasing: induced fit "ensures the enzyme is most active when substrate levels are HIGH (e.g., oxaloacetate for citrate synthase)."
              </Callout>
            </>
          )
        }
      ]
    },
    {
      id: 'mm-kinetics',
      title: '§2 Michaelis–Menten kinetics',
      subtitle: 'Vmax · Km · kcat · kcat/Km',
      blocks: [
        {
          id: 'mm-eqn',
          title: 'The MM equation and the steady-state assumption',
          content: (
            <>
              <Theme>v = (Vmax · [S]) / (Km + [S]). Steady state: <strong>[ES] is constant</strong> — formed as fast as it is broken down.</Theme>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e2_kin_010.jpeg"
                  alt="Hyperbolic Michaelis-Menten curve of initial velocity vs substrate concentration"
                  caption="Classic MM curve. Initial velocity (v₀) saturates at Vmax as [S] gets large. At low [S] the relationship is nearly linear (first-order in [S]); at very high [S] it plateaus (zero-order in [S], enzyme saturated). Km is the [S] at v = ½Vmax."
                  source="Lehninger fig (BCH 335 lecture)"
                />
                <AnchorImage
                  src="e2_kin_016.jpeg"
                  alt="Michaelis-Menten equation v = Vmax[S]/(Km+[S])"
                  caption="The Michaelis–Menten equation. Memorize it cold for the final. Notice: when [S] = Km, the denominator becomes 2[S], so v = Vmax/2 — that's the operational definition of Km."
                />
              </ImgGrid>
              <Callout kind="info" title="Past exam — which is the steady-state assumption?">
                CORRECT: "The concentration of the enzyme–substrate complex remains constant because its rate of formation equals its rate of breakdown." NOT: rate is zero (that's equilibrium). NOT: enzyme is fully saturated (only at [S] ≫ Km). NOT: substrate concentration doesn't change.
              </Callout>
              <ul>
                <li><strong>Vmax</strong> (M/s): max rate at saturating [S]. Vmax = kcat × [E]ₜ.</li>
                <li><strong>Km</strong> (M): [S] at v = ½Vmax. <em>Lower</em> Km = higher apparent affinity.</li>
                <li><strong>kcat</strong> (s⁻¹): turnover number — molecules of S converted per active site per second at saturation.</li>
                <li><strong>kcat / Km</strong> (M⁻¹s⁻¹): specificity constant; best comparator of catalytic efficiency.</li>
              </ul>
            </>
          )
        },
        {
          id: 'lb-plot',
          title: 'Lineweaver–Burk (double-reciprocal) plots',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e2_kin_013.png"
                  alt="Lineweaver-Burk plot showing 1/v vs 1/[S] with intercepts labeled"
                  caption="LB linearizes MM by taking reciprocals of both sides. y-intercept = 1/Vmax; x-intercept = −1/Km; slope = Km/Vmax. Useful because deviations from MM (cooperativity, inhibitors) show up as obvious geometric changes — see the inhibitor section below."
                  source="Lehninger fig (BCH 335 lecture)"
                />
                <AnchorImage
                  src="e2_kin_020.png"
                  alt="Lineweaver-Burk equation 1/v = Km/(Vmax * [S]) + 1/Vmax"
                  caption="The LB equation rearranged in y = mx + b form. Plot 1/v on y, 1/[S] on x. Slope is Km/Vmax. This is exactly how kineticists fit Vmax and Km from raw data."
                />
              </ImgGrid>
              {LBPlotSVG}
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
          id: 'inhibitor-types',
          title: 'Where each inhibitor binds and what it does to Km / Vmax',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e2_kin_026.jpeg"
                  alt="Competitive inhibition mechanism showing inhibitor binding free enzyme at active site"
                  caption="COMPETITIVE inhibitor binds free E at the active site (mimics S). It can be overcome by raising [S] → Vmax UNCHANGED. But you need more S to reach ½Vmax → apparent Km INCREASES. Classic example: TS-analog inhibitors."
                  source="BCH 335 lecture (Mod. 6 Kinetics)"
                />
                <AnchorImage
                  src="e2_kin_028.jpeg"
                  alt="Uncompetitive inhibition mechanism showing inhibitor binding only ES complex"
                  caption="UNCOMPETITIVE inhibitor binds only the ES complex (allosterically). Both Vmax AND apparent Km decrease by the same factor → on LB plot you get parallel lines."
                />
              </ImgGrid>
              <Table
                headers={["Type", "Where it binds", "Apparent Km", "Vmax", "LB plot"]}
                rows={[
                  ["Competitive", "Free E (active site, mimics S)", "↑", "unchanged", "Same y-int, different slope, different x-int"],
                  ["Uncompetitive", "ES only (allosterically)", "↓", "↓ (same factor)", "Parallel lines"],
                  ["Mixed", "Both E and ES (different affinities)", "↑ or ↓", "↓", "Lines cross to left of y-axis"],
                  ["Noncompetitive (pure)", "Both E and ES with same affinity", "unchanged", "↓", "Lines cross on x-axis (same Km)"],
                  ["Irreversible (e.g., PMSF)", "Covalent on active site", "n/a", "↓ proportional to functional E", "looks like noncompetitive but no recovery"]
                ]}
              />
              {InhibitorLBSVG}
              <Callout kind="warn" title="PMSF = irreversible serine-active-site inactivator">
                Phenyl-methane-sulfonyl-fluoride covalently sulfonylates the active-site serine of serine proteases. The covalent bond is NOT cleaved by the enzyme. Past exam: "This is an example of what kind of inhibition?" → <strong>irreversible</strong>.
              </Callout>
              <Callout kind="info" title="Past exam — Lineweaver–Burk for an inhibitor that binds only free E">
                "Free E only" binding = competitive. Same y-intercept (Vmax unchanged), different slope and x-intercept (Km increased).
              </Callout>
            </>
          )
        },
        {
          id: 'allostery',
          title: 'Allosteric (cooperative) regulation — sigmoidal kinetics',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e2_chymo_017.jpeg"
                  alt="Sigmoidal kinetic curve of an allosteric enzyme showing R state and T state"
                  caption="Allosteric / cooperative enzyme: SIGMOIDAL kinetics. At low [S] the enzyme is mostly in the LOW-activity (T) state. As [S] rises, binding triggers a switch to the HIGH-activity (R) state — kinetics steepen. K₀.₅ replaces Km as a 'half-max' descriptor."
                  source="Lehninger fig (BCH 335 lecture)"
                />
                <AnchorImage
                  src="e2_chymo_018.png"
                  alt="Allosteric enzyme regulation via positive modulator binding to shift T to R state"
                  caption="A positive allosteric modulator (e.g., F-2,6-BP for PFK-1; ATP for ATCase activation) binds at a regulatory site and shifts the equilibrium to the more-active R state. A negative modulator (e.g., CTP for ATCase; ATP/citrate for PFK-1) does the opposite."
                />
              </ImgGrid>
              <Callout kind="info" title="Past exam — ATCase truth checks">
                <ul>
                  <li>"ATCase exhibits classic Michaelis–Menten kinetics" → <strong>FALSE</strong> (sigmoidal)</li>
                  <li>"ATP is a competitive inhibitor at low [S], noncompetitive at high [S]" → <strong>FALSE</strong> (ATP is an allosteric ACTIVATOR)</li>
                  <li>"ATCase is allosterically inhibited by CTP" → <strong>TRUE</strong> (feedback from end-product of pyrimidine synth)</li>
                  <li>"CTP binds the active site irreversibly" → <strong>FALSE</strong> (CTP binds REGULATORY subunit, reversibly)</li>
                  <li>"Aspartate binding causes a shift to R state" → <strong>TRUE</strong> (positive cooperativity)</li>
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
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e2_chymo_001.png"
                  alt="Catalytic triad of chymotrypsin showing Asp102, His57, and Ser195"
                  caption="The catalytic triad: Asp102, His57, Ser195. Asp's negatively charged side chain orients His and stabilizes its protonated form. His acts as a general base, abstracting Ser's –OH proton — making Ser a powerful nucleophile that attacks the substrate's carbonyl carbon."
                  source="Lehninger fig (BCH 335 lecture, Wk 6)"
                />
                <AnchorImage
                  src="e2_chymo_003.png"
                  alt="Oxyanion hole showing backbone amides stabilizing the tetrahedral intermediate"
                  caption="The OXYANION HOLE: the backbone N–H groups of Gly193 and Ser195 H-bond to the developing negative charge on the carbonyl O of the tetrahedral intermediate. This electrostatic stabilization of the TS lowers Ea — a textbook example of TS stabilization."
                />
              </ImgGrid>
              <p>Mechanism in 2 phases:</p>
              <ol>
                <li><strong>Acylation</strong>: Ser attacks substrate carbonyl → tetrahedral intermediate (oxyanion hole stabilizes it) → collapses, kicking out the C-terminal fragment as an amine. Ser is now <em>covalently acylated</em>.</li>
                <li><strong>Deacylation</strong>: water (activated by His) attacks the acyl-enzyme → second tetrahedral intermediate → free Ser, free carboxylate product.</li>
              </ol>
              <Callout kind="tip" title="Past exam — what does the depicted protease share with chymotrypsin?">
                "Both mechanisms involve nucleophilic attack by a deprotonated water molecule" → <strong>TRUE</strong> for the deacylation step in both. (Aspartyl proteases use Asp + activated water for the only catalytic step; serine proteases use water for deacylation only.)
              </Callout>
              <Callout kind="info" title="Past exam — metalloprotease vs aspartyl vs serine protease">
                "This is a metalloprotease where Zn²⁺ stabilizes the tetrahedral intermediate, and tyrosine acts as a nucleophile" was the correct read for one diagram. Watch the labels carefully — they tell you which class.
              </Callout>
            </>
          )
        },
        {
          id: 'lower-Ea',
          title: 'How proteases lower Ea — pick the BEST answer',
          content: (
            <>
              <ul>
                <li><strong>Releasing energy from non-covalent E·S interactions</strong> (pre-organized active site).</li>
                <li><strong>Restricting free motion of the substrate</strong> (proximity / orientation effect).</li>
                <li><strong>Positioning the substrate</strong> in optimal geometry for transition-state stabilization.</li>
              </ul>
              <Callout kind="tip" title="Past-exam pick">
                "All of the above are true." General base/acid catalysis and covalent catalysis layer on top, but the three above are the universal moves any enzyme uses to lower Ea.
              </Callout>
            </>
          )
        },
        {
          id: 'zymogen',
          title: 'Zymogen activation: chymotrypsinogen → chymotrypsin',
          content: (
            <>
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e2_chymo_005.gif"
                  alt="Activation of chymotrypsinogen to chymotrypsin via proteolytic cleavage"
                  caption="Chymotrypsinogen (inactive zymogen, 245 residues) is activated by proteolytic cleavage. Trypsin first cuts to make π-chymotrypsin; further self-cleavage produces α-chymotrypsin — three chains held by disulfides. Once cut, irreversibly active. This is how the gut prevents premature autodigestion."
                  source="BCH 335 lecture (Wk 6)"
                />
                <AnchorImage
                  src="e2_chymo_011.jpeg"
                  alt="Zymogen activation cascade for digestive enzymes"
                  caption="The digestive zymogen cascade: trypsinogen → trypsin (in the duodenum), then trypsin activates chymotrypsinogen, proelastase, procarboxypeptidases A & B. One activation step amplifies into many — a common biological theme (also see blood clotting cascade)."
                />
              </ImgGrid>
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
              <ImgGrid cols={2}>
                <AnchorImage
                  src="e2_chymo_021.png"
                  alt="Reversible covalent modification turning enzyme on and off"
                  caption="REVERSIBLE COVALENT MODIFICATION: kinase adds a phosphate (turns enzyme ON or OFF depending on enzyme), phosphatase removes it. Glycogen phosphorylase: ON when phosphorylated. PDH and glycogen synthase: OFF when phosphorylated. Insulin and glucagon flip these globally."
                  source="BCH 335 lecture (Wk 6)"
                />
                <AnchorImage
                  src="e2_chymo_023.png"
                  alt="Protein kinase and protein phosphatase opposing covalent modification"
                  caption="Phosphorylation site = Ser/Thr/Tyr hydroxyl. Kinases use ATP → adds –OPO₃²⁻ to the hydroxyl. Phosphatases hydrolyze the phosphate off. Reversible, fast — the cell's main switch for fast catabolism/anabolism toggling."
                />
              </ImgGrid>
              <ol>
                <li><strong>Substrate availability</strong> — kinetic, easiest to forget on multiple choice.</li>
                <li><strong>Allosteric activators / inhibitors</strong> (ATP, AMP, citrate, F-2,6-BP).</li>
                <li><strong>Covalent modification</strong> (phosphorylation, acetylation, methylation — usually reversible).</li>
                <li><strong>Proteolytic activation (zymogens)</strong> — chymotrypsinogen → chymotrypsin; once cut, IRREVERSIBLE.</li>
                <li><strong>Synthesis / degradation</strong> — slowest, most lasting (gene-expression level).</li>
              </ol>
              <Callout kind="info" title="Past exam — viable hypothesis for ENZY activation">
                Options: (a) PTM turns ENZY off; (b) ↑Ca²⁺ turns ENZY on; (c) proteolysis activates ENZY (zymogen); (d) Any one or more of the above. Answer: <strong>(d)</strong> — all three are real cellular mechanisms.
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
              <p>Arginase converts arginine → ornithine + urea by hydrolytic cleavage of the C–N of the guanidinium R-group.</p>
              <ul>
                <li><strong>Class</strong>: hydrolase (water breaks a C–N bond).</li>
                <li><strong>TS analog</strong>: physically resembles the TRANSITION STATE — high-energy bond geometry. Binds reversibly, very tightly. Looks like the unstable TS, NOT like substrate or product.</li>
                <li>If the TS-analog inhibitor follows MM (reversible) AND binds only free E, it's <strong>competitive</strong>. LB plot: same Vmax, increased Km.</li>
              </ul>
              <Callout kind="info" title="Past exam — arginase questions">
                "Class of arginase?" → <strong>hydrolase</strong> (uses water to break C–N).<br />
                "A TS-analog inhibitor would..." → <strong>physically resemble the transition state structure of the arginine–arginase complex</strong>.
              </Callout>
            </>
          )
        },
        {
          id: 'pH-effect',
          title: 'pH effects and active-site His',
          content: (
            <>
              <p>If a protease has max activity at pH 7 with a sharp drop below 6.5, it usually means an active-site His (pKa ~6) needs to be <em>deprotonated</em> to act as a base. Drop pH below 6.5 → His protonated → loses its catalytic role.</p>
              <Callout kind="info" title="Past exam pick">
                "One likely interpretation of this pH effect:" → <strong>"a histidine on the enzyme is involved in the reaction."</strong>
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
      { title: 'Allosteric kinetics are sigmoidal', desc: 'ATCase, PFK-1, glycogen phosphorylase. Activators shift T→R; inhibitors stabilize T.' },
      { title: 'Catalytic triad', desc: 'Ser-His-Asp charge relay. Two tetrahedral intermediates per substrate. PMSF irreversibly sulfonylates Ser.' }
    ],
    vocab: [
      { term: 'Vmax', def: 'Max velocity at saturating [S]; Vmax = kcat × [E]ₜ.' },
      { term: 'Km', def: '[S] at half-Vmax; lower Km = tighter apparent binding.' },
      { term: 'kcat', def: 'Turnover number; molecules of S converted per active site per second at saturation.' },
      { term: 'kcat/Km', def: 'Specificity constant; best comparator of catalytic efficiency.' },
      { term: 'Steady-state', def: '[ES] is constant — formation = breakdown. Underlies MM derivation.' },
      { term: 'Allosteric', def: 'Regulation by ligand at a site distinct from the active site, often inducing T↔R.' },
      { term: 'Zymogen', def: 'Inactive proenzyme activated by proteolytic cleavage (chymotrypsinogen → chymotrypsin).' },
      { term: 'TS analog', def: 'Inhibitor that mimics the TS geometry — typically the tightest reversible binders.' }
    ],
    laws: [
      { name: 'Michaelis–Menten', desc: 'v = Vmax[S] / (Km + [S]). Hyperbolic. Assumes steady-state ES.' },
      { name: 'Lineweaver–Burk', desc: '1/v = (Km/Vmax)·(1/[S]) + 1/Vmax. Straight line for MM enzymes.' },
      { name: 'Inhibitor effects', desc: 'Competitive: Vmax fixed, Km↑. Uncompetitive: both ↓ same factor. Pure noncomp: Vmax↓, Km same.' }
    ],
    methods: [
      { name: 'Initial-rate kinetics', desc: 'Measure v₀ at varied [S]; fit MM or LB. Repeat at fixed [I] for inhibitor type.' },
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
        'The forward and reverse rates are identical',
        '[ES] remains constant because its rate of formation equals its rate of breakdown',
        '[E]free is zero — all enzyme is saturated'
      ],
      correct: 2,
      explanation: 'Steady state means [ES] reaches a stable concentration; formation rate = breakdown rate.',
      difficulty: 'M'
    },
    {
      q: 'A competitive inhibitor (e.g., a TS analog binding free E only) will:',
      choices: [
        'Increase apparent Km, leave Vmax unchanged',
        'Decrease Vmax, leave Km unchanged',
        'Decrease both Vmax and Km equally',
        'Increase Vmax'
      ],
      correct: 0,
      explanation: 'Competitive inhibitors fight S for the active site → can be overcome by ↑[S] (Vmax unchanged), but apparent Km rises.',
      difficulty: 'M'
    },
    {
      q: 'PMSF reacts with the active-site serine of chymotrypsin and the bond is NOT cleaved. This is an example of:',
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
      explanation: 'Induced fit = active site adjusts to substrate after initial binding.',
      difficulty: 'E'
    },
    {
      q: 'You discover an enzyme called ENZY. Which is a viable hypothesis for how ENZY could be regulated?',
      choices: [
        'A post-translational modification turns ENZY off',
        'An increase in Ca²⁺ concentration turns ENZY on',
        'Proteolysis activates ENZY (zymogen)',
        'Any one or more of the above'
      ],
      correct: 3,
      explanation: 'PTM, allosteric Ca²⁺, and zymogen activation are all real mechanisms.',
      difficulty: 'E'
    },
    {
      q: 'Both serine proteases and aspartyl proteases share which mechanistic feature?',
      choices: [
        'Both involve nucleophilic attack by an aspartate',
        'Both involve nucleophilic attack by a deprotonated water molecule',
        'Both have the same substrate specificity',
        'Both are covalent catalysis'
      ],
      correct: 1,
      explanation: 'Both feature attack by a water that is deprotonated by a general base (His for serine proteases; Asp for aspartyl). Substrate specificity differs; only serine proteases use covalent catalysis (acyl-enzyme).',
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
      q: 'On a Lineweaver–Burk plot, y-intercept is 0.5 (1/(M·s)) and x-intercept is −2 (1/M). Vmax and Km?',
      choices: [
        'Vmax = 2 M/s, Km = 0.5 M',
        'Vmax = 0.5 M/s, Km = 2 M',
        'Vmax = 0.5 M/s, Km = 0.5 M',
        'Vmax = 2 M/s, Km = 2 M'
      ],
      correct: 0,
      explanation: 'y-int = 1/Vmax → Vmax = 1/0.5 = 2 M/s. x-int = −1/Km → Km = 1/2 = 0.5 M.',
      difficulty: 'H'
    },
    {
      q: 'For a depicted protease, the energy arrows labeled A and B represent:',
      choices: [
        'Overall ΔG for the uncatalyzed and catalyzed reactions',
        'Overall ΔG for the catalyzed and uncatalyzed reactions',
        'Activation energy (S → TS) for uncatalyzed and catalyzed reactions',
        'Energy released upon achieving the TS'
      ],
      correct: 2,
      explanation: 'Arrows from S → TS represent the activation energy. One taller (uncatalyzed), one shorter (catalyzed). ΔG (S → P) is unchanged.',
      difficulty: 'M'
    },
    {
      q: 'Which term describes [S] at which v = ½Vmax (and approximates the enzyme\'s affinity)?',
      choices: ['Vmax', 'Km', 'kcat', 'kcat/Km'],
      correct: 1,
      explanation: 'Km is by definition [S] at v = ½Vmax. Inversely related to apparent affinity.',
      difficulty: 'E'
    },
    {
      q: 'If kcat for enzyme P is 10× higher than for Z (same [E], substrate, Km), then at saturation:',
      choices: [
        'P has higher Vmax than Z',
        'Z has higher Vmax than P',
        'Vmax is the same; only Km differs',
        '[S] at saturation is higher for P'
      ],
      correct: 0,
      explanation: 'Vmax = kcat × [E]. Higher kcat → higher Vmax at saturation.',
      difficulty: 'M'
    },
    {
      q: 'ATCase is regulated by:',
      choices: [
        'CTP (allosteric inhibitor — feedback) and ATP (allosteric activator)',
        'CTP as a competitive inhibitor at the catalytic site',
        'ATP as a competitive inhibitor at low [S], noncompetitive at high [S]',
        'NAD⁺ binding the regulatory subunit'
      ],
      correct: 0,
      explanation: 'CTP (end-product) inhibits ATCase by stabilizing T at the regulatory subunit. ATP signals abundant purines and activates ATCase to balance pyrimidine production.',
      difficulty: 'M'
    },
    {
      q: 'Arginase converts arginine → ornithine + urea (hydrolysis of a C–N bond). Enzyme class?',
      choices: ['Ligase', 'Oxidoreductase', 'Hydrolase', 'Isomerase'],
      correct: 2,
      explanation: 'Water cleaves a covalent bond → hydrolase.',
      difficulty: 'E'
    },
    {
      q: 'A transition-state analog of arginase would:',
      choices: [
        'Bind covalently to the enzyme',
        'Bind at an allosteric site on the TS structure',
        'Exhibit mixed inhibition kinetics',
        'Physically resemble the TS structure of the arginine–arginase complex'
      ],
      correct: 3,
      explanation: 'TS analogs imitate the geometry/electronics of the TS, binding tightly and reversibly.',
      difficulty: 'M'
    },
    {
      q: 'On a Lineweaver–Burk plot, an inhibitor binds ONLY free E. The plot shows:',
      choices: [
        'Same y-intercept, different x-intercept (competitive)',
        'Same x-intercept, decreased y-intercept',
        'Parallel lines',
        'Lower Vmax with same Km'
      ],
      correct: 0,
      explanation: 'Free-E-only binding = competitive: same Vmax (y-intercept unchanged), apparent Km increased.',
      difficulty: 'M'
    }
  ]
};

export default exam;
