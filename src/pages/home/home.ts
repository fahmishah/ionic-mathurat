import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content = [];
  translation = [];

  constructor(public navCtrl: NavController, private mathuratDB: DatabaseProvider) {

  }

  ionViewWillEnter() {

    this.content = this.mathuratDB.getMathurat();
    // console.log(this.content);
    // this.translation = this.mathuratDB.getTranslation();
    // console.log(this.content);
    // console.log(this.translatation);

  }


}
