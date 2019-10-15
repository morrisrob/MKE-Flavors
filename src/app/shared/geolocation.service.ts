
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

/**
 * GeolocationService class.
 * https://developers.google.com/maps/documentation/javascript/
 * https://dev.w3.org/geo/api/spec-source.html
 */
@Injectable({
  providedIn: 'root',
}) 

export class GeolocationService {
  
  /**
   * Tries HTML5 geolocation.
   *
   * Wraps the Geolocation API into an observable.
   *
   * @return An observable of Position
   */
  // getCurrentPosition(): Observable<Position> {
  //   return Observable.create((observer: Observer<Position>) => {
  //     // Invokes getCurrentPosition method of Geolocation API.
  //     navigator.geolocation.getCurrentPosition(
  //       (position: Position) => {
  //         observer.next(position);
  //         observer.complete();
  //       },
  //       (error: PositionError) => {
  //         console.log('Geolocation service: ' + error.message);
  //         observer.error(error);
  //       }
  //     );
  //   });
  // }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        }, {timeout: 5000});
    });

  }

}