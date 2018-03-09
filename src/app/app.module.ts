import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CourseModule} from './course/course.module';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {JavaService} from './course/java/java.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth-interceptor';
import {IosService} from './course/ios.service';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';



@NgModule({
  declarations: [
    AppComponent
     ],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    HttpClientModule,
    CourseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AsyncLocalStorageModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBKbHxDljg-WqA1mitkq-sMedE46OijH7U',
      authDomain: 'ecommerce-a4ac4.firebaseapp.com'}),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [AuthService, AuthGuardService, IosService,
    JavaService,
    {provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor , multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
