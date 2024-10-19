import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gestione-utente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gestione-utente.component.html',
  styleUrl: './gestione-utente.component.css'
})
export class GestioneUtenteComponent {
ruolo:string="";
}
