import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  product: any=[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data)=>{
        this.product = data.findedProduct
      })
  }
  goShop(id:number){
    this.router.navigate([`shop-single-user/${id}`])
  }
}
