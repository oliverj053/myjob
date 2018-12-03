
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginEComponent } from './empresa/login-e/login-e.component';

import { RegistroComponent } from './empresa/registro/registro.component';
import {HomeComponent} from "./Usuario/home/home.component";
//import {NavbarComponent} from "./Usuario/navbar/navbar.component";
import {PrivadoComponent} from "./Usuario/privado/privado.component";
import {LoginUComponent} from "./Usuario/login-u/login-u.component";
import {RegistroUsComponent} from "./Usuario/registro-us/registro-us.component";
import {NotFoundComponent} from "./Usuario/not-found/not-found.component";
import {AuthGuard} from "./Usuario/seguridad/auth.guard";
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login-e',component:LoginEComponent},
  {path:'registro', component:RegistroComponent},
  {path: 'login-u',component:LoginUComponent},
  {path: 'registro-us', component:RegistroUsComponent},
  {path: 'privado',component:PrivadoComponent, canActivate: [AuthGuard]},
  {path:'**',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




