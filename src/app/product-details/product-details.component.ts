import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product; //chosen product that was passed from the app-component
  @Output() clickOnBackEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.product);
  }

  BackToProductView() { //when pressing back initialize the product to null
    this.clickOnBackEvent.emit(null);
  }

}
