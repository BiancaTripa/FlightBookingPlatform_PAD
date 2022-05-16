import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Service/service.service";
import {Form, NgForm} from "@angular/forms";
import {User} from "../Model/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();
  constructor(private service:ServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  onSignUp():void{
    console.log(this.user.firstname);
    this.service.save(this.user).subscribe((result => this.gotoLogin()))
  // console.log(this.user.firstname);
  }
  gotoLogin()
  {
    this.router.navigate(['/login'])
  }
}
