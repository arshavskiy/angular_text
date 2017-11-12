import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-student-detail',
  templateUrl: './app-student-detail.component.html',
  styleUrls: ['./app-student-detail.component.css']
})
export class AppStudentDetailComponent implements OnInit {
  @Input() studentData: any;
  // private student: any;
  private studentCourses: Array<any>;
  constructor(private http: Http) { }

  ngOnInit() {

    // this.userName = 'David';
    // this.http.get('http://localhost:3000/student/28').subscribe(data => {
    //   console.log(this.student = JSON.parse(data['_body']));
    //   this.student = this.student[0];
    // });
    // this.http.get('http://localhost:3000/student-cours/28').subscribe(data => {
    //   console.log(this.studentCourses = JSON.parse(data['_body']));
    // });
  }

}