import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';

import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile = new Profile();

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.activatedRoute.paramMap.subscribe(param => {
      let id: number = parseInt(param.get('id')!);
      if (id) {
        this.profileService.getProfilebyId(id).subscribe(response => { this.profile = response.profile; console.log(response.profile)})
      }
    })
  }

  
}


