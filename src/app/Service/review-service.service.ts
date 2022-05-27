import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Review} from "../Model/Review";

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  private url:string;
  companyName:string;
  constructor(private http:HttpClient) {
    this.url='http://localhost:8081/review';
  }

  public getReview():Observable<Review[]>{
    return this.http.get<Review[]>(this.url);
  }

  public saveReview(review:Review):Observable<Object>{
    return this.http.post(`${this.url}`,review);

  }

}
