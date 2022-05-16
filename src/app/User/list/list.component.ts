import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {User} from "../../Model/User";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[];
  constructor( private service:ServiceService, private router:Router) {

  }

  ngOnInit(): void {
    this.service.getUser().subscribe(data=>{
      console.log(data[1].phonenr);
      this.users=data;
    })
   // console.log(this.users[1].mail);
  }
  showUsers(){
    if(this.users[1].mail!=undefined)
    console.log(this.users[1].lastname);
  }

}
