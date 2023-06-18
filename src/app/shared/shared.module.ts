import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginBarComponent } from './login-bar/login-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LoginBarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginBarComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
