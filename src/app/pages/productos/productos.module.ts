import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosCrudComponent } from './components/productos-crud/productos-crud.component';
import { MantanimientoProductoComponent } from './components/mantanimiento-producto/mantanimiento-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductosCrudComponent,
    MantanimientoProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductosModule { }
