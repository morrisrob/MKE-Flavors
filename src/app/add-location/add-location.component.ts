import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.css"]
})
export class AddLocationComponent implements OnInit {
  title = "Add Location";
  addLocationForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    city: new FormControl(""),
    state: new FormControl("", [Validators.required]),
    zip: new FormControl(""),
    lat: new FormControl(""),
    long: new FormControl(""),
    URL: new FormControl(""),
    flavorSelector: new FormControl(""),
    descriptionSelector: new FormControl("")
  });

  onSubmit() {
    let formData = this.addLocationForm.value;
    let formDataJSON = JSON.stringify(formData);
    this.http
      .post("/api/addLocation", formData, {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${environment.AUTH0_TOKEN}`
        )
      })
      .subscribe();

    console.log("formData is " + FormData);
    console.log("formDataJSON is " + formDataJSON);
    this.addLocationForm.reset();
  }

  SERVER_URL = "/api/";
  uploadForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
