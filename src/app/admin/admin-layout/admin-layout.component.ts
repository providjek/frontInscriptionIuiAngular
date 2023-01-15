import { Component, OnInit, Renderer2 } from '@angular/core';
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  private link:any; 
  constructor(
      private  tokenService : TokenService,
      private renderer : Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.removeChild(document.head, this.renderer.selectRootElement('link[href="assets/css/bootstrap-5.0.0-alpha-2.min.css"]'));
    this.renderer.removeChild(document.head, this.renderer.selectRootElement('link[href="assets/css/lindy-uikit.css"]'));
    this.renderer.removeChild(document.head, this.renderer.selectRootElement('link[href="assets/css/animate.css"]'));
    this.renderer.removeChild(document.head, this.renderer.selectRootElement('link[href="assets/css/LineIcons.2.0.css"]'));

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/build/css/custom.min.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);


  }

  logout():void {
      this.tokenService.clearToken();
  }
}
