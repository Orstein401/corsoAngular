import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-esercizio',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './esercizio.component.html',
  styleUrl: './esercizio.component.css'
})
export class EsercizioComponent {
reggi={
  username:"", password:"", email:""
}
verifica(form: NgForm){
  if (form.valid){
    console.log(this.reggi)
  }else{
    console.log("form non valido")
  }
}  

}
