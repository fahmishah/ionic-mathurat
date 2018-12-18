import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  
  content = [];

  constructor(private storage: Storage, private platform: Platform, private http: Http) {

  }

  loadMathuratData() {
    this.http.get('assets/mathurat.json')
    .map(res => res.text())
    .subscribe(data => {

      let tmpData = []

      tmpData = JSON.parse(data);
      // console.log(tmpData.length)

      if (tmpData.length > 0) {
        for (var i = 0; i < tmpData.length; i++) {
          this.content.push({ 
            name: tmpData[i][5], 
            text: tmpData[i][4],  
            translation: tmpData[i][6],
            count: tmpData[i][3], 
            time: tmpData[i][7],
          });
        }
      }
      
      
    });
    }

      getMathurat() {
        return this.content;
      }

}
