import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';

const siteroutes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'about', component: ProfileComponent },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(siteroutes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
