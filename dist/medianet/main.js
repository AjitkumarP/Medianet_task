(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .cdk-overlay-pane{\r\n    position: absolute !important;\r\n    top: 10px;\r\n    right: 40px;\r\n}\r\n.cdk-overlay-pane{\r\n    position: absolute !important;\r\n    top: 10px;\r\n    left: 40px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0lBU0kiLCJmaWxlIjoic3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNkay1vdmVybGF5LXBhbmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG59XHJcbi5jZGstb3ZlcmxheS1wYW5le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"alerttxt\" style=\"font-size: 17px\">Thanks for Downloading !!!</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
        console.log(navigator.userAgent);
        var browser = navigator.userAgent;
        var browsersrch = browser.search('Edge');
        console.log(browsersrch);
        if (browsersrch == -1) {
            // document.getElementById("cdk-overlay-0").className="cdk-overlay-pane-firefox"
            var browsersrch = browser.search('Firefox');
            if (browsersrch == -1) {
                var browsersrch = browser.search('Chrome');
                if (browsersrch == -1) {
                    document.getElementById('alerttxt').innerHTML = "Browser not supported";
                    var element = document.getElementById('cdk-overlay-0');
                    element.classList.add('cdk-overlay-pane');
                }
                else {
                    var element = document.getElementById('cdk-overlay-0');
                    element.classList.add('cdk-overlay-pane_chrome');
                }
            }
            else {
                var element = document.getElementById('cdk-overlay-0');
                element.classList.add('cdk-overlay-pane_firefox');
            }
        }
        else {
            // document.getElementById("cdk-overlay-0").className="cdk-overlay-pane-chrome"
            var element = document.getElementById('cdk-overlay-0');
            element.classList.add('cdk-overlay-pane');
        }
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".catbox{\r\n    text-align: center;\r\n    height: 654px;\r\n    background-image: url('cat.png');\r\n    background-size: cover;\r\n    \r\n}\r\n@media screen and (max-width: 480px) {\r\n    .catbox{\r\n        height: 240px;\r\n    }\r\n    .mcbookdiv{\r\n        text-align: center !important;\r\n    }\r\n    .contbtn{\r\n        text-align: center;\r\n    }\r\n  }\r\n@media screen and (max-width: 768px){\r\n    .contbtn{\r\n        text-align: center;\r\n    }\r\n    .navtxt{\r\n        text-align: center;\r\n    }\r\n  }\r\n.contact{\r\n    background-image: url('whirl-ic.png');\r\n    background-size: inherit;\r\n}\r\n.bottomnav{\r\n    background-color: #00dcc5;\r\n    border-top: 1px solid black;\r\n    position: relative;\r\n    top: -50px;\r\n    padding: 20px;\r\n}\r\n.footer-content{\r\n    text-align: center;\r\n    background-color: #edf9f5;\r\n    position: relative;\r\n    top: -50px;\r\n    padding: 70px;\r\n}\r\n.form-input{\r\n    background-color: #d6f3e9;\r\n    margin: 10px 0px;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n.feedback{\r\n    padding: 20px 0px;\r\n}\r\n.sendbtn{\r\n    background-color: #008696;\r\n    color: #ffffff;\r\n}\r\n.navtxt{\r\n    font-size: 20px;\r\n}\r\n.contacttxt{\r\n    color: #d6f3e9;\r\n    font-size: 40px;\r\n}\r\n.contacttxtbody1{\r\n    color: #007377;\r\n    font-size: 30px;\r\n}\r\n.contacttxtbody2{\r\n    color: #007377;\r\n    font-size: 15px;\r\n}\r\n.contact-text{\r\n    text-align: center;\r\n    margin: auto;\r\n    padding: 100px 0px;\r\n    \r\n}\r\n.animallove{\r\n    background-color: #13a791;\r\n    padding: 30px;\r\n}\r\n.heart{\r\n    width:30px;\r\n    height:20px;\r\n}\r\n.heart1{\r\n    width:30px;\r\n    height:30px;\r\n}\r\n.content{\r\n    padding-top: 60px;\r\n    display: inline-block;\r\n}\r\n.mcBook{\r\n    height: 90px;\r\n}\r\n.mcbookdiv{\r\n    text-align: right;\r\n}\r\n.extensionbox{\r\n    border-radius: 10px;\r\n    background-color: #edf9f5;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n}\r\n.continue{\r\n    background-color: #ffcc00;\r\n    color: #542400;\r\n    border-radius: 10px;\r\n}\r\n.contbtn{\r\n    padding: 20px;\r\n}\r\n.angle{\r\n    padding: 5px;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n.plzread{\r\n    font-size: 8px;\r\n    padding: 5px;\r\n}\r\n.text{\r\n    font-size: 15px;\r\n    color: #458780;\r\n}\r\n.pet{\r\n    width: 100%;\r\n}\r\n.petlover{\r\n    text-align: center;\r\n    font-size:35px;\r\n    margin: 15px 0px;\r\n}\r\n.petbg{\r\n    background-color: #edf9f5;\r\n}\r\n.privacy{\r\n    font-size: 7px;\r\n    padding: 15px;\r\n    text-align: center;\r\n}\r\n.featuresbg{\r\n    background-color: #d6f3e9;\r\n}\r\n.features{\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n.featurebox{\r\n    border-radius: 24px;\r\n    background-color: #008696;\r\n    text-align: center;\r\n    padding: 15px;\r\n    margin:5px;\r\n}\r\nol{\r\n    list-style-type: none;\r\n}\r\n.thankbtn{\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n}\r\n.featurebox1{\r\n    border-radius: 24px;\r\n    background-color: #008696;\r\n    text-align: center;\r\n    padding: 10px;\r\n    margin:5px;\r\n}\r\n.box-contenthd{\r\n    font-size: 18px;\r\n    padding: 5px;\r\n\r\n}\r\n.box-contentvv{\r\n    padding: 9px;\r\n}\r\n.box-contentps{\r\n    padding: 2px 25px;\r\n}\r\n.box-contentbd{\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n.box-contenthd1{\r\n    font-size: 21px;\r\n}\r\n.box-contentbd1{\r\n    font-size: 12px;\r\n}\r\n.box-contenttt{\r\n    padding: 0px;\r\n}\r\n.featureicon{\r\n    width:42px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlDQUEyQztJQUMzQyx1QkFBdUI7O0NBRTFCO0FBQ0Q7SUFDSTtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLDhCQUE4QjtLQUNqQztJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCO0dBQ0Y7QUFDRDtJQUNFO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxtQkFBbUI7S0FDdEI7R0FDRjtBQUNIO0lBQ0ksc0NBQWdEO0lBQ2hELHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7O0NBRXRCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7Q0FDWjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0NBQ2Q7QUFDRDtJQUNJLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0NBQ2Y7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixhQUFhOztDQUVoQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGJveHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvY2F0LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNhdGJveHtcclxuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1jYm9va2RpdntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb250YnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmNvbnRidG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdnR4dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4uY29udGFjdHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy93aGlybC1pYy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGluaGVyaXQ7XHJcbn1cclxuLmJvdHRvbW5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGRjYzU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uZm9vdGVyLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmOWY1O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBhZGRpbmc6IDcwcHg7XHJcbn1cclxuLmZvcm0taW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZmM2U5O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5mZWVkYmFja3tcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcbi5zZW5kYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODY5NjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXZ0eHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNvbnRhY3R0eHR7XHJcbiAgICBjb2xvcjogI2Q2ZjNlOTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4uY29udGFjdHR4dGJvZHkxe1xyXG4gICAgY29sb3I6ICMwMDczNzc7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmNvbnRhY3R0eHRib2R5MntcclxuICAgIGNvbG9yOiAjMDA3Mzc3O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5jb250YWN0LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwcHg7XHJcbiAgICBcclxufVxyXG4uYW5pbWFsbG92ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxM2E3OTE7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5oZWFydHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxufVxyXG4uaGVhcnQxe1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm1jQm9va3tcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG4ubWNib29rZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmV4dGVuc2lvbmJveHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmOWY1O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmNvbnRpbnVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDtcclxuICAgIGNvbG9yOiAjNTQyNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY29udGJ0bntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmFuZ2xle1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAycHg7XHJcbn1cclxuLnBsenJlYWR7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNDU4NzgwO1xyXG59XHJcbi5wZXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucGV0bG92ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MzVweDtcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuLnBldGJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNTtcclxufVxyXG4ucHJpdmFjeXtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmVhdHVyZXNiZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmYzZTk7XHJcbn1cclxuLmZlYXR1cmVze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5mZWF0dXJlYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg2OTY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxufVxyXG5vbHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4udGhhbmtidG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxufVxyXG4uZmVhdHVyZWJveDF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODY5NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46NXB4O1xyXG59XHJcbi5ib3gtY29udGVudGhke1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxufVxyXG4uYm94LWNvbnRlbnR2dntcclxuICAgIHBhZGRpbmc6IDlweDtcclxufVxyXG4uYm94LWNvbnRlbnRwc3tcclxuICAgIHBhZGRpbmc6IDJweCAyNXB4O1xyXG59XHJcbi5ib3gtY29udGVudGJke1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcbi5ib3gtY29udGVudGhkMXtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4uYm94LWNvbnRlbnRiZDF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmJveC1jb250ZW50dHR7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmZlYXR1cmVpY29ue1xyXG4gICAgd2lkdGg6NDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-md-12 col-sm-12 col-lg-12 catbox\">\n</div>\n<div class=\"col\" class=\"animallove col-md-12 col-sm-12 col-lg-12\">\n    <div class=\"col-md-2 col-lg-2 col-sm-2\"></div>\n  <div class=\"content col-lg-8 col-md-8 col-sm-8\">\n    <div class=\"col-md-12 col-sm-12 col-lg-12\">\n    <div  class=\"col-md-8 col-sm-8 col-lg-8\">\n          <span class=\"heart\">We</span>\n          <img class=\"heart1\" src=\"../assets/heart-ic.png\" alt=\"love\"> \n          <span class=\"heart\">Animals</span><br/>\n          <span>So we put them where we can see them</span>\n  </div>\n  <div  class=\"col-md-4 col-sm-4 col-lg-4 mcbookdiv\">\n      <img class=\"mcBook\" src=\"../assets/McBook.png\" alt=\"McBook\">\n  </div>\n  </div>\n\n  <div class=\"col-md-12 col-sm-12 col-lg-12 extensionbox\">\n    <div class=\"col-md-9 col-sm-12 col-lg-9\">\n      <div>If you're an animal lover, this FREE extension is a great</div>\n      <div>way to get your daily dose of cuteness overload</div>\n    </div>\n    <div class=\"col-md-3 col-sm-12 col-lg-3 contbtn\">\n            <button class=\"continue\" mat-raised-button (click)=\"openDialog()\"> <span class=\"cont\">Continue</span><i class=\"angle fas fa-angle-right\"></i></button>\n    </div>\n    \n  </div>\n  <div class=\"col-md-12 col-sm-12 col-lg-12 plzread\">Please read carefully: By clicking the “Continue” button above, you are agreeing to install this extension and agreeing to abide by the End User License Agreement and Privacy Policy.  |  You can uninstall the extension at any time.</div>\n\n\n  </div>\n  \n  <div class=\"col-md-2 col-lg-2 col-sm-2\"></div>\n</div>\n<div class=\"col-md-12 col-sm-12 col-lg-12 petbg\">\n  <div class=\"col-md-3 col-sm-3 col-lg-3\"></div>\n  <div class=\"col-md-6 col-sm-6 col-lg-6\">\n    <div class=\"col-md-12 col-sm-12 col-lg-12 petlover\">Just a pet Lover</div>\n    <div class=\"col-md-6 col-sm-12 col-lg-5\">\n      <img class=\"pet\" src=\"../assets/lovepets.png\" alt=\"lovepets\">\n    </div>\n    <div class=\"col-md-6 col-sm-12 col-lg-7 text\">\n        Just a Pet Lover Page is made for humans who truly love animals and the environment. The extension highlights interesting animal videos and news and brings you awesome browser wallpapers that will brighten up your day.\n    </div>\n    &nbsp;\n    <div class=\"col-md-12 col-sm-12 col-lg-7 text\">\n        These features update in real-time. So, you really feel like you’re part of the animal kingdom.\n    </div>\n    <div class=\"privacy col-md-12 col-sm-12 col-lg-12\">Check out our privacy policy and terms of services pages for more details!</div>\n  </div>\n  <div class=\"col-md-3 col-sm-3 col-lg-3\"></div>\n\n\n</div>\n<div class=\"col-md-12 col-sm-12 col-lg-12 featuresbg\">\n  <div class=\"col-md-12 col-sm-12 col-lg-12 features\">Features</div>\n  <div class=\"col-md-1 col-sm-2 col-lg-2\"></div>\n  <div class=\"col-md-10 col-sm-8 col-lg-8\">\n    <div class=\"col-md-3 col-sm-12 col-lg-3\">\n    <div class=\"featurebox\">\n      <img class=\"featureicon\" src=\"../assets/wall-ic.png\" alt=\"Wall-ic\">\n      <div class=\"box-contenthd1\">Adorable Wallpapers</div>\n      <div class=\"box-contentbd1\">Find an adorable animal on each new tab, designed to keep your spirits high</div>\n    </div>\n    </div>\n    <div class=\"col-md-3 col-sm-12 col-lg-3\">\n        <div class=\"featurebox\">\n          <img class=\"featureicon\" src=\"../assets/video-ic.png\" alt=\"Wall-ic\">\n          <div class=\"box-contentvv\">Viral Videos</div>\n          <div class=\"box-contentbd\">Seriously concerning or hilariously wild, you’ll know what’s going viral.</div>\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-12 col-lg-3\">\n            <div class=\"featurebox\">\n              <img class=\"featureicon\" src=\"../assets/search-ic.png\" alt=\"Wall-ic\">\n              <div class=\"box-contentps\">Powerful Search</div>\n              <div class=\"box-contentbd\">Enjoy a smooth search engine experience</div>\n            </div>\n    </div>\n    <div class=\"col-md-3 col-sm-12 col-lg-3\">\n        <div class=\"featurebox\">\n          <img class=\"featureicon\" src=\"../assets/tweet-ic.png\" alt=\"Wall-ic\">\n          <div class=\"box-contenttt\">Trending Tweets</div>\n          <div class=\"box-contentbd\">Find an adorable animal on each new tab, designed to keep your spirits high</div>\n        </div>\n    </div>\n  </div>\n  <div class=\"col-md-1 col-sm-2 col-lg-2\"></div>\n\n</div>\n<div class=\"col-md-12 col-sm-12 col-lg-12 contact\">\n  <div class=\"col-md-4 col-sm-4 col-lg-4\"></div>\n  <div class=\"col-md-4 col-sm-4 col-lg-4 contact-text\">\n    <div class=\"contacttxt\">Contact us</div>\n    &nbsp;\n    <div class=\"contacttxtbody1\"><strong> We'd love to hear from you!</strong></div>\n    <div class=\"contacttxtbody2\">at: contact@lmpts.com</div>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-lg-4\"></div>\n</div>\n<div class=\"col-md-12 col-sm-12 col-lg-12 bottomnav\">\n  <div class=\"col-md-1 col-sm-1 col-lg-2\"></div>\n  <div class=\"col-md-10 col-sm-10 col-lg-8\">\n    <div class=\"col-md-2 col-sm-2 col-lg-2 navtxt\">\n      <a href=\"#\">About us</a> \n    </div>\n    <div class=\"col-md-3 col-sm-3 col-lg-3 navtxt\"><a href=\"#\">Terms of service</a></div>\n    <div class=\"col-md-3 col-sm-3 col-lg-3 navtxt\"><a href=\"#\">Privacy policy</a></div>\n    <div class=\"col-md-2 col-sm-2 col-lg-2 navtxt\"><a href=\"#\">Contact us</a></div>\n    <div class=\"col-md-2 col-sm-2 col-lg-2 navtxt\"><a href=\"#\" (click)=\"onclick()\">Uninstall</a></div>\n  </div>\n  <div class=\"col-md-1 col-sm-1 col-lg-2\"></div>\n</div>\n<div *ngIf=\"visibility!=false\" class=\"col-md-12 col-sm-12 col-lg-12 footer-content\">\n  <div class=\"col-md-3 col-sm-3 col-lg-3\"></div>\n  <div class=\"col-md-6 col-sm-6 col-lg-6\">\n    <div style=\"color: #007377\">We're sorry to see you go!</div>\n    <div style=\"color: #979f9c\">Please help us improve Trailer Tab with your feedback</div>\n    <div class=\"feedback\">\n      <input class=\"col-md-12 col-sm-12 col-lg-12 form-input\" type=\"text\" placeholder=\"Email id\">\n      <input class=\"col-md-12 col-sm-12 col-lg-12 form-input\" type=\"text\" placeholder=\"Message\">\n      <button class=\"col-md-12 col-sm-12 col-lg-12 form-input sendbtn\">Send</button>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-3 col-lg-3\"></div>\n\n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.title = 'medianet';
        this.visibility = false;
    }
    AppComponent.prototype.onclick = function () {
        this.visibility = true;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            entryComponents: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ajit Practice & videos\Medianet\medianet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map