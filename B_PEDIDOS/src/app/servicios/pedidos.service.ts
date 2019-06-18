import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
export interface Pedido{
  id:string
  Estado: string
  Referencia: string
  Telefono: string
  Total: string
}
export interface chachas{
  id:string
  descripcion_chacha: string
  img: string
  nombre_chacha: string
}
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private db: AngularFirestore) { }

  getPedido(){
    return this.db.collection('Pedido').snapshotChanges().pipe(map(pedido =>{
      return pedido.map(a =>{
        const data =a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  getchachas(){
    return this.db.collection('chachas').snapshotChanges().pipe(map(chac =>{
      return chac.map(b =>{
        const data =b.payload.doc.data() as chachas;
        data.id = b.payload.doc.id;
        return data;
      })
    }))
  }
}
