import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() clickOnMenuEvent=new EventEmitter();//on menu icon click

  constructor() { }

  ngOnInit() {
  }
  
  openSidebar() { //send true to open side bar on menu click
    console.log("here in open side bar");
    this.clickOnMenuEvent.emit(true);
  }
  

}
