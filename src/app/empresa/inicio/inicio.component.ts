import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { VacanteempleoService } from '../servicios/vacanteempleo.service';
import { Vacante } from '../modelos/vacante';

import{ModalComponent} from './modal/modal.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  vacanteList:Vacante [];
  constructor(private router:Router,private vacanteemppleoService: VacanteempleoService) { }
   ngOnInit() {
    this.vacanteemppleoService.getProducts()
    .snapshotChanges() //meto para obtener todos los cambios de la base de datos
    .subscribe(item=>{ //nos trae los datos guardados en la bd
      this.vacanteList=[];
      item.forEach(element=>{
       let x= element.payload.toJSON();
        x["id"]=element.key;
        this.vacanteList.push(x as Vacante);
      });
    });

    this.limpiarFormulario();
  
  }


  onEdit(vacante: Vacante){
    this.vacanteemppleoService.vacantesel=Object.assign({},vacante);
 
    
    }
    
    onDelete(id: string){
    if(confirm('Are you sure you want to delete it?')){
      this.vacanteemppleoService.eliminar(id);
    }
  }

   cerrrarSesion(){
    localStorage.removeItem("email");
    this.router.navigate(['/login-e']);
  }

onSubmit(vacanteForm: NgForm) {
  if (vacanteForm.value.id == null)
    this.vacanteemppleoService.insertar(vacanteForm.value);
  else
    this.vacanteemppleoService.modificar(vacanteForm.value);

  this.limpiarFormulario(vacanteForm);
}

limpiarFormulario(vacanteForm?: NgForm) {
  if (vacanteForm != null) {
    vacanteForm.reset();
    this.vacanteemppleoService.vacantesel = new Vacante();
  }
}
}
