import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CandidatLayoutComponent} from "./candidat-layout/candidat-layout.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {InscriptionForm1Component} from "./inscription-form1/inscription-form1.component";
import {CandidatureGuard} from "../_helpers/candidature.guard";
import {ResultatComponent} from "./resultat/resultat.component";

const routes: Routes = [
      {path: '', component : CandidatLayoutComponent, children : [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path : 'home', component : HomeComponent },
      {path : 'session', component : HomeComponent },
      {path : 'resultat', component : ResultatComponent },
      {path : 'inscription', component : InscriptionForm1Component, canActivate: [CandidatureGuard] }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
