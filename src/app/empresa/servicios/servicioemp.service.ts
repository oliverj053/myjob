import { Injectable } from '@angular/core';
//firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//clase empresa
import { Empresa} from '../modelos/empresa';
@Injectable({
  providedIn: 'root'
})
export class ServicioempService {

  
empresaList: AngularFireList<any>;
//para saber si una empresa fue seleccionada mediante el ID para modificar
selecEmp: Empresa =new Empresa();


  constructor(private firebase: AngularFireDatabase) { }

  getProducts() {
    return this.empresaList = this.firebase.list('empresa');
  }

  insertarEmpresa(empresa:Empresa){
    this.empresaList.push({
      nombreE:empresa.nombreE,
      rfc:empresa.rfc,
      ubicacion:empresa.ubicacion,
      nombreU:empresa.nombreU,
      apellidos:empresa.apellidos,
      correo:empresa.correo,
      contrasenia:empresa.contrasenia
    });
    alert('Tu cuenta se ha registrado correctamente');
  }

  modificarEmpresa(empresa:Empresa){
    this.empresaList.update(empresa.id,{
      nombreE:empresa.nombreE,
      rfc:empresa.rfc,
      ubicacion:empresa.ubicacion,
      nombreU:empresa.nombreU,
      apellidos:empresa.apellidos,
      correo:empresa.correo,
      contrasenia:empresa.contrasenia
    });
  }

  eliminarEmpresa(id:string){
    this.empresaList.remove(id);
  }

}
