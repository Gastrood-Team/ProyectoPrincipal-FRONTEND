import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileRecipeComponent } from './components/profile-recipe/profile-recipe.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileRecipeComponent,
    ProfileFormComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
