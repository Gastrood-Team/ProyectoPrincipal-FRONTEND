import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomeComponent } from './modules/layouts/components/home/home.component';
import { LayoutsModule } from './modules/layouts/layouts.module';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  // { path: 'recipes', component: RecipesListComponent},
  // { path: 'recipes/:id', component: RecipesDetailComponent},
  // { path: 'recipes/form', component: RecipesFormComponent},
  // { path: 'profile/:username', component: ProfileComponent},
  // { path: 'about', component: AboutUsComponent},
  // { path: 'contact', component: ContactComponent},
]

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
