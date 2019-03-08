import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransitionsPage } from './transitions';

@NgModule({
  declarations: [
    TransitionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransitionsPage),
  ],
})
export class TransitionsPageModule {}
