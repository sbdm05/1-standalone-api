import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AccueilComponent } from '../components/accueil/accueil.component';
import { ListeComponent } from '../components/liste/liste.component';

export const mainRoutes : Routes = [
  { path: '', component: AccueilComponent },
  { path: 'liste', component: ListeComponent },
];
