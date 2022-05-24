import { Component, OnInit } from '@angular/core';
import { ProductService } from 'backend/services/product/product.service';
import { Router } from '@angular/router';
import { SignupService } from 'backend/services/signup/signup.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-shop-admin',
  templateUrl: './shop-admin.component.html',
  styleUrls: ['./shop-admin.component.css']
})
export class ShopAdminComponent implements OnInit {
product: any=[];
users:any= {}
user :any
searchText:any
cart:any
carts:any=[]
shop:any=[]

  constructor(private productService: ProductService, private router:Router ,private shopSingle: ShopSingleService, ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[] ')
    
    this.cart = JSON.parse(localStorage.getItem('shops') || '[] ')
this.productService.getAllProducts().subscribe(
  (data)=>{
    this.product = data.findedProduct
  }
)
this.shopSingle.getAllShopSingle().subscribe(
  (data)=>{
this.shop = data.findedShop


var myCart = [];
for (let i = 0; i < this.shop.length; i++) {
if (this.shop[i].idEmp == this.user._id) {


  myCart.push(this.shop[i])
  this.carts = myCart

}

}
  }
)

}

goShop(id:number){
  this.router.navigate([`shop-single-admin/${id}`])
}
logout(){
  localStorage.removeItem('connectedUser');
  this.router.navigate([''])
} 
}
