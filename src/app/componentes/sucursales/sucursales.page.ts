import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MasinfoPage } from '../masinfo/masinfo.page';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage  {
 
  listaSuc=[];

  constructor(public navCtrl: NavController) {
    this.listaSuc= [
      {
        'title': 'Casa Matriz',
        'icon': 'pin',
        'color': "#E63135"
  
      },
      {
        'title': 'Sucursal 1- Centro',
        'icon': 'pin',
        'color': "#E63135"
      },
      
      {
        'title': 'Sucursal 2- Obrajes',
        'icon': 'pin',
        'color': "#E63135"
      },
      {
        'title': 'Sucursal 3- Calacoto',
        'icon': 'pin',
        'color': "#E63135"
      },
      {
        'title': 'Sucursal 4- Multicine',
        'icon': 'pin',
        'color': "#E63135"
      }
    ]
   }
  
  


  ngOnInit() {
  }

}
