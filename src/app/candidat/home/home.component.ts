import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../_services/session.service";
import {ISessionModel} from "../../_interfaces/isession-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public session : ISessionModel = {
  id: 0,
  nom: "",
  date_debut: new Date(),
  date_limite: new Date(),
  date_examen: new Date(),
  statut: false
}

  constructor(private sessionService :SessionService) { }

  ngOnInit(): void {
      this.sessionService.getActiveSession().subscribe(
        data =>{
          console.log(data);
          this.session = data;
        },
        error => console.log(error)
      );

  }

}
