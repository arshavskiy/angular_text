import { OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Input() data: any;
  @ViewChild('fileInput') fileInput: ElementRef;

  public uploader:FileUploader = new FileUploader({url: 'http://localhost:3000/upload/course'});

  form: FormGroup;
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
  }

  createNewCourse() {
    if (this.uploader.queue.length > 0 ){
      this.uploader.uploadAll();
    }
    console.log('this.course:' + this.course);

    this.http.post(`http://localhost:3000/course/`, { course: this.course }).subscribe(data => {
      if ('ok' == data['_body']) {
        console.log('saved');
      } else {
        console.log('not sababa');
      }
    });
  }
}
