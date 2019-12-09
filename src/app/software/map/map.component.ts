import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  // Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoidmluY2VuejUiLCJhIjoiY2szeXk3bWFkMDA2OTNrbnc0ZnF3Z2d3MiJ9.usN6XRCVdk9E-E2OovfCBA');
  map: mapboxgl.Map;
  style = 'mapbox://styles/vincenz5/ck3z0e2gk29z61cqswmw2uyph';
  lat = 18.465505;
  lng = -66.116935;
  // -66.116935,
  // 18.465505

  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

// var app = angular.module('YourProject', ['mapboxgl-directive']);

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1IjoidmluY2VuejUiLCJhIjoiY2szeXhxdm5oMDZ5OTNzbjB4ajJhcjVsdyJ9.RlV2L0eupO6K3PSN6A4-Ow';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

}
