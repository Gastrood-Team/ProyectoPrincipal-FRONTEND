import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { HomeComponent } from './modules/layouts/components/home/home.component';
import { RecipeNavigationComponent } from './modules/recipe/components/recipe-navigation/recipe-navigation.component';
import { ProfileViewComponent } from './modules/profile/components/profile-view/profile-view.component';
import { ProfileModule } from './modules/profile/profile.module';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'recipes', component: RecipeNavigationComponent},
  // { path: 'recipes/:id', component: RecipesDetailComponent},
  // { path: 'recipes/form', component: RecipesFormComponent},
  { path: 'profile/:username', component: ProfileViewComponent},
  // { path: 'about', component: AboutUsComponent},
  // { path: 'contact', component: ContactComponent},
]

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    RecipeModule,
    LayoutsModule,
    AuthModule,
    ProfileModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
