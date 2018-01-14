import { Component, OnInit, Input } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'util';
import { FormBuilder } from "@angular/forms";
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  @Input() data: any;
  @ViewChild('fileInput') fileInput: ElementRef;

  public uploader:FileUploader = new FileUploader({url: 'http://localhost:3000/upload'});

  student: any;
  image: any;
  studentCourses: any;
  courses: any;
  course: any;

  constructor(private fb: FormBuilder, private http: Http) {

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
      this.uploader.clearQueue();
    };

    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      this.uploader.options.additionalParameter =  this.course
    };
  }


  ngOnInit() {
    if (!this.data || this.data == undefined || this.data == {}) {
      this.course = {}
    } else {
      this.course = this.data;
      this.image = `http://localhost:3000/upload/${this.course.image}`
      // this.course.image = null;
    }
  }

  editCours() {
    if (this.uploader.queue.length > 0 ){
      this.uploader.uploadAll();
    }

    this.http.post(`http://localhost:3000/course/update/${this.course.id}`, { course: this.course }).subscribe(data => {
      console.log(this.course.id);
      if ('ok' == data['_body']) {
        console.log('saved');
      } else {
        console.log('not sababa');
      }
    });
  }

}
