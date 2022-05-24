import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'backend/services/contact/contact.service';

@Component({
  selector: 'app-conatct-aff',
  templateUrl: './conatct-aff.component.html',
  styleUrls: ['./conatct-aff.component.css']
})
export class ConatctAffComponent implements OnInit {
id:any
contact:any=[]
contactForm!:FormGroup
  constructor(private contactService:ContactService, private activatedRoute:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.contactService.getContactById(this.id).subscribe(
      (data)=>{
this.contact = data.findedContact

      }
    )
    this.contactForm = this.fb.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      subject : [''],
      message : [''],
      
    })
  }

}
