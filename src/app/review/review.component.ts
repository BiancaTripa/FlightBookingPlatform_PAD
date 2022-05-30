import { Component, OnInit } from '@angular/core';
import {Review} from "../Model/Review";
import {ReviewServiceService} from "../Service/review-service.service";
import {ServiceService} from "../Service/service.service";
import {User} from "../Model/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review:Review
  reviews:Review[];
  userLogged:User;
  constructor(private reviewService:ReviewServiceService,private service:ServiceService, private route:ActivatedRoute,private router:Router) {
    this.reviews=this.reviewService.reviewsbyCompany;
    this.userLogged=this.service.userLogged;
  }

  ngOnInit(): void {
    this.getReviews();
    this.userLogged=this.service.userLogged;
  }
  public getReviews(){
    this.reviewService.getReview().subscribe(data=>{this.reviews=data})
  }
  goBack():void{

    this.router.navigate(['/home-page']);

  }

  AddReview():void{
    this.review.lastname=this.userLogged.lastname;
    this.review.firstname=this.userLogged.firstname;
    this.review.company=this.reviews[0].company;
    this.reviewService.saveReview(this.review);
  }

}
