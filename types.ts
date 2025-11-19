export interface BreakdownScores {
  far_right_focus: number;
  islamist_focus: number;
  antisemitism_focus: number;
  ihra_definition: number;
  ideology_agnostic: number;
  jewish_partnerships: number;
  leadership_red_flags: number;
}

export interface AuditEntry {
  organization: string;
  project_title: string;
  risk_level: "Very High" | "High" | "Medium" | "Low";
  total_score: number;
  breakdown_scores: BreakdownScores;
  analysis: string;
}