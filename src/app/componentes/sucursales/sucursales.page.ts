import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage  {
 
  listaSuc=[];

  constructor(public router: Router) {
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
  
  
   MasInformacion()
   {
     this.router.navigate(['/masinfo']);
    }

  ngOnInit() 
  {
   }

  
}
