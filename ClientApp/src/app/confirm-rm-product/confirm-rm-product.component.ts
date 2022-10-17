import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import * as bootstrap from 'bootstrap';
import { threadId } from 'worker_threads';
import { ProductosService } from '../Services/productos.service';

@Component({
  selector: 'app-confirm-rm-product',
  templateUrl: './confirm-rm-product.component.html',
  styleUrls: ['./confirm-rm-product.component.css']
})
export class ConfirmRmProductComponent implements OnInit {

 
 @Input() productoId!: number;

  constructor(private productService:ProductosService) { }

  ngOnInit(): void {
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(String(id)).subscribe();
    
  }

  confirmOptionToRemove(){
   this.confirmedRemove({confirmation:true, Id:this.productoId});
    console.log({confirmation:true, Id:this.productoId});
  }

  confirmedRemove(productToDelt: {confirmation:boolean, Id:number}) {
    if (productToDelt.confirmation == true) {
      this.deleteProduct(this.productoId);
    }
  }

}
