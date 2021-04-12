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

  infoWindows: any = [];
  markers: any = [
    {
      title: "Bottle Bank",
      latitude: "53.27588526514059",
      longitude: "-9.059048281780424"
    },
    {
      title: "Bottle Bank, Tesco",
      latitude: "53.280182489263254",
      longitude: "-9.078539494663193"
    },
    {
      title: "Bottle Bank",
      latitude: "53.28311043188283",
      longitude: "-9.065177094189378"
    },
  ];


  constructor() { }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                            '<h2 id="firstHeading" class="firstHeading"' + marker.title + '</h2>' +
                            '<p>Latitude: ' + marker.latitude + '</p>' +
                            '<p>Longitude: ' + marker.longitude + '</p>' + 
                            '</div>'; 

      let infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent 
      });

      marker.addListener('click', () => {
        this.closeAllInfoWindows();
        infoWindow.open(this.map, marker);
      });
      this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(53.27588526514059, -9.059048281780424);
    const options = {
      center: location,
      zoom: 15,
      disableDefault: true 
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  ngOnInit() {
  
  }

  

}
