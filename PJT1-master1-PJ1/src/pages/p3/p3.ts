import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';

/**
 * Generated class for the P3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p3',
  templateUrl: 'p3.html',
})
export class P3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P3Page');
  }
  backhomee(){
    this.navCtrl.push(SN1);
  }
}
