import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RecipeModule { }
