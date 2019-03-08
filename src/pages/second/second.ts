import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  public type: String
  public options: NativeTransitionOptions

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
    this.type = navParams.get('type')
    this.options = {
      direction: 'up',
      duration: 600,
    };
  }

  ionViewDidLoad() {}

  goBack = () => {
    this.navCtrl.pop()
  }

  goNext = () => {
    switch (this.type) {
      case 'slide':
        this.nativePageTransitions.slide(this.options)
        this.navCtrl.push('ThirdPage', {type: 'slide'})
        return false
      case 'flip':
        this.nativePageTransitions.flip(this.options)
        this.navCtrl.push('ThirdPage', {type: 'flip'})
        return false
      case 'fade':
        this.nativePageTransitions.fade(this.options)
        this.navCtrl.push('ThirdPage', {type: 'fade'})
        return false
      case 'curl':
        this.nativePageTransitions.curl(this.options)
        this.navCtrl.push('ThirdPage', {type: 'curl'})
        return false
      default:
        return false
    }
  }
}
