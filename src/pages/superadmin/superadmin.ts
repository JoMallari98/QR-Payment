import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminmanagerPage } from '../adminmanager/adminmanager';
import { UsermanagerPage } from '../usermanager/usermanager';
import { User } from '../../models/user';

/**
 * Generated class for the SuperadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-superadmin',
  templateUrl: 'superadmin.html',
})
export class SuperadminPage {
  public user = {} as User;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperadminPage');
  }
  goUserManager(){
    this.navCtrl.push(UsermanagerPage, {
      user:this.user
    });
  }
  goAdminManager() {
    this.navCtrl.push(AdminmanagerPage, {
    });
  }
}
