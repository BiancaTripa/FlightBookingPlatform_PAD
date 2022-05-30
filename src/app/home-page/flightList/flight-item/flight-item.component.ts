import {Component, Input, OnInit} from '@angular/core';
import {Flight} from "../../../Model/Flight";
import {ServiceService} from "../../../Service/service.service";
import {FlightServiceService} from "../../../Service/flight-service.service";
import {User} from "../../../Model/User";
import {ActivatedRoute, Router} from "@angular/router";
import {ReviewServiceService} from "../../../Service/review-service.service";

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit {
  @Input()
  flight!:Flight;
  userLogged:User;

  constructor(private service:ServiceService,private flightService:FlightServiceService,private route:ActivatedRoute,private router:Router,private reviewService:ReviewServiceService) {

  }

  ngOnInit(): void {
    this.userLogged=this.service.userLogged;
    console.log(this.flight);
  }
  gotoReview():void{
    this.reviewService.getReview();
    this.reviewService.reviewsbyCompany=this.reviewService.getReviewsbyCompanyName(this.flight.company);
    console.log(this.reviewService.getReviewsbyCompanyName(this.flight.company));
    this.router.navigate(['/review']);
  }

}
