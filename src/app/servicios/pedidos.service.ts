import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
declare var google;

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  ubicaciones: Observable<any>;
  listaUbicaciones: AngularFirestoreCollection<any>;
  map: any;

  constructor(private db: AngularFirestore) { 
   
  }

  registrarPedido(nombreMoto: string, apellidoMoto: string, latitudMoto: number, longitudMoto:number) {
    return new Promise((resolve, reject) => {  
      this.db.collection('pedido').doc('b').set({
       // UIDMotoTaxi: this.asignacionMoto(this.transform(this.)),
        nombreMototaxi: nombreMoto,
        apellidoMotoTaxi: apellidoMoto, 
        entregado: false,
        latitud: latitudMoto,
        longitud: longitudMoto,
        
      })
      alert("Pedido realizado");
      
    });
    
  }
  getMotos(){
    
    this.listaUbicaciones = this.db.collection('motoTaxis');

    //Cargando datos de firebase
      this.ubicaciones = this.listaUbicaciones.snapshotChanges().pipe(
        map(actions => 
          actions.map(a => {
            const data = a.payload.doc.data();
            const id =  a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
    this.ubicaciones.subscribe(ubicaciones =>
      {
       console.log('ubicaciones de los conductores: ', ubicaciones); 
       console.log(this.asignacionMoto(ubicaciones));
      })
   return this.ubicaciones;   
}
asignacionMoto(ubicaciones){
  let motosDistancias = [];
  let sucursal = new google.maps.LatLng(-17.3921318,-66.2234896);
  for (let loc of ubicaciones){
    
    if(loc.latitud != null && loc.disponible === false){ 
      let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
      let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, sucursal); 
      console.log('La distancia del conductor '+loc.apellidoMotoTaxi + ' '+ loc.uid +' es '+ total + ' metros');
      motosDistancias.push(total);
    }   
  } 
  var moto = null;
  var min=Math.min.apply(null, motosDistancias);
  for (let loc of ubicaciones){
    
    if(loc.latitud != null && loc.disponible === false){
      let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
      let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, sucursal);
      if( total === min){
        moto = loc.uid;
      }
    }   
  } 
  
  console.log('La menor distancia es '+ min +' de '+ moto);     
  return moto;
} 
transform(ubicaciones) {
  let keyArr: any[] = Object.keys(ubicaciones),
    dataArr = [];
    keyArr.forEach((key: any) => {
      dataArr.push(ubicaciones[key]);
    });
  return dataArr;
}
}
