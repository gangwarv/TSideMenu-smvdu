import { AlertController, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'page-list-item',
  templateUrl: 'list-item.html',
})
export class ListItemPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {

  }
  onAlert() {
    const alert = this.alertCtrl.create({
      title: this.selectedItem.title,
      subTitle: this.selectedItem.note,
      buttons: ['OK']
    });
    alert.present();
  }
}
