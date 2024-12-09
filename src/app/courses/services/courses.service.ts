import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/src/app/assets/courses.json';

  constructor() {}

  list() {
    return [
      { "id": 1, "name": "Angular", "category": "front-end" },
      { "id": 2, "name": "Spring Boot", "category": "back-end"}
    ];
  }
}
