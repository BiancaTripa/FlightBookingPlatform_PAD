import { Component, OnInit } from '@angular/core';
import {User} from "../Model/User";
import {ServiceService} from "../Service/service.service";
import {FlightServiceService} from "../Service/flight-service.service";
import {Flight} from "../Model/Flight";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userLogged:User;
  flights:Flight[];
  constructor(private service:ServiceService,private flightService:FlightServiceService) {

  }

  ngOnInit(): void {
    this.userLogged=this.service.userLogged;
    this.getFlights();
    console.log(this.userLogged);
  }

  private getFlights(){
    this.flightService.getFlights().subscribe(data =>{
      this.flights=data;
    })
  }

}