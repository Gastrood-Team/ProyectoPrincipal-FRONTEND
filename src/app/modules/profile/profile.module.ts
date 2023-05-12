import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
