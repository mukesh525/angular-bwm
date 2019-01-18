import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../shared/auth.service';

import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errors:any[]=[];
  notifyMessage:string='';


  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params)=>{
           if(params['registered']=='success'){
           this.notifyMessage="You have been successfully registered, You can login now."
          }
    });
  }


  initForm(){
    this.loginForm=this.fb.group({
      email:['',[ Validators.required,
                  Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password:['',Validators.required]
    })
  }


  login(){
    //console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      () => {
          this.router.navigate(['/rentals'])
      },
      (erroResponse)=>{
       this.errors = erroResponse.error.errors;  
       console.log(erroResponse);
      }
    )
  }
  isInvalidForm(fieldName):boolean{
    return this.loginForm.controls[fieldName].invalid && (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }


  isRequired(fieldName):boolean{
    return this.loginForm.controls[fieldName].errors.required  }
}
