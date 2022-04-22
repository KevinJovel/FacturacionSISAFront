import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenCompraRoutingModule } from './orden-compra-routing.module';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';


@NgModule({
  declarations: [
    CrearOrdenComponent
  ],
  imports: [
    CommonModule,
    OrdenCompraRoutingModule
  ]
})
export class OrdenCompraModule { }
