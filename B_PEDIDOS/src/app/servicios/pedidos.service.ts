import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private db: AngularFirestore) { }

  getPedido(){
    return this.db.collection('Pedido').snapshotChanges()
  }
}
