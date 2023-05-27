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
  public user: User = new User();
  public emailError: string = "";
  public passwordError: string ="";

  constructor(
    private authService: AuthService,
    private route: Router
  ) {}

  public login(): void {
    this.emailError = '';
    this.passwordError = '';

    if (!this.user.email) {
      this.emailError = 'Email is required.';
    }

    if (!this.user.password) {
      this.passwordError = 'Password is required.';
    }

    if (this.emailError || this.passwordError) {
      return;
    }

    this.authService.login(this.user).subscribe({
      next: (res) => {
        this.route.navigate(['home']);
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        Swal.fire(err.error.message, err.error.error, 'error');
      }
    });
  }
}
