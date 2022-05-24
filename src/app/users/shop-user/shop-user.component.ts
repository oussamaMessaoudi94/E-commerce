import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-shop-user',
  templateUrl: './shop-user.component.html',
  styleUrls: ['./shop-user.component.css']
})
export class ShopUserComponent implements OnInit {
  product: any=[];
  searchText:any
  user:any
cart:any
carts:any=[]
shop:any=[]
  constructor(private productService: ProductService, private router:Router, private shopSingle: ShopSingleService,) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[] ')
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
    this.router.navigate([`shop-single-user/${id}`])
  }
  logout(){
    localStorage.removeItem('connectedUser');
    this.router.navigate([''])
  } 
}
