import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service';
import {objetoArticulo} from '../objetosBaseDatos/objetoArticulo';
import {objetoArticuloGet} from '../objetosBaseDatos/objetoArticulo';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor(private router:Router, private servicioDatosEjemplo: ServicioService) { }

  ngOnInit() {
    $(window).load(function(){
      $(function() {
       $('#file-input').change(function(e) {
           addImage(e); 
          });
     
          function addImage(e){
           var file = e.target.files[0],
           imageType = /image.*/;
         
           if (!file.type.match(imageType))
            return;
       
           var reader = new FileReader();
           reader.onload = fileOnload;
           reader.readAsDataURL(file);
          }
       
          function fileOnload(e) {
           var result=e.target.result;
           $('#imgSalida').attr("src",result);
          }
         });
      });     
  }






  resultado: Array<objetoArticuloGet>;
  enviarDatos = new objetoArticulo();
  modificarDatos = new objetoArticulo();
  id: number = 1;

  onSubmit(){
      this.postSentServices(this.enviarDatos);
      this.router.navigateByUrl('/home');
  }

  postSentServices(body: objetoArticulo){
    this.servicioDatosEjemplo.postEnvioArticulo(body).subscribe(
        data =>{
          this.resultado = [];
          this.resultado.push(data);
        },
        err => {}
      );
    }  
}
