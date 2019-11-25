(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"addLocationForm\" (ngSubmit)=\"onSubmit()\">\n  <label>\n    <input\n      matInput\n      placeholder=\"Location Name\"\n      formControlName=\"name\"\n      required\n      id=\"name\"\n    />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"Address\"\n      formControlName=\"address\"\n      required\n      id=\"address\"\n    />\n  </label>\n  <label>\n    <input matInput placeholder=\"City\" formControlName=\"city\" id=\"city\" />\n  </label>\n  <label>\n    <input matInput placeholder=\"State\" formControlName=\"state\" id=\"state\" />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"Zip Code\"\n      email\n      formControlName=\"zip\"\n      required\n      id=\"zip\"\n    />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"Latitude\"\n      email\n      formControlName=\"lat\"\n      required\n      id=\"lat\"\n    />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"Longitude\"\n      email\n      formControlName=\"long\"\n      required\n      id=\"long\"\n    />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"URL\"\n      email\n      formControlName=\"URL\"\n      required\n      id=\"URL\"\n    />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"CSS Flavor Selector\"\n      email\n      formControlName=\"flavorSelector\"\n      required\n      id=\"flavorSelector\"\n    />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"CSS Description Selector\"\n      email\n      formControlName=\"descriptionSelector\"\n      required\n      id=\"descriptionSelector\"\n    />\n  </label>\n  <br />\n  <button mat-flat-button color=\"primary\">Submit</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<div class=\"container\">\n  <header>\n    <app-navbar></app-navbar>\n  </header>\n  <router-outlet></router-outlet>\n  <footer></footer>\n</div>\n\n<!-- \n\n  <div class=\"container\">\n  <app-navbar></app-navbar>\n  <div>\n  </div>\n  <div>\n    <app-locationdisplay></app-locationdisplay>\n  </div>\n  <div>\n    <app-map></app-map>\n  </div>\n</div> -->\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<!-- <router-outlet></router-outlet> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"contactText\">\n    <h4>\n      Let us know if you have questions, comments, or a location that you'd like\n      to have added!\n      <p></p>\n      <p>\n        If you own or manage a frozen custard shop in the Milwaukee area and you\n        don't post your flavor of the day online, but would like to be included\n        here, please reach out as we can provide a free and easy way to add your\n        daily flavor here.\n      </p>\n    </h4>\n  </div>\n  <form\n    ngNoForm\n    action=\"https://mailthis.to/mkeflavors@gmail.com\"\n    method=\"POST\"\n    encType=\"multipart/form-data\"\n  >\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input\n        type=\"text\"\n        name=\"name\"\n        class=\"form-control\"\n        id=\"inputName\"\n        aria-describedby=\"nameHelp\"\n        placeholder=\"Enter Name\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"_replyto\">Email address</label>\n      <input\n        type=\"email\"\n        name=\"_replyto\"\n        class=\"form-control\"\n        id=\"inputEmail\"\n        aria-describedby=\"emailHelp\"\n        placeholder=\"Enter Email\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"message\">Message</label>\n      <textarea\n        name=\"message\"\n        class=\"form-control\"\n        id=\"inputMessage\"\n        rows=\"3\"\n        placeholder=\"Enter Message\"\n      ></textarea>\n    </div>\n    <input\n      type=\"hidden\"\n      name=\"_confirmation\"\n      value=\"Thank you.  We'll be in touch!\"\n    />\n    <input type=\"hidden\" name=\"_subject\" value=\"Contact form submitted\" />\n    <input type=\"hidden\" name=\"_after\" value=\"https://mkeflavors.com\" />\n    <input type=\"submit\" value=\"Send\" class=\"btn btn-primary\" Submit />\n  </form>\n\n  <app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/external-api/external-api.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/external-api/external-api.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"pingApi()\">Ping API</button>\n\n<pre *ngIf=\"responseJson\">\n<code>{{ responseJson | json }}</code>\n</pre>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"footer\" class=\"page-footer font-small blue\">\n  <div class=\"footer-copyright text-center py-3\">\n    © 2019 Copyright:\n    <a href=\"http://www.mkeflavors.com\"> MKE Flavors</a>\n  </div>\n  <div id=\"disclaimer\" class=\"text-center\">\n    This web site is not endorsed by, directly affiliated with, maintained,\n    authorized, or sponsored by any of the restaurants included in this\n    directory. All product and company names are the registered trademarks of\n    their original owners. The use of any trade name or trademark is for\n    identification and reference purposes only and does not imply any\n    association with the trademark holder of their product brand.\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locationdisplay/locationdisplay.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locationdisplay/locationdisplay.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container' id='dateDisplay'>Here are the flavors for {{today | date:'EEEE, MMMM d'}}!</div>\n<div *ngIf=\"dataLoaded != true\">\n\n    <div id=\"loadingSpinner\" class=\"d-flex justify-content-center\">\n        <div class=\"spinner-border\" role=\"status\">\n            <br>\n            <br>\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"dataLoaded\">\n<div class='container'>\n    <div id='searchBoxDiv'>\n        <input class='form-control' id='searchBox' type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search\">\n    </div>\n    \n    <ng-container *ngFor=\"let location of locations | filter:term | paginate: { itemsPerPage: 10, currentPage: p }; let k = index \">\n        <div class=\"card mt-2\">\n            <div class=\"card-header\"><h2><a href={{location.URL}}>{{location.name}}</a><span id=\"geoDistance\" *ngIf=\"geoLocationSupported != false\" class=\"badge badge-secondary\" style=\"float:right;\">{{ location.distance }} Mile<span *ngIf=\"location.distance != 1\">s</span></span></h2>\n                <div id=\"addressDiv\"><h5>{{location.address}}<br>{{location.city}}</h5></div>\n            </div>\n            <ng-container *ngFor=\"let flavors of location.flavors; let i = index\">\n                <div class=\"card-body\">\n                    <h3 class=\"card-title\">{{ flavors | titlecase }}</h3>\n                    <ng-container *ngFor=\"let description of location.descriptions; let j = index\">\n                    <div class=\"card-text\">\n                        <h4><p class=\"card-text\" *ngIf=\"i === j\">{{ description}}</p></h4>\n                    </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>\n    <div class=\"text-xs-center\" id=\"paginationControls\">\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n</div>\n<app-footer></app-footer>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locationsearch/locationsearch.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locationsearch/locationsearch.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-inline md-form form-sm\">\n    <input class=\"form-control form-control-sm ml-3 w-40\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" mdbInput>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!auth.loggedIn\">You are logged out</div>\n\n<div>\n  <button (click)=\"auth.login()\" *ngIf=\"!auth.loggedIn\">Log In</button>\n  <button (click)=\"auth.logout()\" *ngIf=\"auth.loggedIn\">Log Out</button>\n</div>\n\n\n<div *ngIf=\"auth.loggedIn\">\n\n    <a href=\"addlocation\">Add Location</a><br>\n    <a href=\"manualaddflavors\">Add Flavor</a>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manual-add-flavors/manual-add-flavors.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manual-add-flavors/manual-add-flavors.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"addFlavorForm\" (ngSubmit)=\"onSubmit()\">\n  <label>\n    <input\n      matInput\n      placeholder=\"Location ID\"\n      formControlName=\"locationId\"\n      required\n      id=\"locationId\"\n    />\n  </label>\n  <label>\n    <input\n      matInput\n      placeholder=\"Date\"\n      formControlName=\"date\"\n      required\n      id=\"date\"\n    />\n  </label>\n  <label>\n    <input matInput placeholder=\"Flavor\" formControlName=\"flavor\" id=\"flavor\" />\n  </label>\n  <br />\n  <button mat-flat-button color=\"primary\">Submit</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div id=\"map\">\n    <agm-map [zoom]=\"12\" [latitude]=\"lat2\" [longitude]=\"lng2\">\n      <ng-container *ngFor=\"let location of locations\">\n        <agm-marker\n          [latitude]=\"location.lat\"\n          [longitude]=\"location.long\"\n          [label]=\"{\n            color: 'blue',\n            fontWeight: 'bold',\n            fontSize: '12px',\n            backgroundColor: 'red',\n            text: location.name\n          }\"\n          >>\n          <agm-info-window\n            ><h5>\n              <a href=\"{{ location.URL }}\">{{ location.name }}</a>\n            </h5>\n            <p>{{ location.flavors }}</p></agm-info-window\n          >\n        </agm-marker>\n      </ng-container>\n    </agm-map>\n  </div>\n  <app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img\n      src=\"assets/mkeflavors4.png\"\n      width=\"240\"\n      class=\"d-inline-block align-top\"\n      alt=\"MKE Flavors\"\n    />\n  </a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarText\"\n    aria-controls=\"navbarText\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\">List View</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"map\">Map View</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"contact\">Contact Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/twitterfeed/twitterfeed.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/twitterfeed/twitterfeed.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"twitter-timeline\" href=\"https://twitter.com/MKE_Flavors/lists/mke-flavors?ref_src=twsrc%5Etfw\">A Twitter List\n    by MKE_Flavors</a>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-location/add-location.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-location/add-location.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/add-location/add-location.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-location/add-location.component.ts ***!
  \********************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let AddLocationComponent = class AddLocationComponent {
    constructor(http) {
        this.http = http;
        this.title = "Add Location";
        this.addLocationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            long: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            URL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            flavorSelector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            descriptionSelector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
        this.SERVER_URL = "/api/";
    }
    onSubmit() {
        let formData = this.addLocationForm.value;
        let formDataJSON = JSON.stringify(formData);
        this.http
            .post("/api/addLocation", formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", `Bearer ${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH0_TOKEN}`)
        })
            .subscribe();
        console.log("formData is " + FormData);
        console.log("formDataJSON is " + formDataJSON);
        this.addLocationForm.reset();
    }
    ngOnInit() { }
};
AddLocationComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-location",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-location.component.css */ "./src/app/add-location/add-location.component.css")).default]
    })
], AddLocationComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _locationdisplay_locationdisplay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationdisplay/locationdisplay.component */ "./src/app/locationdisplay/locationdisplay.component.ts");
/* harmony import */ var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-location/add-location.component */ "./src/app/add-location/add-location.component.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _manual_add_flavors_manual_add_flavors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manual-add-flavors/manual-add-flavors.component */ "./src/app/manual-add-flavors/manual-add-flavors.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _app_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/authentication/auth.guard */ "./src/app/authentication/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_authentication_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/authentication/interceptor.service */ "./src/app/authentication/interceptor.service.ts");
/* harmony import */ var _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./external-api/external-api.component */ "./src/app/external-api/external-api.component.ts");













const routes = [
    { path: "map", component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] },
    {
        path: 'external-api',
        component: _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_12__["ExternalApiComponent"],
    },
    {
        path: "addlocation",
        component: _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_5__["AddLocationComponent"],
        canActivate: [_app_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    },
    {
        path: "manualaddflavors",
        component: _manual_add_flavors_manual_add_flavors_component__WEBPACK_IMPORTED_MODULE_7__["ManualAddFlavorsComponent"],
        canActivate: [_app_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    },
    { path: "contact", component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_6__["ContactformComponent"] },
    { path: "login", component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"] },
    { path: "**", component: _locationdisplay_locationdisplay_component__WEBPACK_IMPORTED_MODULE_4__["LocationdisplayComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                useClass: _app_authentication_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["InterceptorService"],
                multi: true
            }
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\nul {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/auth.service */ "./src/app/authentication/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.title = "app";
    }
    ngOnInit() {
        this.auth.localAuthSetup();
        this.auth.handleAuthCallback();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _locationdisplay_locationdisplay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locationdisplay/locationdisplay.component */ "./src/app/locationdisplay/locationdisplay.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _locationsearch_locationsearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locationsearch/locationsearch.component */ "./src/app/locationsearch/locationsearch.component.ts");
/* harmony import */ var _location_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location-filter.pipe */ "./src/app/location-filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-location/add-location.component */ "./src/app/add-location/add-location.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");
/* harmony import */ var _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/getlocations.service */ "./src/app/shared/getlocations.service.ts");
/* harmony import */ var _twitterfeed_twitterfeed_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./twitterfeed/twitterfeed.component */ "./src/app/twitterfeed/twitterfeed.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _manual_add_flavors_manual_add_flavors_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./manual-add-flavors/manual-add-flavors.component */ "./src/app/manual-add-flavors/manual-add-flavors.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./external-api/external-api.component */ "./src/app/external-api/external-api.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _location_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["LocationFilterPipe"],
            _locationdisplay_locationdisplay_component__WEBPACK_IMPORTED_MODULE_7__["LocationdisplayComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _locationsearch_locationsearch_component__WEBPACK_IMPORTED_MODULE_9__["LocationsearchComponent"],
            _location_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["LocationFilterPipe"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_14__["MapComponent"],
            _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_15__["AddLocationComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
            _twitterfeed_twitterfeed_component__WEBPACK_IMPORTED_MODULE_19__["TwitterfeedComponent"],
            _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_21__["ContactformComponent"],
            _manual_add_flavors_manual_add_flavors_component__WEBPACK_IMPORTED_MODULE_22__["ManualAddFlavorsComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_23__["LoginPageComponent"],
            _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_24__["ExternalApiComponent"]
        ],
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyBR7bGUdRRxG8QHkcR3RNc2fnbNLfSgZ9M"
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [_shared_geolocation_service__WEBPACK_IMPORTED_MODULE_17__["GeolocationService"], _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_18__["GetlocationsService"], _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/authentication/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthGuard = class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(loggedIn => {
            if (!loggedIn) {
                this.auth.login(state.url);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/authentication/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/authentication/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()({
            domain: "dev-zrnic0qj.auth0.com",
            client_id: "yFZLdtAgQnqzkH6rai55VdgGB8u86AJ9",
            redirect_uri: `${window.location.origin}`,
            audience: "https://mkeflavors.com/api"
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => (this.loggedIn = res)));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
    }
    getTokenSilently$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getTokenSilently(options))));
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
        }));
        checkAuth$.subscribe();
    }
    login(redirectPath = "/") {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: `${window.location.origin}`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Call when app reloads after user logs in with Auth0
        const params = window.location.search;
        if (params.includes("code=") && params.includes("state=")) {
            let targetRoute; // Path to redirect to after login processsed
            const authComplete$ = this.handleRedirectCallback$.pipe(
            // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(cbRes => {
                // Get and set target redirect route from callback results
                targetRoute =
                    cbRes.appState && cbRes.appState.target
                        ? cbRes.appState.target
                        : "/";
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(() => {
                // Redirect callback complete; get user and login status
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.getUser$(), this.isAuthenticated$]);
            }));
            // Subscribe to authentication completion observable
            // Response will be an array of user and login status
            authComplete$.subscribe(([user, loggedIn]) => {
                // Redirect to target route after callback processing
                this.router.navigate([targetRoute]);
            });
        }
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: "yFZLdtAgQnqzkH6rai55VdgGB8u86AJ9",
                returnTo: `${window.location.origin}`
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/authentication/interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let InterceptorService = class InterceptorService {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        return this.auth.getTokenSilently$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(token => {
            const tokenReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
            return next.handle(tokenReq);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], InterceptorService);



/***/ }),

/***/ "./src/app/contactform/contactform.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactform/contactform.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: normal;\n  margin: 5px 0 0 0;\n}\n\n.contactText {\n  margin-top: 20px;\n}\n\n.form-group {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  line-height: 17px;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGZvcm0vY29udGFjdGZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0Zm9ybS9jb250YWN0Zm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA1cHggMCAwIDA7XG59XG5cbi5jb250YWN0VGV4dCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/contactform/contactform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactform/contactform.component.ts ***!
  \******************************************************/
/*! exports provided: ContactformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactformComponent", function() { return ContactformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactformComponent = class ContactformComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactform.component.css */ "./src/app/contactform/contactform.component.css")).default]
    })
], ContactformComponent);



/***/ }),

/***/ "./src/app/external-api/external-api.component.css":
/*!*********************************************************!*\
  !*** ./src/app/external-api/external-api.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybmFsLWFwaS9leHRlcm5hbC1hcGkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/external-api/external-api.component.ts":
/*!********************************************************!*\
  !*** ./src/app/external-api/external-api.component.ts ***!
  \********************************************************/
/*! exports provided: ExternalApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApiComponent", function() { return ExternalApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



let ExternalApiComponent = class ExternalApiComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() { }
    pingApi() {
        this.api.ping$().subscribe(res => (this.responseJson = res));
    }
};
ExternalApiComponent.ctorParameters = () => [
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ExternalApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-external-api",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./external-api.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/external-api/external-api.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./external-api.component.css */ "./src/app/external-api/external-api.component.css")).default]
    })
], ExternalApiComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\n  padding: 30px 0;\n}\n\n#disclaimer {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  line-height: 10px;\n  font-weight: lighter;\n}\n\n.footer-copyright {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbiNkaXNjbGFpbWVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uZm9vdGVyLWNvcHlyaWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/location-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/location-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: LocationFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFilterPipe", function() { return LocationFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocationFilterPipe = class LocationFilterPipe {
    transform(value, input) {
        if (input) {
            input = input;
            return value.filter(function (el) {
                return el.toString().indexOf(input) > -1;
            });
        }
        return value;
    }
};
LocationFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'FilterPipe',
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LocationFilterPipe);



/***/ }),

/***/ "./src/app/locationdisplay/locationdisplay.component.css":
/*!***************************************************************!*\
  !*** ./src/app/locationdisplay/locationdisplay.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("menu,\nol,\nul {\n  padding: 0;\n}\ndd {\n  margin: 0;\n}\n#searchBoxDiv {\n  padding-left: 0;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n#loadingSpinner {\n  margin: auto;\n  padding: 70px 0;\n}\n#addressDiv {\n  margin-top: 5px;\n  font-size: small;\n  line-height: 1.5;\n}\n#dateDisplay {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  background-color: #669900;\n  color: white;\n  text-align: center;\n}\n#geoDistance {\n  font-size: small;\n  font-weight: normal;\n  margin-top: 3px;\n  padding: 5px 10px 5px 10px;\n}\na:link {\n  color: #006699;\n}\na:visited {\n  color: #006699;\n}\n.card-body {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}\n.card-header {\n  padding-right: 2px;\n  padding-left: 10px;\n}\n.container {\n  padding-right: 5px;\n  padding-left: 5px;\n}\nh2 {\n  padding-right: 15px;\n  font-family: \"Alegreya\", serif;\n  font-weight: 800;\n  line-height: 20px;\n  font-size: 20px;\n  margin: 0 0 0 0;\n}\nh3 {\n  padding-right: 15px;\n  font-family: \"Alegreya\", serif;\n  font-weight: 700;\n  line-height: 18px;\n  font-size: 17px;\n  margin: 0 0 0 0;\n}\nh4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  line-height: 20px;\n  margin: 5px 0 0 0;\n}\nh5 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  line-height: 20px;\n  margin: 0 0 0 0;\n}\n.badge {\n  background-color: #669900;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  line-height: 15px;\n  margin: 0 0 0 0;\n  width: 80px;\n}\n#paginationControls {\n  margin-top: 25px;\n  margin-left: -60px;\n  display: flex;\n  justify-content: center;\n}\n.ngx-pagination {\n  margin-left: -40px;\n}\nul {\n  margin-left: -40px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25kaXNwbGF5L2xvY2F0aW9uZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uZGlzcGxheS9sb2NhdGlvbmRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1lbnUsXG5vbCxcbnVsIHtcbiAgcGFkZGluZzogMDtcbn1cbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jc2VhcmNoQm94RGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4jbG9hZGluZ1NwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuI2FkZHJlc3NEaXYge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiNkYXRlRGlzcGxheSB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Njk5MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZ2VvRGlzdGFuY2Uge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xufVxuXG5hOmxpbmsge1xuICBjb2xvcjogIzAwNjY5OTtcbn1cblxuYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwMDY2OTk7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5oMiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZWdyZXlhXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbmgzIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiQWxlZ3JleWFcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA1cHggMCAwIDA7XG59XG5cbmg1IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTkwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbiNwYWdpbmF0aW9uQ29udHJvbHMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmd4LXBhZ2luYXRpb24ge1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG59XG5cbnVsIHtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/locationdisplay/locationdisplay.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/locationdisplay/locationdisplay.component.ts ***!
  \**************************************************************/
/*! exports provided: LocationdisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationdisplayComponent", function() { return LocationdisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let LocationdisplayComponent = class LocationdisplayComponent {
    constructor(http, geoLocation, getLocations, datePipe) {
        this.http = http;
        this.geoLocation = geoLocation;
        this.getLocations = getLocations;
        this.datePipe = datePipe;
        this.today = new Date();
        this.jstoday = "";
        this.p = 1;
        this.timeoutDisplayLocations = () => {
            this.geoLocationSupported = false;
            this.dataLoaded = true;
        };
        this.getLocationDistances = () => {
            let distanceArray = [];
            for (let i = 0; i < this.locations.length; i++) {
                let locLat = this.locations[i].lat;
                let locLong = this.locations[i].long;
                let distance = this.distance(this.lat2, this.lng2, locLat, locLong, "M");
                let distanceRounded = Math.round(distance * 10) / 10;
                distanceArray.push(distanceRounded);
            }
            this.distances = distanceArray;
            this.addDistanceToArray();
            this.locations.sort(function (a, b) {
                return a.distance - b.distance;
            });
            this.dataLoaded = true;
        };
        this.addDistanceToArray = () => {
            for (let i = 0; i < this.locations.length; i++) {
                this.locations[i].distance = this.distances[i];
            }
        };
        this.distance = (lat1, lon1, lat2, lon2, unit) => {
            if (lat1 == lat2 && lon1 == lon2) {
                return 0;
            }
            else {
                var radlat1 = (Math.PI * lat1) / 180;
                var radlat2 = (Math.PI * lat2) / 180;
                var theta = lon1 - lon2;
                var radtheta = (Math.PI * theta) / 180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) +
                    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = (dist * 180) / Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit == "K") {
                    dist = dist * 1.609344;
                }
                if (unit == "N") {
                    dist = dist * 0.8684;
                }
                return dist;
            }
        };
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.today, "EEEE, MMMM d, y", "en-US", "+0530");
    }
    ngOnInit() {
        this.getLocations.getLocations().then(loc => {
            this.locations = loc.loc;
            this.locations.sort((a, b) => a.name.localeCompare(b.name));
            this.geoLocation
                .getPosition()
                .then(pos => {
                this.lng2 = pos.lng;
                this.lat2 = pos.lat;
                this.getLocationDistances();
            })
                .catch(err => {
                console.log(err.message);
                this.geoLocationSupported = false;
                this.dataLoaded = true;
            });
        });
    }
    sortFunction(a, b) {
        if (a.distance === b.distance) {
            return 0;
        }
        else {
            return a.distance < b.distance ? -1 : 1;
        }
    }
};
LocationdisplayComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_4__["GeolocationService"] },
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
LocationdisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-locationdisplay",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locationdisplay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locationdisplay/locationdisplay.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./locationdisplay.component.css */ "./src/app/locationdisplay/locationdisplay.component.css")).default]
    })
], LocationdisplayComponent);



/***/ }),

/***/ "./src/app/locationsearch/locationsearch.component.css":
/*!*************************************************************!*\
  !*** ./src/app/locationsearch/locationsearch.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uc2VhcmNoL2xvY2F0aW9uc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/locationsearch/locationsearch.component.ts":
/*!************************************************************!*\
  !*** ./src/app/locationsearch/locationsearch.component.ts ***!
  \************************************************************/
/*! exports provided: LocationsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsearchComponent", function() { return LocationsearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocationsearchComponent = class LocationsearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
LocationsearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locationsearch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locationsearch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locationsearch/locationsearch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./locationsearch.component.css */ "./src/app/locationsearch/locationsearch.component.css")).default]
    })
], LocationsearchComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");



let LoginPageComponent = class LoginPageComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
};
LoginPageComponent.ctorParameters = () => [
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/manual-add-flavors/manual-add-flavors.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/manual-add-flavors/manual-add-flavors.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVhbC1hZGQtZmxhdm9ycy9tYW51YWwtYWRkLWZsYXZvcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/manual-add-flavors/manual-add-flavors.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/manual-add-flavors/manual-add-flavors.component.ts ***!
  \********************************************************************/
/*! exports provided: ManualAddFlavorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualAddFlavorsComponent", function() { return ManualAddFlavorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ManualAddFlavorsComponent = class ManualAddFlavorsComponent {
    constructor(http) {
        this.http = http;
        this.title = "Add Flavor";
        this.addFlavorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            locationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            flavor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.SERVER_URL = "/api/";
    }
    onSubmit() {
        console.log("yeah");
        let formData = this.addFlavorForm.value;
        let formDataJSON = JSON.stringify(formData);
        this.http
            .post("/api/add-flavor", formData, {})
            .subscribe();
        console.log("formData is " + FormData);
        console.log("formDataJSON is " + formDataJSON);
        this.addFlavorForm.reset();
    }
    ngOnInit() {
    }
};
ManualAddFlavorsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ManualAddFlavorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-manual-add-flavors",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manual-add-flavors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manual-add-flavors/manual-add-flavors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manual-add-flavors.component.css */ "./src/app/manual-add-flavors/manual-add-flavors.component.css")).default]
    })
], ManualAddFlavorsComponent);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 400px;\n}\n\nh5 {\n  font-weight: 400;\n}\n\n#map {\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbmg1IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI21hcCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");





let MapComponent = class MapComponent {
    constructor(http, geoLocation, getLocations) {
        this.http = http;
        this.geoLocation = geoLocation;
        this.getLocations = getLocations;
        this.title = "Flavor Map";
    }
    ngOnInit() {
        this.geoLocation.getPosition().then(pos => {
            this.lng2 = pos.lng;
            this.lat2 = pos.lat;
        });
        this.getLocations.getLocations().then(loc => {
            this.locations = loc.loc;
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_4__["GeolocationService"] },
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-map",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-link {\n  margin-left: 10px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.navbar {\n  padding-left: 0px;\n  padding-right: 10px;\n}\n\nh5 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  line-height: 14px;\n  font-weight: 400;\n  margin: 0 0 0 0;\n}\n\n#slogan {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5oNSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbiNzbG9nYW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(handler) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](handler);
    }
    ping$() {
        return this.httpClient.get("/api/locations");
    }
    getLocations() {
        return new Promise((resolve, reject) => {
            this.httpClient.get("/api/locations").subscribe(resp => {
                resolve({ loc: resp });
            }, err => {
                reject(err);
            });
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ApiService);



/***/ }),

/***/ "./src/app/shared/geolocation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/geolocation.service.ts ***!
  \***********************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * GeolocationService class.
 * https://developers.google.com/maps/documentation/javascript/
 * https://dev.w3.org/geo/api/spec-source.html
 */
let GeolocationService = class GeolocationService {
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject(err);
            }, { timeout: 5000 });
        });
    }
    getCurrentPosition() {
        if (navigator.geolocation) {
            return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
        }
        else {
            return new Promise(resolve => resolve({}));
        }
    }
};
GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], GeolocationService);



/***/ }),

/***/ "./src/app/shared/getlocations.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/getlocations.service.ts ***!
  \************************************************/
/*! exports provided: GetlocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetlocationsService", function() { return GetlocationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetlocationsService = class GetlocationsService {
    constructor(http) {
        this.http = http;
    }
    getLocations() {
        return new Promise((resolve, reject) => {
            this.http.get('/api/locations').subscribe(resp => {
                resolve({ loc: resp });
            }, err => {
                reject(err);
            });
        });
    }
};
GetlocationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetlocationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetlocationsService);



/***/ }),

/***/ "./src/app/twitterfeed/twitterfeed.component.css":
/*!*******************************************************!*\
  !*** ./src/app/twitterfeed/twitterfeed.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXJmZWVkL3R3aXR0ZXJmZWVkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/twitterfeed/twitterfeed.component.ts":
/*!******************************************************!*\
  !*** ./src/app/twitterfeed/twitterfeed.component.ts ***!
  \******************************************************/
/*! exports provided: TwitterfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterfeedComponent", function() { return TwitterfeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TwitterfeedComponent = class TwitterfeedComponent {
    constructor() { }
    ngOnInit() {
    }
};
TwitterfeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-twitterfeed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./twitterfeed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/twitterfeed/twitterfeed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./twitterfeed.component.css */ "./src/app/twitterfeed/twitterfeed.component.css")).default]
    })
], TwitterfeedComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    AUTH0_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJVRkVPRFZCTmtORE1EZzBSakE1T0VVNE5ERXhRVU15UkRkRFFUWkRRVFJDUWtGQk56UTROQSJ9.eyJpc3MiOiJodHRwczovL2Rldi16cm5pYzBxai5hdXRoMC5jb20vIiwic3ViIjoiTksxWkFGN1VmVUE3S2x3QXkwVUJPbzdTZ2dCMjVKOTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbWtlZmxhdm9ycy5jb20vYXBpIiwiaWF0IjoxNTc0MTE1NDA0LCJleHAiOjE1NzQyMDE4MDQsImF6cCI6Ik5LMVpBRjdVZlVBN0tsd0F5MFVCT283U2dnQjI1SjkwIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.n0-_wsr2s0gnr9FHJiLOp1u_tGXXR04UCmNrtooY6pYmye_17megu3s1siNsdWM9vBUGDYtv3Wt3iWPj8FomPs_EDVctWhVRjZe6GGzlHkpnUKX6DkavDBhQHfal5OHzXRq0S8pWdxvzuLkov_S44goKRgK-G-QiYjGtkloCwvieZ7XNm3mkpUEZEQspek-ehGvtcdx1oZCofRvGJArdjFIoYY2iGeDU5JLoikIrE48U8HT5zTCz674AM3C0HI-4Z5JDvKocV_o_NER_B7qy_Y3c1-oAmCOd_vCHDNdjiFtGXIWpQErxsXJb9E-8FH5FloKFIcwNZzuH9cNugOAEcA",
    AUTH0_DOMAIN: "dev-zrnic0qj.auth0.com",
    AUTH0_CLIENT_ID: "yFZLdtAgQnqzkH6rai55VdgGB8u86AJ9"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/morris/the_odin_project/flavorFinder/MKE-Flavors/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map