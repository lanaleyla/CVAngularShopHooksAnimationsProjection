import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myState', [
      state('active', style({ transform: 'translateX(0)' })),
      transition('void => true', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
    ]),
    trigger('open', [
      state('active', style({
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: '#e6e6e6',
        opacity: '0.6',
      })),
    ]),
  ]
})

export class AppComponent {

  title = 'shop';
  message = 'home';        //the option the user chose from the sidebar menu
  menuClicked = false;     //if user clicked on menu icon in the top bar
  optionClicked = false;   //option within the menu was clicked

  updateMenu(e) { //update visability of side bar menu
    this.menuClicked = e;
    if (this.menuClicked) {
      this.optionClicked = false;
    }
  }

  updateMessage(e) {//update the option the user has chosen
    if (e !== this.message) {
      this.message = e;
      this.optionClicked = true;
    }
  }

  get status(): string { //status if side bar has opened
    return this.menuClicked ? 'active' : 'inactive';
  }

  get OptionStatus() { //status if user clicked on option from side bar
    return this.optionClicked ? 'true' : 'false';
  }
}
