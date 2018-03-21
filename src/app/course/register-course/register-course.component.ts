import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

  canDeactivate():Observable<boolean> | boolean {
    if (this.angForm.dirty) {
      return window.confirm('DO you really want to move?');
    }
    return true;
  }
  addCourse(course, price)  {

  }
}
