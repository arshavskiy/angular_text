import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  private admins: Array<any>;
  constructor(private http: Http) { }

  ngOnInit() {
    // this.userName = 'David';
    this.http.get('http://localhost:3000/admins').subscribe(data => {
      this.admins = JSON.parse(data['_body']);
    });
  }

}
