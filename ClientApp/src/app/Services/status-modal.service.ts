import { Injectable } from '@angular/core';
import { StatusModalComponent } from '../status-modal/status-modal.component';

@Injectable({
  providedIn: 'root'
})
export class StatusModalService {

  constructor(private modal: StatusModalComponent) { }

  async openModalasync(){
    this.modal.open();
  }
}


