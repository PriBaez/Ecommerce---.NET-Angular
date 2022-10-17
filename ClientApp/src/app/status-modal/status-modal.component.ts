import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

declare var window: any;

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal')!);
    modal.hide()
  }

}
