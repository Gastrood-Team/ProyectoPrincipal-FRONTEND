import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { RecipesListComponent } from './components/views/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './components/views/recipes-detail/recipes-detail.component';
import { RecipesFormComponent } from './components/views/recipes-form/recipes-form.component';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { AboutUsComponent } from './components/views/about-us/about-us.component';
import { ContactComponent } from './components/views/contact/contact.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'recipes', component: RecipesListComponent},
  { path: 'recipes/:id', component: RecipesDetailComponent},
  { path: 'recipes/form', component: RecipesFormComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
