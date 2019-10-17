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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class='container'>\n    <form>\n        <div class=\"form-group\">\n            <label for=\"name\" class=\"control-label\">Location Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Location Name\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"address\" class=\"control-label\">Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Address\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"city\" class=\"control-label\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\" placeholder=\"City\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"state\" class=\"control-label\">State</label>\n            <input type=\"text\" class=\"form-control\" id=\"state\" name=\"state\" placeholder=\"State\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"zip\" class=\"control-label\">Zip Code</label>\n            <input type=\"text\" class=\"form-control\" id=\"zip\" name=\"zip\" placeholder=\"Zip Code\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"latitude\" class=\"control-label\">Latitude</label>\n            <input type=\"text\" class=\"form-control\" id=\"latitude\" name=\"latitude\" placeholder=\"Latitude\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"longitude\" class=\"control-label\">Longitude</label>\n            <input type=\"text\" class=\"form-control\" id=\"longitude\" name=\"longitude\" placeholder=\"Longitude\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"url\" class=\"control-label\">URL</label>\n            <input type=\"text\" class=\"form-control\" id=\"url\" name=\"url\" placeholder=\"URL\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"flavorSelector\" class=\"control-label\">CSS Flavor Selector</label>\n            <input type=\"text\" class=\"form-control\" id=\"flavorSelector\" name=\"flavorSelector\" placeholder=\"CSS Flavor Selector\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"descriptionSelector\" class=\"control-label\">CSS Description Selector</label>\n            <input type=\"text\" class=\"form-control\" id=\"descriptionSelector\" name=\"descriptionSelector\" placeholder=\"CSS Description Selector\">\n        </div>\n\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\">Add Location</button>\n        </div>\n    </form>\n</div> -->\n\n\n<form [formGroup]=\"addLocationForm\" (ngSubmit)=\"onSubmit()\">\n    <label>\n        <input matInput placeholder=\"Location Name\" formControlName=\"name\" required id=\"name\">\n    </label>\n    <label>\n        <input matInput placeholder=\"Address\" formControlName=\"address\" required id=\"address\">\n    </label>\n    <label>\n        <input matInput placeholder=\"City\" formControlName=\"city\" id=\"city\">\n    </label>\n    <label>\n        <input matInput placeholder=\"State\" formControlName=\"state\" id=\"state\">\n    </label>\n    <label>\n        <input matInput placeholder=\"Zip Code\" email formControlName=\"zip\" required id=\"zip\">\n    </label>\n    <label>\n        <input matInput placeholder=\"Latitude\" email formControlName=\"lat\" required id=\"lat\">\n    </label>\n    <label>\n        <input matInput placeholder=\"Longitude\" email formControlName=\"long\" required id=\"long\">\n    </label>\n    <label>\n        <input matInput placeholder=\"URL\" email formControlName=\"URL\" required id=\"URL\">\n    </label>\n    <label>\n        <input matInput placeholder=\"CSS Flavor Selector\" email formControlName=\"flavorSelector\" required id=\"flavorSelector\">\n    </label>\n    <label>\n        <input matInput placeholder=\"CSS Description Selector\" email formControlName=\"descriptionSelector\" required id=\"descriptionSelector\">\n    </label>\n    <br />\n    <button mat-flat-button color=\"primary\">Submit</button>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n  <header>\n    <app-navbar></app-navbar>\n  </header>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  <footer>\n  </footer>\n</div>\n\n\n<!-- \n\n  <div class=\"container\">\n  <app-navbar></app-navbar>\n  <div>\n  </div>\n  <div>\n    <app-locationdisplay></app-locationdisplay>\n  </div>\n  <div>\n    <app-map></app-map>\n  </div>\n</div> -->\n\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n<!-- <router-outlet></router-outlet> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp1/comp1.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp1/comp1.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>comp1 works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp2/comp2.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp2/comp2.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>comp2 works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\n<footer id=\"footer\" class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n        <a href=\"http://www.mkeflavors.com\"> MKE Flavors</a>\n    </div>\n    <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locationdisplay/locationdisplay.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locationdisplay/locationdisplay.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container' id='dateDisplay'>Here are the flavors for {{today | date:'EEEE, MMMM d'}}!</div>\n<div *ngIf=\"dataLoaded != true\">\n\n    <div id=\"loadingSpinner\" class=\"d-flex justify-content-center\">\n        <div class=\"spinner-border\" role=\"status\">\n            <br>\n            <br>\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"dataLoaded\">\n<div class='container'>\n    <div id='searchBoxDiv'>\n        <input class='form-control' id='searchBox' type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search\">\n    </div>\n    \n    <ng-container *ngFor=\"let location of locations | filter:term; let k = index \">\n        <div class=\"card mt-2\">\n            <div class=\"card-header\"><h2><a href={{location.URL}}>{{location.name}}</a><span id=\"geoDistance\" *ngIf=\"geoLocationSupported != false\" class=\"badge badge-secondary\" style=\"float:right;\">{{ location.distance }} Miles</span></h2>\n                <div id=\"addressDiv\"><h5>{{location.address}}<br>{{location.city}}</h5></div>\n            </div>\n            <ng-container *ngFor=\"let flavors of location.flavors; let i = index\">\n                <div class=\"card-body\">\n                    <h3 class=\"card-title\">{{ flavors }}</h3>\n                    <ng-container *ngFor=\"let description of location.descriptions; let j = index\">\n                    <div class=\"card-text\">\n                        <h4><p class=\"card-text\" *ngIf=\"i === j\">{{ description}}</p></h4>\n                    </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>\n</div>\n<app-footer></app-footer>\n</div>\n\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\n<h1>{{ title }}</h1>\n<agm-map [zoom]=\"12\" [latitude]=\"lat2\" [longitude]=\"lng2\">\n<ng-container *ngFor=\"let location of locations\">\n    <agm-marker [latitude]=\"location.lat\" [longitude]=\"location.long\" [label]=\"{color: 'blue', fontWeight: 'bold', fontSize: '12px', backgroundColor:'red',  text: location.name}\">>\n        <agm-info-window><h5><a href={{location.URL}}>{{location.name}}</a></h5><p>{{location.flavors}}</p></agm-info-window>\n    </agm-marker>\n</ng-container>\n</agm-map>\n<app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <!-- <a class=\"navbar-brand\" href=\"#\">MKE Flavors</a> -->\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/mkeflavors4.png\" width=\"240\" class=\"d-inline-block align-top\"\n            alt=\"MKE Flavors\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\"\n        aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"map\">Map View</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\">List View</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Help</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<!-- <nav class=\"navbar navbar-light\" style=\"background-color: #0D496B;\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/MKEFlavors3.png\" width=\"120\" height=\"120\" alt=\"\">\n    </a>\n</nav> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-component/test-component.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-component/test-component.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>test-component works!</p>\n");

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




let AddLocationComponent = class AddLocationComponent {
    constructor(http) {
        this.http = http;
        this.title = 'Add Location';
        this.addLocationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            long: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            URL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            flavorSelector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descriptionSelector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.SERVER_URL = "/api/";
    }
    onSubmit() {
        let formData = this.addLocationForm.value;
        let formDataJSON = JSON.stringify(formData);
        this.http.post('/api/addLocation', formData).subscribe((response) => console.log(response), (error) => console.log(error));
        console.log('formData is ' + FormData);
        console.log('formDataJSON is ' + formDataJSON);
        this.addLocationForm.reset();
        // console.log(this.addLocationForm);
        // alert(JSON.stringify(this.addLocationForm.value));
    }
    ngOnInit() {
    }
};
AddLocationComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-location',
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






const routes = [
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] },
    { path: 'addlocation', component: _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_5__["AddLocationComponent"] },
    { path: '**', component: _locationdisplay_locationdisplay_component__WEBPACK_IMPORTED_MODULE_4__["LocationdisplayComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    padding-right: 5px;\n    padding-left: 5px;\n}\n\n.nav-link {\n    margin-left: 10px;\n    font-family: 'Roboto', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubmF2LWxpbmsge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn0iXX0= */");

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


let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'app';
    }
    ngOnInit() {
        // this.http.get('http://localhost:3000/api/locations').subscribe(data => {
        //   // console.log(data);
        //   this.locations = data;
        //   console.log(this.locations);
        // });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/test-component/test-component.component.ts");
/* harmony import */ var _getdata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getdata.service */ "./src/app/getdata.service.ts");
/* harmony import */ var _comp1_comp1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp1/comp1.component */ "./src/app/comp1/comp1.component.ts");
/* harmony import */ var _comp2_comp2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp2/comp2.component */ "./src/app/comp2/comp2.component.ts");
/* harmony import */ var _locationdisplay_locationdisplay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locationdisplay/locationdisplay.component */ "./src/app/locationdisplay/locationdisplay.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _locationsearch_locationsearch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locationsearch/locationsearch.component */ "./src/app/locationsearch/locationsearch.component.ts");
/* harmony import */ var _location_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./location-filter.pipe */ "./src/app/location-filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-location/add-location.component */ "./src/app/add-location/add-location.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");
/* harmony import */ var _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/getlocations.service */ "./src/app/shared/getlocations.service.ts");
/* harmony import */ var _twitterfeed_twitterfeed_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./twitterfeed/twitterfeed.component */ "./src/app/twitterfeed/twitterfeed.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _location_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["LocationFilterPipe"],
            _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__["TestComponentComponent"],
            _comp1_comp1_component__WEBPACK_IMPORTED_MODULE_8__["Comp1Component"],
            _comp2_comp2_component__WEBPACK_IMPORTED_MODULE_9__["Comp2Component"],
            _locationdisplay_locationdisplay_component__WEBPACK_IMPORTED_MODULE_10__["LocationdisplayComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _locationsearch_locationsearch_component__WEBPACK_IMPORTED_MODULE_12__["LocationsearchComponent"],
            _location_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["LocationFilterPipe"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"],
            _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_18__["AddLocationComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
            _twitterfeed_twitterfeed_component__WEBPACK_IMPORTED_MODULE_22__["TwitterfeedComponent"]
        ],
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__["Ng2SearchPipeModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_16__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBR7bGUdRRxG8QHkcR3RNc2fnbNLfSgZ9M'
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
        ],
        providers: [_getdata_service__WEBPACK_IMPORTED_MODULE_7__["GetdataService"], _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_20__["GeolocationService"], _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_21__["GetlocationsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comp1/comp1.component.css":
/*!*******************************************!*\
  !*** ./src/app/comp1/comp1.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAxL2NvbXAxLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/comp1/comp1.component.ts":
/*!******************************************!*\
  !*** ./src/app/comp1/comp1.component.ts ***!
  \******************************************/
/*! exports provided: Comp1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comp1Component", function() { return Comp1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Comp1Component = class Comp1Component {
    constructor() { }
    ngOnInit() {
    }
};
Comp1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comp1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp1/comp1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comp1.component.css */ "./src/app/comp1/comp1.component.css")).default]
    })
], Comp1Component);



/***/ }),

/***/ "./src/app/comp2/comp2.component.css":
/*!*******************************************!*\
  !*** ./src/app/comp2/comp2.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAyL2NvbXAyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/comp2/comp2.component.ts":
/*!******************************************!*\
  !*** ./src/app/comp2/comp2.component.ts ***!
  \******************************************/
/*! exports provided: Comp2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comp2Component", function() { return Comp2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Comp2Component = class Comp2Component {
    constructor() { }
    ngOnInit() {
    }
};
Comp2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comp2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp2/comp2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comp2.component.css */ "./src/app/comp2/comp2.component.css")).default]
    })
], Comp2Component);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\n    padding: 30px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbn0iXX0= */");

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

/***/ "./src/app/getdata.service.ts":
/*!************************************!*\
  !*** ./src/app/getdata.service.ts ***!
  \************************************/
/*! exports provided: GetdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdataService", function() { return GetdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GetdataService = class GetdataService {
    constructor() { }
};
GetdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetdataService);



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
/* harmony default export */ __webpack_exports__["default"] = ("#searchBoxDiv{\n    padding-left: 0;\n    padding-top: 7px;\n    padding-bottom: 7px;\n}\n\n#loadingSpinner {\n    margin: auto;\n    padding: 70px 0;\n}\n\n#addressDiv {\n    margin-top: 5px;\n    font-size: small;\n    line-height: 1.5;\n}\n\n#dateDisplay {\n    padding-top: 7px;\n    padding-bottom: 7px;\n    background-color: #669900;\n    color: white;\n    text-align: center;\n}\n\n#geoDistance {\n    font-size: small;\n    font-weight: normal;\n    margin-top: 3px;\n    padding: 5px 10px 5px 10px;\n}\n\na:link {\n    color: #006699;\n}\n\na:visited {\n    color: #006699;\n}\n\n.card-body {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n}\n\n.card-header {\n    padding-right: 2px;\n    padding-left: 10px;\n}\n\n.container {\n    padding-right: 5px;\n    padding-left: 5px;\n}\n\nh2 {\n    padding-right: 15px;\n    font-family: 'Alegreya', serif;\n    font-weight: 800;\n    line-height: 20px;\n    font-size: 20px;\n    margin: 0 0 0 0;\n}\n\nh3 {\n    padding-right: 15px;\n    font-family: 'Alegreya', serif;\n    font-weight: 700;\n    line-height: 18px;\n    font-size: 18px;\n    margin: 0 0 0 0;\n}\n\nh4 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    line-height: 20px;\n    margin: 5px 0 0 0;\n}\n\nh5 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    line-height: 20px;\n    margin: 0 0 0 0;\n}\n\n.badge {\n    background-color: #669900;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    line-height: 15px;\n    margin: 0 0 0 0;\n    width: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25kaXNwbGF5L2xvY2F0aW9uZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uZGlzcGxheS9sb2NhdGlvbmRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hCb3hEaXZ7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuI2xvYWRpbmdTcGlubmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNzBweCAwO1xufVxuXG4jYWRkcmVzc0RpdiB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuI2RhdGVEaXNwbGF5IHtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTkwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZ2VvRGlzdGFuY2Uge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG59XG5cbmE6bGluayB7XG4gICAgY29sb3I6ICMwMDY2OTk7XG59XG5cbmE6dmlzaXRlZCB7XG4gICAgY29sb3I6ICMwMDY2OTk7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmgyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEnLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbmgzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEnLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbmg0IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xufVxuXG5oNSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbi5iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTkwMDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICB3aWR0aDogNzBweDtcbn1cbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");
/* harmony import */ var _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/getlocations.service */ "./src/app/shared/getlocations.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







// import { start } from 'repl';
let LocationdisplayComponent = class LocationdisplayComponent {
    constructor(http, geoLocation, getLocations, datePipe) {
        this.http = http;
        this.geoLocation = geoLocation;
        this.getLocations = getLocations;
        this.datePipe = datePipe;
        this.today = new Date();
        this.jstoday = '';
        this.timeoutDisplayLocations = () => {
            this.geoLocationSupported = false;
            this.dataLoaded = true;
            console.log('timeout ran');
        };
        this.getLocationsFromAPI = () => {
            this.http.get('/api/locations').subscribe(data => {
                this.locations = data;
                this.locations.sort((a, b) => a.name.localeCompare(b.name));
            });
            console.log('getlocationsfromAPI ran');
        };
        this.getLocationDistances = () => {
            console.log('getlocationsdistances ran');
            let distanceArray = [];
            for (let i = 0; i < this.locations.length; i++) {
                let locLat = this.locations[i].lat;
                let locLong = this.locations[i].long;
                let distance = this.distance(this.lat2, this.lng2, locLat, locLong, 'M');
                let distanceRounded = Math.round(distance * 10) / 10;
                distanceArray.push(distanceRounded);
                console.log(distanceArray);
                console.log('distance to ' + this.locations[i].name + ' is ' + distance);
            }
            this.distances = distanceArray;
            this.addDistanceToArray();
            // this.locations.sort(this.sortFunction)  
            this.locations.sort(function (a, b) {
                return a.distance - b.distance;
            });
            this.dataLoaded = true;
            console.log(this.locations);
        };
        this.addDistanceToArray = () => {
            for (let i = 0; i < this.locations.length; i++) {
                this.locations[i].distance = this.distances[i];
                console.log(this.locations[i]);
            }
        };
        this.distance = (lat1, lon1, lat2, lon2, unit) => {
            if ((lat1 == lat2) && (lon1 == lon2)) {
                return 0;
            }
            else {
                var radlat1 = Math.PI * lat1 / 180;
                var radlat2 = Math.PI * lat2 / 180;
                var theta = lon1 - lon2;
                var radtheta = Math.PI * theta / 180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180 / Math.PI;
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
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.today, 'EEEE, MMMM d, y', 'en-US', '+0530');
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // setTimeout(this.sayHi, 1000);
            this.getLocations.getLocations().then(loc => {
                this.locations = loc.loc;
                console.log(this.locations);
                this.locations.sort((a, b) => a.name.localeCompare(b.name));
                this.geoLocation.getPosition()
                    .then(pos => {
                    console.log(`Position: ${pos.lng} ${pos.lat}`);
                    this.lng2 = pos.lng;
                    this.lat2 = pos.lat;
                    this.getLocationDistances();
                })
                    .catch((err) => {
                    console.log(err.message);
                    this.geoLocationSupported = false;
                    this.dataLoaded = true;
                });
            });
            return 'yeah';
        });
    }
    getGeoLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let geoLocationArray;
            if (navigator) {
                navigator.geolocation.getCurrentPosition((pos) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.lng2 = +pos.coords.longitude;
                    this.lat2 = +pos.coords.latitude;
                    geoLocationArray = [this.lat2, this.lng2];
                    console.log(this.lng2);
                    console.log(this.lat2);
                }));
            }
            else {
                this.geoLocationSupported = false;
            }
            console.log('getgeolocation ran');
        });
    }
    sortFunction(a, b) {
        if (a.distance === b.distance) {
            return 0;
        }
        else {
            return (a.distance < b.distance) ? -1 : 1;
        }
    }
};
LocationdisplayComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"] },
    { type: _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_4__["GetlocationsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
LocationdisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locationdisplay',
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

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogNDAwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");
/* harmony import */ var _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/getlocations.service */ "./src/app/shared/getlocations.service.ts");





let MapComponent = class MapComponent {
    constructor(http, geoLocation, getLocations) {
        // if (navigator) {
        //   navigator.geolocation.getCurrentPosition(pos => {
        //     this.lng2 = +pos.coords.longitude;
        //     this.lat2 = +pos.coords.latitude;
        //   });
        // }
        // this.geoLocation.getPosition().then(pos => {
        //   console.log(`Position: ${pos.lng} ${pos.lat}`);
        //   this.lng2 = pos.lng;
        //   this.lat2 = pos.lat;
        // })
        this.http = http;
        this.geoLocation = geoLocation;
        this.getLocations = getLocations;
        this.title = 'Flavor Map';
        this.lat = 43.0389;
        this.lng = -87.90647;
    }
    ngOnInit() {
        // this.http.get('http://localhost:3000/api/locations').subscribe(data => {
        //   // console.log(data);
        //   this.locations = data;
        //   console.log(this.locations);
        // });
        this.geoLocation.getPosition().then(pos => {
            console.log(`Position: ${pos.lng} ${pos.lat}`);
            this.lng2 = pos.lng;
            this.lat2 = pos.lat;
        });
        this.getLocations.getLocations().then(loc => {
            this.locations = loc.loc;
            console.log(this.locations);
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"] },
    { type: _shared_getlocations_service__WEBPACK_IMPORTED_MODULE_4__["GetlocationsService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
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
/* harmony default export */ __webpack_exports__["default"] = (".nav-link {\n    margin-left: 10px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.navbar {\n    padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4ubmF2YmFyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */");

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
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject(err);
            });
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
        providedIn: 'root',
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

// this.http.get('/api/locations').subscribe(data => {
//   this.locations = data;
//   this.locations.sort((a, b) => a.name.localeCompare(b.name));
// });
// console.log('getlocationsfromAPI ran');


/***/ }),

/***/ "./src/app/test-component/test-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/test-component/test-component.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtY29tcG9uZW50L3Rlc3QtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/test-component/test-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/test-component/test-component.component.ts ***!
  \************************************************************/
/*! exports provided: TestComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function() { return TestComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponentComponent = class TestComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-component/test-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-component.component.css */ "./src/app/test-component/test-component.component.css")).default]
    })
], TestComponentComponent);



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
    production: false
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