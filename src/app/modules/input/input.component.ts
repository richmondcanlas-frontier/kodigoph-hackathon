import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';


interface WorkPosition {
  title: string;
  skills: string[];
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  positions: WorkPosition[] = [
    { title: 'Web Developer', skills: ['JavaScript', 'Angular', 'Node.js'] },
    { title: 'Data Scientist', skills: ['Python', 'Machine Learning', 'Statistics'] },
    { title: 'Project Manager', skills: ['Agile', 'Communication', 'Risk Management'] },
  ];

  selectedPosition: WorkPosition = this.positions[0];
  yearsOfExperience: number = 5;
  workScore: number = 40;
  skillScore: number = 60;

  constructor(private dataService: DataService) {
  }

  onPositionChange(position: WorkPosition) {
    this.selectedPosition = position;
  }

  updateSkillScore() {
    this.skillScore = 100 - this.workScore;
  }

  getTopApplicants() {
    const aiPrompt =
      `Return the List of Names and skills and ranking , scores in a JSON Array format like [{name: “value”, required_skills_possessed: [value1, value2], years_of_work_experience: value, rank: value, total_score: "Total score value", skill_score: value, work_experience_score:value, email: value, contact_number: value, address: value, work_experience:[ value(company1 and years worked), value(company2 and years worked)] }]).

ONLY THE JSON ARRAY SHOULD BE IN THE ANSWER BOX

example answer:  [{name: “value”, required_skills_possessed: [value1, value2], years_of_work_experience: value, rank: value, total_score: value, skill_score: value, work_experience_score:value, email: value, contact_number: value, address: value},  work_experience:[ value(company1 and years worked), value(company2 and years worked)]])

Give me the list of the top 5 most qualified applicants from the database based on the following criteria

Requirements:
Required Skills : ${this.selectedPosition.skills}

Number_of_required_skills_possessed: number of Required Skills the applicant possess in the resume
years_of_work_experience: number of years in resume applicant worked relevant to the required position(Web developer)

Score Calculation
Possessed skills score: (Number_of_required_skills_possessed/ ${this.selectedPosition.skills.length}) * ${this.skillScore}

Work Experience score(max value is ${this.workScore}): (Total relevant years_of_work_experience of applicant/ ${this.yearsOfExperience}) * ${this.workScore} 

`;

    console.log("AI prompt", aiPrompt);
    this.dataService.emitData(aiPrompt);
  }


  clearApplicants(){
    this.dataService.clearData();
  }
}

