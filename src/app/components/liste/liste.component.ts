import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { getAllDatas} from 'src/app/services';
export type Result = [
  {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
];
@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  // constructor(private dataService: DataService) {
  //   this.getAllPeople()
  // }

  // getAllPeople() {
  //   this.dataService.getAllPeople().subscribe((data) => {
  //     console.log(data, 'test');
  //   });
  // }
  data$ = getAllDatas();
}
