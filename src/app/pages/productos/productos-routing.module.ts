import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantanimientoProductoComponent } from './components/mantanimiento-producto/mantanimiento-producto.component';
import { ProductosCrudComponent } from './components/productos-crud/productos-crud.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'crud-productos',
        component: ProductosCrudComponent,
      },
      {
        path:'mantenimiento-productos/:id',
        component: MantanimientoProductoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
