import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export type Result = [
  {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
];
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http: HttpClient = inject(HttpClient);
  // constructor( private http : HttpClient)

  constructor() {}

  getAllPeople() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
