import { Component, OnInit } from '@angular/core';
import {Flight} from "../../Model/Flight";
import {ServiceService} from "../../Service/service.service";
import {FlightServiceService} from "../../Service/flight-service.service";
import {ReviewServiceService} from "../../Service/review-service.service";
import {User} from "../../Model/User";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights:Flight[];
  userLogged:User;
  constructor(private service:ServiceService,private flightService:FlightServiceService) {


  }

  ngOnInit(): void {
    this.userLogged=this.service.userLogged;
    this.getFlights();
  }
  private getFlights(){
    this.flightService.getFlights().subscribe(data =>{
      this.flights=data;
    })
  }

}
