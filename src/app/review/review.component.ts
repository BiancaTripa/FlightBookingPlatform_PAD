import { Component, OnInit } from '@angular/core';
import {Review} from "../Model/Review";
import {ReviewServiceService} from "../Service/review-service.service";
import {ServiceService} from "../Service/service.service";
import {User} from "../Model/User";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review:Review
  reviews:Review[];
  userLogged:User;
  constructor(private reviewService:ReviewServiceService,private service:ServiceService) { }

  ngOnInit(): void {
    this.getReviews();
    this.userLogged=this.service.userLogged;
  }
  public getReviews(){
    this.reviewService.getReview().subscribe(data=>{this.reviews=data})
  }

}
