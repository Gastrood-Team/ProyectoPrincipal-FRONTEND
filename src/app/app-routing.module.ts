import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './modules/auth/auth.module';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { AppFormModule } from './modules/form/app-form.module';
import { ProfileModule } from './modules/profile/profile.module';
import { RecipeTypeModule } from './modules/recipe-type/recipe-type.module';

import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { HomeComponent } from './modules/layouts/components/home/home.component';
import { ContactComponent } from './modules/layouts/components/contact/contact.component';
import { AboutUsComponent } from './modules/layouts/components/about-us/about-us.component';
import { RecipeTypeListComponent } from './modules/recipe-type/components/recipe-type-list/recipe-type-list.component';
import { RecipeListComponent } from './modules/recipe/components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './modules/recipe/components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './modules/form/components/recipe-form/recipe-form.component';
import { ProfileViewComponent } from './modules/profile/components/profile-view/profile-view.component';
import { InternalServerComponent } from './modules/layouts/components/internal-server/internal-server.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: 'error', component: InternalServerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: RecipeTypeListComponent },
  { path: 'categories/:id', component: RecipeListComponent},
  { path: 'recipes/form', component: RecipeFormComponent},
  { path: 'recipes/form/:id', component: RecipeFormComponent},
  { path: 'recipes/:id', component: RecipeDetailsComponent},
  { path: 'profile/:username', component: ProfileViewComponent },
]

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    AuthModule,
    RecipeModule,
    RecipeTypeModule,
    ProfileModule,
    LayoutsModule,
    AppFormModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
