import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { IRegister, IUserRegistered } from '../models/register';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 api= 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}
  
  getUser(page:number,per_page:number): Observable<IUser>{
    const x = `${this.api}?pages=${page}&per_pages=${per_page} `;
    return this.http.get<IUser>(x)
  }
  registrationUser(body:IRegister): Observable <IUserRegistered>{
    return this.http.post<IUserRegistered>(this.api, body)
  }
  getById(id:number){
    const x = `${this.api}/${id} `;
    return this.http.get(x);
  }
}
