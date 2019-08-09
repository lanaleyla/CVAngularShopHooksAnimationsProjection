import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import categories from 'src/assets/categories.json';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})

export class CategoriesListComponent implements OnInit {

  constructor() { }

  @Output() clickedCategoryEvent = new EventEmitter();

  categoriesArray = []; //holds products categories each category has id and title

  ngOnInit() {
    this.categoriesArray = categories.categories;
    console.log(categories.categories);
  }

  alartProducts(e) {
    console.log(e.name);
    this.clickedCategoryEvent.emit(e.name); //send the category name to the father
  }


}
