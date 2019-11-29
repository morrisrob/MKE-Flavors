import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-external-api",
  templateUrl: "./external-api.component.html",
  styleUrls: ["./external-api.component.css"]
})
export class ExternalApiComponent implements OnInit {
  responseJson: string;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  getAllLocations() {
    this.api.ping$().subscribe(res => (this.responseJson = res));
  }

  pingApi() {
    this.api.ping$().subscribe(res => (this.responseJson = res));
  }
}
