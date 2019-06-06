import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
// verificar si la direccion esta bien 
import { ChatsService } from "src/app/servicios/Chats.service";
import { AuthService } from "src/app/servicios/auth.service";



@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})


export class OrdenarPage implements OnInit {

  constructor(public router : Router ,
    public authservice : AuthService, 
    public chatservice : ChatsService,  
    ) { }
    
  
    ngOnInit(){
      this.chatservice.getChatRooms().subscribe( chats => {
        
        this.Empanadas = chats;
        
      })
    }
 

  VolverHome(){
    this.router.navigate(['/home']);
  }
}
