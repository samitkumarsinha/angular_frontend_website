import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
@NgModule({
  declarations: [DashboardComponent, AdminprofileComponent, UsersComponent, AdminprofileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
