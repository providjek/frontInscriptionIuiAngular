import { Component, OnInit } from '@angular/core';
import {SitesService} from "../../_services/sites.service";
import {ISite} from "../../_interfaces/site";
import {ICandidature} from "../../_interfaces/icandidature";
import {CandidatureService} from "../../_services/candidature.service";
import {Route, Router} from "@angular/router";
import {SessionService} from "../../_services/session.service";
import { ISessionModel } from 'src/app/_interfaces/isession-model';

@Component({
  selector: 'app-inscription-form1',
  templateUrl: './inscription-form1.component.html',
  styleUrls: ['./inscription-form1.component.css']
})
export class InscriptionForm1Component implements OnInit {

  public site :any;
  public showForm: boolean = false;
  public showCentre : boolean = true;
  public  candidatureForm: ICandidature={
    langue: "",
    email_pere: "",
    email_mere: "",
    statut: "Echec",
    code_examen: 0,
    cycle: "",
    compteID:Number(localStorage.getItem('idCandidat')),
    nationalite: "",
    genre: "",
    tel_pere: "",
    date_naissance: "",
    tel_mere: "",
    image: "",
    formation2: "",
    formation3: "",
    paiement: "",
    formation1: "",
    reference_paiement: "",
    telephone_paiement: "",
    dernier_Etablissement: "",
    lieu_de_naissance: "",
    ville : "",
    nombre_choix :0,
    centre : "",
    candidatureActif : true
  };
  public session : ISessionModel = {
    id: 0,
    nom: "",
    date_debut: new Date(),
    date_limite: new Date(),
    date_examen: new Date(),
    statut: false
  };


  constructor(
    private siteService :SitesService,
    private candidatureService : CandidatureService,
    private router : Router,
    private sessionService : SessionService
  ) { }

  ngOnInit(): void {
    this.sessionService.getActiveSession().subscribe(
      data =>{
        console.log(data);
        this.session = data;
      },
      error => console.log(error)
    );
    this.siteService.getAllSite().subscribe(
      data => {
        this.site = data;
        console.log(this.site);
      },
      error => console.log(error)
    );

  }

  toggleForm():void{
    this.showForm = !this.showForm;
    console.log(this.candidatureForm);
    this.showCentre =!this.showForm;
  }

  onSubmit() {
    if(this.candidatureForm.formation1 && !this.candidatureForm.formation2 && !this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "FA";
      this.candidatureForm.formation2 = "";
      this.candidatureForm.formation3 = "";
    }if(this.candidatureForm.formation1 && this.candidatureForm.formation2 && !this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "FA";
      this.candidatureForm.formation2 = "OP";
      this.candidatureForm.formation3 = "";
    }if(this.candidatureForm.formation1 && !this.candidatureForm.formation2 && this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "FA";
      this.candidatureForm.formation2 = "X";
      this.candidatureForm.formation3 = "";
    }

    if(!this.candidatureForm.formation1 && !this.candidatureForm.formation2 && !this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "";
      this.candidatureForm.formation2 = "";
      this.candidatureForm.formation3 = "";
    }if(!this.candidatureForm.formation1 && this.candidatureForm.formation2 && !this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "OP";
      this.candidatureForm.formation2 = "";
      this.candidatureForm.formation3 = "";
    }if(!this.candidatureForm.formation1 && !this.candidatureForm.formation2 && this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "X";
      this.candidatureForm.formation2 = "";
      this.candidatureForm.formation3 = "";
    }


    if(!this.candidatureForm.formation1 && this.candidatureForm.formation2 && !this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "";
      this.candidatureForm.formation2 = "";
      this.candidatureForm.formation3 = "";

    }if(!this.candidatureForm.formation1 && this.candidatureForm.formation2 && this.candidatureForm.formation3){
      this.candidatureForm.formation1 = "OP";
      this.candidatureForm.formation2 = "X";
      this.candidatureForm.formation3 = "";
    }
    console.log(this.candidatureForm.nombre_choix);
    switch (this.candidatureForm.nombre_choix) {
      case 1:
        this.candidatureForm.paiement = "20 000";
        break;
      case 2:
        this.candidatureForm.paiement = "25 000";
        break;
      case 3:
        this.candidatureForm.paiement = "30 000";
        break;
      default:
        this.candidatureForm.paiement = "0";
        break;
    }


    console.log(this.candidatureForm);

    this.candidatureService.addCandidature(this.candidatureForm).subscribe(
      data => {
        console.log(data);
          localStorage.setItem('haveCandidature', 'true');
          this.router.navigate(['/candidat/home']);
      },
        error => {
        console.log(error);

      }
    );


    return true;
  }
}
