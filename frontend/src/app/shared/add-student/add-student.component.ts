import { ElementRef, Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() data: any;

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
    console.log(this.student);
    this.student.image = 'fileName';
    this.http.post(`http://localhost:3000/student/`, { student: this.student }).subscribe(data => {
      if ('ok' == data['_body']) {
        console.log('saved');
      } else {
        console.log('not sababa');
      }
    });
  }
}
