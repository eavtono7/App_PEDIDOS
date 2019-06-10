import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ChachasService, chacha} from "../../servicios/chachas.service";
//import { chachaobj } from "../../modelos/chacha";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public chachaslist:any=[];

  constructor(public router : Router, public chachasservice : ChachasService) { }

  ngOnInit() {
    this.chachasservice.getChachas().subscribe(chachas => {
      this.chachaslist = chachas;
    })
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }

}
