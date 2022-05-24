import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'backend/services/checkout/checkout.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-request-liste',
  templateUrl: './request-liste.component.html',
  styleUrls: ['./request-liste.component.css']
})
export class RequestListeComponent implements OnInit {
checkout:any=[]

  constructor(private checkoutService: CheckoutService, private router:Router,private shopSingle: ShopSingleService) { }

  ngOnInit(): void {
    this.checkoutService.getAllCheckout().subscribe(
      (data)=>{
this.checkout = data.findedCheckout
console.log('here', this.checkout);

      }
    )

  }
invoice(id:Number){
this.router.navigate([`invoice/${id}`])
}

}
