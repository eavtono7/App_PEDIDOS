import { Component, OnInit } from '@angular/core';
import { PedidosService } from "../../servicios/pedidos.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
ubicaciones: Observable<any>;

  constructor(private pedidoService : PedidosService) { 
    this.ubicaciones = pedidoService.getMotos();
    
  }

  ngOnInit() {

  }
  registrandoPedido(){
    this.pedidoService.registrarPedido("hola","hola",1,1).then( res =>{ 
      
    });

  }


}
