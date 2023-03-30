import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";
import { User } from "../models/user";

@Injectable({ providedIn: 'root' })
export class AuthService {

    // URL del endpoint para iniciar sesión
    private urlEndPoint: string = 'http://127.0.0.1:8000/login';

    // Variable que indica si el usuario ha iniciado sesión o no
    private loggedIn: boolean = false;
    private token: any;

    constructor(private http: HttpClient, private router: Router) { }

    // Función para iniciar sesión
    login(user: User): Observable<any> {
        return this.http.post(`${this.urlEndPoint}`, user).pipe(
            // Si la petición se resuelve correctamente, se guarda el token en el local storage y se indica que el usuario ha iniciado sesión
            map((response: any) => {
                localStorage.setItem('token', response.access_token);
                this.token = response.access_token;
                this.loggedIn = true;
                return response;
            }),
            // Si la petición devuelve un error, se maneja el error mostrando un mensaje de alerta en la pantalla
            catchError((e) => {
                if (e.status == 401) {
                    return throwError(() => e);
                }
                Swal.fire(e.error.menssage, e.error.error, 'error');
                return throwError(() => e);
            })
        );
    };  

    // Método para hacer logout
    logout() {
        localStorage.removeItem('token'); // Borramos el token del local storage
        console.log(this.token);
        this.loggedIn = false; // Indicamos que el usuario no está autenticado
        this.router.navigate(['/']); // Navegamos a la página principal
    }

    // Método para obtener el token del local storage
    getToken() {
        return localStorage.getItem('token'); // Devolvemos el token
    }

    // Método para comprobar si el usuario está autenticado o no
    isAuthenticated() {
        const token = this.getToken(); // Obtenemos el token del local storage
        if (token) { // Si hay un token
            // por ahora solo devolvemos true si hay un token almacenado en el local storage
            return true; // Devolvemos true
        } else { // Si no hay un token
            return false; // Devolvemos false
        }
    }

    // Método para comprobar si el usuario está autenticado
    isLoggedIn() {
        return this.loggedIn; // Devolvemos el valor de la variable loggedIn que indica si el usuario está autenticado o no.
    }
    
}
