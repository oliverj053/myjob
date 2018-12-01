import { Component, OnInit } from '@angular/core';
//servicio
import { ServicioempService } from '../servicios/servicioemp.service';
//
import { NgForm } from '@angular/forms';
//clase empresa
import {Empresa  } from '../modelos/empresa';
@Component({
  selector: 'app-registro-e',
  templateUrl: './registro-e.component.html',
  styleUrls: ['./registro-e.component.css']
})
export class RegistroEComponent implements OnInit {

  constructor(private servicioempService: ServicioempService) { }

  ngOnInit() {
    this.servicioempService.getProducts();
    this.limpiarFormulario();
  }

  onSubmit(productForm: NgForm){
    this.servicioempService.insertarEmpresa(productForm.value);
    this.limpiarFormulario(productForm);
  }

  limpiarFormulario(productForm?: NgForm){
    if(productForm!=null){
      productForm.reset();
      this.servicioempService.selecEmp=new Empresa();
    }
  }

}
