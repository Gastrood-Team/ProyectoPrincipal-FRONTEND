import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, RecipeAux } from '../models/recipe.model';

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
    return this.http.get(url);

  }

  public getbyId(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public create(recipe: RecipeAux): Observable<any> {
    const recipeFormData = new FormData();
    recipeFormData.append('name', recipe.name);
    recipeFormData.append('description', recipe.description);
    recipeFormData.append('image',recipe.image);
    recipe.types?.forEach((type) => {
      recipeFormData.append('typesId[]', type.toString())
    });
    return this.http.post(`${this.baseUrl}`, recipeFormData);
  }

  public update(recipe: RecipeAux): Observable<any> {
    const recipeFormData = new FormData();
    recipeFormData.append('name', recipe.name);
    recipeFormData.append('description', recipe.description);
    recipeFormData.append('image',recipe.image);
    recipe.types?.forEach((type) => {
      recipeFormData.append('typesId[]', type.toString())
    });
    return this.http.post(`${this.baseUrl}/${recipe.id}`, recipeFormData);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
