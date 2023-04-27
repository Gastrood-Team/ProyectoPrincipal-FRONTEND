import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public user: User = new User();

  constructor(private authService: AuthService, private route: Router) { }

  public login(): void {
    this.authService.login(this.user).subscribe({
      next: (res) => { 
        this.route.navigate(['home']);
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        Swal.fire(err.error.message, err.error.error, 'error');
      }
    })
  }
}
