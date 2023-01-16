import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ISessionModel} from "../_interfaces/isession-model";
import {HttpClient} from "@angular/common/http";
import {ISite} from "../_interfaces/site";

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private  url_site: string ="http://10.237.56.46:8080/api/v1/admin/site/all";
  private  url_centre: string ="http://10.237.56.46:8080/api/v1/admin/centre_examen/all";

  constructor(
    private  http: HttpClient
  ) { }

  getAllSite(): Observable<ISite> {
    return  this.http.get<ISite>(this.url_site);
  }

}
