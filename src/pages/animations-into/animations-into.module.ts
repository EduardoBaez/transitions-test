import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimationsIntoPage } from './animations-into';

@NgModule({
  declarations: [
    AnimationsIntoPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimationsIntoPage),
  ],
})
export class AnimationsIntoPageModule {}
