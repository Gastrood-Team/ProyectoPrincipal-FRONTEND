import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";
import { User } from "../models/user";

@Injectable({providedIn:'root'})

export class UserService{

    private urlEndPoint: string = 'http://127.0.0.1:8000';

    constructor(private http: HttpClient) { }

    register(user: User): Observable<any>{
        return this.http.post<any>(`${this.urlEndPoint}/signup`,user).pipe(
            catchError(e => {
                Swal.fire(e.error.message, e.error.error, 'error');
                return throwError(() => e);
            })
        )
    }
    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.urlEndPoint}/user/${id}`).pipe(
            catchError(e => {
                Swal.fire(e.error.message, e.error.error, 'error');
                return throwError(() => e);
            })
        )
      }
}