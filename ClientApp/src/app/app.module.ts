import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductosService } from './Services/productos.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AddProductComponent } from './add-product/add-product.component';
import { StatusModalComponent } from './status-modal/status-modal.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmRmProductComponent } from './confirm-rm-product/confirm-rm-product.component';
import { Button } from 'bootstrap';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ListViewComponent,
    AddProductComponent,
    StatusModalComponent,
    EditProductComponent,
    ConfirmRmProductComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'listview', component: ListViewComponent},
      { path: 'AddProduct', component: AddProductComponent},
      { path: 'EditProduct/:id', component: EditProductComponent}
    ])
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
