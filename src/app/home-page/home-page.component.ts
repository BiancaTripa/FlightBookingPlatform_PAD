import { Component, OnInit } from '@angular/core';
import {User} from "../Model/User";
import {ServiceService} from "../Service/service.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userLogged:User
  constructor(private service:ServiceService) {

  }

  ngOnInit(): void {
    this.userLogged=this.service.userLogged;
    console.log(this.userLogged);
  }

}
