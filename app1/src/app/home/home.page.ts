import { Component, AfterContentInit, OnInit, ViewChild } from '@angular/core';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterContentInit {
map;
@ViewChild('mapElement') mapElement ;
  constructor() {

  }
ngOnInit(): void {
  this.map - new google.maps.Map()
}
}
