import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public empanadas: string[];
  constructor(public router : Router) {
    this.empanadas = [
      'Pollo',
      'Res',
      'Mixto (pollo-res)',
      'Mariscos',
      'Fricase',
      'Charque',
      'Jamon y Queso',
      'Pizza',
      'Choclo con Queso',
      'Queso',
      'Dulce de Leche'
    ];
   }

  ngOnInit() {
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }

}
