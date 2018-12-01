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
import { LoginUComponent } from './Usuario/login-u/login-u.component';
import { RegistroUsComponent } from './Usuario/registro-us/registro-us.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivadoComponent } from './privado/privado.component';
import { NotFoundComponent } from './not-found/not-found.component'

//arreglo que va a contener los enlaces a mostrar
const appRoutes:Routes=[
 // {path:'',component:AppComponent},
  {path:'login-e',component:LoginEComponent},
  {path:'registro', component:RegistroComponent},
  {path:'login-u', component:LoginUComponent},
  {path:'registro-us', component:RegistroUsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginEComponent,
    RegistroComponent,
    LoginUComponent, RegistroUsComponent, HomeComponent, NavbarComponent, PrivadoComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,AngularFireAuthModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
