import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatInputModule, MatListModule,
  MatIconModule, MatProgressSpinnerModule
} from '@angular/material';

export const MODULES = [
  CommonModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
]
@NgModule({
  imports:  MODULES,
  exports:  MODULES,
  declarations: []
})
export class MaterialModule { }
