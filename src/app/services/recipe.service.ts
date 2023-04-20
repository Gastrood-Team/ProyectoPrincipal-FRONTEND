import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private urlEndPoint: string = 'http://127.0.0.1:8000/recipes';
  constructor(private http: HttpClient) {    

    
  }
}
