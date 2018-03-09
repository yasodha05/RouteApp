import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material';
import {SignupComponent} from './signup/signup.component';
import {AuthService} from './auth.service';
export const COMPONENTS = [LoginComponent, SignupComponent];
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers:[]
})
export class AuthModule { }
