import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './compoments/hello-world/hello-world.component';
import { EsOneComponent } from './compoments/es-one/es-one.component';
import { BottoneComponent } from './compoments/bottone/bottone.component';
import { SommaComponent } from './compoments/somma/somma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent,EsOneComponent, BottoneComponent,SommaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corsoAngular';
  ngOnInit(){
    alert("Benvenuto")
  }
 // img= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elbuild.it%2Ftecnologie%2Fangular.html&psig=AOvVaw1yEmg6AvOktW2RXgctuodp&ust=1729075944751000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiCr4r9m5CJAxVa7gIHHfEqBfkQjRx6BAgAEBk';
}

