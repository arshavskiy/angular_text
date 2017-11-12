import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() viewData: any;

  isStudent: boolean;
  private studentCourses: Array<any>;
  private courseStudents: Array<any>;

  constructor(private http: Http) { }

  getCourses(cours) {
    this.http.get(`http://localhost:3000/student-cours/${cours}`).subscribe(data => {
      this.studentCourses = JSON.parse(data['_body']);
    });
  }

  getStudents(cours) {
    this.http.get(`http://localhost:3000/courses-student/${cours}`).subscribe(data => {
      this.courseStudents = JSON.parse(data['_body']);
    });
  }

  ngOnChanges(changes: InfoComponent) {
    this.getCourses(this.viewData.data.id);
    this.getStudents(this.viewData.data.id);
  }

  ngOnInit() {
    this.getCourses(this.viewData.data.id);
    this.getStudents(this.viewData.data.id);
  }
}
