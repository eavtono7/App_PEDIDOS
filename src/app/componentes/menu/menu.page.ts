import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
<<<<<<< HEAD
import { ChachasService} from "../../servicios/chachas.service";
import { ModalController } from '@ionic/angular';

=======
import { ChachasService, chacha} from "../../servicios/chachas.service";
>>>>>>> parent of c93e7d38... agregando models


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  public chachas :any = [];

  constructor(public router : Router, public chachasservice : ChachasService) { }

  ngOnInit() {
    this.chachasservice.getChachas().subscribe(chachas => {

      this.chachas = chachas;
      
    })
  }
  VolverHome(){
    this.router.navigate(['/home']);
   }
}