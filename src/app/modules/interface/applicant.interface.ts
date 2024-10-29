export interface Applicant {
    applicant_id: number;
    name: string;
    required_skills_possessed: string[];
    years_of_work_experience: number;
    rank: number;
    total_score: number;
    skill_score: number;
    work_experience_score: number;
    email: string;
    contact_number: string;
    address: string;
    work_experience: string[];
  }