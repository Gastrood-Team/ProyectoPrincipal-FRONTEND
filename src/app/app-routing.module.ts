import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RecipesComponent } from "./views/recipes/recipes.component";
import { ForumComponent } from './views/forum/forum.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "forum", component: ForumComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
