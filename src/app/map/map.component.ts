import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeolocationService } from '../shared/geolocation.service';
import { GetlocationsService } from '../shared/getlocations.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  locations;

  title = 'Flavor Map';
  lat = 43.0389;
  lng = -87.90647;

  lng2:any;
  lat2:any;

  constructor(
    private http: HttpClient,
    private geoLocation: GeolocationService,
    private getLocations: GetlocationsService,
    ) { 
    // if (navigator) {
    //   navigator.geolocation.getCurrentPosition(pos => {
    //     this.lng2 = +pos.coords.longitude;
    //     this.lat2 = +pos.coords.latitude;
    //   });
    // }
    // this.geoLocation.getPosition().then(pos => {
    //   console.log(`Position: ${pos.lng} ${pos.lat}`);
    //   this.lng2 = pos.lng;
    //   this.lat2 = pos.lat;
    // })


  }

  ngOnInit(): void {
    // this.http.get('http://localhost:3000/api/locations').subscribe(data => {
    //   // console.log(data);
    //   this.locations = data;
    //   console.log(this.locations);
    // });

    
    this.geoLocation.getPosition().then(pos => {
      console.log(`Position: ${pos.lng} ${pos.lat}`);
      this.lng2 = pos.lng;
      this.lat2 = pos.lat;
    })
 
    this.getLocations.getLocations().then(loc => {
      this.locations = loc.loc;
      console.log(this.locations);
    })
  }
}

