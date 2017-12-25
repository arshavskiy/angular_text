import { AuthService } from './../services/auth-service/auth-service.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from '@angular/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLoggedIn = new EventEmitter<boolean>();

  public user: any;
  private students: Array<any>;


  constructor(
    private http: Http,
    private router: Router,
    private authService: AuthService
  ) {
    this.user = {};
  }

  ngOnInit() {
      this.http.get('http://localhost:3000/students').subscribe(data => {
      this.students = JSON.parse(data['_body']);
    });
  }

  login(user) {
    this.authService.login(this.user, () => {
      console.log('navigate to school view');
      this.router.navigate(['school-view']);
    });
  }

}
