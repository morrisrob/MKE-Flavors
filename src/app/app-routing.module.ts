import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { LocationdisplayComponent } from "./locationdisplay/locationdisplay.component";
import { AddLocationComponent } from "./add-location/add-location.component";
import { ContactformComponent } from "./contactform/contactform.component";
import { ManualAddFlavorsComponent } from "./manual-add-flavors/manual-add-flavors.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "map", component: MapComponent },
  {
    path: "addlocation",
    component: AddLocationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "manualaddflavors",
    component: ManualAddFlavorsComponent,
    canActivate: [AuthGuard]
  },
  { path: "contact", component: ContactformComponent },
  { path: "login", component: LoginPageComponent },
  { path: "**", component: LocationdisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
