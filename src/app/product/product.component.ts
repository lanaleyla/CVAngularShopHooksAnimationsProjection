import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() product; //chosen product on press
  @Input() showData = false; //show/hide product 
  @Output() clickOnProductEvent = new EventEmitter();

  ngOnInit() {
  }

  showDetails()//send the chosen product to product-list
  {
    this.clickOnProductEvent.emit(this.product); //send the product to product list->app
  }

  ngOnChanges() {
    console.log(this.showData);
  }


}
