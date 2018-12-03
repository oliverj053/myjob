import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginEComponent } from './empresa/login-e/login-e.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './empresa/registro/registro.component';

//Firebase
import {AngularFireModule}from 'angularfire2'; 
import {AngularFireDatabaseModule}from 'angularfire2/database';
import{AngularFireAuthModule}from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { QuienesComponent } from './quienes/quienes.component';
import { HomeComponent } from './home/home.component';

import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './empresa/inicio/inicio.component';
//servicios
import{ServicioempService} from'./empresa/servicios/servicioemp.service';

//guards
import{LoginEGuard} from'./empresa/login-e.guard';
import{NologinEGuard} from'./empresa/nologin-e.guard';
import { ModalComponent } from './empresa/inicio/modal/modal.component';
////////////////////

//arreglo que va a contener los enlaces a mostrar
const appRoutes:Routes=[
 // {path:'',component:AppComponent},
  {path:'login-e',component:LoginEComponent,canActivate:[NologinEGuard]},
  {path:'registro', component:RegistroComponent},
  {path:'inicio', component:InicioComponent,canActivate:[LoginEGuard]},
  {path:'quienes', component:QuienesComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginEComponent,
    RegistroComponent,
    TrabajadorComponent,
    QuienesComponent,
    HomeComponent,
    InicioComponent,
    ModalComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,AngularFireAuthModule,FormsModule,AlertModule.forRoot(),
    NgbModule
  ],
  providers: [ServicioempService,LoginEGuard,NologinEGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
