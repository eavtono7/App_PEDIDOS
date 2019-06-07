import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor( private db : AngularFirestore) { }

  getDetallePedido(){
    return this.db.collection('DetallePedido').snapshotChanges()
  }


}
