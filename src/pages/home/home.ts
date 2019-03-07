import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import anime from 'animejs'
import { Flip } from 'number-flip'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('box') box: ElementRef
  @ViewChild('numerBtn', { read: ElementRef}) private numberBtn: ElementRef
  flipAnim = null
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions, private renderer: Renderer2) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage')
  }

  slidePage = () => {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 600,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options)
    this.navCtrl.push('SecondPage')
  }
 
  flipPage = () => {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
    this.nativePageTransitions.flip(options);
    this.navCtrl.push('SecondPage');
  }
 
  fadePage = () => {
    this.nativePageTransitions.fade(null);
    this.navCtrl.push('SecondPage');
  }
 
  curlPage = () => {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
    this.nativePageTransitions.curl(options);
    this.navCtrl.push('SecondPage');
  }

  callAnime = () => {
    console.log('callAnime');
    
    anime({
      targets: '.animate-me',
      translateX: [
        { value: 100, duration: 1200},
        { value: 0, duration: 800},
      ],
      borderRadius: [
        { value: 8, duration: 1000},
        { value: 0, duration: 1000},
      ],
      rotate: '0turn',
      backgroundColor: '#ffffff',
      duration: 1800,
    });
  }

  doMagic = () => {
    console.log("doMagic");
    this.renderer.addClass(this.box.nativeElement, "perspectiveDown")
  }

  flip = () => {
    if (!this.flipAnim) {
      this.flipAnim = new Flip({
        node: this.numberBtn.nativeElement,
        from: '9999',
      })
    }

    this.flipAnim.flipTo({
      to: Math.floor((Math.random() * 1000) + 1)
    })
  }

  animateItems = () => {
    console.log("animateItems");
    
  }

  bounce = () => {
    console.log("Bounce");
    
  }
}
