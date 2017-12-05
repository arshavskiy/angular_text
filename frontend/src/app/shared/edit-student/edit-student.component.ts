import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input() data: any;
  student: any;
  image: any;
  studentCourses: any;
  courses: any;
  constructor(private http: Http) { }

  ngOnInit() {
    if (!this.data || this.data == undefined || this.data == {}) {
      this.student = {}
    } else {
      this.student = this.data;
      this.image = `../../assets/${this.student.image}`
      // this.student.image = null;
    }
    this.getCourses(this.student.id);
  }

  getCourses(student) {
    this.http.get(`http://localhost:3000/student-cours/${student}`).subscribe(data => {
      this.studentCourses = JSON.parse(data['_body']);
      console.log(this.studentCourses);
    });
  }

}
