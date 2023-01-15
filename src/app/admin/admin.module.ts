import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComptesComponent } from './comptes/comptes.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    ComptesComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
