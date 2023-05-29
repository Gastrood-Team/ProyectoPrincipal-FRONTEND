import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IProfile } from 'src/app/core/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profile!: IProfile;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.route.params.subscribe(params => {
      let username = params['username'];
      if (username) {
        this.profileService.getById(username).subscribe({
          next: (res) => {
            this.profile = res.data;
            this.profile.profileImg = this.profile.profileImg ?? "/assets/images/defaults/default-user-image.png";
            this.profile.biography = this.profile.biography ?? "No Biography defined";
          }, error: (err) => {
            this.router.navigate(['home']);
            Swal.fire("Opps...", err.error.message, 'error');
          }
        })
      }
    })
  }

  update(): void {
    this.profileService.update(this.profile).subscribe({
      next: (res) => {
        this.location.back();
        Swal.fire("Profile Updated", res.message, 'success')
      },
      error: (err) => {
        this.router.navigate(['home']);
        Swal.fire("Opps...", err.error.message, 'error');
      }
    })
  }

}
