import { Component, OnInit } from '@angular/core';
import { PedidosService, Pedido, chachas } from "../servicios/pedidos.service";


@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
})
export class EnvioPage implements OnInit {
public Pedido: any =[];
  constructor(public pedidoservice: PedidosService) { }

  ngOnInit() {
    this.pedidoservice.getPedido().subscribe( peds =>{
      this.Pedido = peds;
    })
  }
}