import { Component, OnInit, Input } from '@angular/core';
import categories from 'src/assets/categories.json';
import products from 'src/assets/products.json';
import { Category, Product } from 'src/model/index';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})

export class CategoriesListComponent implements OnInit {

  @Input() pressedProduct: Product; //the product the user pressed on
  categoryId: string = '';          //category id of the category the user chose
  categoriesArray: Category[] = []; //holds categories each category has id and title
  productsArray: Product[] = [];    //holds the original products array
  showProducts: Product[] = [];     //holds the changing by demand products array

  constructor() { }

  ngOnInit() {
    this.categoriesArray = categories.categories;
    this.productsArray = products.products;
    this.initializeProductsAll(this.productsArray); //initialize showProducts array with all the products
  }

  //when category is chosen load its products
  alartProducts(e) {
    this.categoryId = e.name; //update current chosen category
    this.loadProducts(e.name);//load products
  }

  //load products to show products array by a given category id
  loadProducts(categoryId) {
    this.cleanChangingArray(this.showProducts);

    if (categoryId === 'A') { //special case if user choose to see all products
      for (let product of this.productsArray) {
        this.showProducts.push(product);
      }
    }
    else { //show products by a given category
      for (let product of this.productsArray) {
        if (product.categoryId === categoryId) {
          this.showProducts.push(product);
        }
      }
    }
    this.categoryId = ''; //initialize category name for the next time
  }

  initializeProductsAll(products: Product[]) {  //initialize products view to all products
    for (let product of products) {
      this.showProducts.push(product);
    }
  }

  updateProductView(e:Product) {//update product details view
    this.pressedProduct = e;
  }

  cleanChangingArray(array) { //clean the changing array
    while (array.length > 0) { //initialize the showProducts array on every choose
      array.pop();
    }
  }

}
