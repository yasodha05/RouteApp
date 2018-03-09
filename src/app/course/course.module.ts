import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { JavaComponent } from './java/java.component';
import {JavaListComponent} from './java/java-list/java-list.component';
import {JavaDetailComponent} from './java/java-detail/java-detail.component';
import { IosDetailComponent } from './ios/ios-detail/ios-detail.component';


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  declarations: [IosComponent, AndroidComponent, JavaComponent, JavaDetailComponent, JavaListComponent, IosDetailComponent],
  exports:[IosComponent, AndroidComponent, JavaComponent, JavaListComponent, JavaDetailComponent]
})
export class CourseModule { }
