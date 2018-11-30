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

import { AlertModule } from 'ngx-bootstrap';

//arreglo que va a contener los enlaces a mostrar
const appRoutes:Routes=[
 // {path:'',component:AppComponent},
  {path:'login-e',component:LoginEComponent},
  {path:'registro', component:RegistroComponent},
  {path:'quienes', component:QuienesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginEComponent,
    RegistroComponent,
    TrabajadorComponent,
    QuienesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,AngularFireAuthModule,FormsModule,AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
