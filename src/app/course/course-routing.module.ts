import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AndroidComponent} from './android/android.component';
import {IosComponent} from './ios/ios.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
