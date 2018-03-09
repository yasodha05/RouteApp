import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Authenticate} from '../authenticate';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Authenticate>();
  constructor(private auth:AuthService) { }

  ngOnInit() {
   this.form = new FormGroup({
     email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  submit(form:FormGroup) {
    console.log(this.form.get('email').value);
    this.auth.signupUser(this.form.get('email').value, this.form.get('password').value);
  }
}
