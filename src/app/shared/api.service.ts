import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  ping$(): Observable<any> {
    return this.httpClient.get("/api/locations");
  }

  updateFlavors(): Observable<any> {
    return this.httpClient.get("api/update-all-flavors");
  }

  getLocations(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get("/api/locations").subscribe(
        resp => {
          resolve({ loc: resp });
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
