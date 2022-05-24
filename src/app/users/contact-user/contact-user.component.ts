import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'backend/services/contact/contact.service';

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.css']
})
export class ContactUserComponent implements OnInit {
contactForm!:FormGroup
  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      subject : [''],
      message : [''],
      
    })
  }


  contact(x:any){
this.contactService.addContact(x).subscribe(
  (data)=>{
    console.log('added with success');
    
  }
)
location.reload()
  }
}
