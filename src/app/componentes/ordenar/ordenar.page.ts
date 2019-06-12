import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
// verificar si la direccion esta bien 
import { ChatsService, DetalleChacha } from "../../servicios/Chats.service";




@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements OnInit  {
  
  public chachaslist:any=[];

  constructor(public router : Router, public chatsservice : ChatsService) { }

  ngOnInit() {
    this.chatsservice.getChats().subscribe(DetalleTipoEmpanada => {
      this.chachaslist = DetalleTipoEmpanada;
    })
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }

}
  
