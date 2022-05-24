import { Component, OnInit } from '@angular/core';
import {User} from "../Model/User";
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  userLogged=new User();
  constructor(private service:ServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    //console.log(this.user);
    this.service.loginUserFromRemote(this.user).subscribe(
      data=> console.log(this.user)
    )
    this.userLogged=this.service.login(this.user.mail,this.user.password);
    console.log(this.userLogged);
    this.gotoHomePage();
  }
  gotoHomePage(){
    this.router.navigate(['/home-page']);
  }

}
