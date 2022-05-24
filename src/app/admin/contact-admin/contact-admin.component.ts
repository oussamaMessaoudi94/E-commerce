import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from 'backend/services/contact/contact.service';


@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css']
})
export class ContactAdminComponent implements OnInit {
  contact:any =[]
  constructor(private contatctService : ContactService, private router:Router) { }

  ngOnInit(): void {
this.contatctService.getAllContatct().subscribe(
  (data)=>{
    this.contact = data.findedContatct
  }
)
  }

  detail(id:any){
    this.router.navigate([`contact-aff/${id}`])
  }

  del(id:any){
this.contatctService.deleteProduct(id).subscribe(
  (data)=>{
    
  }
)
  }
}
