import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TrasnforsCINE';
  peliculas: Array<any> = [{titulo: 'Top Gun Maverick',
                              genero: 'Acción',
                              poster: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6266b88bdf9e7f000810d2bc/common/top-gun-maverick-88825-1650899200622.jpg',
                              anio: '2022'},
                              {titulo: 'Dog: un viaje salvaje',
                              genero: 'Drama',
                              poster: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/627fcb879211ea0009ab3b4f/common/dog-un-viaje-salvaje-89018-1652542384396.jpg',
                              anio: '2022'},
                              {titulo: 'Doctor Strange 2',
                              genero: 'Ficción',
                              poster: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6245a73a9879880008e1de58/common/doctor-strange-2-88474-1648731983361.jpg',
                              anio: '2022'},
                              {titulo: 'Sonic 2',
                              genero: 'Infantil',
                              poster: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6239ddc82cb74a00089d802a/common/sonic-2-88378-1647959529522.jpg',
                              anio: '2022'},]
  
                            
  //accion: string = '';
  ubicacionSala: number = -1;
  sillasPorFila: number = 15;
  asientosFila: Array<number> = []; 
  coordenada: Array<number> = [];
  sala: Array<Array<boolean>> = [[]];
  datosCliente: any = {nombre: '',
                          email: '',
                          telefono: '',
                          tarjeta: ''                
                         }

  ngOnInit() {
      for (let i = 0; i < this.sillasPorFila; i++) {
        this.asientosFila.push(i)
      }
      //this.sala.pop();
  }

  mostrarSala(pos: number){
    if(this.peliculas[pos].sala == undefined){
      this.peliculas[pos].sala = [];

      
      for (let i = 0; i < 7; i++) {
        this.peliculas[pos].sala.push([])
        for (let j = 0; j < 15; j++) {
          this.peliculas[pos].sala[i][j] = false;
        }
      }
      this.peliculas[pos].sala.pop();
    }
    console.log(this.peliculas);
    this.ubicacionSala = pos;
    
  }

  // cambiarAccion(parametro: string) { Opcion con botones
  //   this.accion = parametro
  // }

  cambioEstado(fila:number, columna:number){
    this.peliculas[this.ubicacionSala].sala[fila][columna]=  !this.peliculas[this.ubicacionSala].sala[fila][columna];
    this.coordenada = [fila+1, columna+1, this.ubicacionSala];
     /*
    if(this.accion == 'comprar'){ Opcion con botones
      this.sala[fila][columna] = true;
    }
    if(this.accion == 'cancelar'){
      this.sala[fila][columna] = false;
    }
  */
  }

  modificarNombreCliente(event: Event){
    this.datosCliente.nombre = (<HTMLInputElement>event.target).value;
  }
  modificarEmailCliente(event: Event){
    this.datosCliente.email = (<HTMLInputElement>event.target).value;
  }
  modificarTelefonoCliente(event: Event){
    this.datosCliente.telefono = (<HTMLInputElement>event.target).value;
  }
  modificarNoTarjetaCliente(event: Event){
    this.datosCliente.tarjeta = (<HTMLInputElement>event.target).value;
  }



}