import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthService } from "./services/auth-service/auth-service.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './shared/students/students.component';
import { CoursesComponent } from './shared/courses/courses.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { AppNavComponent } from './shared/app-nav/app-nav.component';
import { AppStudentDetailComponent } from './shared/app-student-detail/app-student-detail.component';
import { AppAdminDetailComponent } from './shared/app-admin-detail/app-admin-detail.component';
import { AppCoursDetailComponent } from './shared/app-cours-detail/app-cours-detail.component';

import { AppRoutes } from './app.routing';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminsComponent } from './shared/admins/admins.component';
import { InfoComponent } from './shared/info/info.component';
import { AddComponentComponent } from './shared/add-component/add-component.component';
import { AddStudentComponent } from './shared/add-student/add-student.component';
import { AddCourseComponent } from './shared/add-course/add-course.component';
import { EditCourseComponent } from './shared/edit-course/edit-course.component';
import { EditStudentComponent } from './shared/edit-student/edit-student.component';

import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    CoursesComponent,
    SchoolViewComponent,
    AppNavComponent,
    AppStudentDetailComponent,
    AppAdminDetailComponent,
    AppCoursDetailComponent,
    AdminViewComponent,
    AdminsComponent,
    InfoComponent,
    AddComponentComponent,
    AddStudentComponent,
    AddCourseComponent,
    EditCourseComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    FileUploadModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
