import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import{ServicioempService} from '../servicios/servicioemp.service';
import{Empresa} from '../modelos/empresa';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import { Command } from 'selenium-webdriver';
@Component({
  selector: 'app-login-e',
  templateUrl: './login-e.component.html',
  styleUrls: ['./login-e.component.css']
})
export class LoginEComponent implements OnInit {

  
  empresaList:Empresa[];
  resultado:any[];
  constructor(private servicioempService:ServicioempService,private router:Router) { }


  ngOnInit() {
    this.servicioempService.getProducts().
    valueChanges().subscribe(
      empresa=>{
        this.empresaList=empresa;
      }
    );
  }
  
  login(form:NgForm){
    //console.log(form.value);
   //console.log(form.value);
   //console.log(this.empresaList);
    this.resultado=this.empresaList.filter(empresa=>empresa.correo==form.value.correo &&empresa.contrasenia==form.value.contrasenia);
    if(this.resultado[0]==null){
    alert('Ingresa todos tus datos');}
    else{
      console.log(this.resultado[0]);
      this.router.navigate(['/inicio']);
      localStorage.setItem('email',form.value.correo);
    }
    
   
}


}
