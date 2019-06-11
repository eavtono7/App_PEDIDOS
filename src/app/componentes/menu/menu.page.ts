import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {ModalController} from "@ionic/angular";
import {ChachaComponent} from "../chacha/chacha.component";

export interface chacha {
  descripcion : string
  nombre : string
  img : string
  precio : number
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  empanadas: Observable<any>;
  listaEmpanadas: AngularFirestoreCollection<any>;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public router : Router, private database: AngularFirestore, 
    private modal : ModalController) {
    this.getEmpanadas();
   }

   getEmpanadas (){
     this.listaEmpanadas = this.database.collection('chachas');

     this.empanadas = this.listaEmpanadas.snapshotChanges().pipe(
       map(actions => 
        actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, ...data};
       })
      )
     ); 
   }

  ngOnInit() {
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }

  openChacha(chacha){

    this.modal.create({
      component : ChachaComponent,
      componentProps : {
        chacha: chacha
      }
    }).then((modal) => modal.present())

  }

}
