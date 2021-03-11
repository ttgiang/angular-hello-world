import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello-world';
  titleCase: string;

  post = {
    title: 'Title',
    isFavorite: true
  }
}
