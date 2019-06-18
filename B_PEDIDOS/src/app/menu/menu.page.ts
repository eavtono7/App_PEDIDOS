import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { PedidosService ,Pedido, chachas} from "../servicios/pedidos.service";



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

public Pedido: any=[];
public chachas: any=[];

  constructor(public authservice: AuthService, public pedidoService: PedidosService) { }

  OnLogOut(){
    this.authservice.logout();
  }
  
  ngOnInit() {
    this.pedidoService.getPedido().subscribe( peds =>{
    this.Pedido = peds;
    })

    this.pedidoService.getchachas().subscribe( chacs =>{
      this.chachas = chacs;
      })
  }

}