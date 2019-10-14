import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  locations;

  title = 'Find the Flavors';
  lat = 43.0389;
  lng = -87.90647;

  lng2:any;
  lat2:any;

  constructor(private http: HttpClient) { 
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng2 = +pos.coords.longitude;
        this.lat2 = +pos.coords.latitude;
      });
    }
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/locations').subscribe(data => {
      // console.log(data);
      this.locations = data;
      console.log(this.locations);
    });
  }
}

