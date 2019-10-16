import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  title = 'Add Location';
  addLocationForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  address: new FormControl('', [Validators.required]),
  city: new FormControl(''),
  state: new FormControl('', [Validators.required]),
  zip: new FormControl(''),
  lat: new FormControl(''),
  long: new FormControl(''),
  URL: new FormControl(''),
  flavorSelector: new FormControl(''),
  descriptionSelector: new FormControl(''),
  });

  onSubmit() {
    let formData = this.addLocationForm.value;
    let formDataJSON = JSON.stringify(formData);
    this.http.post('/api/addLocation', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error))

      console.log('formData is ' + FormData);
      console.log('formDataJSON is ' + formDataJSON);
      this.addLocationForm.reset();

    // console.log(this.addLocationForm);
    // alert(JSON.stringify(this.addLocationForm.value));
  }

  SERVER_URL = "/api/";
  uploadForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append("name", this.form.get('name').value);
  //   formData.append("avatar", this.form.get('avatar').value);

    // this.http.post('/api/addLocation', formData).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
  //   )
  // }
}
