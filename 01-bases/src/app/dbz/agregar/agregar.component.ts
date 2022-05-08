import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input("nuevo")
  nuevoPersonaje: Personaje = {
    nombre:"",
    poder:11
  };

  constructor(private dbzService:DbzService){}

  agregar(): void{
    if(this.nuevoPersonaje.nombre.trim().length == 0){
  return;
  }
  this.dbzService.agregarPersonajes(this.nuevoPersonaje)
  }
}
