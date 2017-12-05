import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: any;
  courses: [any];
  studentCourses: [any];
  constructor(private http: Http) { }

  ngOnInit() {
    this.student = {};
    this.http.get('http://localhost:3000/courses').subscribe(data => {
      this.courses = JSON.parse(data['_body']);
      this.studentCourses = this.courses;
      console.log(this.courses);
    });
  }

  createNewStudent() {
    const chosenCourses = this.courses.filter(course =>
      course.checked
    ).map((course => course.name));
  }

}
