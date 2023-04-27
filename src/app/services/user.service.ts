import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    readonly baseUrl: string = "http://127.0.0.1:8000/user"

    constructor(private http: HttpClient) { }

    public getLoggedUser(): Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }
}
