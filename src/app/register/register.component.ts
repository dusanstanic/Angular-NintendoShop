import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  genders = ['male', 'female'];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const user: User = this.registerForm.value;
  }
}
