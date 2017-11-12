import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-app-cours-detail',
  templateUrl: './app-cours-detail.component.html',
  styleUrls: ['./app-cours-detail.component.css']
})
export class AppCoursDetailComponent implements OnInit {

  private cours: number;
  constructor(private http: Http) { }

  ngOnInit() {
    // this.userName = 'David';
    this.http.get('http://localhost:3000/cours/`${cours}`').subscribe(data => {
      this.cours = JSON.parse(data['_body']);
    });
  }

}



