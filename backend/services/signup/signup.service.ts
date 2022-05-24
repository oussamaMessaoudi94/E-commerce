import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userUrl = 'http://localhost:3000/users'
  constructor(private httpClient: HttpClient) { }

  signup(user: any) {
    return this.httpClient.post<{ message: String }>(`${this.userUrl}/signup`, user)
  }

  login(user: any) {
    return this.httpClient.post<{ user: any, message: String }>(`${this.userUrl}/login`, user)
  }

  getUserById(id: any) {
    return this.httpClient.get<{ findedUser: any }>(`${this.userUrl}/${id}`)
  }

  getAllUseres() {
    return this.httpClient.get<{ finded: any }>(this.userUrl)
  }

  editEmp(user: any){
    return this.httpClient.put(`${this.userUrl}/${user._id}`, user)
  }


}
