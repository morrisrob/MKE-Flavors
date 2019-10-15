import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { GetdataService } from './getdata.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { LocationdisplayComponent } from './locationdisplay/locationdisplay.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationsearchComponent } from './locationsearch/locationsearch.component';
import { LocationFilterPipe } from './location-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { FooterComponent } from './footer/footer.component';
import { GeolocationService } from './shared/geolocation.service';
import { GetlocationsService } from './shared/getlocations.service';
import { TwitterfeedComponent } from './twitterfeed/twitterfeed.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationFilterPipe,
    TestComponentComponent,
    Comp1Component,
    Comp2Component,
    LocationdisplayComponent,
    NavbarComponent,
    LocationsearchComponent,
    LocationFilterPipe,
    MapComponent,
    AddLocationComponent,
    FooterComponent,
    TwitterfeedComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBR7bGUdRRxG8QHkcR3RNc2fnbNLfSgZ9M'
    }),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetdataService, GeolocationService, GetlocationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
