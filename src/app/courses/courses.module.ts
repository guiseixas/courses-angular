import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule
  ]
})
export class CoursesModule { }
