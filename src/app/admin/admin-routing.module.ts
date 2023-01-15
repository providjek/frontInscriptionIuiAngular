import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {HomeComponent} from "../public/home/home.component";
import {RegisterComponent} from "../public/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ComptesComponent} from "./comptes/comptes.component";

const routes: Routes = [
      {path : '', component: AdminLayoutComponent, children : [
          {path: '', redirectTo: 'dashbord', pathMatch: 'full'},
          {path : 'dashbord', component : DashboardComponent },
          {path : 'comptes', component :  ComptesComponent}
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
