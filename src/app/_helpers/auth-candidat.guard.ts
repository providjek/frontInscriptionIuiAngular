import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../_services/token.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthenticationService} from "../_services/authentication.service";
import {TokenModel} from "../_interfaces/token-decoded";

@Injectable({
  providedIn: 'root'
})
export class AuthCandidatGuard implements CanActivate {


  constructor(
    private  router: Router,
    private tokenService : TokenService,
    private  authServvice : AuthenticationService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token : string | null = this.tokenService.getToken();
    if (token != null ){
      let tokenModel: TokenModel  =  this.tokenService.decodeToken(token);
      if(this.tokenService.isExpiredToken(tokenModel)){
       this.authServvice.logout();
      }else {
        let role: string = this.tokenService.decodeToken(token).scope;
        if (this.tokenService.isLogged() && role == "CANDIDAT") {
          return true;
        }
      }
    }
    return this.router.navigate(['auth']);

  }

}
