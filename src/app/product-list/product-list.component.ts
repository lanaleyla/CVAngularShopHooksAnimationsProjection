import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import products from 'src/assets/products.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  productsArray = []; //the data of products from json static file
  showProducts = [];  //temporary array that will hold the product to show, depending on the chose category
  showD = false;


  @Input() category; //product user chose to see his details
  @Output() productPressedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { //initialize the products view with the default category of All(show all products)
    this.showD = true;
    if (this.category === 'A') { //special case if user choose to see all products
      for (let j = 0; j < this.productsArray.length; j = j + 1) {
        this.showProducts.push(this.productsArray[j]);
      }
    }
  }

  passProductPressed(e) { //pass the product
   console.log("the title is :" +e.Title);
    this.productPressedEvent.emit(e);
  }

  ngOnChanges() { //show products according to the chosen category

    this.showD = true;

    if (this.productsArray.length < 1) { //runs before on init, load data to products array
      this.productsArray = products.products;
    }

    while (this.showProducts.length > 0) { //initialize the showProducts array
      this.showProducts.pop();
    }

    if (this.category === 'A') { //special case if user choose to see all products
      for (let j = 0; j < this.productsArray.length; j = j + 1) {
        this.showProducts.push(this.productsArray[j]);
      }
    }

    else { //show products by a given category
      for (let j = 0; j < this.productsArray.length; j = j + 1) {
        if (this.productsArray[j].CategoryId === this.category) {
          this.showProducts.push(this.productsArray[j]);
        }
      }
    }
    this.category = '';
  }
}
