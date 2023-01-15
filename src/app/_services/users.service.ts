import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredential} from "../_interfaces/credential";
import {Observable} from "rxjs";
import {IToken} from "../_interfaces/token";
import {IUtilisateur} from "../_interfaces/utilisateur";
import {IUtilisateurResponseModel} from "../_interfaces/utilisateur-response-model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private  url_all_users:string = 'http://192.168.254.68:8081/api/comptes';
  private  url_user_by_email : string = 'http://192.168.254.68:8081/api/byemail/';

  constructor(private  http: HttpClient) { }

  allUsers(): Observable<any> {
    return  this.http.get<any>(this.url_all_users);
  }

  getUserByEmail(email : string):Observable<IUtilisateurResponseModel>{
    return  this.http.get<IUtilisateurResponseModel>(this.url_user_by_email+email);
  }



}
