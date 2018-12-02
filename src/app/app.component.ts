import { Component, OnInit } from '@angular/core';

import { AuthService } from './Usuario/servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
constructor(
  public authservice: AuthService,
){

  
}

ngOnInit(){
  this.authservice.getAuth().subscribe(auth =>{
    if(auth){
      this.isLogin=true;
      this.nombreUsuario= auth.displayName;
      this.emailUsuario= auth.email;
    }else{
      this.isLogin=false;
    }
  });
}

onClickLogout(){
  this.authservice.logout();
}

  title = 'myjob';
}
