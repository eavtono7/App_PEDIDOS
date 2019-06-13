import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'

@Component({
  selector: 'app-cantidad-orden',
  templateUrl: './cantidad-orden.component.html',
  styleUrls: ['./cantidad-orden.component.scss'],
})
export class CantidadOrdenComponent implements OnInit {

  constructor(private navparams : NavParams, private modal : ModalController) { }

  ngOnInit() {}

  VolverMenu(){
    this.modal.dismiss()

  }

}
