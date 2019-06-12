import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from "@angular/router";
<<<<<<< HEAD
//import { sucursalobj } from "../../modelos/sucursal";
=======
>>>>>>> parent of c93e7d38... agregando models

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {

  constructor( public router : Router

  ) { }

  ngOnInit() {
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }
}
