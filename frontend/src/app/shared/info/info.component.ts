import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
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
  @Output() onClickEdit = new EventEmitter<any>();


  constructor(private http: Http) { }

  getCourses(student) {
    this.http.get(`http://localhost:3000/student-cours/${student}`).subscribe(data => {
      this.studentCourses = JSON.parse(data['_body']);
      console.log(this.studentCourses);

    });
  }

  getStudents(course) {
    this.http.get(`http://localhost:3000/courses-student/${course}`).subscribe(data => {
      this.courseStudents = JSON.parse(data['_body']);
      console.log(this.courseStudents);
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

  openEditForm() {
    this.onClickEdit.emit(this.viewData);
  }
}
