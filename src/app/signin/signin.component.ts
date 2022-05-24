import { Component, OnInit } from '@angular/core';
import { SignupService } from 'backend/services/signup/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user:any={};
users:any={};
x:any={}
id: any;
msgError!:string
  constructor(private signupService:SignupService, private router:Router) { }

  ngOnInit(): void {
    this.signupService.getAllUseres().subscribe(
      (data)=>{
        this.users = data.finded
      })
   

  }


  login(){
    
    
    this.signupService.login(this.user).subscribe(
      (data)=> {
        this.users = this.user
        console.log('Data after login',data);
        if (data.message == '0') {
          this.msgError = 'Please Check your email';
        } else  if (data.message == '1')  {
          this.msgError = 'Please Check your PWD';
        } else if (this.user.email == "oussama@gmail.com" || this.user.email == "wassim@gmail.com") {
          console.log();
          localStorage.setItem("connectedUser",JSON.stringify(data.user));
          this.router.navigate(['home-admin'])
          
        }
        else
        
        this.router.navigate(['home-user'])
        localStorage.setItem("connectedUser",JSON.stringify(data.user));
      }
    ); 
  }
  
}
