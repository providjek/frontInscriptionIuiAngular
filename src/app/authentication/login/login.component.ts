import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";
import {IToken} from "../../_interfaces/token";
import {ICredential} from "../../_interfaces/credential";
import {TokenService} from "../../_services/token.service";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UsersService} from "../../_services/users.service";

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
  showMsgError: boolean = false;
  msgError: string = "";


  constructor(
    private authService : AuthenticationService,
    private  tokenService : TokenService,
    private  router: Router,
    private userService : UsersService
    ) { }

  ngOnInit(): void {
    var oldToken = this.tokenService.getToken();
  /*  var oldCompteID = localStorage.getItem('idCandidat');
    if(oldToken != null){

 //       this.tokenService.clearToken();
   //     this.userService.clearID();
    }*/
    if(this.tokenService.isLogged()){
      this.router.navigate(['/candidat/home']);
    }else if(!!oldToken){
      this.tokenService.clearToken();
      this.userService.clearID();
    }

  }

  onSubmit(): void {
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data.accessToken);
        this.tokenService.saveToken(data.accessToken);
        this.role = this.tokenService.decodeToken(data.accessToken).scope;
        this.userService.getUserByEmail(this.tokenService.decodeToken(data.accessToken).sub).subscribe(
          data => {
            localStorage.setItem('idCandidat', String(data.id));
          },
          error => console.log(error)
        );
        if(this.role == "ADMIN"){
          this.router.navigate(['admin']);
        }else if (this.role == "CANDIDAT"){
          this.router.navigate(['/candidat/home']);
        }
      },
      err => {
        if(err.status != 200){
          this.msgError = "Une erreur s'est produite ! \n Le mot de passe ou l'adresse mail est incorrect. \ Veillez vérifier vos informatons, votre connexion internet et réessayez!!!";
          this.showMsgError = true;
        }
      }
    );

  }
}
