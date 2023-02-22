import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";
import { User } from "../models/user";

@Injectable({providedIn:'root'})

export class AuthService{

    private urlEndPoint: string = 'http://127.0.0.1:8000/login';

    constructor(private http: HttpClient, private route: Router) { }

    login(user: User): Observable<any>{
        return this.http.post(`${this.urlEndPoint}`, user).pipe(
            catchError( e => {
                if(e.status == 401){
                    return throwError(() => e);
                }
                Swal.fire(e.error.menssage, e.error.error, 'error');
                return throwError(() => e);
            })
        );
    }
}
