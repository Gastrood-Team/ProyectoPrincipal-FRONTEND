import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { IProfile, Profile } from "src/app/core/models/profile.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token!: string | null;
  profile: IProfile = new Profile()
  email!: string;
  fetching: boolean = true;

  constructor(
    private authservice: AuthService,
    private userService: UserService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  getLoggedUser() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.fetching = true;
      this.userService.getLoggedUser().subscribe({
        next: (res) => {
          this.profile = res.data;
          this.email = res.data.email;
        }
      })
      this.fetching = false;
    }
  }

  logout(): void {
    this.authservice.logout();
  }

}
