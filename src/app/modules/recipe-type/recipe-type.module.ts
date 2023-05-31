import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeTypeListComponent } from './components/recipe-type-list/recipe-type-list.component';
import { RecipeAllComponent } from './components/recipe-all/recipe-all.component';

@NgModule({
  declarations: [
    RecipeTypeListComponent,
    RecipeAllComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RecipeTypeModule { }
