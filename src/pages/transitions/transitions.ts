import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-transitions',
  templateUrl: 'transitions.html',
})
export class TransitionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() { }

  
  slidePage = () => {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 600,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options)
    this.navCtrl.push('SecondPage', {type: 'slide'})
  }
 
  flipPage = () => {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
    this.nativePageTransitions.flip(options);
    this.navCtrl.push('SecondPage', {type: 'flip'});
  }
 
  fadePage = () => {
    this.nativePageTransitions.fade(null);
    this.navCtrl.push('SecondPage', {type: 'fade'});
  }
 
  curlPage = () => {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
    this.nativePageTransitions.curl(options);
    this.navCtrl.push('SecondPage', {type: 'curl'});
  }

}
