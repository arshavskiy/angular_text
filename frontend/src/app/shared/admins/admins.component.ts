import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  private admins: any;
  private admin: any;
  private allAdmins: any;
  private loginUser: any;
  constructor(private http: Http) { }

  ngOnInit() {

    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.loginUser.name);
    this.http.get(`http://localhost:3000/admin/${this.loginUser.name}`).subscribe(data => {
      this.admins = JSON.parse(data['_body']);
      this.admin = this.admins[0];
      console.log(this.admin.name)
    });

    this.http.get(`http://localhost:3000/admins`).subscribe(data => {
      this.allAdmins = JSON.parse(data['_body']);
      console.log(this.allAdmins);
    });



  }

}
