import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Edit_eventPage } from '../edit_event/edit_event';
@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html'
})
export class EventdetailPage {

  constructor(public navCtrl: NavController) {

  }
    
 edit_event(){
        this.navCtrl.push(Edit_eventPage)
  } 
}
