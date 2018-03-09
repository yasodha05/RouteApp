import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AsyncLocalStorage} from 'angular-async-local-storage';

interface User {
  username:string;
  password:string;
}
@Injectable()
export class AuthService {
  user: Observable<User>;
  token:string;
  loginObservable;
  constructor(private router:Router , private localStorage: AsyncLocalStorage ) { }

  signupUser(username, password) {

    firebase.auth().createUserWithEmailAndPassword(username, password).
    then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  signin(username, password) {
    this.loginObservable = Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(username, password).
    then((res) => {
      console.log(res);
      this.router.navigate(['/']);
      firebase.auth().currentUser.getIdToken().then(
        (token:string) => {
          this.token = token;
          localStorage.setItem('user', token);
        }
      );
    }).catch((error) => {
      console.log(error);
    }));
    return  this.loginObservable;

  }

  isAuthenticated():boolean {
    if (localStorage.getItem('user') !== null) {
      return true;
    }
    return false;
     }
  getToken() {
  firebase.auth().currentUser.getToken().then(
    (token:string) => this.token = token
  );
  return this.token;
  }
  onLogout() {
    firebase.auth().signOut();
    localStorage.removeItem('user');
    this.token = null;
    this.localStorage.clear().subscribe(
      () => {},
      () => {}
    );
  }
}
