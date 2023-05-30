import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ListeComponent } from '../components/liste/liste.component';

export const mainRoutes : Routes = [
  { path: '', component: AppComponent },
  { path: 'liste', component: ListeComponent },
];
