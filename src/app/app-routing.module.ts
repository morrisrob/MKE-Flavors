import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { LocationdisplayComponent } from "./locationdisplay/locationdisplay.component";
import { AddLocationComponent } from "./add-location/add-location.component";
import { ContactformComponent } from "./contactform/contactform.component";
import { ManualAddFlavorsComponent } from "./manual-add-flavors/manual-add-flavors.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AuthGuard } from "../app/authentication/auth.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "../app/authentication/interceptor.service";
import { ExternalApiComponent } from './external-api/external-api.component';

const routes: Routes = [
  { path: "map", component: MapComponent },
  {
    path: 'external-api',
    component: ExternalApiComponent,
  },
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
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule {}
