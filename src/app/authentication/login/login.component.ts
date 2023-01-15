import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";
import {IToken} from "../../_interfaces/token";
import {ICredential} from "../../_interfaces/credential";
import {TokenService} from "../../_services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  form : ICredential = {
    username : "",
    password : ""
  };
  role : string = "";
  constructor(
    private authService : AuthenticationService,
    private  tokenService : TokenService,
    private  router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data.accessToken);
        this.tokenService.saveToken(data.accessToken);
        this.role = this.tokenService.decodeToken(data.accessToken).scope;
        if(this.role == "ADMIN"){
          this.router.navigate(['admin']);
        }else if (this.role == "CANDIDAT"){
          this.router.navigate(['/candidat/home']);
        }
      },
      err => console.log(err)
    );

  }
}
