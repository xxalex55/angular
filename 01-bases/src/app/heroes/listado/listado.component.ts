import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  public heroes: string[] = ['Thorn', 'Iron', 'Spiderman'];
  heroeBorrado = "";
 

  borrarHeroe() {

    console.log("Borrando....");
    let aux = this.heroes.shift();
    this.heroeBorrado = aux || "";
    console.log("Se ha borrado el heroe: " + aux);
    return aux;
  }
}

