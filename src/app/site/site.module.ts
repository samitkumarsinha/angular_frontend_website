import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SiteRoutingModule } from './site-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LandingComponent, 
    ProfileComponent, 
    SigninComponent, 
    SignupComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
