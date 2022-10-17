import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ProductosService } from '../Services/productos.service';
import * as bootstrap from 'bootstrap';
import { ConfirmRmProductComponent } from '../confirm-rm-product/confirm-rm-product.component';
import { Router } from '@angular/router';
import { result } from 'cypress/types/lodash';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public Productos: Producto[] = [];  

  constructor(private productoService: ProductosService, private router: Router) { 
    this.productoService.getAllProducts().subscribe(res => {
      this.Productos = res;
    })
    }


  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe(result =>
    {
      this.Productos = result;
      
    });
  }
  
  deleteProduct(id: number){
    if(confirm('Estas seguro de querer eliminar este producto?'))
    {
      this.productoService.deleteProduct(String(id)).subscribe({
        next:
        result => {
        alert('Producto eliminado con exito')
        window.location.reload()
        }
      })
      }
    }
  }

export interface Producto {
  prodId: number,
  prodDescription: string,
  prodPrice: number,
  prodStock: number,
  prodSaleUnit: string
}

