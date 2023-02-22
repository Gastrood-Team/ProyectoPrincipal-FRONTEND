import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  public user: User = new User();
  public profile: Profile = new Profile();

  constructor(private userService: UserService, private route: Router) { }

  register(){
    this.user.profile = this.profile;
    this.userService.register(this.user).subscribe({
      next: (res) => {
        this.route.navigate(['login'])
        Swal.fire('Success',res.message,'success');
      },
      error: (err) => {
        Swal.fire(err.error.message, err.error.error, 'error')
      } 
    })
  }
}
