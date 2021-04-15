import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
  description: string;
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 53.281494643303645,
        lng: -9.046062610758135,
      },
      title: 'Bottle Bank',
      description: 'Hello kelly'
    },

    {
      position: {
        lat: 53.27822559020828,
        lng: -9.078098019284838,
      },
      title: 'Bottle Bank',
      description: 'Hello kelly'
    },

    {
      position: {
        lat: 53.28749889999044,
        lng: -9.038503223599255,
      },
      title: 'Bottle Bank',
      description: 'Hello kelly'
    }
  ];

  constructor(private geolocation: Geolocation) { }
  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 53.27588526514059, lng: -9.059048281780424};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
      description: marker.description
    });
  }

}




