import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import * as jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
import {TokenModel} from "../_interfaces/token-decoded";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private  router : Router) { }

  saveToken(token : string) : void{
    localStorage.setItem('token', token);
  }

  isLogged():boolean{
    const tokenStr = localStorage.getItem('token');
    if(!! tokenStr) {
      let token: TokenModel = this.decodeToken(tokenStr);
      console.log(token);
      if(this.isTokenValid(token)) {
        return this.isTokenValid(token);
      }else{
        this.clearToken();
        return  false;
      }
    }
    return  false;
  }

  clearToken(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  decodeToken(token: string ) : TokenModel{
    return jwtDecode<TokenModel>(token);
  }
  getToken(): string | null{
    return  localStorage.getItem('token');
  }
  tokenExpired(): void{
  localStorage.removeItem('token');
  this.router.navigate(['/auth/login']);
}
  getScope(): string{
    let token : string | null = localStorage.getItem('token');
    if(token !=null){
     return this.decodeToken(token).scope;
    }else {
      return "";
    }
  }
  getEmail(): string {
    let token: string | null = localStorage.getItem('token');
    if (token != null) {
      return this.decodeToken(token).sub;
    } else {
      return "";
    }
  }

  isTokenValid(token : TokenModel) : boolean{
      const expiration : number | null = this.getTokenExpiration(token);
    if (typeof expiration == "number") {
      console.log("Temps du token : "+expiration);
      return expiration > Date.now();
    }

    return false;
  }


  getTokenExpiration(token : TokenModel): number | null {

    if (token && token.exp) {

      return token.exp * 1000;
    }
    return null;
  }

  isExpiredToken(token: TokenModel): boolean{
    const currentTime = new Date().getTime() / 1000;
    return token.exp < currentTime;
  }

}
