import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './views/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    CarrousselComponent
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
