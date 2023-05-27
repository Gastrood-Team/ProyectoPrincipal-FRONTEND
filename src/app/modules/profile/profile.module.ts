import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileRecipeComponent } from './components/profile-recipe/profile-recipe.component';

@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileRecipeComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
