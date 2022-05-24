import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-cart-admin',
  templateUrl: './cart-admin.component.html',
  styleUrls: ['./cart-admin.component.css']
})
export class CartAdminComponent implements OnInit {
  shop: any = []

  user: any
  cart: any = []
  carts: any = []
  x!: any
  myCart:any = [];
  constructor(private shopSingle: ShopSingleService, private activatedRouter: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('shops') || '[] ')
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[] ')
    this.shopSingle.getAllShopSingle().subscribe(
      (data) => {
        this.shop = data.findedShop



        
        for (let i = 0; i < this.shop.length; i++) {
          if (this.shop[i].idEmp == this.user._id) {


            this.myCart.push(this.shop[i])
            this.carts = this.myCart
           
          }
     
          
    
         
        }
        console.log('here',this.carts);
        this.x = 0;
        for (let i = 0; i < this.carts.length; i++) {

          this.x += Number(this.carts[i].somme)

        }


   

        this.x = 0;

        for (let i = 0; i < this.carts.length; i++) {

          this.x += Number(this.carts[i].somme)

        }
      })



  }

  del(id:any) {
    this.shopSingle.deleteShopById(id).subscribe((data) => {
      console.log('delete with success', data.message);
    

    
    
    });

  }

  

}
