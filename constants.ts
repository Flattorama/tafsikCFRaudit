import { AuditEntry } from './types';

export const AUDIT_DATA: AuditEntry[] = [
  {
    "organization": "Ontario Tech University",
    "project_title": "Right-wing Extremism in Canada: Conceptualizing the Movement",
    "risk_level": "Very High",
    "total_score": 16,
    "breakdown_scores": {
      "far_right_focus": 4,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 0,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "Fighting Yesterday's War. This project is entirely dedicated to 'Conceptualizing the Right-Wing Movement.' Funding only this while ignoring the resurgence of Jihadist violence creates a blind spot. It’s like installing a smoke detector that only detects steam while the kitchen is on fire."
  },
  {
    "organization": "Canadian Anti-Hate Network",
    "project_title": "Creating an Ethical Framework for Research on Far-Right Organizing in Canada",
    "risk_level": "Very High",
    "total_score": 19,
    "breakdown_scores": {
      "far_right_focus": 4,
      "islamist_focus": 4,
      "antisemitism_focus": 2,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 1
    },
    "analysis": "Structural Blindness. With a near-perfect bias score, this mandate focuses on 'Christian nationalism' and 'gender movements' but maintains total radio silence on Islamist extremism. It explicitly excludes the primary terror threat."
  },
  {
    "organization": "Digital Public Square",
    "project_title": "Strengthening Resilience to IMVE Narratives",
    "risk_level": "High",
    "total_score": 13,
    "breakdown_scores": {
      "far_right_focus": 2,
      "islamist_focus": 4,
      "antisemitism_focus": 1,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "The 'Both Sides' Trap. This project groups 'Antisemitism' alongside 'anti-Palestinian hate' under a generic umbrella of 'polarization'. This framing treats the lethal targeting of Jews as a mere social disagreement to be 'dialogued' away."
  },
  {
    "organization": "Canadian Association of Social Workers",
    "project_title": "Social Work: Building Practice Resilience and Knowledge – Preventing and Addressing Radicalization",
    "risk_level": "Very High",
    "total_score": 16,
    "breakdown_scores": {
      "far_right_focus": 0,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 2
    },
    "analysis": "Relies on generic 'practice resilience' frameworks that do not explicitly name or confront Islamist extremism, leaving social workers blind to the primary lethal threat."
  },
  {
    "organization": "Christchurch Call Foundation",
    "project_title": "Eliminating Terrorist and Violent Extremist Content (TVEC) online",
    "risk_level": "Very High",
    "total_score": 16,
    "breakdown_scores": {
      "far_right_focus": 3,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 1,
      "leadership_red_flags": 0
    },
    "analysis": "Organizational DNA is rooted in the fight against white supremacist violence. Algorithms may be highly sensitive to Neo-Nazi imagery while remaining porous to Jihadist symbolism."
  },
  {
    "organization": "Organization for the Prevention of Violence (OPV)",
    "project_title": "The Prairie Region Targeted Violence Prevention (PR-TVP) Project",
    "risk_level": "Very High",
    "total_score": 15,
    "breakdown_scores": {
      "far_right_focus": 1,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "Focuses on 'intervention services' and 'mental health' to avoid naming ideologies. The silence on Islamism in the project description is absolute."
  },
  {
    "organization": "CIVIX",
    "project_title": "Building Resilience to Extremism and Bridging Social Division",
    "risk_level": "Very High",
    "total_score": 15,
    "breakdown_scores": {
      "far_right_focus": 1,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "Focuses on 'digital media literacy' and 'civic education'. Susceptible to educator bias; students may be taught to deconstruct right-wing theories while viewing anti-Zionist propaganda as legitimate."
  },
  {
    "organization": "John Howard Society",
    "project_title": "Disengagement / Case Mgmt",
    "risk_level": "Very High",
    "total_score": 15,
    "breakdown_scores": {
      "far_right_focus": 1,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "Applies a generic criminological model to an ideological problem. Standard case management is insufficient to deconstruct the beliefs of a religiously motivated extremist."
  },
  {
    "organization": "Yorktown Family Services",
    "project_title": "Engaging Youth, Diaspora Communities and Community Capacity Building",
    "risk_level": "Very High",
    "total_score": 16,
    "breakdown_scores": {
      "far_right_focus": 3,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 1,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "Implies a bifurcation where threats come from 'anti-authority narratives' (Right) while Diaspora communities are solely victims. Ignores 'anti-authority' narratives within Islamist ideology."
  },
  {
    "organization": "Simon Fraser University (SFU)",
    "project_title": "Canadian Network for Research on Security, Extremism and Society (CANSES)",
    "risk_level": "High",
    "total_score": 13,
    "breakdown_scores": {
      "far_right_focus": 1,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 0,
      "leadership_red_flags": 0
    },
    "analysis": "Scores in the 'High Risk' range primarily due to the 'Agnostic Trap'. The project relies on neutral language like 'preventing extremist violence,' masking that the content is likely dominated by RWE research."
  },
  {
    "organization": "Violence Prevention Network",
    "project_title": "Online Referrals",
    "risk_level": "High",
    "total_score": 13,
    "breakdown_scores": {
      "far_right_focus": 1,
      "islamist_focus": 4,
      "antisemitism_focus": 4,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 0,
      "leadership_red_flags": 0
    },
    "analysis": "Focuses on 'online referrals' but suffers from genericism. Lacks a specific mandate to target Jihadist consumption patterns, defaulting to the most visible forms of 'hate' (RWE)."
  },
  {
    "organization": "Boys and Girls Clubs of Canada",
    "project_title": "BGC Clubs and a Move Towards Countering Youth Radicalization in Canada (The Way Out)",
    "risk_level": "High",
    "total_score": 12,
    "breakdown_scores": {
      "far_right_focus": 0,
      "islamist_focus": 2,
      "antisemitism_focus": 2,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "Scores 'High' due to the 'negative space' in its programming. Uses exclusively ideology-agnostic terms and maintains total public silence on Islamist threats."
  },
  {
    "organization": "Students Commission of Canada",
    "project_title": "Hearing Unheard Moments – Preventing Grievance-Based Violence",
    "risk_level": "High",
    "total_score": 12,
    "breakdown_scores": {
      "far_right_focus": 1,
      "islamist_focus": 4,
      "antisemitism_focus": 1,
      "ihra_definition": 2,
      "ideology_agnostic": 2,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "Aims to 'prevent grievance-based violence' by 'centering youth voices'. Risks validating the precursor narratives to violence rather than challenging the extremist logic."
  },
  {
    "organization": "McGill University Health Centre",
    "project_title": "Reintegration of Canadian extremist travellers",
    "risk_level": "Medium",
    "total_score": 9,
    "breakdown_scores": {
      "far_right_focus": 0,
      "islamist_focus": 1,
      "antisemitism_focus": 3,
      "ihra_definition": 2,
      "ideology_agnostic": 1,
      "jewish_partnerships": 2,
      "leadership_red_flags": 0
    },
    "analysis": "The sole outlier. Explicitly targets 'Canadian extremist travellers' (ISIS/Daesh). However, it is reactive (reintegration) rather than preventive."
  }
];