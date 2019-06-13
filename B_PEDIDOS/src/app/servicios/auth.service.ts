import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { stringify } from '@angular/core/src/render3/util';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }
  login(telefono: string, applicationVerifier: firebase.auth.ApplicationVerifier){
    this.AFauth.auth.signInWithPhoneNumber(telefono, applicationVerifier).then(res=>{
      console.log(res)
    }).catch(error=> console.log('error : '+ error))

  }
}
