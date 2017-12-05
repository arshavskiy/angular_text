import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Output() onCourseClicked = new EventEmitter<any>();
  @Output() onClickAddCourse = new EventEmitter<any>();

  private coursesTotal: number;
  private courses: Array<any>;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/courses').subscribe(data => {
      this.courses = JSON.parse(data['_body']);
      this.coursesTotal = this.courses.length;
    });
  }

  chooseCourse(cours) {
    this.onCourseClicked.emit(cours);
  }

  addNewCourse() {
    this.onClickAddCourse.emit();
  }


}
