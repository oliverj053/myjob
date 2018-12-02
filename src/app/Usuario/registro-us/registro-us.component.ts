import { Component, OnInit } from '@angular/core';
import {AuthService} from "../servicios/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro-us',
  templateUrl: './registro-us.component.html',
  styleUrls: ['./registro-us.component.css']
})
export class RegistroUsComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
   public authService:AuthService,
   public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password).then((res) => {
     this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
