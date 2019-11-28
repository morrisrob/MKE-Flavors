import { ApiService } from "./../shared/api.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GeolocationService } from "../shared/geolocation.service";
import { DatePipe } from "@angular/common";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-locationdisplay",
  templateUrl: "./locationdisplay.component.html",
  styleUrls: ["./locationdisplay.component.css"],
  providers: [DatePipe]
})
export class LocationdisplayComponent implements OnInit {
  locations;
  distances: any[];
  lng2: any;
  lat2: any;
  dataLoaded: Boolean;
  geoLocationSupported: boolean;
  today = new Date();
  jstoday = "";

  constructor(
    private geoLocation: GeolocationService,
    private getLocations: ApiService
  ) {
    this.jstoday = formatDate(this.today, "EEEE, MMMM d, y", "en-US", "+0530");
  }

  async ngOnInit() {
    this.getLocations.getLocations().then(loc => {
      this.locations = loc.loc;
      this.locations.sort((a, b) => a.name.localeCompare(b.name));

      this.geoLocation
        .getPosition()
        .then(pos => {
          this.lng2 = pos.lng;
          this.lat2 = pos.lat;
          this.getLocationDistances();
        })
        .catch(err => {
          console.log(err.message);
          this.geoLocationSupported = false;
          this.dataLoaded = true;
        });
    });
  }

  timeoutDisplayLocations = () => {
    this.geoLocationSupported = false;
    this.dataLoaded = true;
  };

  getLocationDistances = () => {
    let distanceArray = [];
    for (let i = 0; i < this.locations.length; i++) {
      let distance = this.calculateDistance(
        this.lat2,
        this.lng2,
        this.locations[i].lat,
        this.locations[i].long,
        "M"
      );
      this.locations[i].distance = Math.round(distance * 10) / 10;
    }
    this.locations.sort(function(a, b) {
      return a.distance - b.distance;
    });
    this.dataLoaded = true;
  };

  calculateDistance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };
}
