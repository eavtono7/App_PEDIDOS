import { Component } from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
lat:any;
lng:any;
  constructor(public navCtrl:NavController, public geo:Geolocation ) {

  }
ionViewDidLoad(){
  this.geo.getCurrentPosition(this.lat,this.lng).then(pos =>{
this.lat = pos.coords.latitude;
this.lng = pos.coords.longitude;
  }).catch(err => console.log(err));
}
}
