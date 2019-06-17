import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth.service";
import{Geolocation} from "@ionic-native/geolocation";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
public email:any;
public password:string;

  constructor(private auth: AuthService, public geo: Geolocation) { }

  ngOnInit() {
  }
onSubmitRegistre(){
this.auth.register(this.email,this.password).then(auth =>{
  console.log(auth)
}).catch(err => console.log(err))
}
ionViewDidLoad(){
  this.geo.getCurrentPosition(this.email,this.password).then(pos =>{
this.email=pos.coords.latitud;
this.password=pos.coords.longitude;
  }).catch(err => console.log(err));
}
}
