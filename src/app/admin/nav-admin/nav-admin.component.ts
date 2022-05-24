import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  user:any=[]
  users : any
  shop:any={}
  findedUser:any;
  cart:any=[]
  carts:any=[]
  searchForm!:FormGroup
  searchText:any
  constructor(private shopSingle: ShopSingleService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');
    this.cart = JSON.parse(localStorage.getItem('shops') || '[] ')
    this.shopSingle.getAllShopSingle().subscribe(
      (data)=>{
    this.shop = data.findedShop

    
   var myCart = [];
   for (let i = 0; i < this.shop.length; i++) {
    if (this.shop[i].idEmp == this.user._id) {


      myCart.push(this.shop[i])
      this.carts = myCart
    
    }
  
  }
      }
    )

this.searchForm = this.fb.group({
  search : ['']
})
  
  }


 

 
  
  

logout(){
  localStorage.removeItem('connectedUser');
  this.router.navigate([''])
}   


search(e:any){
  let x = {value : ''}
  x.value = this.searchForm.value.search
  var key = e.keyCode;
  if (key == 13) {
alert('hello')

    // var value = document.getElementById('search').value;
    localStorage.setItem('search', x.value);
    

  }
}
}
