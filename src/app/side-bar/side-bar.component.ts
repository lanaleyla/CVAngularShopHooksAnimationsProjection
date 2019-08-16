import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  constructor() { }
  
  @Output() clickedEvent=new EventEmitter();        //click on option from the menu
  @Output() clickCloseMenuEvent=new EventEmitter(); //x-close was clicked
  @Output() clickHideOnEvent=new EventEmitter();    //option was choosen ,hide the side bar
  

  showMain(){
    this.clickedEvent.emit('home'); //send chosen category 
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  showAbout(){
    this.clickedEvent.emit('about');//send chosen category 
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  showProducts(){
    this.clickedEvent.emit('products');//send chosen category 
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  showContact(){
    this.clickedEvent.emit('contact');//send chosen category 
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  closeTopBar() {//hide side bar on x click
    this.clickCloseMenuEvent.emit(false);
  }
}
