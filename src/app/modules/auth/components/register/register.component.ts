import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SignUpData } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(
    private authService: AuthService, 
    private route: Router) { }
  
  public singUpData: SignUpData = new SignUpData();

  public signup(event: MouseEvent): void {
    let registerBtn = event.target as HTMLElement;
    registerBtn.innerHTML = 'Registering...';
    this.authService.signup(this.singUpData).subscribe({
      next: (res) => { 
        this.route.navigate(['login']);
        Swal.fire("Registration success", res.message, 'success');
      },
      error: (err) => {
        registerBtn.innerHTML = 'Login';
        Swal.fire("Ooops", err.error.message, 'error');
      }
    })
  }
}
