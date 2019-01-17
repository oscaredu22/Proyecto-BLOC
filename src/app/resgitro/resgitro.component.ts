import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgitro',
  templateUrl: './resgitro.component.html',
  styleUrls: ['./resgitro.component.css']
})
export class ResgitroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  btnClickRegistroHome= function () {
    this.router.navigateByUrl('/home');
  };

}
