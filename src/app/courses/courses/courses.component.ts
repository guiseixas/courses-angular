import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [
    AppMaterialModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['id', 'name', 'category'];

  constructor(private courseService: CoursesService) {
    this.courses = this.courseService.list();
  }

  ngOnInit(): void {}
}
