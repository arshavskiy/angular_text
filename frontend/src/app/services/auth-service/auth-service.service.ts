import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  currentUser: any;
  public user: any;
  public name: any;
  private password: Array<any>;

  constructor(
    private http: Http,
  ) {
  }

  login(user, onSuccess) {

    // do query to route login
    this.http.post('http://localhost:3000/login', { name: user.name, password: user.password }).subscribe(data => {
      if ('ok' == data['_body']) {
        console.log('logged in');
        // api user.
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        onSuccess();
      } else {
        this.currentUser = null;
        console.log('not sababa');
      }
    });
  }

}
