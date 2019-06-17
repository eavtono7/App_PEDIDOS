import { Component,OnInit } from '@angular/core';
import{TaskI} from "../models/task.interface";
import {TodoService} from "../services/todo.service";
import {Geolocation} from "@ionic-native/geolocation/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
todos:TaskI[];
latitude:number;
longitude:number;
  constructor(private todoService:TodoService,private geolocation: Geolocation) {}

  ngOnInit(){
this.todoService.getTodos().subscribe(res => this.todos = res);
}
getLocation(){
  this.geolocation.getCurrentPosition().then((resp)=>{
    this.latitude=resp.coords.latitude;
    this.longitude=resp.coords.longitude;
  }).catch((error)=>{
    console.log('Error getting location', error);
  });
}
}

