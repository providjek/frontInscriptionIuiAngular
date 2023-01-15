import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredential} from "../_interfaces/credential";
import {IToken} from "../_interfaces/token";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url:string = 'http://192.168.254.68:8081/token';

  constructor(private  http: HttpClient) { }

  login(credentials: ICredential): Observable<IToken> {
   return  this.http.post<IToken>(this.url, credentials);
  }

}
