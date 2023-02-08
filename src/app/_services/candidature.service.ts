import { Injectable } from '@angular/core';
import {ICandidature} from "../_interfaces/icandidature";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {UsersService} from "./users.service";
import {ICandidatureResponse} from "../_interfaces/icandidature-response";

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  //url:string = 'http://10.237.56.46:9090/candidature/Candidats';
url:string = 'http://localhost:9090/candidature/Candidats';
urlhasCandidature:string = 'http://localhost:9090/candidature/';
idCcompte : string = "";

  constructor(
    private  http : HttpClient,
    private  tokenService : TokenService,
    private  userService : UsersService
    ) {}

  addCandidature(candidature : ICandidature) : Observable<ICandidature>{
    return this.http.post<ICandidature>(this.url, candidature);
  }

  hasCandidature(compteID: string ): Observable<ICandidatureResponse[]>{
    return  this.http.get<ICandidatureResponse[]>(this.urlhasCandidature+compteID);
  }
/*  hasCandidatureAuto(): Observable<any>{
    let token: string | null = this.tokenService.getToken();
    let email :string= "";
    let iDCandidat : string = "";
    if (!!token) {
      email = this.tokenService.decodeToken(token).sub;
    }
    console.log(email+" le mail");
    this.userService.getUserByEmail(email).subscribe(
       data => {
               iDCandidat = String(data.id);
            }, error => {
        console.log(error);
      }
      );
      console.log("CompteID"+this.idCcompte);
    return  this.http.get<any>(this.urlhasCandidature+this.idCcompte);

  }*/

  savecompteID(id: string): void{
    localStorage.setItem('idCandidat', id);
  }

}
