import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from 'backend/services/checkout/checkout.service';
import { ProductService } from 'backend/services/product/product.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-checkout-user',
  templateUrl: './checkout-user.component.html',
  styleUrls: ['./checkout-user.component.css']
})
export class CheckoutUserComponent implements OnInit {
  shop: any = []
  cart: any = []
  carts: any = []
  x!: any;
  user: any
  checkoutForm!:FormGroup
 myCart:any = [];
 product :any=[]
  constructor(private shopSingle: ShopSingleService, private fb : FormBuilder, private checkoutService: CheckoutService, private  router: Router, private productService: ProductService,) { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('shops') || '[] ')
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[] ')
    this.shopSingle.getAllShopSingle().subscribe(
      (data) => {
        this.shop = data.findedShop



        
        for (let i = 0; i < this.cart.length; i++) {
          if (this.shop[i].idEmp == this.user._id) {


            this.myCart.push(this.shop[i])
            this.carts = this.myCart
        
          }
    
         
        }
        
        this.x = 0;
        for (let i = 0; i < this.carts.length; i++) {

          this.x += Number(this.carts[i].somme)

        }


      }
    )
    this.checkoutForm = this.fb.group ({
      fName : [''],
      lName : [''],
      country : [''],
      adress : [''],
      phone : [''],
      aEmail : [''],
      note : [''],
      poste : [''],
    })
  }

checkout(y:any){

  // this.user = JSON.parse(localStorage.getItem('connectedUser') || '[] ')

  // this.shopSingle.getAllShopSingle().subscribe(
  //   (data) => {
  //     this.shop = data.findedShop


  //     var myCart = [];
      
  //     for (let i = 0; i < this.shop.length; i++) {
  //       if (this.shop[i].idEmp == this.user._id) {

          
  //         myCart.push(this.shop[i])
  //         this.carts = myCart

          
          
      
  //         this.productService.getAllProducts().subscribe((data)=>{
  //           this.product = data.findedProduct
  //           var products = [];
  //         for (let i = 0; i < this.product.length; i++) {
  //         if (this.product[i]._id == this.carts[i].idProd) {
           
  //         products.push(this.product[i])
  //         this.cart = products
          
         
  //         this.cart[i].quantity +=  Number(this.carts[i].numberShop)
  //         console.log('here', this.cart[i].quantity);
         
         
          

  //         }
          
  //         }
            
          
  //         })
          
  //       }
       
  //     } 
   


  //   })


  //   this.productService.editEmp(this.cart._id).subscribe((data)=>{
  //     console.log('update' );
      
  //   });




  this.user = JSON.parse(localStorage.getItem('connectedUser') || '[] ')
   let x = {fName :'', lName : '', country : '', adress : '', phone : '', aEmail : '', note : '', poste : '',idEmpl : ['']}

  x.fName = this.checkoutForm.value.fName,
  x.lName = this.checkoutForm.value.lName,
  x.country = this.checkoutForm.value.country,
  x.adress = this.checkoutForm.value.adress,
  x.phone = this.checkoutForm.value.phone,
  x.aEmail = this.checkoutForm.value.aEmail,
  x.note = this.checkoutForm.value.note,
  x.poste = this.checkoutForm.value.poste,
  x.idEmpl = this.user._id
 



  
 
  this.checkoutService.addcheckout(x).subscribe(
    (data)=>{
      this.router.navigate(['/thankyou'])
    }

  )
  
      

    }

  }
  

