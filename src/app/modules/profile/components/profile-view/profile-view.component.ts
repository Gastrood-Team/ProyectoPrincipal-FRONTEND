import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfile } from 'src/app/core/models/profile.model';
import { IRecipe } from 'src/app/core/models/recipe.model';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  profile!: IProfile;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
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
            if(!this.profile.profileImg) this.profile.profileImg = "/assets/images/defaults/default-profile.jpg"
            console.log(res.data);
          }
        })
      }
    })
  }
}
