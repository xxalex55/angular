import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iron man';
    edad: number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerFuncion():string{
        return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre(){
        if(this.nombre == "Spiderman"){
            this.nombre = "Iron man";
        }
        else {this.nombre = "Spiderman";}
        
    }

    cambiarEdad( edadActualizada:number){
        this.edad = edadActualizada;
    }
}