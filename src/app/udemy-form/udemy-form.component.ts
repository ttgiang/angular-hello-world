import { Component } from '@angular/core';

@Component({
  selector: 'udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.less'],
})
export class UdemyFormComponent {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
    { id: 4, name: 'Angular' },
  ];

  submit(myForm: any) {
    console.log(myForm);
  }
}
