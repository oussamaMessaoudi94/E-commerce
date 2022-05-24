import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'backend/services/checkout/checkout.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';
declare function NumberToLetter(x: any): any
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id: any;
  invoice :any=[]
  cart: any = []
  shop:any =[]
  carts: any = []
  x!: any;
  TTC:any
  date:any
  time :any
  num:any
  constructor(private activatedRouter:ActivatedRoute, private checkoutService:CheckoutService, private shopSingle:ShopSingleService) { }

  ngOnInit(): void {
    // this.cart = JSON.parse(localStorage.getItem('shops') || '[] ')

    this.shopSingle.getAllShopSingle().subscribe(
      (data) => {
        this.shop = data.findedShop

        this.id = this.activatedRouter.snapshot.paramMap.get('id')
        this.checkoutService.getCheckoutById(this.id).subscribe(
          (data)=>{
    this.invoice = data.checkout
    console.log('here',this.invoice);
    var myCart =[]
    for (let i = 0; i < this.shop.length; i++) {
      if (this.shop[i].idEmp == this.invoice.idEmpl) {
    
        
        myCart.push(this.shop[i])
        this.carts = myCart
        
            this.x = 0;
    for (let i = 0; i < this.carts.length; i++) {
    
      this.x += Number(this.carts[i].somme)
      this.TTC = ((this.x * 7)/100)+this.x
      this.num = NumberToLetter(this.TTC)
    
    }
       
      }
    
     
    }

          }
        )


      })

 this.date=Date.now()
 this.time = Date()
  }
}
