import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
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

	resultadoArticulo: Array<objetoArticuloGet>;
	enviarDatos = new objetoLogin();
	modificarDatos = new objetoLogin();
	id: number = 1;

  constructor(private router:Router, private servicioDatosEjemplo: ServicioService) { }

  ngOnInit() {
  	this.getResultadoId();
  }


  getResultadoId(){
  	this.servicioDatosEjemplo.getPersonaId(1).subscribe(
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
