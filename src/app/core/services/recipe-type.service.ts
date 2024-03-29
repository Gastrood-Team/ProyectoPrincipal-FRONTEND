import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeTypeService {

  readonly baseUrl: string = "http://127.0.0.1:8000/recipetypes"

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
