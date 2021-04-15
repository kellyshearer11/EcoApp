import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  map: any;

  @ViewChild('map' , {read: ElementRef, static: false}) mapRef: ElementRef;

 


  constructor(private geolocation: Geolocation) { }
  ionViewDidEnter() {
    this.showMap();
  }

  
  showMap() {
    const location = new google.maps.LatLng(53.27588526514059, -9.059048281780424);
    const options = {
      center: location,
      zoom: 15,
      disableDefault: true 
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  ngOnInit() {
    
  }
 

}




