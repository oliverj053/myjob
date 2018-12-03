import { Injectable } from '@angular/core';
//firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//clase vacante
import { Vacante} from '../modelos/vacante';
@Injectable({
  providedIn: 'root'
})
export class VacanteempleoService {
   vacanteList:  AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
//
vacantesel: Vacante =new Vacante();

  getProducts() {
    return this.vacanteList= this.firebase.list('vacantes');
  }

  insertar(vacante:Vacante){
    this.vacanteList.push({
      nombreEmpresa:vacante.nombreEmpresa
   
    });
    alert('Vacante Registrado correctamente');
  }

  modificar(vacante:Vacante){
    this.vacanteList.update(vacante.id,{
      nombreEmpresa:vacante.nombreEmpresa
      
    });
  }

  eliminar(id:string){
    this.vacanteList.remove(id);
  }
}
