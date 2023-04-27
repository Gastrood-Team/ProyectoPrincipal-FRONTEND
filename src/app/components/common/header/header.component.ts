import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public token!: string | null;

  constructor(private authservice: AuthService ,private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  public logout(): void{
    this.authservice.logout();
  }


}
