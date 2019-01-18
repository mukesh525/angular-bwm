import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {username: ''};
  errors:any[]=[];
 
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  register(){
   this.authService.register(this.formData).subscribe(
     () => {
         this.router.navigate(['/login',{registered:'success'}])
     },
     (erroResponse)=>{
       this.errors = erroResponse.error.errors;  
     // console.log(erroResponse);
     }
   )
  }
}
