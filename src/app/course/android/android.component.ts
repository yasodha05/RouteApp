import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {Comment} from '../comment';
import {IosService} from '../ios.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
  userArray:Array<Post>;
  comments:Array<Comment>;
  newComments:Array<Comment>;
  constructor(private ios:IosService) { }

  ngOnInit() {
    this.ios.getComments().subscribe(
      (res) => {
        this.comments = res;
        console.log(this.comments);
      }
    );
  }
  getPostsById(postId) {
    this.newComments = this.comments.filter( c => c.postId == postId);
 /*  this.ios.getComments(postId);*/
   }
}
