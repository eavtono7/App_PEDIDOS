import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
  constructor(public router : Router, private database: AngularFirestore) {
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

  //   getDatosEmpanada (){
  //    return this.database.collection('chachas').snapshotChanges().pipe(map(rooms => {
  //      return rooms.map(a => {
  //        const data = a.payload.doc.data() as chacha;
  //        data.id = a.payload.doc.id;
  //        return data;
  //      })
  //    }))
  //  }
  //  }
  //   getDatosEmpanada(chachas_id : string){
  //     return this.IDBOpenDBRequest.collection('chachas').doc(chacha_id).valueChanges()
  //   }

  ngOnInit() {
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }

}
