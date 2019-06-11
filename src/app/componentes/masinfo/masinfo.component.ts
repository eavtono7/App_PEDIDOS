import { Component, OnInit } from '@angular/core';
import {NavParams} from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.scss'],
})
export class MasinfoComponent implements OnInit {
  
  public nombresuc: string;
  public direccionsuc: string;
  public telefonosuc: string;
  public ubicacion : string;

  constructor( private navparams: NavParams, public router:Router) { }

  ngOnInit() {
    this.navparams.get('nombresuc')
    this.navparams.get('direccionsuc')
    this.navparams.get('telefonosuc')
    this.navparams.get('ubicacion')
  }

  Cerrar(){
    
    this.router.navigate(['/sucursales']);
  }

}
