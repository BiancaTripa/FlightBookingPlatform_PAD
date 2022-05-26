import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../Model/Flight";

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
 private url:string;

  constructor(private http:HttpClient) {
    this.url='http://localhost:8081/flight';
  }
  public getFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.url)

  }
}
