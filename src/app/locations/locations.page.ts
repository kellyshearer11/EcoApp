import { Component, OnInit } from '@angular/core';
import { ViewChild , ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  map: any;

  @ViewChild('map' , {read: ElementRef, static: false}) mapRef: ElementRef;


  constructor() { }

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
