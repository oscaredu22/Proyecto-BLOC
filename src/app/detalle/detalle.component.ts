import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  salirHome = function () {
    this.router.navigateByUrl('/home');
  };
}
