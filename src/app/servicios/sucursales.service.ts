import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';






@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private db : AngularFirestore) { }

  public getSucursales()
  {
    return this.db.collection('sucursales').snapshotChanges()
   

  }
}
