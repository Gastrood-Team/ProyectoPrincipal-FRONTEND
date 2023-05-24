import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { RecipeTypeModule } from './modules/recipe-type/recipe-type.module';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { HomeComponent } from './modules/layouts/components/home/home.component';
import { ProfileViewComponent } from './modules/profile/components/profile-view/profile-view.component';
import { RecipeListComponent } from './modules/recipe/components/recipe-list/recipe-list.component';
import { RecipeTypeListComponent } from './modules/recipe-type/components/recipe-type-list/recipe-type-list.component';
import { RecipeDetailsComponent } from './modules/recipe/components/recipe-details/recipe-details.component';
import { ContactComponent } from './modules/layouts/components/contact/contact.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: RecipeTypeListComponent },
  { path: 'categories/:id', component: RecipeListComponent},
  { path: 'recipes/:id', component: RecipeDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent},
  // { path: 'recipes/form', component: RecipesFormComponent},
  // { path: 'profile/:username', component: ProfileViewComponent},
  // { path: 'about', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
]

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
