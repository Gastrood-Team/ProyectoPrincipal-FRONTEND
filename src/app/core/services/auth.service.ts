import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, SignUpData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // readonly headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
   readonly baseUrl: string = "http://127.0.0.1:8000"

   constructor(private http: HttpClient) { }
 
   public login(user: User): Observable<any> {
     const userCredentialsFormData = new FormData();
     userCredentialsFormData.append('email', user.email);
     userCredentialsFormData.append('password', user.password);
     return this.http.post<any>(this.baseUrl + "/login", userCredentialsFormData);
   };
 
   public signup(data: SignUpData): Observable<any> {
     const userFormData = new FormData();
     userFormData.append('username', data.username);
     userFormData.append('firstName', data.firstName);
     userFormData.append('lastName', data.lastName);
     userFormData.append('email', data.email);
     userFormData.append('password', data.password);
     return this.http.post<any>(this.baseUrl + "/signup", userFormData)
   }
 
   public logout(): void{
     localStorage.removeItem('token');
     location.reload();
   }
}
