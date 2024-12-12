import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { delay, first, mergeMap, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiUrl = '/assets/courses.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      first(),
      //mergeMap(() => throwError(() => new Error('Erro')))
      //delay(5000)
    );
  }
}
