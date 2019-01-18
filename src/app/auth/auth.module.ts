
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './shared/token.interceptor';

import { CommonModule } from '@angular/common';
import { AuthGuard } from './shared/auth.guard'
import { AuthComponent } from './auth.component';


const routes:Routes =[
    {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
    {path:'register',component:RegisterComponent,canActivate:[AuthGuard]}
]



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule ,
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
