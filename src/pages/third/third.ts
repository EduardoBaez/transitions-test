import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  public type

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.get('type')
  }

  ionViewDidLoad() {}

  goBack = () => {
    this.navCtrl.pop()
  }

}
