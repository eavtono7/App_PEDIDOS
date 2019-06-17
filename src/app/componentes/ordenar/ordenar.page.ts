import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }
}

// export class Page {
//   public ocultar1: boolean = false;
//   accion1(){
//     this.ocultar1 = !this.ocultar1;
//   }
// }
