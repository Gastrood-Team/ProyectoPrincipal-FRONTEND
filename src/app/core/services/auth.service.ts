import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, SignUpData } from '../models/user.model';
import * as crypto from 'crypto-js';
import { skipToken } from 'src/app/helpers/token.context';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // readonly headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
   readonly baseUrl: string = "http://127.0.0.1:8000"

   constructor(private http: HttpClient) { }
 
   public login(user: User): Observable<any> {
     const userCredentialsFormData = new FormData();
     let encryptedPassword = crypto.SHA256(user.password).toString();
     userCredentialsFormData.append('email', user.email);
     userCredentialsFormData.append('password', encryptedPassword);
     return this.http.post(`${this.baseUrl}/login`, userCredentialsFormData, { context: skipToken() });
   };
 
   public signup(data: SignUpData): Observable<any> {
     const userFormData = new FormData();
     let encryptedPassword = crypto.SHA256(data.password).toString();
     userFormData.append('username', data.username);
     userFormData.append('firstName', data.firstName);
     userFormData.append('lastName', data.lastName);
     userFormData.append('email', data.email);
     userFormData.append('password', encryptedPassword);
     return this.http.post(`${this.baseUrl}/signup`, userFormData, { context: skipToken() });
   }
 
   public logout(): void{
     localStorage.removeItem('token');
     location.reload();
   }
}
