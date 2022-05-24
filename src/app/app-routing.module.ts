import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';
import { AddShopComponent } from './admin/add-shop/add-shop.component';
import { CartAdminComponent } from './admin/cart-admin/cart-admin.component';
import { CheckoutAdminComponent } from './admin/checkout-admin/checkout-admin.component';
import { ConatctAffComponent } from './admin/conatct-aff/conatct-aff.component';
import { ContactAdminComponent } from './admin/contact-admin/contact-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { RequestListeComponent } from './admin/request-liste/request-liste.component';
import { ShopAdminComponent } from './admin/shop-admin/shop-admin.component';
import { ShopSingleComponent } from './admin/shop-single/shop-single.component';
import { ThankyouAdminComponent } from './admin/thankyou-admin/thankyou-admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUserComponent } from './users/about-user/about-user.component';
import { CartUserComponent } from './users/cart-user/cart-user.component';
import { CheckoutUserComponent } from './users/checkout-user/checkout-user.component';
import { ContactUserComponent } from './users/contact-user/contact-user.component';
import { HomeUserComponent } from './users/home-user/home-user.component';
import { ProfileUserComponent } from './users/profile-user/profile-user.component';
import { RequestUserComponent } from './users/request-user/request-user.component';
import { ShopSingleUserComponent } from './users/shop-single-user/shop-single-user.component';
import { ShopUserComponent } from './users/shop-user/shop-user.component';
import { ThankyouComponent } from './users/thankyou/thankyou.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "about", component: AboutComponent},
  {path : "contact", component: ContactComponent},
  {path : "signup", component: SignupComponent},
  {path : "signup/:id", component: SignupComponent},
  {path : "signin", component: SigninComponent},
  {path : "shop", component: ShopComponent},
  {path : "home-admin", component: HomeAdminComponent},
  {path : "shop-admin", component: ShopAdminComponent},
  {path : "shop-admin/:id", component: ShopAdminComponent},
  {path : "contact-admin", component: ContactAdminComponent},
  {path : "about-admin", component: AboutAdminComponent},
  {path : "about-admin/:id", component: AboutAdminComponent},
  {path : "add-shop", component: AddShopComponent},
  {path : "add-shop/:id", component: AddShopComponent},
  {path : "shop-single-admin/:id", component: ShopSingleComponent},
  {path : "cart-admin", component: CartAdminComponent},
  {path : "home-user", component: HomeUserComponent},
  {path : "about-user", component: AboutUserComponent},
  {path : "contact-user", component: ContactUserComponent},
  {path : "shop-user", component: ShopUserComponent},
  {path : "shop-single-user", component: ShopSingleUserComponent},
  {path : "shop-single-user/:id", component: ShopSingleUserComponent},
  {path : "cart-user", component: CartUserComponent},
  {path : "home-admin/:id", component: HomeAdminComponent},
  {path : "home-user/:id", component: HomeUserComponent},
  {path : "checkout-user", component: CheckoutUserComponent},
  {path : "checkout-admin", component: CheckoutAdminComponent},
  {path : "request-Liste", component: RequestListeComponent},
  {path : "thankyou", component: ThankyouComponent},
  {path : "thankyou-admin", component: ThankyouAdminComponent},
  {path : "invoice", component: InvoiceComponent},
  {path : "invoice/:id", component: InvoiceComponent},
  {path : "Products-Liste", component: ProductListComponent},
  {path : "contact-aff/:id", component: ConatctAffComponent},
  {path : "contact-aff", component: ConatctAffComponent},
  {path : "profil-user", component: ProfileUserComponent},
  {path : "profil-admin", component: ProfilAdminComponent},
  {path : "request-user", component: RequestUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
