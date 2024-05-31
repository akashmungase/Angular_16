import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterAndLoginComponent } from './register-and-login/register-and-login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register-and-login', component: RegisterAndLoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
