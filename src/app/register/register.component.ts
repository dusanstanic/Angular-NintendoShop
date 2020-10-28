import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  @Input() hideModal: Function;
  genders = ['male', 'female'];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;

    if (!this.registerForm.valid) {
      return;
    }

    const user: User = this.registerForm.value;
    this.authService.register(user).subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
      },
      (errorMessage: string) => {
        this.errorMessage = errorMessage;
        this.isLoading = false;
      }
    );
  }
}
