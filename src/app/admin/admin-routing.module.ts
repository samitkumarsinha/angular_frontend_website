import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'app/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', canActivate: [AuthGuard] , component: DashboardComponent,  children: [
    {path: 'adminprofile', component: AdminprofileComponent},
    {path: 'users', component: UsersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
