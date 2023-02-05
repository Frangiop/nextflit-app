import { Component } from '@angular/core';
import { ComedyInteface } from '../models/comedy-inteface'; // interface listo

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  public comedyFilms :string[] = ["comedia" , "terror", "accion" , "aventura" ,"policial"]; 
 
  public info: ComedyInteface
 
constructor () {
  this.info = { // llamo a la variable que está afuera "info" le meto this. Y CREAMOS NUESTRO OBJETO DE TIPO "ANY"
    title :"rick and morty ",
     peli :{
          tipo: "comedia",
          image : {
                 src:"../../fotos/rickandmrty.webp",
                 alt: "rickandmorty",  // si pones el raton encima aparece este nombre 
          }
     },
    
  }   

}
ngOnInit(): void {
 }

 }