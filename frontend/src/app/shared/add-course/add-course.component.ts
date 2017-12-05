import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: any;
  constructor() { }

  ngOnInit() {
    this.course = {};
  }
}
