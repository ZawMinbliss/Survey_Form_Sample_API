import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  constructor(private http: HttpClient) {}
  token: String | undefined;
  valid: String | undefined;
  ngOnInit(): void {}
  onSubmit(data: any): void {
    console.log(data);
    if (data.status == 'INVALID') {
      this.token = undefined;
      this.valid = 'INVALID';
    } else {
      this.http
        .post('http://localhost:3300/api/survey', data.value)
        .subscribe((results: any) => {
          console.warn('results:', results);
          this.token = results.Token;
          console.log(this.token);
        });

      console.log('from submit');
    }
  }
}
