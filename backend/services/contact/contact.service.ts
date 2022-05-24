import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
contactUrl = 'http://localhost:3000/contact'
  constructor(private httpClient: HttpClient) { }

  addContact(contact :any){
    return this.httpClient.post<{message :any}>(this.contactUrl, contact)
  }
  getAllContatct(){
    return this.httpClient.get<{findedContatct: any}>(this.contactUrl)
  }
getContactById(id:any){
  return this.httpClient.get<{findedContact: any}>(`${this.contactUrl}/${id}`)
}
deleteProduct(id: any){
  return this.httpClient.delete<{message :any}>(`${this.contactUrl}/${id}`)
}
}
