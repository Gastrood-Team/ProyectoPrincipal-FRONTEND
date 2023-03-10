import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  texto: string = '';
  contador: number = 0;
  public profile: Profile = new Profile;

  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.activatedRoute.paramMap.subscribe(param => {
      let id: number = parseInt(param.get('id')!);
      if (id) {
        this.profileService.getProfilebyId(id).subscribe(response => { this.profile = response.profile; console.log(response.profile) })
      }
    })
  }

  updateProfile() {
    this.profileService.update(this.profile).subscribe({
      next: (res) => {
        this.route.navigate(['profile/view', `${this.profile.id}`])
        Swal.fire('Success', res.message, 'success');
      },
      error: (err) => {
        Swal.fire(err.error.message, err.error.error, 'error');
      }
    })
  }

  deleteProfile() {
    Swal.fire({
      title: 'Are you sure?',
      text: `¿Are you sure you want to delete ${this.profile.firstName} ${this.profile.lastName} profile`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(this.profile.id).subscribe(response => {
          this.route.navigate(['/login']);
          Swal.fire(
            'Account deleted!',
            `Your profile  ${this.profile.firstName} ${this.profile.lastName} has been deleted.`,
            'success'
          )
        })
      }
    });
  }

  actualizarContador(): void {
    this.contador = this.texto.length;
  }
}
