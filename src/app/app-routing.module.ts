
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from "./_helpers/authentication.guard";
import {AuthCandidatGuard} from "./_helpers/auth-candidat.guard";

const routes: Routes = [
      {path: '', loadChildren:() => import('./public/public.module').then(m =>m.PublicModule)},
      {path: 'auth', loadChildren:() =>import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
      {path : 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthenticationGuard] },
      {path : 'candidat', loadChildren: () => import('./candidat/candidat.module').then(m => m.CandidatModule), canActivate: [AuthCandidatGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
