import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile = new Profile();
  public isLoggedUserProfile: boolean = false;

  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  private getProfile(): void {
    this.activatedRoute.params.subscribe(params => {
      let username = params['username'];
      if (username) {
        this.profileService.getProfile(username).subscribe({
          next: (res) => {
            this.profile = res.data;
            const token = localStorage.getItem('token');
            if (token) {
              this.userService.getLoggedUser().subscribe({
                next: (res) => {
                  this.profile.id == res.data.profileId ? this.isLoggedUserProfile = true : this.isLoggedUserProfile = false;
                  console.log(this.isLoggedUserProfile);
                },
              })
            }
          },
          error: (err) => {
            this.route.navigate(['home'])
            Swal.fire(err.error.message, err.error.error, 'error');
          }
        })
      }
    })
  }
}

