import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./authentication/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  locations;

  constructor(private http: HttpClient, private auth: AuthService) {}
  ngOnInit(): void {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }
}
