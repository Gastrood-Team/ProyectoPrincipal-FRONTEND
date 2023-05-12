import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeNavigationComponent } from './components/recipe-navigation/recipe-navigation.component';

@NgModule({
  declarations: [
    RecipeNavigationComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RecipeModule { }
