import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
 utente={nome:"", cognome:"", email:"",password:""}
 onSubmit(form: NgForm){
  if (form.valid){
    console.log(this.utente)
  }else{
    console.log("form non valido")
  }
   
 }
}
