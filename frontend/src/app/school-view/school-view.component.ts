import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.css']
})
export class SchoolViewComponent implements OnInit {
  @Output() onClicked = new EventEmitter<any>();

  infoView: any;
  formData: any;
  showAddStudentForm: boolean = false;
  showAddCourseForm: boolean = false;
  showEditStudentForm: boolean = false;
  showEditCourseForm: boolean = false;
  editor: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showStudent(event) {
    this.showAddStudentForm = false;
    this.showAddCourseForm = false;
    this.showEditStudentForm = false;
    this.showEditCourseForm = false;
    this.infoView = {
      type: 'student',
      data: event
    }
    console.log(this.infoView.data);
  }

  showCourse(event) {
    this.showAddStudentForm = false;
    this.showAddCourseForm = false;
    this.showEditStudentForm = false;
    this.showEditCourseForm = false;
    this.infoView = {
      type: 'course',
      data: event
    }
    console.log(event);

  }

  IfEditor($event) {
    this.editor = $event;
    this.onClicked.emit(console.log(this.editor));
  }

  openAddStudentForm() {
    this.showAddCourseForm = false;
    this.showEditStudentForm = false;
    this.showEditCourseForm = false;
    this.infoView = null;
    this.showAddStudentForm = true;
  }

  openAddCourseForm() {
    this.showAddStudentForm = false;
    this.showEditStudentForm = false;
    this.showEditCourseForm = false;
    this.infoView = null;
    this.showAddCourseForm = true;
  }

  openEditStudentForm() {
    this.showAddCourseForm = false;
    this.infoView = null;
    this.showAddStudentForm = false;
    this.showEditCourseForm = false;
    this.showEditStudentForm = true;
  }

  openEditCourseForm() {
    this.showAddStudentForm = false;
    this.infoView = null;
    this.showEditStudentForm = false;
    this.showAddCourseForm = false;
    this.showEditCourseForm = true;
  }

  openEditform(event) {
    console.log(event);
    if (event.type === 'student') {
      this.openEditStudentForm();
    }
    if (event.type === 'course') {
      this.openEditCourseForm();
    }
    this.formData = event.data;
  }
}
