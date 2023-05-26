import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

@NgModule({
  declarations: [
    RecipeFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AppFormModule { }
