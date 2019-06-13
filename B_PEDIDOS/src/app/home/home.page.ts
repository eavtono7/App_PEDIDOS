import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  telefono: string; 
  applicationVerifier: firebase.auth.ApplicationVerifier;
  constructor(private authService: AuthService) {}
  ngOnInit(){

  }
  OnsubmitLogIn(){
    this.authService.login(this.telefono,this.applicationVerifier);
  }
}
