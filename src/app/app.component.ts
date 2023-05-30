import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '1-standalone-api';
}


// on peut aussi juste importer les classes routerLink et routerOutlet à la place de RouterModule
