import { Component, OnInit } from "@angular/core";
import { AuthService } from "../authentication/auth.service";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  responseJson: string;
  constructor(public auth: AuthService, private api: ApiService) {}

  updateAllFlavors() {
    this.api.updateFlavors().subscribe(res => (this.responseJson = res));
  }
  ngOnInit() {}
}
