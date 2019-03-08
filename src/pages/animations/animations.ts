import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import anime from 'animejs'
import { Flip } from 'number-flip'

@IonicPage()
@Component({
  selector: 'page-animations',
  templateUrl: 'animations.html',
})
export class AnimationsPage {

  @ViewChild('box') box: ElementRef
  //@ViewChild('bounceBtn') bounceBtn: ElementRef
  //@ViewChild('bounceBtn', { read: ElementRef}) private bounceBtn: ElementRef 
  @ViewChild('numerBtn', { read: ElementRef}) private numberBtn: ElementRef
  flipAnim = null

  constructor(public navCtrl: NavController, public navParams: NavParams, private renderer: Renderer2) {
  }

  ionViewDidLoad() {}

    
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
    console.log("bounce")
  }

}
