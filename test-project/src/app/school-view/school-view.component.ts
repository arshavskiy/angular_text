import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.css']
})
export class SchoolViewComponent implements OnInit {
  @Output() onClicked = new EventEmitter<any>();

  infoView: any;
  editor: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showStudent(event) {
    this.infoView = {
      type: 'student',
      data: event
    }
    console.log(this.infoView.data);
  }

  showCourse(event) {
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
}
