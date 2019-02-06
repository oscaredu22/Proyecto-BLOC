import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';
import {RespuestaTotal} from '../objetosBaseDatos/respuestaTotal';
import {EnvioDatos} from '../objetosBaseDatos/envioDatos';
import {objetoArticulo} from '../objetosBaseDatos/objetoArticulo';
import {objetoArticuloGet} from '../objetosBaseDatos/objetoArticulo';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  resultado: Array<RespuestaTotal>;
  resultadoArticulo: Array<objetoArticuloGet>;
	enviarDatos = new EnvioDatos();
	modificarDatos = new EnvioDatos();
  id: number = 1;
  
  constructor(private servicioDatosEjemplo: ServicioService) { }

  ngOnInit() {
      this.getResultado();
      this.getResultadoArticulo();
  }

  getResultado(){
  	this.servicioDatosEjemplo.getRespuesta().subscribe(
  		data => {
  			this.resultado = data;
  		},
  		err => {
  			console.log(err);
  		}
  	);
  	}

    getResultadoArticulo(){
    this.servicioDatosEjemplo.getRespuestaArticulo().subscribe(
      data => {
        this.resultadoArticulo = data;
      },
      err => {
        console.log(err);
      }
    );
    }

}
