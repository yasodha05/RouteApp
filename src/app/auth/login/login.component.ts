import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Authenticate} from '../authenticate';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  returnUrl:string;
  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Authenticate>();
  constructor(private auth:AuthService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }
  signin(form:FormGroup) {
    this.auth.signin(this.form.get('email').value, this.form.get('password').value).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
