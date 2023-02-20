import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PLayoutComponent } from './p-layout/p-layout.component';
import { RouterModule } from "@angular/router";
import { PublicRoutingModule } from "./public-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    PLayoutComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class PublicModule { }
