import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeType } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  readonly baseUrl: string = "http://127.0.0.1:8000/recipes"

  constructor(private http: HttpClient) { }

  public getAll(recipeType?: string, page?: number): Observable<any>{
    let url = this.baseUrl;
    if(recipeType){
      url += `?type=${recipeType}`;
    }
    return this.http.get<any>(url);

  }

  public getbyId(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
