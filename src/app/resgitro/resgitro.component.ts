import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
import {objetoLogin} from '../objetosBaseDatos/objetoLogin';
import {objetoLoginGet} from '../objetosBaseDatos/objetoLogin';

@Component({
  selector: 'app-resgitro',
  templateUrl: './resgitro.component.html',
  styleUrls: ['./resgitro.component.css']
})
export class ResgitroComponent implements OnInit {


	resultado: Array<objetoLoginGet>;
	enviarDatos = new objetoLogin();
	modificarDatos = new objetoLogin();
	id: number = 1;

 	constructor(private router:Router, private servicioDatosEjemplo: ServicioService) { }

  	ngOnInit() {
  	}
  	
  	onSubmit(){
  		this.postSentServices(this.enviarDatos);
  		this.router.navigateByUrl('/login');
  	}

  	
  	postSentServices(body: objetoLogin){
  	this.servicioDatosEjemplo.postEnvioLogin(body).subscribe(
  			data =>{
  				this.resultado = [];
  				this.resultado.push(data);
  			},
  			err => {}
  		);
	}
}
