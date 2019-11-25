import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-manual-add-flavors",
  templateUrl: "./manual-add-flavors.component.html",
  styleUrls: ["./manual-add-flavors.component.css"]
})
export class ManualAddFlavorsComponent implements OnInit {
  title = "Add Flavor";
  addFlavorForm = new FormGroup({
    locationId: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    flavor: new FormControl("", [Validators.required])
  });

  

  onSubmit() {
    console.log("yeah");
    let formData = this.addFlavorForm.value;
    let formDataJSON = JSON.stringify(formData);
    this.http
      .post("/api/add-flavor", formData, {
      })
      .subscribe();

    console.log("formData is " + FormData);
    console.log("formDataJSON is " + formDataJSON);
    this.addFlavorForm.reset();
  }

  SERVER_URL = "/api/";
  uploadForm: FormGroup;

  constructor(private http: HttpClient) {

    
  }

  ngOnInit() {
  }
}
