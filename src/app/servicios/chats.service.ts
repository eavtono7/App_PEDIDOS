import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor( private db : AngularFirestore) { }

  getChatRooms(){
    return this.db.collection('Empanadas').snapshotChanges()
  }


}
