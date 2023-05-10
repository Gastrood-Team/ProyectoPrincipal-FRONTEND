import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private route: Router
  ) {

  }

  public user: User = new User();

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
