import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from 'backend/services/signup/signup.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;
  id:any
  user :any=[]
  title :any
  constructor(private fb : FormBuilder, private sigunpService: SignupService, private activatedRouter:ActivatedRoute ) { }

  ngOnInit(): void {
    
      this.id = this.activatedRouter.snapshot.paramMap.get('id')
      if (this.id) {
        this.title = 'Edit'
this.sigunpService.getUserById(this.id).subscribe(
  (data)=>{
this.user = data.findedUser
  }
)
    } 


this.signupForm = this.fb.group ({
  firstName : [''],
  lastName : [''],
  email : [''],
  password : [''],
  tel : [''],
})
  }
  


  signup(x:any){
    if (this.id) {
      this.sigunpService.editEmp(this.user).subscribe(
        (data)=>{
    
        }
      )
      location.reload()
    } else {
      this.sigunpService.signup(this.signupForm.value).subscribe(
        (data)=> {
          console.log('Here into signup', data.message);
          
        }
      );
    }

    
  }
}
