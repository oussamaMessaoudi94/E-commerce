import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {
  shop: any = []

  user: any
  cart: any = []
  carts: any = []
  users:any ={};
  constructor(private router: Router,private shopSingle: ShopSingleService, ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');


}
}
