import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResgitroComponent } from './resgitro/resgitro.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { VentaComponent } from './venta/venta.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResgitroComponent,
    HomeComponent,
    DetalleComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
