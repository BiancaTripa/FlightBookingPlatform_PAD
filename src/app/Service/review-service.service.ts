import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Review} from "../Model/Review";
import {Flight} from "../Model/Flight";

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  private url:string;
  companyName:string;
  review:Observable<Review[]>
  reviewslist:Review[]=[];
  reviewsbyCompany:Review[]=[];
  constructor(private http:HttpClient) {
    this.url='http://localhost:8081/review';
    this.review=this.getReview();
    this.review.subscribe(reviews=>this.reviewslist=reviews);
  }

  public getReview():Observable<Review[]>{
    return this.http.get<Review[]>(this.url);
  }

  public saveReview(review:Review):Observable<Object>{
    return this.http.post(`${this.url}`,review);

  }
  getReviewsbyCompanyName(company:string):Review[]{
    let review:Review[]=[];
    let k=0;
    for(var r in this.reviewslist){
      if(this.reviewslist[r].company==company){
        review[k]=this.reviewslist[r];
        k++;
      }

    }
    return review;
  }


}
