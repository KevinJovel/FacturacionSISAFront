import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../../Services/producto.service';
import { Productos } from '../../../../Models/Productos';

import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-crud',
  templateUrl: './productos-crud.component.html',
  styleUrls: ['./productos-crud.component.css']
})
export class ProductosCrudComponent implements OnInit {
  Productos:Productos[] =[];
  constructor(private productoService:ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(res=>{
      console.log(res);
      this.Productos = res;
    })
  }
  crearModificar(action:number){
    this.router.navigate([`Producto/mantenimiento-productos/${action}`]);
  }

}
