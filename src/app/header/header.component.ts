import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickOnMenuEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  updateMenu(e) { //update the visabilaty of the side bar menu
    this.clickOnMenuEvent.emit(e);
  }

}
