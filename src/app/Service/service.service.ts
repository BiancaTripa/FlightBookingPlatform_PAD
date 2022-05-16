import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url:string;
  constructor(private http: HttpClient) {
    this.url='http://localhost:8080/users';
  }

  public getUser():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  save(user: User): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.url}`,user);
  }

}
