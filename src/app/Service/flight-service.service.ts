import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../Model/Flight";

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
 private url:string;
 flights:Observable<Flight[]>
  flightslist:Flight[]=[];

  constructor(private http:HttpClient) {
    this.url='http://localhost:8081/flight';
    this.flights=this.getFlights();
    this.flights.subscribe(flights=>this.flightslist=flights)
  }
  public getFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.url)

  }
  search(start:string,destination:string,data:string):Flight[]{
    let flight:Flight[]=[];
      let k=0;
    for(var f in this.flightslist){
      if(this.flightslist[f].start==start && this.flightslist[f].destination==destination && this.flightslist[f].data==data){
        flight[k]=this.flightslist[f];
        k++;
      }
    }
    return flight;
  }

}
