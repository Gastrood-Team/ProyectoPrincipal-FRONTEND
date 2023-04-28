import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private urlEndPoint: string = "http://127.0.0.1:8000/profile"

  constructor(private http: HttpClient, private route: Router) { }

  getProfilebyId(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        Swal.fire(e.error.message, e.error.error, 'error');
        this.route.navigate(['/home']);
        return throwError(() => e);
      })
    )
  }

  update(profile: Profile): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${profile.id}`, profile).pipe(
      catchError(e => {
        Swal.fire(e.error.message, e.error.error, 'error');
        return throwError(() => e);
      })
    )
  }
}
