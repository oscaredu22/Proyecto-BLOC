import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResgitroComponent } from './resgitro/resgitro.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { VentaComponent } from './venta/venta.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: ResgitroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'detalle', component: DetalleComponent},
  {path: 'venta', component: VentaComponent},
  {path: 'editar', component: EditarComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
