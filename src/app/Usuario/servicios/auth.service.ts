import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }
registerUser(email: string, pass:string){
  return new Promise((resolve, reject) => {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email,pass).then(
      userData=> resolve (userData),
      err=> reject(err));
  });
}





  logout(){
    return this.afAuth.auth.signOut();
  }
}
