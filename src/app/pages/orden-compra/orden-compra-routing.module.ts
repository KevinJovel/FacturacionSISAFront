import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'crear-orden',
        component:CrearOrdenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenCompraRoutingModule { }
