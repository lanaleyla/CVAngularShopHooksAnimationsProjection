import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent{

  @Output() clickOnMenuEvent=new EventEmitter();//on menu icon click

  constructor() { }
  
  openSidebar() { //send true to open side bar on menu click
    console.log('here in open side bar');
    this.clickOnMenuEvent.emit(true);
  }
  

}
