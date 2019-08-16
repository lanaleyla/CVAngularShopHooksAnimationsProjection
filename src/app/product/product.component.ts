import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor() { }

  @Input() product: Product;  //chosen product on press
  @Input() showData = false;  //show/hide product 
  @Output() clickOnProductEvent = new EventEmitter();

  showDetails()//send the chosen product to product-list
  {
    this.clickOnProductEvent.emit(this.product); //send the chosen product to product list
  }

}
