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

  public login(event: MouseEvent): void {
    let loginBtn = event.target as HTMLElement;
    loginBtn.innerHTML = 'Validating...';
    this.authService.login(this.user).subscribe({
      next: (res) => { 
        this.route.navigate(['home']);
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        loginBtn.innerHTML = 'Login';
        Swal.fire(err.error.message, err.error.error, 'error');
      }
    })
  }
}
