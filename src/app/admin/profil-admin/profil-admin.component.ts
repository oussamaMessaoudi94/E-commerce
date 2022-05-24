import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit {
  user :any=[]
  constructor(private router :Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('connectedUser') || ('[]'))
  }

  edit(id:any){
this.router.navigate([`signup/${id}`])
  }
}

