import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
import {objetoLogin} from '../objetosBaseDatos/objetoLogin';
import {objetoLoginGet} from '../objetosBaseDatos/objetoLogin';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado: Array<objetoLoginGet>;
  enviarDatos = new objetoLogin();
  modificarDatos = new objetoLogin();
  id: number = 1;

  constructor(private router:Router, private servicioDatosEjemplo: ServicioService) { }

  ngOnInit() {
   
  }

  btnClickHome= function () {
    var validacionUser = $('#user').val();
    var validacionPassword = $('#password').val(); 

    if(validacionUser === "" || validacionPassword === ""){
      //alert('Debes llenar todos los campos');
      return false;
    }
    else{
      this.router.navigateByUrl('/home');
    }
  };

  onSubmit(){
    this.verificarLogin(this.enviarDatos);
  };

  verificarLogin(body: objetoLogin){
    this.servicioDatosEjemplo.postEnvioVerificacion(body).subscribe(
        data =>{
          console.log(data);
         if(data.code == "200"){
          localStorage.setItem("valoresUsuario",JSON.stringify(data));
           this.router.navigateByUrl('/home');
          
         }
         else if(data.code == "204"){
           alert("Ingresar datos correctos.");
         }
        },
        err => {}
      );
    }



  btnClick= function () {
    this.router.navigateByUrl('/registro');
  };


}
