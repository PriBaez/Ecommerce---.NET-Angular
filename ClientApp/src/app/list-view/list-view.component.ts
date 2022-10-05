import { Component, Inject, OnInit } from '@angular/core';
import { ProductosService } from '../Services/productos.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public Productos: Producto[] = [];  


  constructor(private productoService: ProductosService) { 
    this.productoService.getAllProducts().subscribe(res => {
      this.Productos = res;
    })
    }


  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe(result =>
    {
      this.Productos = result;
    })
  }


}

  

export interface Producto {
  prodId: number,
  prodDescription: string,
  prodPrice: number,
  prodStock: number,
  prodSaleUnit: string
}

