import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './views/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { CreateRecipesComponent } from './views/create-recipes/create-recipes.component';
import { RecipeDetailsComponent } from './views/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    CarrousselComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    ProfileComponent,
    RecipesComponent,
    EditProfileComponent,
    CreateRecipesComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
