import {Component, OnDestroy, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AsyncLocalStorage} from 'angular-async-local-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(private localStorage: AsyncLocalStorage) {}
    ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBKbHxDljg-WqA1mitkq-sMedE46OijH7U',
      authDomain: 'ecommerce-a4ac4.firebaseapp.com',
    });
  }
  ngOnDestroy(): void {

   }
}
