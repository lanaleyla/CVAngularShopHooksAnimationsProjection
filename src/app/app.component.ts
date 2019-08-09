import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {

  title = 'shop';
  message = 'home';        //the option the user chose from the sidebar menu
  categoryName = 'A';      //the category that the user has chosen
  menuClicked = false;      //if user clicked on menu icon in the top bar
  productDetails = true;   //user pressed on a product, show/hide product details
  @Input() pressedProduct; //the product the user pressed on

  updateMenu(e) { //update visability of side bar menu
    this.menuClicked = e;
    console.log(this.menuClicked);
  }
  updateProductView(e) {//update product details view
    this.pressedProduct = e;
  }
  updateMessage(e) {//update the option the user has chosen
    if (e !== "")
      this.message = e;
  }

  updateCategoryName(e) { //update the category of products that the user has chosen
    this.categoryName = e;
  }

  ngOnChanges() {
    console.log(this.categoryName);
  }

}
