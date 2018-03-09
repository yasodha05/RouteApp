import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AndroidComponent} from '../course/android/android.component';
import {IosComponent} from '../course/ios/ios.component';
import {AuthGuardService} from '../auth/auth-guard.service';


const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
