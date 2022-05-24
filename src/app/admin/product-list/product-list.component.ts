import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:any =[]
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
this.productService.getAllProducts().subscribe(
  (data)=>{
this.products = data.findedProduct
  }
)
  }

  del(id:any){
this.productService.deleteProduct(id).subscribe(
  (data)=>{
    console.log('deleted with success');
    location.reload()
  }
)
  }
  edit(id :any){
this.router.navigate([`add-shop/${id}`])
  }
}
