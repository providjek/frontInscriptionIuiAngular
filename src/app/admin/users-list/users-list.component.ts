import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../_services/users.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor( private  userService : UsersService) { }

  allUsers() : void{
    this.userService.allUsers().subscribe(
      data => {
        console.log(data)
      },
      err => console.log(err)
    );

  }

  ngOnInit(): void {
  }

}
