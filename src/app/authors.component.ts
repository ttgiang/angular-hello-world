import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  template: `<h2>{{ getTitle() }}</h2>
      <ul>
         <li *ngFor="let author of authors">
            {{ author }}
         </li>
      </ul>
   `,
})
export class AuthorsComponent {
   title = "List of Authors";
   authors;

   constructor(service: AuthorsService){
      // see app.module.ts provider for dependency injection
      this.authors = service.getAuthors();
   }

   getTitle(){
      return this.title;
   }
}
