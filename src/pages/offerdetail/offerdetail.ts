import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Edit_offerPage } from '../edit_offer/edit_offer';
@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html'
})
export class OfferdetailPage {

  constructor(public navCtrl: NavController) {

  }
     
 edit_offer(){
        this.navCtrl.push(Edit_offerPage)
  }  

}
