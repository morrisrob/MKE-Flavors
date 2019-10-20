import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetlocationsService {

  getLocations(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('/api/locations').subscribe(resp => {
        resolve({loc: resp});
      },
        err => {
          reject(err);
        });
    });

  }
  constructor(private http: HttpClient) { }
}
