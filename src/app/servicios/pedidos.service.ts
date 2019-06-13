import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  detallesLista = []
  detalle : {
    cantidad_detalle : number,
    nombre_chacha : string,
    precio_total: number,
  }

  constructor() { }
}
