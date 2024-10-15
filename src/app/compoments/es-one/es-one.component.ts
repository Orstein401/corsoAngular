import { Component } from '@angular/core';

@Component({
  selector: 'app-es-one',
  standalone: true,
  imports: [],
  templateUrl: './es-one.component.html',
  styleUrl: './es-one.component.css'
})
export class EsOneComponent {
 nome:string="Alessandro"
 copgnome:string="Romagnoli"
 eta:number=18;
 hobby:string="Body building, suonare la chittara, scalare/escursioni in montagna"
}
