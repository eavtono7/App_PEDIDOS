import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebaseConfig} from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { CantidadOrdenComponent } from "./componentes/cantidad-orden/cantidad-orden.component";
import { PedidoComponent } from "./componentes/pedido/pedido.component";
import { DetallesComponent } from "./componentes/detalles/detalles.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CantidadOrdenComponent, PedidoComponent, DetallesComponent ],
  entryComponents: [CantidadOrdenComponent, PedidoComponent, DetallesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, FormsModule],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
