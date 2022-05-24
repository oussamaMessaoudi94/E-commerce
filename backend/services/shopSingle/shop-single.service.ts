import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopSingleService {
  shopUrl = 'http://localhost:3000/shops'
  constructor(private httpClient: HttpClient) { }

  addShop(shop: any) {
    return this.httpClient.post<{ message: String }>(this.shopUrl, shop)
  }

  getAllShopSingle() {
    return this.httpClient.get<{ findedShop: any }>(this.shopUrl)
  }

  getShopById(id: any) {
    return this.httpClient.get<{ findedSingle: any }>(`${this.shopUrl}/${id}`)
  }

  deleteShopById(id: any) {
    return this.httpClient.delete<{ message: any }>(`${this.shopUrl}/${id}`)
  }

  deleteShop(id:any) {
    return this.httpClient.delete<{ message: any }>(this.shopUrl);
  }
}
