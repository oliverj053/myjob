import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//firebase
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';
  import { from,observable} from 'rxjs';
import { FirebaseDatabase } from 'angularfire2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

  my_empresa:any;

  constructor(public afDB: AngularFireDatabase) {
    this.getEmpresa().valueChanges().subscribe(
      empresa=>{
        this.my_empresa=empresa;
      }
    );
   }


  empresaA={id:null,nombreEmpresa:null,ubicacion:null,nombreUsuario:null, apellidos:null,correo:null,contrasenia:null};
  
    getEmpresa(){
      return this.afDB.list('/empresa');
    }
  crearCuenta(){
    this.empresaA.id=Date.now();
    this.afDB.database.ref("empresa/"+this.empresaA.id).set(this.empresaA);
    alert('Datos agregados');
    //this.empresaA={id:null,nombreEmpresa:null,ubicacion:null,nombreUsuario:null, apellidos:null,correo:null,contrasenia:null};
  
  }
 

}
