import { CommunicationsaProvider } from './../../providers/communicationsa/communicationsa';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public coms : CommunicationsaProvider) {

  }


  ionViewDidLoad(){
   this.coms.testapi(); 
  }

}
