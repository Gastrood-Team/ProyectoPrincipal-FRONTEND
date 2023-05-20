import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeTypeNavComponent} from './components/recipe-type-nav/recipe-type-nav.component';

@NgModule({
  declarations: [
    RecipeTypeNavComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RecipeModule { }
