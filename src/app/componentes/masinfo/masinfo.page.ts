import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.page.html',
  styleUrls: ['./masinfo.page.scss'],
})
export class MasinfoPage implements OnInit {

  constructor(public nativ:NavController,public navParams: NavParams) { }

  ngOnInit() {
  }

}
