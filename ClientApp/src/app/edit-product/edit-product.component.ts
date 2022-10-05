import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'cypress/types/jquery';
import { ProductosService } from '../Services/productos.service';
import { Producto } from '../list-view/list-view.component';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id1: number = 0;

  constructor(private route: ActivatedRoute, 
    private productoServices: ProductosService,
    private router: Router) { }

  ProductDetails: Producto = {
    prodId: 0,
    prodDescription: '',
    prodPrice: 0,
    prodStock: 0,
    prodSaleUnit: ''
  };
  

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        var id = params.get('id');
        
        if(id){
          this.productoServices.getProduct(id)
          .subscribe({
            next:(res) => {
              this.ProductDetails = res;
            }
          })
        }
      }
    })
  }

  updateProduct() {
    this.productoServices.updateProduct(String(this.ProductDetails.prodId), this.ProductDetails)
    .subscribe({
      next: res => {
        this.router.navigate(['listview'])
      }
    })
  }

}

