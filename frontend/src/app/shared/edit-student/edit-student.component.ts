import { Component, OnInit, Input } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'util';
import { FormBuilder } from "@angular/forms";
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input() data: any;
  @ViewChild('fileInput') fileInput: ElementRef;

  public uploader:FileUploader = new FileUploader({url: 'http://localhost:3000/upload'});

  student: any;
  image: any;
  studentCourses: any;
  courses: any;

  constructor(private fb: FormBuilder, private http: Http) {

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
      this.uploader.clearQueue();
    };

    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      this.uploader.options.additionalParameter =  this.student
    };
  }

  ngOnInit() {
    if (!this.data || this.data == undefined || this.data == {}) {
      this.student = {};
    } else {
      this.student = this.data;
      this.image = `http://localhost:3000/upload/${this.student.image}`
      // this.student.image = null;
    }
    this.getAllCourses(this.student.id);
    this.getCourses();
  }

  getAllCourses(student) {
    this.http.get(`http://localhost:3000/student-cours/${student}`).subscribe(data => {
      this.studentCourses = JSON.parse(data['_body']);
      console.log(this.studentCourses);
    });
  }

  getCourses() {
    // this.http.get(`http://localhost:3000/student-cours/${student}`).subscribe(data => {}
    this.http.get('http://localhost:3000/courses').subscribe(data => {
      this.courses  = JSON.parse(data['_body']);
      console.log(this.courses);
    });
  }

  editStudent() {
    if (this.uploader.queue.length > 0 ){
      this.uploader.uploadAll();
    }

    this.http.post(`http://localhost:3000/student/update/${this.student.id}`, { student: this.student }).subscribe(data => {
      console.log(this.student.id);
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
