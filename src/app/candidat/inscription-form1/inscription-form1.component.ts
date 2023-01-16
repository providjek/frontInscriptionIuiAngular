import { Component, OnInit } from '@angular/core';
import {SitesService} from "../../_services/sites.service";
import {ISite} from "../../_interfaces/site";
import {ICandidature} from "../../_interfaces/icandidature";

@Component({
  selector: 'app-inscription-form1',
  templateUrl: './inscription-form1.component.html',
  styleUrls: ['./inscription-form1.component.css']
})
export class InscriptionForm1Component implements OnInit {

  public site :any;
  public showForm: boolean = false;
  public showCentre : boolean = true;
  public  form: ICandidature={
    langue: "",
    email_pere: "",
    email_mere: "",
    statut: "",
    code_examen: 0,
    cycle: "",
    compteID: 0,
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
    dernier_Etablissement: "",
    lieu_de_naissance: "",
    ville : ""
  };

  constructor(
    private siteService :SitesService
  ) { }

  ngOnInit(): void {
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
    console.log(this.form);
    this.showCentre =!this.showForm;
  }

  onSubmit() {
    console.log(this.form);
    return false;
  }
}
