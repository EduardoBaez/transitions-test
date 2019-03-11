import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-animations',
  templateUrl: 'animations.html',
})
export class AnimationsPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  goTo = (t: Number, n: String) => {
    const data = {type: t, name: n}
    this.navCtrl.push('AnimationsIntoPage', {data})
  }
}
