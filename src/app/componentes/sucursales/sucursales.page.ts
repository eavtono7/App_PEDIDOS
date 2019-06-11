import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalesService,sucursal} from 'src/app/servicios/sucursales.service';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';
import { map } from "rxjs/operators";
import {ModalController} from '@ionic/angular';
import { from } from 'rxjs';



@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
 
  public listaSuc: any =[];

  constructor(public router: Router, public SucursalesService:SucursalesService) {}
  
  
   MasInformacion()
   {
     this.router.navigate(['/masinfo']);
    }

  ngOnInit() 
  {
    this.SucursalesService.getSucursales().subscribe(sucursales =>{
    this.listaSuc = sucursales;
      
    })
  }
    volverHome ()
    {
      this.router.navigate(['/home']);
    }
   }
