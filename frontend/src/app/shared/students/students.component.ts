import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Output() onStudentClicked = new EventEmitter<any>();
  @Output() onClickAddStudent = new EventEmitter<any>();

  currentStudent: any;

  private students: Array<any>;
  private studentsTotal: number;
  constructor(private http: Http) { }

  ngOnInit() {
    // this.userName = 'David';
    this.http.get('http://localhost:3000/students').subscribe(data => {
      this.students = JSON.parse(data['_body']);
      console.log(this.students);
      this.studentsTotal = this.students.length;
      console.log(this.students.length);
    });
  }

  chooseStudent(stud) {
    this.onStudentClicked.emit(stud);
    // this.currentStudent = stud;
  }

  addNewStudent() {
    this.onClickAddStudent.emit();
  }

}
