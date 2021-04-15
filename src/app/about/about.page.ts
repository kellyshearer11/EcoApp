import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';  


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  
  ngOnInit() {
  }

  


}
