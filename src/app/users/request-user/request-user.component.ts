import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'backend/services/checkout/checkout.service';

@Component({
  selector: 'app-request-user',
  templateUrl: './request-user.component.html',
  styleUrls: ['./request-user.component.css']
})
export class RequestUserComponent implements OnInit {
checkout:any=[]
users:any
check:any=[]
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('connectedUser') || '[]');
   
    this.checkoutService.getAllCheckout().subscribe(
      (data)=>{
       
this.checkout = data.findedCheckout

var x=[];
for (let i = 0; i < this.checkout.length; i++) {

  if (this.checkout[i].idEmpl == this.users._id) {
    
  
    x.push(this.checkout[i])
    this.check = x
    
    console.log('z', this.check);
  }
 
}
      }
    )
  }

}
