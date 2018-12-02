
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./Usuario/home/home.component";
//import {NavbarComponent} from "./Usuario/navbar/navbar.component";
import {PrivadoComponent} from "./Usuario/privado/privado.component";
import {LoginUComponent} from "./Usuario/login-u/login-u.component";
import {RegistroUsComponent} from "./Usuario/registro-us/registro-us.component";
import {NotFoundComponent} from "./Usuario/not-found/not-found.component";
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'login-u',component:LoginUComponent},
  {path: 'registro-us', component:RegistroUsComponent},
  {path: 'privado',component:PrivadoComponent},
  {path:'**',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




