import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
user :any=[]
  constructor(private router :Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('connectedUser') || ('[]'))
  }

  edit(id:any){
this.router.navigate([`signup/${id}`])
  }
}
