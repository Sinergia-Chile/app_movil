import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string;
 // templateurl: 'sinergia.html';

  constructor(private InAppBrowser: InAppBrowser , private loadingCtrl: LoadingController) { 

    this.presentLoading();
   // this.templateurl; 
    this.OpenWebpage('https://www.sinergia-chile.cl');
  }

  OpenWebpage(url:string)
  {
    const option: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.InAppBrowser.create(url, '_self',option); 
    browser.show();   
  }

  //constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Bienvenido a Sinergia-Chile...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
   
   
    
  }

  

  

}
