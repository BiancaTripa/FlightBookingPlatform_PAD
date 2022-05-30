import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ReviewComponent} from "./review/review.component";

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'home-page', component:HomePageComponent},
  {path:'review',component:ReviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
