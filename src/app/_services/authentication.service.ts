import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredential} from "../_interfaces/credential";
import {IToken} from "../_interfaces/token";
import {Observable} from "rxjs";
import {IUtilisateur} from "../_interfaces/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url:string = 'http://10.237.56.46:8081/token';
  //url:string = 'http://192.168.254.68:8081/token';
  url_register:string = 'http://10.237.56.46:8081/register';
//  url_register:string = 'http://192.168.254.68:8081/register';

  constructor(private  http: HttpClient) { }

  login(credentials: ICredential): Observable<IToken> {
   return  this.http.post<IToken>(this.url, credentials);
  }
  register(utilisateur: IUtilisateur) : Observable<any>{
    return this.http.post<any>(this.url_register, utilisateur);
  }

}
