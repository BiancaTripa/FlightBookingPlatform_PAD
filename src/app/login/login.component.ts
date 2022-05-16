import { Component, OnInit } from '@angular/core';
import {User} from "../Model/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.user);
  }

}
