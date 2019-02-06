import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResgitroComponent } from './resgitro/resgitro.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { VentaComponent } from './venta/venta.component';
import { EditarComponent } from './editar/editar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ServicioService } from './servicio.service';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResgitroComponent,
    HomeComponent,
    DetalleComponent,
    VentaComponent,
    EditarComponent,
    CarritoComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
