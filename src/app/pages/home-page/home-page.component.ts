import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaSpesaComponent } from '../../compoments/lista-spesa/lista-spesa.component';
import { UserComponent } from '../../compoments/user/user.component';
import { Router, RouterModule } from '@angular/router';

 
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule, CommonModule,ListaSpesaComponent,
    UserComponent,
  RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  prodSelezionato={
    nome:"",
    prezzo:"",
 
  }
  
  constructor(private route: Router){}
  goToUser(){
    this.route.navigate(["/somma"])
  }
  
  spesa=[
    {nome:"coca", prezzo:"2.89"},
    {nome:"birra", prezzo:"3.89"},
    {nome:"corenetti", prezzo:"4.89"},
    {nome:"pizza", prezzo:"2.89"},
    {nome:"pollo", prezzo:"5.89"},
    {nome:"pane", prezzo:"1.89"},
  
   ]
   messaggioRicevuto:string="";
   selectProduct(prod:any){
     this.prodSelezionato=prod
   }
   riceviMessaggio(messaggio:any){
    this.messaggioRicevuto=messaggio;
   }
}
