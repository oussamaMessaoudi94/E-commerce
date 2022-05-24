import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';
import { json } from 'body-parser';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  imagePreview: any
  productForm!: FormGroup
  id: any
  products: any = []
  user: any
  title :any
  constructor(private fb: FormBuilder, private productService: ProductService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    if (this.id) {
      this.title = 'EDIT'
      this.productService.getProductById(this.id).subscribe(
        (data) => {
          this.products = data.findedProduct
        }
      )
    } else {
      this.title = 'ADD'
    }
   

    this.productForm = this.fb.group({
      productName: [''],
      price: [''],
      quantity: [''],
      mark: [''],
      description: [''],
      img: ['']
    })

  }

  addProduct(y: any) {
if (this.id) {
  this.productService.editEmp(this.products).subscribe(
    (data)=>{

    }
  )
  location.reload()
} else {
  
this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]')
let x = { productName: '', price: '', quantity: '', mark: '', description: '', img: '', idEmp: '' }
x.productName = this.productForm.value.productName,
  x.price = this.productForm.value.price,
  x.quantity = this.productForm.value.quantity,
  x.mark = this.productForm.value.mark,
  x.description = this.productForm.value.description,
  x.img = this.productForm.value.img,
  x.idEmp = this.user._id
console.log(x.idEmp);


this.productService.addProduct(x, this.productForm.value.img).subscribe();
location.reload();
}
}



onImageSelected(event: any) {
let file: any = event.target.files[0];
this.productForm.patchValue({ img: file });
this.productForm.updateValueAndValidity();
const reader = new FileReader();
reader.onload = () => {
  this.imagePreview = reader.result as string
};
reader.readAsDataURL(file);
  }

}
