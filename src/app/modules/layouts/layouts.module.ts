import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    
  ]
})
export class LayoutsModule { }
