import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeTypeListComponent } from './components/recipe-type-list/recipe-type-list.component';

@NgModule({
  declarations: [
    RecipeTypeListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RecipeTypeModule { }
