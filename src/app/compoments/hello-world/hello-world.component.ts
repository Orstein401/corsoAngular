import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
 message:string="hello world";
 name:string="";
 veri:boolean=true;
 vis:boolean=true
 npaese=""
 prodotti=[
  {prodotto:"coca", prezzo:2.99},
  {prodotto:"birra", prezzo:3.99},
  {prodotto:"corenetti", prezzo:4.99},
  {prodotto:"pizza", prezzo:2.99},
  {prodotto:"pollo", prezzo:5.99},
  {prodotto:"pane", prezzo:1.99},

 ]
 paesi=["Italia", "Algeria", "California","Cina"]
 persone=[
  {nome:"luca",eta:40},
  {nome:"Alesso",eta:2},
  {nome:"Marcolino",eta:84},
  {nome:"Giovanni",eta:10},
 ]
 time(){
  setTimeout(()=>{
    this.vis=false;
  }, 1000)
 }
 ngOnInit(){
  this.time()
 }

}
