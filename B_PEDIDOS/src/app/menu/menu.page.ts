import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }
  OnLogOut(){
    this.authservice.logout();
  }
}
