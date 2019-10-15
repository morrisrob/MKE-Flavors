// import { NgModule } from '@angular/core';
// import { Component } from '@angular/core';
// import { Location } from './location';
// import { GetdataService } from './getdata.service';

// @NgModule({
//     providers: [GetdataService],
// })

// @Component({
//   selector: 'app-root',
//   template: `
// <h1>{{title}}</h1>

// <div *ngFor="let location of locations">

//   <h4>
//     <a [title]="location.name + ' details'">
//       {{ location.name }}
//     </a>
//   </h4>

//   <p *ngFor="let flavors of location.flavors">
//     {{ flavors }}
//   </p>

// </div>
//   `

// })

// export class AppComponent {
//   title = 'MKE Flavors';
  
//   // locations = [
//   //   new Location('Kopps', '10700 W. Bluemound', 'Brookfield', 'WI', '53186', 'http://www.kopps.com', ['#page > div.wrap.todays-flavors-wrap.home-flavors > div:nth-child(1) > div:nth-child(1) > h3', '#page > div.wrap.todays-flavors-wrap.home-flavors > div:nth-child(1) > div:nth-child(2) > h3'], ['descriptionSelector'], ['chocolate', 'vanilla']),
//   //   new Location('Murfs', '1234 Shady Lane', 'Waukesha', 'WI', '53222', 'http://murfsfrozencustard.com', ['#flavorContainer > div.homeFlavorBlockLower > div.homeFlavorOfTheDay > div > div > div.flavorOfDayImg > div > span.flavorOfDayWhiteSpan'], ['#flavorContainer > div.homeFlavorBlockLower > div.homeFlavorOfTheDay > div > div > span'], ['mint'])
//   // ];
//   // myLocation = this.locations[0];

// }


// // })
// // export class AppComponent {
// //   title = 'MKE-Flavors';
// // }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  
})


export class AppComponent implements OnInit {
  title = 'app';
  locations;

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    
    // this.http.get('http://localhost:3000/api/locations').subscribe(data => {
    //   // console.log(data);
      
    //   this.locations = data;
    //   console.log(this.locations);
    // });
  }
  
}


