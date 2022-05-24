import { Component, OnInit } from '@angular/core';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: any ={}
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data)=>{
        this.products = data.findedProduct
      }
    )
  }

}
