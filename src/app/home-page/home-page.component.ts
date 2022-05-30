import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Model/User";
import {ServiceService} from "../Service/service.service";
import {FlightServiceService} from "../Service/flight-service.service";
import {Flight} from "../Model/Flight";
import {Review} from "../Model/Review";
import {ReviewServiceService} from "../Service/review-service.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userLogged:User;
  flights:Flight[];
  flight=new Flight();
  flight1:Flight[];
  issearch=false;

  constructor(private service:ServiceService,private flightService:FlightServiceService,private reviewService:ReviewServiceService) {


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
  public searchF(){
    this.flight1=this.flightService.search(this.flight.start,this.flight.destination,this.flight.data);
    console.log(this.flight1);
    this.issearch=true;
  }
  // public showReview(){
  //   this.reviewService.companyName=this.
  // }

}
