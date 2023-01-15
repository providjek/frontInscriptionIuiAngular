import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../_services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private  router: Router,
    private tokenService : TokenService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token : string | null = this.tokenService.getToken();
    if (token != null){
      let role: string =  this.tokenService.decodeToken(token).scope;
        if(this.tokenService.isLogged() && role == "ADMIN"){
          return true;
      }
    }
    return this.router.navigate(['auth']);
  }

}
