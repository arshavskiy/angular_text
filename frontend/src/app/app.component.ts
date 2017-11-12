import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isLogged: boolean;

  constructor(
  ) { }

  ngOnInit() { }

  isLoggedIn(event) {
    this.isLogged = event;
    console.log(this.isLogged)
  }
}
