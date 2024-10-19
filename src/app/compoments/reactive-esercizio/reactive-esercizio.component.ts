import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-esercizio',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-esercizio.component.html',
  styleUrl: './reactive-esercizio.component.css'
})
export class ReactiveEsercizioComponent {
  myForm= new FormGroup({
    numeri: new FormArray([],[Validators.required]),
    nome:new FormControl("",[Validators.required, Validators.minLength(3)]), 
    email:new FormControl("",[Validators.required, Validators.email]), 
    password:new FormControl("",[Validators.required, Validators.minLength(6)])
  })
  get numero(){
        return this.myForm.get('numeri') as FormArray
  }
  
  addNUmero(){
    
  }
sendData(){
  if(this.myForm.valid){
    console.log(this.myForm.value)
  }else{
    console.error("errore nel codice")
  }
}
}
