import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ChachasService} from "../../servicios/chachas.service";
import { ModalController } from '@ionic/angular';



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