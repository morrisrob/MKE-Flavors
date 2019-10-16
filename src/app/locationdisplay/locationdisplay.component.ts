import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { stringify } from '@angular/compiler/src/util';
import { GeolocationService } from '../shared/geolocation.service';
import { GetlocationsService } from '../shared/getlocations.service';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';



// import { start } from 'repl';

@Component({
  selector: 'app-locationdisplay',
  templateUrl: './locationdisplay.component.html',
  styleUrls: ['./locationdisplay.component.css'],
  providers: [DatePipe]
})
export class LocationdisplayComponent implements OnInit {
  locations;
  distances: any[];
  lng2: any;
  lat2: any;
  dataLoaded: Boolean;
  geoLocationSupported: boolean;
  term: any;

  today = new Date();
  jstoday = '';

  constructor(
    private http: HttpClient, 
    private geoLocation: GeolocationService,
    private getLocations: GetlocationsService,
    private datePipe: DatePipe
  ){
    this.jstoday = formatDate(this.today, 'EEEE, MMMM d, y', 'en-US', '+0530');
  }


  async ngOnInit(): Promise <string> {

    // setTimeout(this.sayHi, 1000);
    


    this.getLocations.getLocations().then(loc => {
      this.locations = loc.loc;
      console.log(this.locations);
      this.locations.sort((a, b) => a.name.localeCompare(b.name));

      this.geoLocation.getPosition()
        .then(pos => {
          console.log(`Position: ${pos.lng} ${pos.lat}`);
          this.lng2 = pos.lng;
          this.lat2 = pos.lat;
          this.getLocationDistances();
        })
        .catch((err) => {
          console.log(err.message);
          this.geoLocationSupported = false;
          this.dataLoaded = true;
        });
    })
    return 'yeah';
  }
 
  timeoutDisplayLocations = () => {
    this.geoLocationSupported = false;
    this.dataLoaded = true;
    console.log('timeout ran');
  }


  getLocationsFromAPI = () => {
    this.http.get('/api/locations').subscribe(data => {
      this.locations = data;
      this.locations.sort((a, b) => a.name.localeCompare(b.name));
    });
    console.log('getlocationsfromAPI ran');
  }

  async getGeoLocation() {
    let geoLocationArray;
    if (navigator) {
      navigator.geolocation.getCurrentPosition(async pos => {
        this.lng2 = +pos.coords.longitude;
        this.lat2 = +pos.coords.latitude;
        geoLocationArray = [this.lat2, this.lng2];
        console.log(this.lng2);
        console.log(this.lat2);
      });
    } else {
      this.geoLocationSupported = false;
    }
    console.log('getgeolocation ran');
  } 

  getLocationDistances = () => {
    console.log('getlocationsdistances ran')
    let distanceArray = [];
    for (let i=0; i < this.locations.length; i++) {
      let locLat = this.locations[i].lat;
      let locLong = this.locations[i].long;
      let distance = this.distance(this.lat2, this.lng2, locLat, locLong, 'M');
      let distanceRounded = Math.round( distance * 10 ) / 10;
      distanceArray.push(distanceRounded);
      console.log(distanceArray);
      console.log('distance to ' + this.locations[i].name + ' is ' + distance);
    }
    this.distances = distanceArray;
    this.addDistanceToArray();
    // this.locations.sort(this.sortFunction)  
    this.locations.sort(function (a, b) {
      return a.distance - b.distance
    });
    this.dataLoaded = true;
    console.log(this.locations);
  };

  addDistanceToArray = () => {
    for (let i = 0; i < this.locations.length; i++) {
      this.locations[i].distance = this.distances[i];
      console.log(this.locations[i]);
    }
  }

sortFunction(a, b) {
  if (a.distance === b.distance) {
    return 0;
  }
  else {
    return (a.distance < b.distance) ? -1 : 1;
  }
}


  distance = (lat1, lon1, lat2, lon2, unit) => {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist;
  }
}
}