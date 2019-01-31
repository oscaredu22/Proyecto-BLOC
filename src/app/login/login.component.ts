import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  btnClick= function () {
    this.router.navigateByUrl('/registro');
  };

  
  btnClickHome= function () {
    var validacionUser = $('#user').val();
    var validacionPassword = $('#password').val(); 

    if(validacionUser === "" || validacionPassword === ""){
      alert('llenar campos');
      return false;
    }
    else{
      this.router.navigateByUrl('/home');
    }

  };

}
