import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../_services/users.service";
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-c-footer',
  templateUrl: './c-footer.component.html',
  styleUrls: ['./c-footer.component.css']
})
export class CFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 }

}
