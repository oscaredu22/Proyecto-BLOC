
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {RespuestaTotal} from './objetosBaseDatos/respuestaTotal';
import {EnvioDatos} from './objetosBaseDatos/envioDatos';
import {objetoLogin} from './objetosBaseDatos/objetoLogin';
import {objetoLoginGet} from './objetosBaseDatos/objetoLogin';
import {objetoArticulo} from './objetosBaseDatos/objetoArticulo';
import {objetoArticuloGet} from './objetosBaseDatos/objetoArticulo';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  private urlApi: string = "http://localhost:3000/tasks";
  private urlApiLogin: string = "http://localhost:3000/Registro";
  private urlApiArticulo: string = "http://localhost:3000/Articulo";

  private arrayRespuesta: Array<RespuestaTotal>
  private arrayRespuestaArticulo: Array<objetoArticuloGet>
  private arrayPersonaId: Array<objetoArticuloGet>
  private arrayRespuestaLogin: Array<objetoLoginGet>
  constructor(private http: HttpClient) {}


  /*Obtener respuesta baseDatos.*/
  getRespuesta(): Observable<RespuestaTotal[]>{
    return this.http.get<RespuestaTotal[]>(this.urlApi)
  }

  getRespuestaArticulo(): Observable<objetoArticuloGet[]>{
    return this.http.get<objetoArticuloGet[]>(this.urlApiArticulo);
  }

  /*Envio datos login.*/
  postEnvioLogin(_body: objetoLogin): Observable<objetoLoginGet> {
    return this.http.post<objetoLoginGet>(this.urlApiLogin, _body);
  }

   /*Envio datos login.*/
  postEnvioArticulo(_body: objetoArticulo): Observable<objetoArticuloGet> {
    return this.http.post<objetoArticuloGet>(this.urlApiArticulo, _body);
  }

  /*Modificar respuesta.*/
  putRespuesta(_id: number, _body:EnvioDatos): Observable<RespuestaTotal>{
    let urlModificar = this.urlApi + '/'+_id;
    return this.http.put<RespuestaTotal>(urlModificar,_body);
  }

  putRespuestaLogin(_id: number, _body:objetoLogin): Observable<objetoLoginGet>{
    let urlModificarLogin = this.urlApiLogin + '/'+_id;
    return this.http.put<objetoLoginGet>(urlModificarLogin,_body);
  }


  getPersonaId(_id: number): Observable<objetoArticuloGet[]>{
    let urlModificarArticulo = this.urlApiArticulo + '/'+_id;
    return this.http.get<objetoArticuloGet[]>(urlModificarArticulo)
  }
  
}
