import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-somma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './somma.component.html',
  styleUrl: './somma.component.css'
})
export class SommaComponent {
 num1:string="";
 num2:number=0;
 tot:string="";
 somma(){
  this.tot=this.num1+this.num2
 }
}
