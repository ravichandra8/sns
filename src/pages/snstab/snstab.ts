import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SnstabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-snstab',
  templateUrl: 'snstab.html'
})
export class SnstabPage {

  listviewRoot = 'ListviewPage'
  addRoot = 'AddPage'


  constructor(public navCtrl: NavController) {}

}
