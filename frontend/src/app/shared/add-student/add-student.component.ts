import { OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() data: any;
  @ViewChild('fileInput') fileInput: ElementRef;

  public uploader:FileUploader = new FileUploader({url: 'http://localhost:3000/upload'});

  form: FormGroup;
  loading: boolean = false;

  student: any;
  courses: [any];
  studentCourses: [any];


  constructor(private fb: FormBuilder, private http: Http) {
    // this.createForm();

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
      this.uploader.clearQueue();
    };

    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      this.uploader.options.additionalParameter =  this.student
    };
  }

  ngOnInit() {
    this.student = {};
    this.http.get('http://localhost:3000/courses').subscribe(data => {
      this.courses = JSON.parse(data['_body']);
      this.studentCourses = this.courses;
      console.log(this.courses);
    });
  }

  createNewStudent() {
    if (this.uploader.queue.length > 0 ){
      this.uploader.uploadAll();
    } 
    else {
    this.http.post(`http://localhost:3000/student/`, { student: this.student }).subscribe(data => {
      if ('ok' == data['_body']) {
        console.log('saved');
      } else {
        console.log('not sababa');
      }
    });
    }
  }
}









