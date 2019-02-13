import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
import {RespuestaTotal} from '../objetosBaseDatos/respuestaTotal';
import {EnvioDatos} from '../objetosBaseDatos/envioDatos';
import {objetoArticulo} from '../objetosBaseDatos/objetoArticulo';
import {objetoArticuloGet} from '../objetosBaseDatos/objetoArticulo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	resultado: Array<RespuestaTotal>;
  resultadoArticulo: Array<objetoArticuloGet>;
	enviarDatos = new EnvioDatos();
	modificarDatos = new EnvioDatos();
	id: number = 1;

  	constructor(private router:Router, private servicioDatosEjemplo: ServicioService) { }

  	ngOnInit() {
  		this.getResultado();
      this.getResultadoArticulo();
      //var objetoUsuario = JSON.parse(localStorage.getItem("valoresUsuario"));
      //console.log(objetoUsuario);
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
        console.log(this.resultadoArticulo);
      },
      err => {
        console.log(err);
      }
    );
    }
    
    onClick(botonSubmit: HTMLInputElement){
      var idProducto = botonSubmit.value;
      localStorage.setItem("idProducto",idProducto);
      this.router.navigateByUrl('/detalle');
    }

}
