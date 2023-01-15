import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
      private  tokenService : TokenService
  ) { }

  ngOnInit(): void {
  }

  logout():void {
      this.tokenService.clearToken();
  }
}
