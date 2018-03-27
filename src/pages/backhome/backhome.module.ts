import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackhomePage } from './backhome';

@NgModule({
  declarations: [
    BackhomePage,
  ],
  imports: [
    IonicPageModule.forChild(BackhomePage),
  ],
})
export class BackhomePageModule {}
