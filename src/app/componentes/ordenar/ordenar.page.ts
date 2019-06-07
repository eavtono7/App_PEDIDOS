import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
// verificar si la direccion esta bien 
import { ChatsService } from "../../servicios/Chats.service";
import { AuthService } from "../../servicios/auth.service";



@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements  OnInit {
  
  name:string;
  private subscription;

  constructor(public router : Router ,
    public authservice : AuthService, 
    public chatservice : ChatsService,  
    ) { }
    ngOnInit(){
      this.chatservice.getDetallePedido().subscribe(chats =>{
        console.log(chats)
      })

    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    
    OnSubmitOrdenar()
    {
      this.authservice.ordenar(this.name);
    }   
  VolverHome(){
    this.router.navigate(['/home']);
  }
}
