import { Component, OnInit } from '@angular/core';
import {NavParams} from "@ionic/angular"

@Component({
  selector: 'app-chacha',
  templateUrl: './chacha.component.html',
  styleUrls: ['./chacha.component.scss'],
})
export class ChachaComponent implements OnInit {

  public chacha : any;
  constructor( private navparams : NavParams) { }

  ngOnInit() {

    this.chacha = this.navparams.get('chacha')
  }

}
