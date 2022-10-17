import { Component, Input, OnInit } from '@angular/core';
import { NumericDictionary } from 'cypress/types/lodash';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() productID!: Number;

  constructor() { }

  ngOnInit(): void {
  }

  testId() {
    console.log(this.productID);
  }
}
