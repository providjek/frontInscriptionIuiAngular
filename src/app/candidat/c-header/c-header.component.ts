import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";
import {Router} from "@angular/router";
import {UsersService} from "../../_services/users.service";
import {IUtilisateurResponseModel} from "../../_interfaces/utilisateur-response-model";

@Component({
  selector: 'app-c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.css']
})
export class CHeaderComponent implements OnInit {

  public candidat : IUtilisateurResponseModel = {
    id: 0,
    name: "",
    prenom: "",
    password: "",
    email: "",
    telephone: 0,
    role: "",
    id_disponibilite: 0
  };



  constructor(
    private  tokenService : TokenService,
    private  router : Router,
    private  userService : UsersService
  ) { }

  ngOnInit(): void {
    let email = this.tokenService.getEmail();
    this.userService.getUserByEmail(email).subscribe(
      data => {
        console.log(data);
          this.candidat = data;

      },
      error => console.log(error)
    );
    //console.log( this.userService.getUserByEmail(email));

  }

  logout():void {
    let alert =  confirm("Voulez-vous vraiment vous déconnectez ?");
    if(alert){
      this.router.navigate(['/home']);
      this.tokenService.clearToken();
      this.userService.clearID();
      this.userService.clearHaveCandidature();
    }else{
      console.log("tes");
    }
  }
}
