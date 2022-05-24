import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  checkoutUrl = 'http://localhost:3000/checkout'
  constructor(private httpClient: HttpClient) { }

  addcheckout(checkout: any) {
    return this.httpClient.post<{ message: String }>(this.checkoutUrl, checkout)
  }

  getAllCheckout() {
    return this.httpClient.get<{ findedCheckout: any }>(this.checkoutUrl)
  }

  getCheckoutById(id: any){
    return this.httpClient.get<{checkout: any}>(`${this.checkoutUrl}/${id}`)
      }
}
