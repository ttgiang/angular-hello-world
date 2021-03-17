import { Component } from '@angular/core';

@Component({
  selector: 'blogs',
  templateUrl: './home-archive.component.html',
  styleUrls: ['./home-archive.component.css'],
})
export class HomeArchiveComponent {
  archives = [
    { year: 2021, month: 1 },
    { year: 2021, month: 2 },
    { year: 2021, month: 3 },
  ];
}
