import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AcceptLenguageInterceptor } from './interceptors/accept-lenguage.interceptor';


@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AcceptLenguageInterceptor, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true
    }
  ],
})
export class CoreModule { }