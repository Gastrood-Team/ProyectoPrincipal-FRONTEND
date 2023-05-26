import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfile } from 'src/app/core/models/profile.model';
import { IRecipe } from 'src/app/core/models/recipe.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  profile!: IProfile;
  userProfile: boolean = false;

  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getLoggedUser();
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
          }
        })
      }
    })
  }

  getLoggedUser(): void {
    this.userService.getLoggedUser().subscribe({
      next: (res) => {
        if(this.profile.username == res.data.username){
          this.userProfile = true;
        }
      }
    })
  }

  reloadRecipes(): void {
    console.log('hey');
    this.getUser();
  }
  
}
