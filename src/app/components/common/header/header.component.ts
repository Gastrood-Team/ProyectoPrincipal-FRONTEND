import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public token!: string | null;
  public profileUsername!: string;

  constructor(private authservice: AuthService, private userService: UserService ,private router: Router) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }

  public getLoggedUser(){
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.userService.getLoggedUser().subscribe({
        next: (res) => {
          this.profileUsername = res.data.username
        },
      })
    }
  }

  public logout(): void{
    this.authservice.logout();
  }


}
