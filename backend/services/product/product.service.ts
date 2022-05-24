import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productUrl = 'http://localhost:3000/products'
  constructor(private httpClient:HttpClient) { }


  addProduct(product: any, img:File) {
    let formData = new FormData();
    formData.append('productName', product.productName);
    formData.append('price', product.price);
    formData.append('quantity', product.quantity);
    formData.append('mark', product.mark);
    formData.append('description', product.description);
    formData.append('idEmp', product.idEmp);
    formData.append('img', img);
    return this.httpClient.post(this.productUrl, formData);
  }

  getAllProducts(){
    return this.httpClient.get<{findedProduct: any}>(this.productUrl)
  }

  getProductById(id: any){
return this.httpClient.get<{findedProduct: any}>(`${this.productUrl}/${id}`)
  }

  editEmp(product: any){
    return this.httpClient.put(`${this.productUrl}/${product._id}`, product)
  }
  editManyEmp(product: any){
    return this.httpClient.put<{OK: any}>(this.productUrl, product)
  }
  deleteProduct(id: any){
    return this.httpClient.delete<{message :any}>(`${this.productUrl}/${id}`)
  }
}
