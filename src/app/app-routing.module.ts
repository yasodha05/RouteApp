import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NgModule} from '@angular/core';
import {AndroidComponent} from './course/android/android.component';
import {IosComponent} from './course/ios/ios.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {HomeComponent} from './core/home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {JavaComponent} from './course/java/java.component';
import {JavaListComponent} from './course/java/java-list/java-list.component';
import {JavaDetailComponent} from './course/java/java-detail/java-detail.component';
import {IosDetailComponent} from './course/ios/ios-detail/ios-detail.component';
import {RegisterCourseComponent} from './course/register-course/register-course.component';
import {DeactivateGuardGuard} from './auth/deactivate-guard.guard';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'android', canActivate: [AuthGuardService], component:AndroidComponent},
  {path:'ios',  canActivate: [AuthGuardService], component:IosComponent},
  {path:'ios/:id', canActivateChild:[AuthGuardService], component:IosDetailComponent},
      {path:'java',  component:JavaComponent,  children:[
      {path:'javaList', component:JavaListComponent, outlet:'List'},
      {path:':id', component:JavaDetailComponent , outlet:'Detail'}
    ]},
  {path:'regCourse', component:RegisterCourseComponent ,
    canDeactivate : [DeactivateGuardGuard]}
 ];

@NgModule({

  imports: [
   /* RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})*/
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
