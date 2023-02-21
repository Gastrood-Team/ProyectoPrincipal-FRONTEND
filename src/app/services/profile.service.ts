import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private urlEndPoint: string = 'http://127.0.0.1:8000/profile';

  constructor(private http: HttpClient) { }

  getProfileById(id: number): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${id}`);
  }

}
