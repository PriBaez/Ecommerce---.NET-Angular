import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../list-view/list-view.component';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Producto[]>  {
    return this.http.get<Producto[]>('https://localhost:7059/api/Productos')
  }

  addProduct(addProductRequest: Producto): Observable<Producto> 
  {
    return this.http.post<Producto>('https://localhost:7059/api/Productos', addProductRequest)
  }

  getProduct(id: string): Observable<Producto> {
    return this.http.get<Producto>('https://localhost:7059/api/Productos/' + id);
  }

  updateProduct(id:string, productDetails: Producto): Observable<Producto> {
    return this.http.put<Producto>('https://localhost:7059/api/Productos/' + id, productDetails);
  }
 
}

