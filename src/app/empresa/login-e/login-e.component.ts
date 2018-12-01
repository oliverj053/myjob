import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-e',
  templateUrl: './login-e.component.html',
  styleUrls: ['./login-e.component.css']
})
export class LoginEComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  login(form:NgForm){
      console.log(form.value);
  }
}
