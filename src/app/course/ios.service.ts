import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';
import {AsyncLocalStorage} from 'angular-async-local-storage';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/from';

@Injectable()
export class IosService {
  posts;
  comments;
  constructor(private http:HttpClient, private localStorage: AsyncLocalStorage) { }

  getData() {
 return this.http.get('https://jsonplaceholder.typicode.com/posts',
    { observe: 'body', responseType:'json'});
 }

  getComments() {
    this.comments = this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments',
      { observe: 'body', responseType:'json'});
       console.log(this.comments);
        return this.comments;
  }

}
