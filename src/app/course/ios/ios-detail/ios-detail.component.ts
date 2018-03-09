import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IosService} from '../../ios.service';
import {Post} from '../../post';

@Component({
  selector: 'app-ios-detail',
  templateUrl: './ios-detail.component.html',
  styleUrls: ['./ios-detail.component.css']
})
export class IosDetailComponent implements OnInit {

  id;
  Post:Post;
 returnUrl;
  constructor(private activatedroute:ActivatedRoute, private ios:IosService , private router:Router) { }

  ngOnInit() {
     this.activatedroute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.returnUrl = this.activatedroute.snapshot.parent.url;
    console.log(this.returnUrl);
  }

  goBack() {
  this.router.navigate([this.returnUrl]);
  }
}
