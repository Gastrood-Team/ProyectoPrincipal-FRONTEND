import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    
  ]
})
export class LayoutsModule { }
