import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {

  @Input() product: Product; //chosen product that was passed from the list of products
  @Output() clickOnBackEvent = new EventEmitter();

  constructor() { }

  backToProductView() { //when pressing back initialize the product to null
    this.clickOnBackEvent.emit(null);
  }

}
