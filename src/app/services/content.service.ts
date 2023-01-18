import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({providedIn: 'root'})
export class ContentService {
  constructor(private HttpClient: HttpClient) { }

//funcion que llamaremos para que nos devuelva los datos del json

getContent(): any{

 return this.HttpClient.get('./assets/jsons/content.json')
}

}