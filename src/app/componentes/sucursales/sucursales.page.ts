import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MasinfoPage } from '../masinfo/masinfo.page';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
  ListaSucursales= [];

  constructor(public nav: NavController) {

    this.ListaSucursales= [
      {
        'title': 'CasaMatriz',
        'icon': 'pin',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Sucursal 1',
        'icon': 'pin',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Sucursal Calacoto',
        'icon': 'pin',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Sucursal Zona Sur',
        'icon': 'pin',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Sucursal Obrajes',
        'icon': 'pin',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Sucursal Centro',
        'icon': 'pin',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      }
    ]
   }
  
  openNavDetailsPage(item) {
    this.nav.push(MasinfoPage, { item: item });
  }


  ngOnInit() {
  }

}
