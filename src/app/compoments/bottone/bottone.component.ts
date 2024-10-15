import { Component } from '@angular/core';

@Component({
  selector: 'app-bottone',
  standalone: true,
  imports: [],
  templateUrl: './bottone.component.html',
  styleUrl: './bottone.component.css'
})
export class BottoneComponent {
 count:number=0;
 incr(){
    this.count++
 }
 decr(){
  this.count--
}
}
