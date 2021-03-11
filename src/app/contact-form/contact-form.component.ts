import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
})
export class ContactFormComponent {
  contactmethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Text' },
    { id: 4, name: 'Junk' },
  ];

  logFirstName(x: any) {
    console.log(x);
  }
  logComment(x: any) {
    console.log(x);
  }
  submit(myForm: any) {
    console.log(myForm);
  }
}
