import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage')
  }

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 600,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options)
    this.navCtrl.setRoot('SecondPage')
  }
 
  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
    this.nativePageTransitions.flip(options);
    this.navCtrl.push('SecondPage');
  }
 
  fadePage() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot('SecondPage');
  }
 
  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
    this.nativePageTransitions.curl(options);
    this.navCtrl.setRoot('SecondPage');
  }
}
