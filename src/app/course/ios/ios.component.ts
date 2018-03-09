import {Component, OnDestroy, OnInit} from '@angular/core';
import {IosService} from '../ios.service';
import {Post} from '../post';
import {ActivatedRoute} from '@angular/router';
import {AsyncLocalStorage} from 'angular-async-local-storage';

@Component({
  selector: 'app-ios',
  templateUrl: './ios.component.html',
  styleUrls: ['./ios.component.css']
})
export class IosComponent implements OnInit , OnDestroy {
  posts:Post[];
  constructor(private ios:IosService, private ar:ActivatedRoute,
              private localStorage: AsyncLocalStorage) {
   this.localStorage.getItem('posts').subscribe(
     posts => this.posts = posts );
   }

  ngOnInit() {  }
  getPosts()  {
    this.ios.getData().subscribe(
      (res:any) => {
        this.posts = res;
        this.localStorage.setItem('posts', res).subscribe(
          () => {
            console.log('success');
            });
          },
          () => {
            console.log('error');
          });
      }
  ngOnDestroy(): void {
     }
  }
