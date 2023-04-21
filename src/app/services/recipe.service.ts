import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class RecipeService{

    private urlEndPoint: string = 'http://127.0.0.1:8000';

    constructor(private http: HttpClient) { }

    lista(): Observable<any>{
      return this.http.get<any>(`${this.urlEndPoint}/recipetypes`);
    }

    
    create(datos:any): Observable<any>{
      return this.http.post<any>(`${this.urlEndPoint}/recipes`,datos);
    }

}