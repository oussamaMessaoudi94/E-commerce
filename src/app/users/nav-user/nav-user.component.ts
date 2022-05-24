import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';
import { SignupService } from 'backend/services/signup/signup.service';
import { json } from 'express';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  shop: any = []

  user: any
  cart: any = []
  carts: any = []
  users:any ={};
  constructor(private router: Router,private shopSingle: ShopSingleService, ) { }

  ngOnInit(): void {
this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');

this.shopSingle.getAllShopSingle().subscribe(
  (data) => {
    this.shop = data.findedShop

    var myCart = [];
    for (let i = 0; i < this.shop.length; i++) {
      if (this.shop[i].idEmp == this.user._id) {


        myCart.push(this.shop[i])
        this.carts = myCart
        
      }
      ;
    }

  })
  }
logout(){
  localStorage.removeItem('connectedUser');
  this.router.navigate([''])
}
}



