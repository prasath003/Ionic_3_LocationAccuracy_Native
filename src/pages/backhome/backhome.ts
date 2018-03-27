import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {LocationAccuracy} from "@ionic-native/location-accuracy";
import { Diagnostic } from '@ionic-native/diagnostic';

@IonicPage()
@Component({
  selector: 'page-backhome',
  templateUrl: 'backhome.html',
})
export class BackhomePage {

  that: any;

  constructor(private locationAccuracy: LocationAccuracy, private diag: Diagnostic, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    let that = this;
    this.platform.ready().then((readySource) => {
      this.locationAccuracy.canRequest().then((canRequest: boolean) => {
        if (canRequest) {
          // the accuracy option will be ignored by iOS
          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
              alert("Location setting are on");
            }, error => {
              if (error.code !== this.locationAccuracy.ERROR_USER_DISAGREED) {
                if (window.confirm("Failed to automatically set Location Mode. Would you like to switch to the Location Settings page?")) {
                  this.diag.switchToLocationSettings();
                }
              }
            }
          );
        }


      });
    });
  }

  ionViewDidLoad() {

  }
}
