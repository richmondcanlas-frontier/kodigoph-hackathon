import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../interface/applicant.interface';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  constructor(private http: HttpClient) { }

  applicantsData: Applicant[] = [];

  ngOnInit() {
    this.fetchApplicants();
  }
    fetchApplicants() {
      this.http.get('/assets/applicants.json').subscribe((data: any) => {
       
        this.applicantsData = data;
        console.log("data", this.applicantsData);
      });
    }
  
}
