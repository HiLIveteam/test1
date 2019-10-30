import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

 import { Edit_offerPage } from '../edit_offer/edit_offer';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 import { MapPage } from '../map/map';
 import { TestPage } from '../test/test';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  near: string = "offers";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
 
 edit_offer(){
        this.navCtrl.push(Edit_offerPage)
  }  
  edit_event(){
        this.navCtrl.push(Edit_eventPage)
  } 
  offerdetail(){
        this.navCtrl.push(OfferdetailPage)
  }
  eventdetail(){
        this.navCtrl.push(EventdetailPage)
  }
  helpdetail(){
      this.navCtrl.push(TestPage)
}
  map(){
        this.navCtrl.push(MapPage)
  }
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
}
