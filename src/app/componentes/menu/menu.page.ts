import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ChachasService, chacha } from "../../servicios/chachas.service";
import { ModalController } from '@ionic/angular';
import {ChachaComponent} from "../chacha/chacha.component"


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public chachas :any = [];

  constructor(public router : Router, public chachasservice : ChachasService,
    private modal : ModalController) { }

  ngOnInit() {
    this.chachasservice.getChachas().subscribe(chachas => {

      this.chachas = chachas;
      
    })
  }
  openMenu(chacha){
    this.modal.create({
      component: ChachaComponent,
      componentProps : {
        nombre_chacha : chacha.nombre_chacha
      }
    }).then ( (modal) => modal.present())
  }

  VolverHome(){
    this.router.navigate(['/home']);
   }

}
