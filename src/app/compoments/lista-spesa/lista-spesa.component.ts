import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-spesa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-spesa.component.html',
  styleUrl: './lista-spesa.component.css'
})
export class ListaSpesaComponent {
 @Input()  list!: {nome:string, prezzo:string};
 @Output()! messaggioinviato:EventEmitter<string>=new EventEmitter<string>()
 InvioMessaggio(){
  const testo="Non ci credevi e invece ce l'hai fatta"
  this.messaggioinviato.emit(testo);
 }
}
