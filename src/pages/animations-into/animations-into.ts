import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-animations-into',
  templateUrl: 'animations-into.html',
})
export class AnimationsIntoPage {
  public data: Number

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data')
  }

  ionViewDidLoad() { }

}
