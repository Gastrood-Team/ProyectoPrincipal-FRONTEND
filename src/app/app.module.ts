import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

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
import { ForumComponent } from './views/forum/forum.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';

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
    ForumComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
