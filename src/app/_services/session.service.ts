import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ISessionModel } from "../_interfaces/isession-model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // url:string = 'http://10.237.56.46:8080/api/v1/admin/session/active';
  url: string = 'http://51.178.136.105:8080/api/v1/admin/session/active';
  // url: string = 'http://localhost:8080/api/v1/admin/session/active';

  constructor(private http: HttpClient) { }

  getActiveSession(): Observable<ISessionModel> {
    return this.http.get<ISessionModel>(this.url);
  }



}
