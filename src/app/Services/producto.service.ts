import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Productos } from '../Models/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  getProductos(){
    return this.http.get<Productos[]>(`${environment.urlService}/api/Productos`);
  }
  setProducto(prod: Productos){
    return this.http.post<Productos>(`${environment.urlService}/api/Productos`, prod);
  }
  updateProducto(prod: Productos){
    return this.http.put<Productos>(`${environment.urlService}/api/Productos`, prod);
  }
  getProductosById(id:number){
    return this.http.get<Productos>(`${environment.urlService}/api/Productos/${id}`);
  }
}
