import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { PedidosService } from "../servicios/pedidos.service";

interface pedido{
  id:string,
  Estado: string,
  Referencia: string,
  Telefono: string,
  Total: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

public pedido: any=[];

  constructor(public authservice: AuthService, public pedidoService: PedidosService) { }

  OnLogOut(){
    this.authservice.logout();
  }
  
  ngOnInit() {
    this.pedidoService.getPedido().subscribe( ped =>{
      ped.map( ped =>{
        const data : pedido=ped.payload.doc.data() as pedido;
        data.id = ped.payload.doc.id;

        this.pedido.push(data);

      })
    })
  }

}
//minuto 19:20 | Ionic 4 : como Leer datos desde Firebase, como crear modal, App chat parte 3