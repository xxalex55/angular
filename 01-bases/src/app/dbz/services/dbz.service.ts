import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
 export class DbzService{

    cell:Personaje = {
        nombre:'Cell',
        poder: 18000
      }
    
      buu:Personaje = {
        nombre:'Buu',
        poder: 20000,
      }
      
      nuevo:Personaje = {
        nombre:'',
        poder: 0
      }
    
      _personajes:Personaje[] = [this.buu,this.cell];
      
      get personajes():Personaje[]{
          return [...this._personajes];
      }
    constructor(){
    }
    agregarPersonajes(  personaje:Personaje){
        this._personajes.push(personaje);
    }
 }