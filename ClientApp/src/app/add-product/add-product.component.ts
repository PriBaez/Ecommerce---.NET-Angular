import { Component, OnInit } from '@angular/core';
import { Producto } from '../list-view/list-view.component';
import { ProductosService } from '../Services/productos.service';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { StatusModalComponent } from '../status-modal/status-modal.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductRequest: Producto = {
    prodId: 0,
    prodDescription: '',
    prodPrice: 0,
    prodStock: 0,
    prodSaleUnit: ''
  }

  //testModal: Modal | undefined;
  constructor(private productoService: ProductosService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct()
 {
  this.productoService.addProduct(this.addProductRequest)
  .subscribe({
    next: (producto) => {
      this.router.navigate(['/listview'])
      //this.testModal?.show();

    }, error: (err) => 
    console.log(err)
  })
 }
}
