import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavComponent } from './nav/nav.component';
import {MaterialModule} from '../material/material.module';
import { HomeComponent } from './home/home.component';
import {CourseRoutingModule} from '../course/course-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  exports: [
    NavComponent, HomeComponent
  ],
  declarations: [NavComponent, HomeComponent]
})
export class CoreModule { }
