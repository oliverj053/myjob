import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//firebase
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';
  import { from,observable} from 'rxjs';
import { FirebaseDatabase } from 'angularfire2';

//////
import{RegistroComponent} from '../registro/registro.component'

@Component({
  selector: 'app-login-e',
  templateUrl: './login-e.component.html',
  styleUrls: ['./login-e.component.css']
})
export class LoginEComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  iniciarSesion(){
    
  }

}
