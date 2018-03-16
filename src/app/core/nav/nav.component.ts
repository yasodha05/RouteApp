import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  CourseCount:number;
  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
    this.CourseCount = 0;
  }
  logout()  {
    this.auth.onLogout();
  }

}
