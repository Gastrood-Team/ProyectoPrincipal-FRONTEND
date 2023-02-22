import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User = new User();

  constructor(private authService: AuthService, private route: Router) { }

  login() {
    this.authService.login(this.user).subscribe({
      next: (res) => { 
        this.route.navigate(['home']);
        Swal.fire('Success',res.message,'success');
      },
      error: (err) => {
        Swal.fire(err.error.message, err.error.error, 'error');
      }
    })
  }
}
