import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor() { }

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
}
