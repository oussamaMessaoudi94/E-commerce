import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ShopSingleService } from 'backend/services/shopSingle/shop-single.service';

@Component({
  selector: 'app-about-admin',
  templateUrl: './about-admin.component.html',
  styleUrls: ['./about-admin.component.css']
})
export class AboutAdminComponent implements OnInit {
  shop: any = []

  user: any
  cart: any = []
  carts: any = []
  constructor(private shopSingle: ShopSingleService, private activatedRouter: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {

  }

}
