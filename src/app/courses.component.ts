import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
      {{ course.title | uppercase | lowercase }} <br />
      {{ course.students | number  }} <br />
      {{ course.rating | number:'1.2-4' }} <br />
      {{ course.price  | currency:'AUD':true:'3.2-2' }} <br />
      {{ course.releaseDate | date:'shortDate'}} <br />
      {{ text | summary:60 }}
      <hr />
      <input [(ngModel)]="email" (keyup.enter)="twoWayBinding()" />
      <hr />
      <input (keyup.enter)="onKeyUpNoEvent()" />
      <hr />
      <input (keyup)="onKeyUpWithEvent($event)" />
      <hr />
      <div (click)="onDivClicked()">
         <button (click)="onSave($event)">Save</button>
      </div>      
      <br />
      <hr />
      <button class="btn btn-primary" [class.active]="isActive">Save</button>
      <br />
      <hr />
      <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
      <h2>{{ getTitle() }}</h2>
      <hr />
      <h2>{{ subTitle }}</h2>
      <hr />
      we can do this<br />
      <img src="{{ imageUrl }}" />
      <br />
      <hr />
      or this<br />
      <img [src]="imageUrl" />
      <hr />
      <ul>
         <li *ngFor="let course of courses">
            {{ course }}
         </li>
      </ul>
      <hr />
      <table>
         <tr>
            <td [attr.colspan]="colSpan">I am a table celll</td>
         </tr>
      </table>         
   `,
})
export class CoursesComponent {
   title = "List of Courses";
   subTitle = "Will this Work";
   imageUrl = "http://lorempixel.com/400/200";
   colSpan = 2;
   isActive = true;

   course = {
      title: "this is a title",
      rating: "4.9745",
      students: "30123",
      price: "190.95",
      releaseDate: new Date(2020, 3, 1),
   }

   courses;

   // 2-way binding
   email = "";

   text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";

   constructor(service: CoursesService){
      // see app.module.ts provider for dependency injection
      this.courses = service.getCourses();
   }

   getTitle(){
      return this.title;
   }

   onDivClicked(){
      console.log("on div clicked");
   }

   // any was added to prevent TS error
   onSave($event: any){
      $event.stopPropagation();
      console.log("button clicked", $event);
   }

   onKeyUpNoEvent(){
      console.log("Enter was pressed without event");
   }

   onKeyUpWithEvent($event: any){
      if($event.keyCode === 13){
         console.log("Enter was pressed with event");
      }
      console.log("key pressed: ", $event.target.value);
   }

   onKeyUpTemplateVariables(email: string){
      console.log(email);
   }

   twoWayBinding(){
      console.log(this.email);
   }
}
