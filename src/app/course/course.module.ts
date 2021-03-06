import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { JavaComponent } from './java/java.component';
import {JavaListComponent} from './java/java-list/java-list.component';
import {JavaDetailComponent} from './java/java-detail/java-detail.component';
import { IosDetailComponent } from './ios/ios-detail/ios-detail.component';
import { RegisterCourseComponent } from './register-course/register-course.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IosComponent, AndroidComponent, JavaComponent, JavaDetailComponent, JavaListComponent, IosDetailComponent, RegisterCourseComponent],
  exports:[IosComponent, AndroidComponent, JavaComponent, JavaListComponent, JavaDetailComponent]
})
export class CourseModule { }
