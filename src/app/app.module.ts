import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Firebase
import {AngularFireModule}from 'angularfire2'; 
import {AngularFireDatabaseModule}from 'angularfire2/database';
import {environment} from '../environments/environment';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
////servicio
import{ ServicioempService}from './empresa/servicios/servicioemp.service';
//
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginEComponent } from './empresa/login-e/login-e.component';
import { InicioComponent } from './empresa/inicio/inicio.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroEComponent } from './empresa/registro-e/registro-e.component';
///guards que permiten verificar si se inicio sesion antes de entrar
import{LoginEGuard} from './empresa/login-e.guard';
import{NologinEGuard} from './empresa/nologin-e.guard'
//arreglo que va a contener los enlaces a mostrar
const appRoutes:Routes=[
 // {path:'',component:AppComponent},
  {path:'login-e',component:LoginEComponent,canActivate:[NologinEGuard]},
  {path:'registro-e', component:RegistroEComponent},
  {path:'inicio', component:InicioComponent,canActivate:[LoginEGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginEComponent,
   InicioComponent,
    TrabajadorComponent,
    RegistroEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,FormsModule
  ],
  providers: [ServicioempService,LoginEGuard,NologinEGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
