import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: any;
  constructor() {
  }

  login(user) {

    // http post request to server 
    if (user.name === 'pavel' && user.password === '12345') {
      console.log('logged in');
      // api user.
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser = localStorage.getItem('currentUser');
      return this.currentUser;
    } else {
      this.currentUser = '';
      console.log('not sababa');
    }
  }

}
