import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-register-and-login',
  standalone: true,
  templateUrl: './register-and-login.component.html',
  styleUrls: ['./register-and-login.component.scss'],
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent
  ]
})
export class RegisterAndLoginComponent {
  
  loginPage: boolean = true;

  // navigate to login page
  navigateToLogin() {
    this.loginPage = true;
  }

  // navigate to register page
  navigateToRegister() {
    this.loginPage = false;
  }
}
