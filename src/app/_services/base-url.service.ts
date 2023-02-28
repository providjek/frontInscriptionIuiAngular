import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseUrlService {
  private origin: string;

  constructor() {
    // this.origin = environment.apiUrl;

    this.origin =
      // 'http://' + window.location.hostname + ':' + environment.port + '/';
      'http://' + window.location.hostname;
    //'http://51.178.136.105';
  }

  getOrigin() {
    return this.origin;
  }
}
