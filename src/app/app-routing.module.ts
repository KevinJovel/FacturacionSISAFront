import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Producto',
    loadChildren: ()=>
    import('./pages/productos/productos.module').then((m)=> m.ProductosModule),
  },{
    path:'Orden-Compra',
    loadChildren: ()=>
    import('./pages/orden-compra/orden-compra.module').then((m)=> m.OrdenCompraModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
