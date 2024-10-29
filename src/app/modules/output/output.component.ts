import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../interface/applicant.interface';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  constructor(
    private http: HttpClient,
    private dataService: DataService,
  ) { }

  applicantsData: Applicant[] = [];



  ngOnInit() {
    this.dataService.data$.subscribe(data => {
      this.fetchApplicants();
    });

    this.dataService.clear$.subscribe(data => {
      this.clearData();
    });
  }

  fetchApplicants() {
    this.http.get('/assets/applicants.json').subscribe((data: any) => {

      this.applicantsData = data;

      this.applicantsData.sort((a, b) => b.total_score - a.total_score);
      console.log("data", this.applicantsData);
    });
  }

  clearData() {
    this.applicantsData = [];
  }

}
