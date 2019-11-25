import { ApiService } from "./../shared/api.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GeolocationService } from "../shared/geolocation.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  locations;

  title = "Flavor Map";

  lng2: 43.0389;
  lat2: -87.90647;

  constructor(
    private http: HttpClient,
    private geoLocation: GeolocationService,
    private getLocations: ApiService
  ) {}

  ngOnInit(): void {
    this.geoLocation.getPosition().then(pos => {
      this.lng2 = pos.lng;
      this.lat2 = pos.lat;
    });

    this.getLocations.getLocations().then(loc => {
      this.locations = loc.loc;
    });
  }
}
