import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url:string;
  users: Observable<User[]>;
  userList: User[] =[];
  userLogged:User;
  constructor(private http: HttpClient) {
    this.url='http://localhost:8080/users';
    this.users=this.getUserList();
    this.users.subscribe(users =>
    this.userList=users)
  }

  public getUser():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  save(user: User): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.url}`,user);
  }
  loginUserFromRemote(user:User):Observable<any>{
    return  this.http.post<any>("http://localhost:8080/login",user);

  }
  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}`);
  }
  login(email: String, password: String): User{
    let user=new User();
      for( var us in this.userList){
        if(this.userList[us].mail==email &&this.userList[us].password==password)
        {
          this.userLogged=this.userList[us];
          user=this.userList[us];
        }
      }
      return user;
  }

}
