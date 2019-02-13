import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
import {RespuestaTotal} from '../objetosBaseDatos/respuestaTotal';
import {objetoLogin} from '../objetosBaseDatos/objetoLogin';
import {objetoLoginGet} from '../objetosBaseDatos/objetoLogin';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

	resultado: Array<objetoLoginGet>;
	resultado2: Array<RespuestaTotal>;
	enviarDatos = new objetoLogin();
	modificarDatos = new objetoLogin();
	id: number = 1;

  constructor(private router:Router, private servicioDatosEjemplo: ServicioService) {}

  ngOnInit() {
		this.getResultado();
	}
	
	getResultado(){
		this.servicioDatosEjemplo.getRespuesta().subscribe(
			data => {
				this.resultado2 = data;
			},
			err => {
				console.log(err);
			}
		);
	}

  onSubmit(){
		var objetoUsuario = JSON.parse(localStorage.getItem("valoresUsuario"));
		console.log(objetoUsuario);
  	this.putSentServices(this.modificarDatos, objetoUsuario.results[0].id);
    alert("Datos editados correctamente.")

  	}

  	/*onchange($event){
  		this.id = $event.target.value;
  	}*/
  	
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
