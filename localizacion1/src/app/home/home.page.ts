import { Component } from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation/ngx";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude:number;
  longitude:number;

  constructor(private geolocation: Geolocation) {

  }
getLocation(){
  this.geolocation.getCurrentPosition().then((resp)=>{
    this.latitude=resp.coords.latitude;
    this.longitude=resp.coords.longitude;
  }).catch((error)=>{
    console.log('Error getting location', error);
  });
}
}
