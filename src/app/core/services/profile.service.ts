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
    return this.http.get(this.baseUrl + username);
  }

  public update(profile: Profile): Observable<any>{
    const profileFormData = new FormData();
    profileFormData.append('firstName', profile.firstName);
    profileFormData.append('lastName', profile.lastName);
    profileFormData.append('biography', profile.biography);
    profileFormData.append('websiteUrl', profile.websiteUrl);
    profileFormData.append('profileImg', profile.profileImg);
    profileFormData.append('bannerImg', profile.bannerImg);
    return this.http.post(`${this.baseUrl}${profile.username}`, profileFormData);
  }
}
