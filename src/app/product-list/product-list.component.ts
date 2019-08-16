import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  showD = true;         //show product details view
  @Output() productPressedEvent = new EventEmitter();
  @Input() products: Product[];

  constructor() {
  }

  passProductPressed(e) { //pass the product to product details component
    console.log(`the title is :" ${e.title}`);
    this.showD = true;
    this.productPressedEvent.emit(e); //send product to product details
  }

}



