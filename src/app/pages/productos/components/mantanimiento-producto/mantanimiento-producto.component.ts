import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-mantanimiento-producto',
  templateUrl: './mantanimiento-producto.component.html',
  styleUrls: ['./mantanimiento-producto.component.css']
})
export class MantanimientoProductoComponent implements OnInit {
  parametro: string="";
  mensaje:string ="";

  Form:FormGroup;
  constructor( private activateRoute: ActivatedRoute, private router: Router,private fb:FormBuilder,private productoService:ProductoService) { 
    this.Form = this.fb.group({
      productoId:[0],  
      nombre:[],             
      precio:[],  
      stock:[],  
    });
    this.activateRoute.params.subscribe(parametro => {
      this.parametro = parametro["id"];

      if (this.parametro == "0") {
        this.mensaje = "Ingrese un nuevo producto";
      } else {
        this.mensaje = "Modifique el producto";
        this.productoService.getProductosById(Number(this.parametro)).subscribe(res=>{
          this.Form.setValue(res);
        })
      }
    });
  }
  ngOnInit(): void {
  }
  guardar(){
    if(this.parametro=='0'){
      this.productoService.setProducto(this.Form.value).subscribe(res=>{
        alert("Registro guardado con éxito");
        this.router.navigate(["Producto/crud-productos"]);
      });
    }else{
      this.productoService.updateProducto(this.Form.value).subscribe(res=>{
        alert("Registro modificado con éxito");
        this.router.navigate(["Producto/crud-productos"]);
      });
    }
  }

}
