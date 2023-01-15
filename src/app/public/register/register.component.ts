import { Component, OnInit } from '@angular/core';
import {ICredential} from "../../_interfaces/credential";
import {IUtilisateur} from "../../_interfaces/utilisateur";
import {AuthenticationService} from "../../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form : IUtilisateur = {
    name: "",
    prenom: "",
    password: "",
    email: "",
    telephone: 0,
    role: "CANDIDAT",
    id_disponibilite: 0
  };



  constructor(
    private  authService: AuthenticationService,
    private  router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form)
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        console.log("Inscription réussie");
        this.router.navigate(['/auth/login']);
        },
      err => {
        console.log(err);
        console.log(err.errors);
        console.log("Inscription réussie");
        this.router.navigate(['/auth/login'])

      }
    );

  }

}
