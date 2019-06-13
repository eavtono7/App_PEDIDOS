import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-cantidad-orden',
  templateUrl: './cantidad-orden.component.html',
  styleUrls: ['./cantidad-orden.component.scss'],
})
export class CantidadOrdenComponent implements OnInit {
  public precio : number;
  private cantidad_chacha : number;
  private precio_total : number;
  cant : number;
  nombre : string

  constructor(private navparams : NavParams, private modal : ModalController) { }

  ngOnInit() {

    this.precio = this.navparams.get('precio');
    this.nombre = this.navparams.get('nombre');
    this.cantidad_chacha = 1;
    this.precio_total = (this.cantidad_chacha * this.precio) //recuperar de base de datos ????como?

  }
//recuperar cada que cambia por el teclado la cantidad que se pone
  VolverMenu(){
    this.modal.dismiss()

  }

  Aumentar1(){
    //limite de pedir chachas???
      this.cantidad_chacha = this.cantidad_chacha + 1;
      this.precio_total = (this.cantidad_chacha * this.precio);
  }

  Disminuir1(){
    if  (this.cantidad_chacha >> 1 ){
    this.cantidad_chacha = this.cantidad_chacha - 1;
    this.precio_total = (this.cantidad_chacha * this.precio);}
    else{ console.log("no se puede pedir menos de 1 chacha");}
  }

  MandarDetalle(){
    
    console.log(this.nombre);
    console.log(this.cantidad_chacha);
    console.log(this.precio_total);
  }

}
