import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { NotificationPage } from '../notification/notification';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public GoToSearch(){
  	this.navCtrl.push(SearchPage);
  }
  public GoToNotification(){
  	this.navCtrl.push(NotificationPage);
  }

  public GoToCart(){
  	this.navCtrl.push(CartPage);
  }
}
