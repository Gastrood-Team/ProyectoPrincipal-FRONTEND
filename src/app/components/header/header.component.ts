import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service'; // Importamos el servicio ContentService para obtener contenido del servidor
import { AuthService } from 'src/app/services/auth.service'; // Importamos el servicio AuthService para gestionar la autenticación del usuario

@Component({
  selector: 'app-header', // Selector del componente
  templateUrl: './header.component.html', // Ruta del template HTML
  styleUrls: ['./header.component.css'] // Array con las rutas de los archivos CSS
})
export class HeaderComponent implements OnInit {

  header: any; // Variable para almacenar los datos del header obtenidos del servidor
  display: boolean = false; // Variable para indicar si se debe mostrar el menú o no  

  constructor(private ContentService: ContentService, public authService: AuthService) {
  } // Constructor que recibe los servicios ContentService y AuthService

  showMenu() { // Método para mostrar/ocultar el menú
    this.display = !this.display; // Invertimos el valor de la variable display
  }

  ngOnInit(): void { // Método OnInit que se ejecuta al inicializar el componente
    this.ContentService.getContent().subscribe((contents: any) => { // Obtenemos el contenido del servidor
      this.header = contents.header; // Almacenamos los datos del header en la variable header
    } );
    
    this.display = !this.authService.isLoggedIn(); // Inicializamos la variable display con el valor opuesto al de authService.isLoggedIn()
  }
}
