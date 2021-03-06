import { ApiService } from "./shared/api.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LocationdisplayComponent } from "./locationdisplay/locationdisplay.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LocationsearchComponent } from "./locationsearch/locationsearch.component";
import { LocationFilterPipe } from "./shared/location-filter.pipe";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AgmCoreModule } from "@agm/core";
import { MapComponent } from "./map/map.component";
import { AddLocationComponent } from "./add-location/add-location.component";
import { FooterComponent } from "./footer/footer.component";
import { GeolocationService } from "./shared/geolocation.service";
import { GetlocationsService } from "./shared/getlocations.service";
import { TwitterfeedComponent } from "./twitterfeed/twitterfeed.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { ContactformComponent } from "./contactform/contactform.component";
import { ManualAddFlavorsComponent } from "./manual-add-flavors/manual-add-flavors.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ExternalApiComponent } from "./external-api/external-api.component";

@NgModule({
  declarations: [
    AppComponent,
    LocationFilterPipe,
    LocationdisplayComponent,
    NavbarComponent,
    LocationsearchComponent,
    LocationFilterPipe,
    MapComponent,
    AddLocationComponent,
    FooterComponent,
    TwitterfeedComponent,
    ContactformComponent,
    ManualAddFlavorsComponent,
    LoginPageComponent,
    ExternalApiComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBR7bGUdRRxG8QHkcR3RNc2fnbNLfSgZ9M"
    }),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GeolocationService, GetlocationsService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
