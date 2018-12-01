import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Firebase
import {AngularFireModule}from 'angularfire2'; 
import {AngularFireDatabaseModule}from 'angularfire2/database';

import {environment} from '../environments/environment';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
////
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginEComponent } from './empresa/login-e/login-e.component';
import { InicioComponent } from './empresa/inicio/inicio.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//arreglo que va a contener los enlaces a mostrar
const appRoutes:Routes=[
 // {path:'',component:AppComponent},
  {path:'login-e',component:LoginEComponent},
  
  {path:'inicio', component:InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginEComponent,
   InicioComponent,
    TrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
