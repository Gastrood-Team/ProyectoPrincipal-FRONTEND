import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { RecipesListComponent } from './components/views/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './components/views/recipes-detail/recipes-detail.component';
import { RecipesFormComponent } from './components/views/recipes-form/recipes-form.component';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CarrouselComponent } from './components/common/carrousel/carrousel.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/views/about-us/about-us.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './core/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesFormComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
