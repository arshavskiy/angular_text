import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToSchool() {
    this.router.navigate(['school-view']);
  }

  goToAdmin() {
    this.router.navigate(['admin-view']);

  }

}
