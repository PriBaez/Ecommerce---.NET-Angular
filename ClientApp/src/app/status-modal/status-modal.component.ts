import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from 'bootstrap';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent implements OnInit {

  testModal: Modal | undefined;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  open()
  {
    var testModal = document.getElementById("exampleModal")
    if(testModal){
      this.testModal = new Modal(testModal, {
        keyboard:false
      });
    }
    this.testModal?.show();
  }

}
