import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {
  id: any;
  product: any = {};
  products: any = {};
  shopForm!: FormGroup
  title!: String
  users: any = {}
  y: any
  shop: any = []

  user: any
  cart: any = []
  carts: any = []
  constructor(private activatedRouter: ActivatedRoute, private productService: ProductService, private fb: FormBuilder, private shopSingle: ShopSingleService) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    this.productService.getProductById(this.id).subscribe(
      (data) => {
        this.product = data.findedProduct

      }
    )



    this.shopForm = this.fb.group({
      numberShop: [''],
    })
    this.users = JSON.parse(localStorage.getItem('connectedUser') || '[]');



  }
  addShop() {

    var idshop = JSON.parse(localStorage.getItem('idshop') || "1");
    let x = { img: '', productName: '', price: '', numberShop: '', idProd: '', somme: 0, idEmp: '' };
    x.img = this.product.img;
    x.numberShop = this.shopForm.value.numberShop;
    x.productName = this.product.productName;
    x.price = this.product.price;
    x.idProd = this.product._id;
    x.idEmp = this.users._id


    let somme = this.product.price * this.shopForm.value.numberShop;




    x.somme = somme


    if (this.shopForm.value.numberShop > this.product.quantity) {
      this.title = 'le quantity indisponible'
    } else {
      this.product.quantity = this.product.quantity - this.shopForm.value.numberShop
      this.productService.editEmp(this.product).subscribe((data) => {
        console.log('update');

      });


      this.shopSingle.addShop(x).subscribe((data) => {
        var shops = JSON.parse(localStorage.getItem('shops') || ('[]'));
        shops.push(x);
        localStorage.setItem('shops', JSON.stringify(shops));
        localStorage.setItem('idshop', idshop + 1);
        location.reload()


      })




    }


  }

}
