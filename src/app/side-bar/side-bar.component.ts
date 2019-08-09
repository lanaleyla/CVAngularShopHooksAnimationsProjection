import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  
  @Output() clickedEvent=new EventEmitter();
  @Output() clickCloseMenuEvent=new EventEmitter();
  @Output() clickHideOnEvent=new EventEmitter();

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

  ngOnInit() {
  }

  closeTopBar() {//hide side bar on x click
    this.clickCloseMenuEvent.emit(false);
  }
}
