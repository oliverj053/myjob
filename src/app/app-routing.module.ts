import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoginUComponent} from "./Usuario/login-u/login-u.component";
import {RegistroUsComponent} from "./Usuario/registro-us/registro-us.component";
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'login',component:LoginUComponent},
  {path: 'registrou', component:RegistroUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
