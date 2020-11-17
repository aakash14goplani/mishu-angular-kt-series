import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    console.log(form);
    console.log('is form valid: ', form.valid);
    console.log('first name: ', form.value.first_name);
    console.log('last name: ', form.value.last_name);
    console.log('address: ', form.value.address);
  }
}
