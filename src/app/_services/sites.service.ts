import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ISessionModel } from "../_interfaces/isession-model";
import { HttpClient } from "@angular/common/http";
import { ISite } from "../_interfaces/site";
import { ICentre } from "../_interfaces/icentre";

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  //private  url_site: string ="http://localhost:8080/api/v1/admin/site/all";
  private url_site: string = "http://51.178.136.105:8080/api/v1/admin/site/all";
  //private  url_centre: string ="http://localhost:8080/api/v1/admin/centre_examen/all";
  private url_centre: string = "http://51.178.136.105:8080/api/v1/admin/centre_examen/all";
  private url_centre_by_site: string = "http://51.178.136.105:8080/api/v1/admin/centre_examen/allbysite/";


  constructor(
    private http: HttpClient
  ) { }

  getAllSite(): Observable<ISite> {
    return this.http.get<ISite>(this.url_site);
  }

  getCenterBySite(id: number): Observable<any> {
    return this.http.get<any>(this.url_centre_by_site + id);
  }


}
