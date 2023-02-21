import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndPoint: string = 'http://127.0.0.1:8000/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{
    let $data = {"email":email,"password":password};
    return this.http.post(`${this.urlEndPoint}`,$data)
  }
}
