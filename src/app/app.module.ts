import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ShopAdminComponent } from './admin/shop-admin/shop-admin.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { ContactAdminComponent } from './admin/contact-admin/contact-admin.component';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';
import { AddShopComponent } from './admin/add-shop/add-shop.component';
import { ShopSingleComponent } from './admin/shop-single/shop-single.component';
import { CartAdminComponent } from './admin/cart-admin/cart-admin.component';
import { NavUserComponent } from './users/nav-user/nav-user.component';
import { HomeUserComponent } from './users/home-user/home-user.component';
import { AboutUserComponent } from './users/about-user/about-user.component';
import { ContactUserComponent } from './users/contact-user/contact-user.component';
import { ShopUserComponent } from './users/shop-user/shop-user.component';
import { ShopSingleUserComponent } from './users/shop-single-user/shop-single-user.component';
import { CartUserComponent } from './users/cart-user/cart-user.component';
import { CheckoutUserComponent } from './users/checkout-user/checkout-user.component';
import { CheckoutAdminComponent } from './admin/checkout-admin/checkout-admin.component';
import { RequestListeComponent } from './admin/request-liste/request-liste.component';
import { ThankyouComponent } from './users/thankyou/thankyou.component';
import { ThankyouAdminComponent } from './admin/thankyou-admin/thankyou-admin.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ConatctAffComponent } from './admin/conatct-aff/conatct-aff.component';
import { ProfileUserComponent } from './users/profile-user/profile-user.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { SearchAdminComponent } from './admin/search-admin/search-admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RequestUserComponent } from './users/request-user/request-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    SignupComponent,
    SigninComponent,
    ShopComponent,
    HomeAdminComponent,
    ShopAdminComponent,
    NavAdminComponent,
    ContactAdminComponent,
    AboutAdminComponent,
    AddShopComponent,
    ShopSingleComponent,
    CartAdminComponent,
    NavUserComponent,
    HomeUserComponent,
    AboutUserComponent,
    ContactUserComponent,
    ShopUserComponent,
    ShopSingleUserComponent,
    CartUserComponent,
    CheckoutUserComponent,
    CheckoutAdminComponent,
    RequestListeComponent,
    ThankyouComponent,
    ThankyouAdminComponent,
    InvoiceComponent,
    ProductListComponent,
    ConatctAffComponent,
    ProfileUserComponent,
    ProfilAdminComponent,
    SearchAdminComponent,
    RequestUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
