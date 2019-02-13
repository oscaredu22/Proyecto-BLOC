import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
import {RespuestaTotal} from '../objetosBaseDatos/respuestaTotal';
import {objetoArticulo} from '../objetosBaseDatos/objetoArticulo';
import {objetoArticuloGet} from '../objetosBaseDatos/objetoArticulo';
import {objetoLogin} from '../objetosBaseDatos/objetoLogin';
import {objetoLoginGet} from '../objetosBaseDatos/objetoLogin';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

	resultado: Array<RespuestaTotal>;
	resultadoArticulo: Array<objetoArticuloGet>;
	enviarDatos = new objetoLogin();
	modificarDatos = new objetoLogin();
	id: number = 1;

  constructor(private router:Router, private servicioDatosEjemplo: ServicioService) { }

  ngOnInit() {
		this.getResultado();
  	this.getResultadoId();
    var productoId = localStorage.getItem("idProducto");
    console.log(productoId);
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

  getResultadoId(){
    var productoId = localStorage.getItem("idProducto");
  	this.servicioDatosEjemplo.getPersonaId(parseInt(productoId)).subscribe(
  		data => {
  			this.resultadoArticulo = data;
  		},
  		err => {
  			console.log(err);
  		}
  	);
  	}

  salirHome = function () {
    this.router.navigateByUrl('/home');
  };
}