import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly baseUrl: string = "http://127.0.0.1:8000/profile/"

  constructor(private http: HttpClient) { }

  public getById(username: String): Observable<any>{
    return this.http.get<any>(this.baseUrl + username);
  }
}
