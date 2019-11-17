import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LocationdisplayComponent } from './locationdisplay/locationdisplay.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ManualAddFlavorsComponent } from './manual-add-flavors/manual-add-flavors.component';


const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'addlocation', component: AddLocationComponent },
  { path: 'manualaddflavors', component: ManualAddFlavorsComponent},
  { path: 'contact', component: ContactformComponent },
  { path: '**', component: LocationdisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
