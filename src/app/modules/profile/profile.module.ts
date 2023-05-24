import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
