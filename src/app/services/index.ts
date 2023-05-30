import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

// remplace le service
export const getAllDatas = () => {
  // inject http
  const http = inject(HttpClient);
  // appel http
  return http.get<any>('https://jsonplaceholder.typicode.com/todos');
};
