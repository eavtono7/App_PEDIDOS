import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore"

@Injectable({
  providedIn: 'root'
})
export class ChachasService {

  constructor(private db : AngularFirestore) { }

  getChachaRooms(){

    return this.db.collection('chachaRooms').snapshotChanges()
  }
}
