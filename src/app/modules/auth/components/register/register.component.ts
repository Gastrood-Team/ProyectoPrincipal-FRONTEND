import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpData } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public singUpData: SignUpData = new SignUpData();
  public emailError: string = "";
  public passwordError: string = "";

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  public signup(): void {
    this.emailError = '';
    this.passwordError = '';

    if (!this.singUpData.username || !this.singUpData.firstName || !this.singUpData.lastName || !this.singUpData.email || !this.singUpData.password) {
      Swal.fire('Ooops', 'Please fill in all fields.', 'error');
      return;
    }

    if (!this.validateEmail(this.singUpData.email)) {
      this.emailError = 'Invalid email format.';
      return;
    }

    if (!this.validatePassword(this.singUpData.password)) {
      this.passwordError = 'Password must be at least 8 characters long and contain a combination of letters and numbers.';
      return;
    }

    this.authService.signup(this.singUpData).subscribe({
      next: (res) => {
        this.route.navigate(['login']);
        Swal.fire('Registration success', res.message, 'success');
      },
      error: (err) => {
        Swal.fire('Ooops', err.error.message, 'error');
      }
    });
  }

  private validateEmail(email: string): boolean {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validatePassword(password: string): boolean {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }
}
