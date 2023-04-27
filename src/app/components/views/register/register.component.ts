import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingupData } from 'src/app/models/singup';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  public singUpData: SingupData = new SingupData();

  constructor(private authService: AuthService, private route: Router) { }

  public signup(): void {
    this.authService.signup(this.singUpData).subscribe({
      next: (res) => { 
        this.route.navigate(['login']);
        Swal.fire("Registration success", res.message, 'success');
      },
      error: (err) => {
        Swal.fire("Ooops", err.error.message, 'error');
      }
    })
  }
}
