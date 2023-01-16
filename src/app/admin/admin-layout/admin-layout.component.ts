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

    /*this.renderer.removeChild(document.body, this.renderer.selectRootElement('script[src="assets/js/bootstrap.5.0.0.alpha-2-min.js"]'));
    this.renderer.removeChild(document.body, this.renderer.selectRootElement('script[src="assets/js/count-up.min.js"]'));
    this.renderer.removeChild(document.body, this.renderer.selectRootElement('script[src="assets/js/wow.min.js"]'));
    this.renderer.removeChild(document.body, this.renderer.selectRootElement('script[src="assets/js/main.js"]'));*/

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/vendors/bootstrap/dist/css/bootstrap.min.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/vendors/font-awesome/css/font-awesome.min.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/vendors/nprogress/nprogress.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/vendors/iCheck/skins/flat/green.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/vendors/jqvmap/dist/jqvmap.min.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/vendors/bootstrap-daterangepicker/daterangepicker.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    this.link = this.renderer.createElement('link');
    this.renderer.setAttribute(this.link, 'href', 'assets/admin_assets/build/css/custom.min.css');
    this.renderer.setAttribute(this.link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, this.link);

    //this.loadJsFile("admin_assets/vendors/jquery/dist/jquery.min.js");  
    this.loadJsFile("admin_assets/build/js/custom.min.js");  

  }

  public loadJsFile(url: string) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  } 

  logout():void {
      this.tokenService.clearToken();
  }
}
