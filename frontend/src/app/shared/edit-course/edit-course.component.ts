import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  @Input() data: any;
  course: any;
  image: any;
  constructor() { }

  ngOnInit() {
    if (!this.data || this.data == undefined || this.data == {}) {
      this.course = {}
    } else {
      this.course = this.data;
      this.image = `http://localhost:3000/upload/${this.course.image}`
      // this.course.image = null;
    }
  }

}
