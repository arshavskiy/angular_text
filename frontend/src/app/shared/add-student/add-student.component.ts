import { OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() data: any;
  @ViewChild('fileInput') fileInput: ElementRef;

  form: FormGroup;
  loading: boolean = false;

  student: any;
  courses: [any];
  studentCourses: [any];


  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
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
    console.log(this.student);
    this.student.image = 'fileName';
    this.http.post(`http://localhost:3000/student/`, { student: this.student }).subscribe(data => {
      if ('ok' == data['_body']) {
        console.log('saved');
      } else {
        console.log('not sababa');
      }
    });
  }


  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    this.http.post(`http://localhost:3000/upload`, formModel).subscribe(data => {
      if ('ok' == data['_body']) {
        console.log('saved');
      } else {
        console.log('not sababa');
      }
    });
    console.log(formModel);
    this.loading = false;
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}









