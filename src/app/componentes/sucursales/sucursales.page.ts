import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalesService} from 'src/app/servicios/sucursales.service';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';
import { map } from "rxjs/operators";

interface sucursal{
  id : string
  direccion_sucursal: string
  ubicacion: any 
  telefono_sucursal: string
  nombre_sucursal: string
  }

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
      sucursales.map(suc => {
        const data : sucursal = suc.payload.doc.data() as sucursal;
        data.id=suc.payload.doc.id;
        this.listaSuc.push(data);
        
       /* const data: sucursal = suc.payload.doc.data() as sucursal;
      data.id = suc.payload.doc.id;
      this.listaSuc.push(data);*/
    })
      
    })
  }
    volverHome ()
    {
      this.router.navigate(['/home']);
    }
   }
