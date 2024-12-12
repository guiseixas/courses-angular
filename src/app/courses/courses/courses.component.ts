import { catchError, Observable, of } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  imports: [
    AppMaterialModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['id', 'name', 'category'];

  dialog = inject(MatDialog);

  constructor(private courseService: CoursesService) {
    this.courses$ = this.courseService.getAll()
    .pipe(
      catchError(error => {
        this.onError('Error to load courses.')
        return of([])
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {}

}
