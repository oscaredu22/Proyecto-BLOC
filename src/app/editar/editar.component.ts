import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
import {objetoLogin} from '../objetosBaseDatos/objetoLogin';
import {objetoLoginGet} from '../objetosBaseDatos/objetoLogin';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

	resultado: Array<objetoLoginGet>;
	enviarDatos = new objetoLogin();
	modificarDatos = new objetoLogin();
	id: number = 1;

  constructor(private router:Router, private servicioDatosEjemplo: ServicioService) {}

  ngOnInit() {
  }

  onSubmit(){
 
  	this.putSentServices(this.modificarDatos, this.id);

  	}

  	onchange($event){
  		this.id = $event.target.value;
  	}
  	
  	putSentServices(body: objetoLogin, id: number){
  	this.servicioDatosEjemplo.putRespuestaLogin(id,body).subscribe(
  			data =>{
  				this.resultado = [];
  				this.resultado.push(data);
  			},
  			err => {}
  		);
  }

}
