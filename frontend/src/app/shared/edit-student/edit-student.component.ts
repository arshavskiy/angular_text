import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';
import { error } from 'util';


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
  constructor(private http: Http) {

  }

  ngOnInit() {
    if (!this.data || this.data == undefined || this.data == {}) {
      this.student = {};
    } else {
      this.student = this.data;
      this.image = `http://localhost:3000/upload/${this.student.image}`
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

  editStudent() {
    this.http.post(`http://localhost:3000/student/update/${this.student.id}`, { student: this.student }).subscribe(data => {
      if ('ok' == data['_body']) {
        console.log('saved');
      } else {
        console.log('not sababa');
      }
    });
  }

  deleteStudent() {
    this.http.delete(`http://localhost:3000/student/delete/${this.student.id}`)
      .subscribe(
      (response) => console.log(response['_body']),
      (error) => console.log(error)
      );
  }

}
