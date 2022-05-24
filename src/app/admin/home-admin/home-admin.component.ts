import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  product: any=[];
  id: any;
  shop: any = []

  user: any
  cart: any = []
  carts: any = []
  constructor(private productService: ProductService, private router: Router, private shopSingle: ShopSingleService,) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data)=>{
        this.product = data.findedProduct
      })
  }
  
    goShop(id:number){
      this.router.navigate([`shop-single-admin/${id}`])
    }
}
