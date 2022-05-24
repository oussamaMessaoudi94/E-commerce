import { Component, OnInit } from '@angular/core';
import { ProductService } from 'backend/services/product/product.service';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  styleUrls: ['./cart-user.component.css']
})
export class CartUserComponent implements OnInit {
  shop: any = []
  cart: any = []
  carts: any = []
  x!: any;
  user: any
  product :any=[]
  constructor(private shopSingle: ShopSingleService, private productService: ProductService,) { }

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[] ')
    this.shopSingle.getAllShopSingle().subscribe(
      (data) => {
        this.shop = data.findedShop


        var myCart = [];
        for (let i = 0; i < this.shop.length; i++) {
          if (this.shop[i].idEmp == this.user._id) {


            myCart.push(this.shop[i])
            this.carts = myCart
            
          }

        }
        this.x = 0;
        for (let i = 0; i < this.carts.length; i++) {

          this.x += Number(this.carts[i].somme)

        }


      }
    )


  }
  del(id: any) {


   
    this.shopSingle.deleteShopById(id).subscribe((data) => {
      console.log('delete with success', data.message);
    
    
          // location.reload();
        });
    




    }

    
}






