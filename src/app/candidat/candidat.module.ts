import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { HomeComponent } from './home/home.component';
import { CandidatLayoutComponent } from './candidat-layout/candidat-layout.component';
import { CFooterComponent } from './c-footer/c-footer.component';
import { CHeaderComponent } from './c-header/c-header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionForm1Component } from './inscription-form1/inscription-form1.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    CandidatLayoutComponent,
    CFooterComponent,
    CHeaderComponent,
    InscriptionComponent,
    InscriptionForm1Component,
  ],
    imports: [
        CommonModule,
        CandidatRoutingModule,
        FormsModule
    ]
})
export class CandidatModule { }
