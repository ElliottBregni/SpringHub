(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/article/article.module": [
		"./src/app/article/article.module.ts"
	],
	"../app/user/User.Module": [
		"./src/app/user/User.Module.ts"
	],
	"./Login/Login.Module": [
		"./src/app/Login/Login.Module.ts"
	],
	"./article/article.module": [
		"./src/app/article/article.module.ts"
	],
	"./user/User.Module": [
		"./src/app/user/User.Module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Components/alert/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/alert/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/Components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/Components/alert/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/Components/bi-reports/bi-reports.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/bi-reports/bi-reports.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYmktcmVwb3J0cy9iaS1yZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/bi-reports/bi-reports.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/bi-reports/bi-reports.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"reportContainer\" style=\"height:500px;\"></div>\r\n"

/***/ }),

/***/ "./src/app/Components/bi-reports/bi-reports.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/bi-reports/bi-reports.component.ts ***!
  \***************************************************************/
/*! exports provided: BiReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiReportsComponent", function() { return BiReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! powerbi-client */ "./node_modules/powerbi-client/dist/powerbi.js");
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(powerbi_client__WEBPACK_IMPORTED_MODULE_2__);



var BiReportsComponent = /** @class */ (function () {
    function BiReportsComponent() {
    }
    BiReportsComponent.prototype.ngOnInit = function () {
        this.showReport;
    };
    BiReportsComponent.prototype.showReport = function () {
        // Report's Secured Token
        var accessToken = 'H4sIAAAAAAAEACWWta7FCpJF_-WlHslMI3VgPmbGzMzMbs2_z1V3VsEOSktVS_vf_1jpO8xp8c___vMjGG3DykzQ1k6aiLUMHdEVNUGhW0N0XkuJIqCKK6eam48zMVEGvXK3XajXOmRuC2LVAcoOskx7mhsHcqS73AC9d9tgGyGfiaybvM5NRJ3tfaTGOuIGbxTRc0kvQneqJpp91GPozvVRFjUoelDRHcBI1_OThrgpqdmGdKtI0niAgiyCRM9r8sQfIHn8PsfZhTx5XWiJ7HFA2nfVTxsYvB4rHBnvq0Yh2PjlguuyalMmP8R6y_IUq4slJo9DSa5GmsztSWDopJx1sS8MJn_Y4BV5GNfnDFhYnJcme8OB6Jb3S2hxr66uXv7eoZ0_tLiAZTOZaIBKqceIC7Y8fwezT2WF1ojJLGcINaq6FQx3sKuG3fgxiH3vKJviD_1KTHSwXwuXYzVW2-quf4pz_vRBO_lg7BmpEaQE126sBBDskUV2mbspjDrlqu1ZhBY2wwGGkJjEM4KFGD7CTDIZRXrl21cD8DYbfYkp-G3MV2eNvgKEuZTphSJYA5LXRDlHBDwCkNKA6yfrKi_Mx5OPEFLQvC-o5tE3B5Qkenuevce_gfBOP4YGd8AVtbWN07BTxPAs11mAbkRyfJnE_OKQrcerBc5tcc8zBDKQ6PbguNaWoHbO06Io0AB5TOcPYWNKFIZ0dFuUd0od_LSlE32pigM7giwv8LAuHfauHcy88VJbiY7PnJHWjPAN6PbARpVKGXcjGL6govU8J55RlQ6cKSLCR51V2C2QO4l0VfQ5eDhKY0AUua3Z0smuZbVPJtAXBnjJrd3ryDJ-i74eliExNmsr6lLCbqnBk6_JsepSnT4yP4G6tPnUcjC-_07otl-9ebXAGv0xQ0tyznmPNzYExO6suhOzLobq1vtTzz47DmoycuFoqNXdvxT10EGGTHIkJVPY91jnhJVp_Cw3vjzIcfBIFKsVMYR0fEqeLkT2p-Yxs5kIJ-qvzwqByr9ATGYTuu-fu4-y04BcxzNxtgqskOJhOuX-Hq6uE61oCFVyz_YHN1y8SmfZxI8pKdgDs3xO29mH51yR3jEAdbW1SUMoAlkWvYYtEykDzYdBggqB6RhizFWN5n_PmTQxbxiqaaGj6sQ64BCqJ1FR688O-LctARQl0IAKW1JGICdVtDcJ6aFJO617b3EyH3R4Ewq_7FRF-pvH_NceP7Yizmhi8Q4afK1t8ilzk1yof1B3TxJgnXozcsBoP_jyhY6cSVfdUounJZpcSOW9Bh3JQGUD8GK7k5LIAQANlQ6omRSuOfoaoSq4eopHBkvdhT5CbtnHiQqFRT26E0dMJxiShXT5orkdq9n-1cGDTuQQ8GSAkIUmwzb391Ja50QbsyPQKPBHNrB70sX02MJqgMJLR5Zdln89dSZ8v22SHngIELZbuY5ZVRi1-ol8CIUvhxo1_eAphi--zdNH43Pqavf31J-W5SUqb1MPDmxmlbku1oO8-Z7WJ7OL_-1Hcz5q_I4eQ9lJKc0oAgu3Yfo2UMy4mVbwREGHtoxjyeDi9_QAhdtY7WfrsSbPW2yH48STbz_EUayh3BCgo5qtqIaceLKpM16EHpgNqVK8-bESpKlWkxpvYUpeCAIF5QQWRtHpK19Lfdeu_YHknCZLmt1BDdt0ywZkzwOl5WpNCDoxe8AdXhs-mNRMMMeRmgksSl8f_hY4yLXec0mJ8-4oYMCBop7X2UeAeHeVzX_t556p037bQ6JNe5DUT2c5yvd7KySepIJ6-k-i9Hz4k4Y4XEbJofsnPlsEmqvBipp0mA0WHA3FiQanmdthTrGhkooEW-1ZiByawwa9n0EbP9kYuCQdSh2OXPZEk7dZE0IKBNrUpTEYOsLIwuk5pa6YDuT8jNiuFKRfrZh1DeNXz1Ln2Q0DderHm4cRvoZMfEMifQvNls9qE1Yt_Uj4wynceEPSGpWcTxhzCG3TLDtaL1drFYPKCgOypnRz9YEKhdLyalHEc07EXDjCExl5xcQ00-g_ZioksPbGHpL9-2nrPS2jysH3SNEUcs8rb0TS8uhYuZjp1QmahjcjDsCn6rnRL_z8TC8q7oTVjyYblgeBZ2qQd94pr1B22RCnYCLoBwBRsj4LmCBhUTgFhDkyYUVkxUt-IQrgbAeBGm0MU63EOPnTv0RlD0ADnh72Q0GQ8RUKXhngfz3H_Otf__zPP9z2Lseslu9fzajVDs70BfX1Z8ezzZzvlXpbN2CsGaabRNTSrpXgBFyb8JlmIp-ZJSZfpIElE7ihR8Y59gN2BvwxtcQ_UBqj1DJx7jJtpUsY_Fufe-H88Dy7hkHKCn24mtZoS2GXekCfhoqROrSBsLzshM3dI2Rh6CqpicDanzr5cxbedKnWN4XAw9UBInmsj5huJWhEtB1Rc62-5cyRBDvw7T2RyMooVZ2IEUyp5hcTHB7tXgetvo3ajct9VGS8o1AF6TZk1AL9gnwkDSVjCA8OgUX67jDLyFzCVhbNs4wt4RvMSLEnNM6gibrsupL3-x1HWsf7D6LDY9d2b95bdss7GrVYzvHelbVw-7-Y36UpNzn4o3yvIWLV2q5CCGaqq2yT7dzd_0m5bT2lx7mVf7FVsf48RjfwSikZ_9d3bBNlExIYfw_OXbBbQ3_j7k8ALut3lxNrI3e1mVFp5DbxpyWr8AGcORQQSpXM4St188UeoNoBry-I2gExiDvRB6pD-P2g1tFx0ZCPnDSfzixvoeoLx84MPq6CIum_NjZ_Xx_CmWXHRD6M1jHHJyXAn4i2LqckIONhA22q5AF4FXLlloBl6BD4pueHquwh2YASdeH7MPHyJWnWTRdsjURs7XSYJrUyfUdwNpqV2MrmTxq6O7L4apuk_RL38pAmaelM4miCArvE6ehU_GqDZntuBSq0eQ_eliTTM1CFA762C20sPD8ylEvjrMdtg_WF7uVCuaFd9R_m__t_DpdkIloLAAA=';
        // Embed URL reporID
        var embedUrl = 'https://app.powerbi.com';
        // Report ID
        var embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204';
        // Configuration used to describe the what and how to embed.
        // This object is used when calling powerbi.embed.
        // This also includes settings and options such as filters.
        // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
        var config = {
            type: 'report',
            accessToken: accessToken,
            embedUrl: embedUrl,
            id: embedReportId,
            settings: {
                filterPaneEnabled: true,
                navContentPaneEnabled: true,
                localeSettings: {
                    language: "en",
                    formatLocale: "es"
                }
            }
        };
        // Grab the reference to the div HTML element that will host the report.
        var reportContainer = document.getElementById('reportContainer');
        // Embed the report and display it within the div container.
        var powerbi = new powerbi_client__WEBPACK_IMPORTED_MODULE_2__["service"].Service(powerbi_client__WEBPACK_IMPORTED_MODULE_2__["factories"].hpmFactory, powerbi_client__WEBPACK_IMPORTED_MODULE_2__["factories"].wpmpFactory, powerbi_client__WEBPACK_IMPORTED_MODULE_2__["factories"].routerFactory);
        var report = powerbi.embed(reportContainer, config);
        // Report.off removes a given event handler if it exists.
        report.off("loaded");
        // Report.on will add an event handler which prints to Log window.
        report.on("loaded", function () {
            console.log("Loaded");
        });
    };
    BiReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bi-reports',
            template: __webpack_require__(/*! ./bi-reports.component.html */ "./src/app/Components/bi-reports/bi-reports.component.html"),
            styles: [__webpack_require__(/*! ./bi-reports.component.css */ "./src/app/Components/bi-reports/bi-reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BiReportsComponent);
    return BiReportsComponent;
}());



/***/ }),

/***/ "./src/app/Components/calendar/calendar.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/calendar/calendar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n  margin: 0 0 10px;\r\n}\r\n\r\npre {\r\n  background-color: #f5f5f5;\r\n  padding: 15px;\r\n}\r\n\r\n.calendar{\r\n  margin-top:100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4uY2FsZW5kYXJ7XHJcbiAgbWFyZ2luLXRvcDoxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/calendar/calendar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/calendar/calendar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar col-sm-7\">\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Event action occurred</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      Action:\r\n      <pre>{{ modalData?.action }}</pre>\r\n    </div>\r\n    <div>\r\n      Event:\r\n      <pre>{{ modalData?.event | json }}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div class=\"btn btn-primary\"\r\n           mwlCalendarPreviousView\r\n           [view]=\"view\"\r\n           [(viewDate)]=\"viewDate\"\r\n           (viewDateChange)=\"activeDayIsOpen = false\">\r\n        Previous\r\n      </div>\r\n      <div class=\"btn btn-outline-secondary\"\r\n           mwlCalendarToday\r\n           [(viewDate)]=\"viewDate\">\r\n        Today\r\n      </div>\r\n      <div class=\"btn btn-primary\"\r\n           mwlCalendarNextView\r\n           [view]=\"view\"\r\n           [(viewDate)]=\"viewDate\"\r\n           (viewDateChange)=\"activeDayIsOpen = false\">\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div class=\"btn btn-primary\"\r\n           (click)=\"view = CalendarView.Month\"\r\n           [class.active]=\"view === CalendarView.Month\">\r\n        Month\r\n      </div>\r\n      <div class=\"btn btn-primary\"\r\n           (click)=\"view = CalendarView.Week\"\r\n           [class.active]=\"view === CalendarView.Week\">\r\n        Week\r\n      </div>\r\n      <div class=\"btn btn-primary\"\r\n           (click)=\"view = CalendarView.Day\"\r\n           [class.active]=\"view === CalendarView.Day\">\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\"\r\n                           [viewDate]=\"viewDate\"\r\n                           [events]=\"events\"\r\n                           [refresh]=\"refresh\"\r\n                           [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                           (dayClicked)=\"dayClicked($event.day)\"\r\n                           (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                           (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\"\r\n                          [viewDate]=\"viewDate\"\r\n                          [events]=\"events\"\r\n                          [refresh]=\"refresh\"\r\n                          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                          (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\"\r\n                         [viewDate]=\"viewDate\"\r\n                         [events]=\"events\"\r\n                         [refresh]=\"refresh\"\r\n                         (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                         (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-day-view>\r\n</div>\r\n</div>\r\n\r\n<br><br><br>\r\n\r\n<div class=\"editEvent col-sm-5\"><h3>\r\n  Edit events\r\n  <button class=\"btn btn-primary pull-right\"\r\n          (click)=\"addEvent()\">\r\n    Add new\r\n  </button>\r\n  <div class=\"clearfix\"></div>\r\n</h3>\r\n\r\n<table class=\"table table-bordered\">\r\n\r\n  <thead>\r\n    <tr>\r\n      <th>Title</th>\r\n      <th>Primary color</th>\r\n      <th>Starts at</th>\r\n      <th>Ends at</th>\r\n      <th>Remove</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let event of events; let index = index\">\r\n      <td>\r\n        <input type=\"text\"\r\n               class=\"form-control\"\r\n               [(ngModel)]=\"event.title\"\r\n               (keyup)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <input type=\"color\"\r\n               [(ngModel)]=\"event.color.primary\"\r\n               (change)=\"refresh.next()\">\r\n      </td>\r\n  \r\n      <td>\r\n        <input class=\"form-control\"\r\n               type=\"text\"\r\n               mwlFlatpickr\r\n               [(ngModel)]=\"event.start\"\r\n               (ngModelChange)=\"refresh.next()\"\r\n               [altInput]=\"true\"\r\n               [convertModelValue]=\"true\"\r\n               [enableTime]=\"true\"\r\n               dateFormat=\"Y-m-dTH:i\"\r\n               altFormat=\"F j, Y H:i\"\r\n               placeholder=\"Not set\">\r\n      </td>\r\n      <td>\r\n        <input class=\"form-control\"\r\n               type=\"text\"\r\n               mwlFlatpickr\r\n               [(ngModel)]=\"event.end\"\r\n               (ngModelChange)=\"refresh.next()\"\r\n               [altInput]=\"true\"\r\n               [convertModelValue]=\"true\"\r\n               [enableTime]=\"true\"\r\n               dateFormat=\"Y-m-dTH:i\"\r\n               altFormat=\"F j, Y H:i\"\r\n               placeholder=\"Not set\">\r\n      </td>\r\n      <td>\r\n        <button class=\"btn btn-danger\"\r\n                (click)=\"events.splice(index, 1); refresh.next()\">\r\n          Delete\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n<div>"

/***/ }),

/***/ "./src/app/Components/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");






var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
        ];
        this.activeDayIsOpen = true;
    }
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "modalContent", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'CalendarComponent',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/Components/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/Components/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home_container{\r\n  margin-left: 25%;\r\n}\r\n.col-12 col-md-3 aside-content {\r\n    height: 100%;\r\n}\r\nbody{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n/*Adjust icon size*/\r\ni{\r\n  font-size:1.3em;\r\n  color:black;\r\n}\r\n/*Apply corporate color for the nav bar*/\r\n.bg-color{\r\n  background-color: #555;\r\n}\r\nli{\r\n  margin-right: 20px;\r\n  font-size: 17px;\r\n}\r\nfooter{\r\n  line-height: 80px;\r\n}\r\n.side-image{\r\n  background-image: url(\"/assets/background-image.jpg\");  \r\n  height:500px;\r\n  width:500px;\r\n  \r\n}\r\n/********** HOVER MOUSE FOR ICON BAR *****************/\r\n/* The container <div> - needed to position the dropdown content */\r\n.drop-down {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {display: block;}\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n/************ END HOVER MOUSE *******************/\r\n/******* CUSTOM TOGGLE SWITCH *******/\r\n.switch input { \r\n  display:none;\r\n}\r\n.switch {\r\n  display:inline-block;\r\n  width:55px;\r\n  height:25px;\r\n  margin:8px;\r\n  -webkit-transform:translateY(50%);\r\n          transform:translateY(50%);\r\n  position:relative;\r\n}\r\n.slider {\r\n  position:absolute;\r\n  top:0;\r\n  bottom:0;\r\n  left:0;\r\n  right:0;\r\n  border-radius:30px;\r\n  box-shadow:0 0 0 2px #777, 0 0 4px #777;\r\n  cursor:pointer;\r\n  border:4px solid transparent;\r\n  overflow:hidden;\r\n   transition:.4s;\r\n}\r\n.slider:before {\r\n  position:absolute;\r\n  content:\"\";\r\n  width:100%;\r\n  height:100%;\r\n  background:#777;\r\n  border-radius:30px;\r\n  -webkit-transform:translateX(-30px);\r\n          transform:translateX(-30px);\r\n  transition:.4s;\r\n}\r\ninput:checked + .slider:before {\r\n  -webkit-transform:translateX(30px);\r\n          transform:translateX(30px);\r\n  background:green;\r\n}\r\ninput:checked + .slider {\r\n  box-shadow:0 0 0 2px green,0 0 2px green;\r\n}\r\n/*********** END TOGGLE SWITCH **********/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUFDO0VBQ0MsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osV0FBVzs7QUFFYjtBQUdBLHNEQUFzRDtBQUN0RCxrRUFBa0U7QUFDbEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQixzQkFBc0IsQ0FBQztBQUVsRCxvQ0FBb0M7QUFDcEMsbUNBQW1DLGNBQWMsQ0FBQztBQUNsRCwwQkFBMEIseUJBQXlCLENBQUM7QUFDcEQsaURBQWlEO0FBR2pELHFDQUFxQztBQUNyQztFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsS0FBSztFQUNMLFFBQVE7RUFDUixNQUFNO0VBQ04sT0FBTztFQUNQLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixlQUFlO0dBQ2QsY0FBYztBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0EseUNBQXlDIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX2NvbnRhaW5lcntcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcbi5jb2wtMTIgY29sLW1kLTMgYXNpZGUtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1ib2R5e1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLypBZGp1c3QgaWNvbiBzaXplKi9cclxuaXtcclxuICBmb250LXNpemU6MS4zZW07XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi8qQXBwbHkgY29ycG9yYXRlIGNvbG9yIGZvciB0aGUgbmF2IGJhciovXHJcbi5iZy1jb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG5saXtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zaWRlLWltYWdle1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZC1pbWFnZS5qcGdcIik7ICBcclxuICBoZWlnaHQ6NTAwcHg7XHJcbiAgd2lkdGg6NTAwcHg7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKiBIT1ZFUiBNT1VTRSBGT1IgSUNPTiBCQVIgKioqKioqKioqKioqKioqKiovXHJcbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuLmRyb3AtZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cclxuLyoqKioqKioqKioqKiBFTkQgSE9WRVIgTU9VU0UgKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4vKioqKioqKiBDVVNUT00gVE9HR0xFIFNXSVRDSCAqKioqKioqL1xyXG4uc3dpdGNoIGlucHV0IHsgXHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbi5zd2l0Y2gge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOjU1cHg7XHJcbiAgaGVpZ2h0OjI1cHg7XHJcbiAgbWFyZ2luOjhweDtcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBib3R0b206MDtcclxuICBsZWZ0OjA7XHJcbiAgcmlnaHQ6MDtcclxuICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgYm94LXNoYWRvdzowIDAgMCAycHggIzc3NywgMCAwIDRweCAjNzc3O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIGJvcmRlcjo0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICB0cmFuc2l0aW9uOi40cztcclxufVxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDojNzc3O1xyXG4gIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMzBweCk7XHJcbiAgdHJhbnNpdGlvbjouNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMzBweCk7XHJcbiAgYmFja2dyb3VuZDpncmVlbjtcclxufVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYm94LXNoYWRvdzowIDAgMCAycHggZ3JlZW4sMCAwIDJweCBncmVlbjtcclxufVxyXG4vKioqKioqKioqKiogRU5EIFRPR0dMRSBTV0lUQ0ggKioqKioqKioqKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/Components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <!--Add jumbotron-->\r\n        <div class=\"jumbotron jumbotron-fluid\">\r\n            <div class=\"container text-center\">\r\n                <h1 class=\"display-4\">Welcome to Hub2.0</h1>\r\n                <h3>Placeholder for mission statement </h3>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <!--Main Content-->\r\n        <div class=\"container\">\r\n            <!--Create 3 equal boxes in the top section-->\r\n            <div class=\"row\">\r\n                <!--Box 1-->\r\n                <div class=\"col-xs-4 col-lg-4\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"/assets/customer.jpg\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">Card title</h5>\r\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the\r\n                                bulk of\r\n                                the card's content.</p>\r\n                            <a href=\"#\" class=\"btn btn-primary\">Read more...</a>\r\n                        </div>\r\n                    </div>\r\n                </div><!--End box 1-->\r\n\r\n                <!--Box 2-->\r\n                <div class=\"col-xs-4 col-lg-4\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"/assets/18wheels.jpg\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">Card title</h5>\r\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the\r\n                                bulk of\r\n                                the card's content.</p>\r\n                            <a href=\"#\" class=\"btn btn-primary\">Read more...</a>\r\n                        </div>\r\n                    </div>\r\n                </div><!--End box 2-->\r\n\r\n                <!--Box 3-->\r\n                <div class=\"col-xs-4 col-lg-4\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"/assets/trucks.jpg\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">Card title</h5>\r\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the\r\n                                bulk of\r\n                                the card's content.</p>\r\n                            <a href=\"#\" class=\"btn btn-primary\">Read more...</a>\r\n                        </div>\r\n                    </div>\r\n                </div><!--End box 3-->\r\n            </div><!--End first row-->\r\n        </div>\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n            <!--Create right side column for featured articles-->\r\n            <div class=\"col-xs-9 col-md-9\">\r\n                <h3>Featured articles</h3>\r\n                <ul class=\"list-unstyled\">\r\n                    <li class=\"media\">\r\n                        <img class=\"mr-3\" src=\"/assets/hqbuilding.jpg\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\"><a href=\"#\">Article 1</a></h5>\r\n                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                                sollicitudin.\r\n                                Cras\r\n                                purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\r\n                                ac\r\n                                nisi\r\n                                vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                            </p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media my-4\">\r\n                        <img class=\"mr-3\" src=\"/assets/group.jpg\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\"><a href=\"#\">Article 2</a></h5>\r\n                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                                sollicitudin.\r\n                                Cras\r\n                                purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\r\n                                ac\r\n                                nisi\r\n                                vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                            </p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <img class=\"mr-3\" src=\"/assets/firstaid.jpg\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\"><a href=\"#\">Article 3</a></h5>\r\n                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                                sollicitudin.\r\n                                Cras\r\n                                purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\r\n                                ac\r\n                                nisi\r\n                                vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                            </p>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div><!--End right side column-->\r\n\r\n            <!--Create left side column for quick links and resources-->            \r\n            <div class=\"col-xs-2 col-md-2 offset-1\">\r\n\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item text-center bg-info text-white\">\r\n                        <h5>Quick Links</h5>\r\n                    </li>\r\n                    <li class=\"list-group-item text-left\"><a href=\"#\">Training...</a></li>\r\n                    <li class=\"list-group-item text-left\"><a href=\"#\">Support...</a></li>\r\n                    <li class=\"list-group-item text-left\">Info needed...</li>\r\n                    <li class=\"list-group-item\">Info needed...</li>\r\n                </ul>\r\n                \r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                            <ul class=\"list-group mt-5\">\r\n                                    <li class=\"list-group-item text-center bg-secondary text-white\">\r\n                                        <h5>Tools and Resources</h5>\r\n                                    </li>\r\n                                    <li class=\"list-group-item text-left\"><a href=\"#\">Training...</a></li>\r\n                                    <li class=\"list-group-item text-left\"><a href=\"#\">Support...</a></li>\r\n                                    <li class=\"list-group-item text-left\">Info needed...</li>\r\n                                    <li class=\"list-group-item\">Info needed...</li>\r\n                                </ul>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div><!--End second row-->\r\n\r\n\r\n    \r\n   "

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _Core_service_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core/service/tags.service */ "./src/app/Core/service/tags.service.ts");
/* harmony import */ var src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Core/auth-gaurd/auth-gaurd.component */ "./src/app/Core/auth-gaurd/auth-gaurd.component.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, tagsService, userService) {
        this.router = router;
        this.tagsService = tagsService;
        this.userService = userService;
        this.listConfig = {
            type: 'all',
            filters: {}
        };
        this.tags = [];
        this.tagsLoaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        /*this.userService.isAuthenticated.subscribe(
          (authenticated) => {
            this.isAuthenticated = authenticated;
    
            // set the article list accordingly
            if (authenticated) {
              this.setListTo('feed');
            } else {
              this.setListTo('all');
            }
          }
        );
    
        this.tagsService.getAll()
        .subscribe(tags => {
          this.tags = tags;
          this.tagsLoaded = true;
        });*/
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            providers: [_Core_service_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"], src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Core_service_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/mobile-nav/mobile-nav.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/mobile-nav/mobile-nav.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n    display: block;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\nwidth: 50%;\r\nmargin: auto;\r\nwidth:\"75px\";\r\n height:\"35px\";\r\n}\r\n.main-nav{\r\n    margin-bottom: 100px;\r\n\r\n}\r\n.cd-side-nav {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: opacity 0.2s 0s, visibility 0s 0.2s;\r\n  }\r\n.cd-side-nav.nav-is-visible {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: opacity 0.2s 0s, visibility 0s 0s;\r\n  }\r\n@media only screen and (min-width: 768px) {\r\n    .cd-side-nav {\r\n      position: relative;\r\n      float: left;\r\n      width: 110px;\r\n      /* reset style */\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n@media only screen and (min-width: 768px) { \r\n   .cd-main-content .content-wrapper { \r\n   margin-left: 110px; \r\n   } \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tb2JpbGUtbmF2L21vYmlsZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsWUFBWTtBQUNaLFlBQVk7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtJQUNJLG9CQUFvQjs7QUFFeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLCtDQUErQztFQUNqRDtBQUNBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw2Q0FBNkM7RUFDL0M7QUFDQTtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixVQUFVO0lBQ1o7RUFDRjtBQUVBO0dBQ0M7R0FDQSxrQkFBa0I7R0FDbEI7RUFDRCIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbW9iaWxlLW5hdi9tb2JpbGUtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5tYXJnaW4tbGVmdDogYXV0bztcclxubWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG53aWR0aDogNTAlO1xyXG5tYXJnaW46IGF1dG87XHJcbndpZHRoOlwiNzVweFwiO1xyXG4gaGVpZ2h0OlwiMzVweFwiO1xyXG59XHJcbi5tYWluLW5hdntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG5cclxufVxyXG4uY2Qtc2lkZS1uYXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAwcywgdmlzaWJpbGl0eSAwcyAwLjJzO1xyXG4gIH1cclxuICAuY2Qtc2lkZS1uYXYubmF2LWlzLXZpc2libGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgMHMsIHZpc2liaWxpdHkgMHMgMHM7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jZC1zaWRlLW5hdiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgLyogcmVzZXQgc3R5bGUgKi9cclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgeyBcclxuICAgLmNkLW1haW4tY29udGVudCAuY29udGVudC13cmFwcGVyIHsgXHJcbiAgIG1hcmdpbi1sZWZ0OiAxMTBweDsgXHJcbiAgIH0gXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/mobile-nav/mobile-nav.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/mobile-nav/mobile-nav.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n<div class=\"top\" >\r\n  \r\n        <nav class=\"navbar navbar-default visible-xs\" role=\"navigation\" id=\"\">\r\n            <div class=\"navbar-header\">\r\n                <!--sidenavButton right-->\r\n                <button type=\"button\" class=\"navbar-toggle pull-left\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\"> <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <!--sidenavButton right-->\r\n                <button type=\"button\" class=\"navbar-toggle pull-right\" data-toggle=\"collapse\" data-target=\".navbar-ex2-collapse\" style=\"padding: 8px 15px;\"> <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-sort\"></span>\r\n                </button>   \r\n                <!--logo-->\r\n                <div class=\"logo\">\r\n\r\n                        <img class=\"img-responsive m-3\" src=\"/assets/logo.svg\" alt=\"logo\">\r\n                  </div>    \r\n                      \r\n            </div>\r\n           \r\n            <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n             <!--SideNav content-->    \r\n            </div>\r\n            <div class=\"collapse navbar-collapse navbar-ex2-collapse\">\r\n                   <!--SideNav content--> \r\n               \r\n            </div>\r\n            <!--Search0-->\r\n            <div class=\"col-xs-12\">\r\n                    <form class=\"navbar-form qu-from\" role=\"search\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                        </div>\r\n                    </form>\r\n                </div>    \r\n        </nav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/mobile-nav/mobile-nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/mobile-nav/mobile-nav.component.ts ***!
  \***************************************************************/
/*! exports provided: MobileNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavComponent", function() { return MobileNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/** @title Basic sidenav */
var MobileNavComponent = /** @class */ (function () {
    function MobileNavComponent() {
        this.showFiller = false;
    }
    MobileNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mobile-nav',
            template: __webpack_require__(/*! ./mobile-nav.component.html */ "./src/app/Components/mobile-nav/mobile-nav.component.html"),
            styles: [__webpack_require__(/*! ./mobile-nav.component.css */ "./src/app/Components/mobile-nav/mobile-nav.component.css")]
        })
    ], MobileNavComponent);
    return MobileNavComponent;
}());



/***/ }),

/***/ "./src/app/Components/navmenu/navmenu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Components/navmenu/navmenu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 600px) {\r\n\r\n  .side-image{\r\n      display:none;\r\n  }\r\n  .login{\r\n      width:100%;\r\n  }\r\n  .desktopnav{\r\n    display:none\r\n  }\r\n}\r\nli .glyphicon {\r\n  margin-right: 10px;\r\n}\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n  background-color: #4189C7;\r\n  color: white;\r\n}\r\nimg > .user-img {\r\n  height: 10px;\r\n  width:10px;\r\n  display: none;\r\n}\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n@media (min-width: 768px) {\r\n  /* On small screens, convert the nav menu to a vertical sidebar */\r\n  .main-nav {\r\n\r\n    width: calc(100% - 20px);\r\n  }\r\n\r\n  .navbar {\r\n    border-radius: 0px;\r\n    border-width: 0px;\r\n    \r\n  }\r\n\r\n  .navbar-header {\r\n    float: none;\r\n    height: 10px;\r\n    \r\n  }\r\n\r\n  .navbar-collapse {\r\n    border-top: 1px solid #444;\r\n    padding: 0px;\r\n  }\r\n\r\n  .navbar ul {\r\n    float: none;\r\n  }\r\n\r\n  .navbar li {\r\n    float: left;\r\n    font-size: 15px;\r\n    margin: 6px;\r\n    list-style: none;\r\n  }\r\n\r\n    .navbar li a {\r\n      padding: 10px 16px;\r\n      border-radius: 4px;\r\n      display: block;\r\n    }\r\n\r\n  .navbar a {\r\n    /* If a menu item's text is too long, truncate it */\r\n    \r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n  .search {\r\n    float: right;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  \r\n\r\n  .navbar-header {\r\n    height: 0px;\r\n  }\r\n  .nav{\r\n    background-color:black;\r\n  }\r\n  .nav-login {\r\n    float:right;\r\n  }\r\n  .top ul{\r\n    float:right;\r\n  }\r\n  \r\n.SearchBtn{\r\n\r\n  background: transparent;\r\n  border: none !important;\r\n  float: none;\r\nmargin-left:-3px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n  .dropdown .dropbtn {\r\n    font-size: 16px; \r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    background-color: inherit;\r\n    font-family: inherit; /* Important for vertical align on mobile phones */\r\n    margin: 0; /* Important for vertical align on mobile phones */\r\n    font-family: Helvetica, Arial, san-serif;\r\n  }\r\n  /* Dropdown content (hidden by default) */\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n/* Add a grey background color to dropdown links on hover */\r\n.dropdown-content a:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n#usernotification{\r\n  float:right;\r\n}\r\nlogout{\r\n  float:right;\r\n}\r\n.navbar-branf{\r\n  height: auto;\r\n  \r\n}\r\n[hidden] {\r\n   display: none;\r\n}\r\n.example-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.clearfix{\r\n    background-color:white;\r\n}\r\n.rightnav {\r\n    background-color:white;\r\n}\r\ni {\r\n    color:black;\r\n}\r\n.search {\r\n        font-size: 15px;\r\n    margin: 6px;\r\n    list-style: none;\r\n}\r\n.glyphicon glyphicon-calandar{\r\n  color: black;\r\n}\r\n.glyphicon-search{\r\n  color: white;\r\n}\r\n.logoutBtn{\r\n  background: transparent;\r\n    border: none !important;\r\n    float: none;\r\n  margin-left:-3px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n.navbar-toggle .navbar-left\r\n{\r\n  float:left;\r\n  margin:10px;\r\n}\r\n\r\nbody{\r\n  font-family:Verdana, Geneva, sans-serif;\r\nbackground-color:#fffeab;\r\n}\r\n.navbar-default{\r\nbackground-color:#e7513d;\r\nborder:none;\r\nborder-radius:0px;\r\n}\r\n.navbar-default .navbar-nav > li > a{\r\ncolor:#fff;\r\nmargin-left:6px;\r\n}\r\n\r\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus{\r\nbackground-color:#8b2214;\r\ncolor:#fff;\r\n}\r\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus{\r\nbackground-color:#8b2214;\r\ncolor:#fff;\r\n}\r\n.navbar-nav > li > .dropdown-menu{\r\nbackground-color:#8b2214;\r\ncolor:#fff;\r\nborder-color:#8b2214;\r\n}\r\n.dropdown-menu > li > a{\r\ncolor:#fff;\r\n}\r\n.social{\r\ncolor:#fff;\r\nline-height:50px;\r\n}\r\n.social a{\r\ncolor:#FFF;\r\n      padding:15px;\r\n}\r\n#banner{\r\nbackground:100%;\r\nbackground-size:100%;\r\n}\r\n.para{\r\nmargin-top:10%;\r\n}\r\n.loans{\r\nmargin-top:20%;\r\n}\r\n.navbar-ex2-collapse ul li{\r\n  list-style: none;\r\n}\r\n.navbar-ex2-collapse ul li a{\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n.navbar-ex2-collapse ul li {\r\n  float: left;\r\n  list-style: outside none none;\r\n}\r\n.navbar-ex2-collapse ul li:hover{\r\n  background: #8b2214;\r\n  color: #fff;\r\n}\r\n.qu-from{border: none;}\r\n.padding-20{\r\n  height: 20px;\r\n}\r\n.main{\r\n  background-color: #000;\r\n  height: 200px;\r\n}\r\n\r\n.side{\r\n  background-color: #ccc;\r\n  height: 200px;\r\n}\r\n\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .navbar-header {\r\n  \r\n      display:none;\r\n    \r\n  }\r\n  .side-image{\r\n      display:none;\r\n  }\r\n  .login{\r\n      width:100%;\r\n  }\r\n  .desktopnav{\r\n    display:none\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtNQUNJLFlBQVk7RUFDaEI7RUFDQTtNQUNJLFVBQVU7RUFDZDtFQUNBO0lBQ0U7RUFDRjtBQUNGO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSwwQ0FBMEM7QUFDMUM7OztFQUdFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0EseUVBQXlFO0FBQ3pFO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFOztJQUVFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztJQUVFO01BQ0Usa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCOztFQUVGO0lBQ0UsbURBQW1EOztJQUVuRCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7Ozs7RUFJQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjs7RUFFRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYixnQkFBZ0I7RUFDZCxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtFQUNFO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsb0JBQW9CLEVBQUUsa0RBQWtEO0lBQ3hFLFNBQVMsRUFBRSxrREFBa0Q7SUFDN0Qsd0NBQXdDO0VBQzFDO0VBQ0EseUNBQXlDO0FBQzNDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsMkRBQTJEO0FBQzNEO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZOztBQUVkO0FBQ0E7R0FDRyxhQUFhO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7UUFDUSxlQUFlO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYixnQkFBZ0I7SUFDZCxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBOztFQUVFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekMsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsV0FBVztBQUNYLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZjs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1Y7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1Y7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1Ysb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFVBQVU7TUFDSixZQUFZO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0EsU0FBUyxZQUFZLENBQUM7QUFDdEI7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0FBQ0E7RUFDRTs7TUFFSSxZQUFZOztFQUVoQjtFQUNBO01BQ0ksWUFBWTtFQUNoQjtFQUNBO01BQ0ksVUFBVTtFQUNkO0VBQ0E7SUFDRTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgLnNpZGUtaW1hZ2V7XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgLmxvZ2lue1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAuZGVza3RvcG5hdntcclxuICAgIGRpc3BsYXk6bm9uZVxyXG4gIH1cclxufVxyXG5saSAuZ2x5cGhpY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cclxubGkubGluay1hY3RpdmUgYSxcclxubGkubGluay1hY3RpdmUgYTpob3ZlcixcclxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW1nID4gLnVzZXItaW1nIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6MTBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXHJcbi5tYWluLW5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xyXG4gIC5tYWluLW5hdiB7XHJcblxyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHVsIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gICAgLm5hdmJhciBsaSBhIHtcclxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAubmF2YmFyIGEge1xyXG4gICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xyXG4gICAgXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICAubmF2LWxvZ2luIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gIH1cclxuICAudG9wIHVse1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4uU2VhcmNoQnRue1xyXG5cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBmbG9hdDogbm9uZTtcclxubWFyZ2luLWxlZnQ6LTNweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgICBtYXJnaW46IDA7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbi1zZXJpZjtcclxuICB9XHJcbiAgLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiN1c2Vybm90aWZpY2F0aW9ue1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcbmxvZ291dHtcclxuICBmbG9hdDpyaWdodDtcclxufVxyXG4ubmF2YmFyLWJyYW5me1xyXG4gIGhlaWdodDogYXV0bztcclxuICBcclxufVxyXG5baGlkZGVuXSB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5jbGVhcmZpeHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuLnJpZ2h0bmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuaSB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4uc2VhcmNoIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmdseXBoaWNvbiBnbHlwaGljb24tY2FsYW5kYXJ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5nbHlwaGljb24tc2VhcmNoe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubG9nb3V0QnRue1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW4tbGVmdDotM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlIC5uYXZiYXItbGVmdFxyXG57XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBtYXJnaW46MTBweDtcclxufVxyXG5cclxuYm9keXtcclxuICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbmJhY2tncm91bmQtY29sb3I6I2ZmZmVhYjtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHR7XHJcbmJhY2tncm91bmQtY29sb3I6I2U3NTEzZDtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYXtcclxuY29sb3I6I2ZmZjtcclxubWFyZ2luLWxlZnQ6NnB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3Vze1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM4YjIyMTQ7XHJcbmNvbG9yOiNmZmY7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpmb2N1c3tcclxuYmFja2dyb3VuZC1jb2xvcjojOGIyMjE0O1xyXG5jb2xvcjojZmZmO1xyXG59XHJcbi5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudXtcclxuYmFja2dyb3VuZC1jb2xvcjojOGIyMjE0O1xyXG5jb2xvcjojZmZmO1xyXG5ib3JkZXItY29sb3I6IzhiMjIxNDtcclxufVxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYXtcclxuY29sb3I6I2ZmZjtcclxufVxyXG4uc29jaWFse1xyXG5jb2xvcjojZmZmO1xyXG5saW5lLWhlaWdodDo1MHB4O1xyXG59XHJcbi5zb2NpYWwgYXtcclxuY29sb3I6I0ZGRjtcclxuICAgICAgcGFkZGluZzoxNXB4O1xyXG59XHJcbiNiYW5uZXJ7XHJcbmJhY2tncm91bmQ6MTAwJTtcclxuYmFja2dyb3VuZC1zaXplOjEwMCU7XHJcbn1cclxuLnBhcmF7XHJcbm1hcmdpbi10b3A6MTAlO1xyXG59XHJcbi5sb2Fuc3tcclxubWFyZ2luLXRvcDoyMCU7XHJcbn1cclxuLm5hdmJhci1leDItY29sbGFwc2UgdWwgbGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2YmFyLWV4Mi1jb2xsYXBzZSB1bCBsaSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2YmFyLWV4Mi1jb2xsYXBzZSB1bCBsaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZTogb3V0c2lkZSBub25lIG5vbmU7XHJcbn1cclxuLm5hdmJhci1leDItY29sbGFwc2UgdWwgbGk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzhiMjIxNDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ucXUtZnJvbXtib3JkZXI6IG5vbmU7fVxyXG4ucGFkZGluZy0yMHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLm1haW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uc2lkZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubmF2YmFyLWhlYWRlciB7XHJcbiAgXHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAuc2lkZS1pbWFnZXtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAubG9naW57XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG4gIC5kZXNrdG9wbmF2e1xyXG4gICAgZGlzcGxheTpub25lXHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Components/navmenu/navmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Components/navmenu/navmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class='main-nav'>\r\n\r\n     \r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header desktopnav'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n\r\n    <a class=\"navbar-brand .svg\" id=\"logo\" [routerLink]=\"['/home']\">\r\n    <img  src=\"src/assets/logo.svg\"  alt=\"TMT Hub2.0\" />\r\n    </a>\r\n    <!--Desktop nav-->\r\n\r\n      <div ng-if=\"show\" class=\"nav navbar-brand pull-right rightnav dropdown\">\r\n          <button class=\"logoutBtn\" (click)=\"logout()\">logout</button>\r\n          <a href=\"#\" >\r\n            <!--i class=\"glyphicon glyphicon-bell\"></i>-->\r\n            <span class=\"label label-danger\"></span>\r\n            <div class=\"dropdown-content\">\r\n            \r\n            </div>\r\n          </a>\r\n      </div>\r\n      <div class=\"nav navbar-brand pull-right rightnav dropdown\">\r\n          <i class=\"glyphicon glyphicon-user\"></i>\r\n             <span class=\"label label-danger\"></span>\r\n            <div class=\"dropdown-content\">\r\n                <a [routerLink]=\"['/User']\">Profile</a>\r\n           \r\n                <a><button class=\"logoutBtn\" (click)=\"logout()\">logout</button></a>\r\n            </div>\r\n          \r\n      </div>\r\n      \r\n      <div class=\"nav navbar-brand pull-right rightnav dropdown\">\r\n              <a [routerLink]=\"['/calendar']\"><i class=\"glyphicon glyphicon-calendar\"></i>\r\n                <span class=\"label label-danger\"></span></a>\r\n        \r\n        \r\n    </div>\r\n    <div [hidden]='!admin()' class=\"nav navbar-brand pull-right rightnav dropdown\">\r\n      <a [routerLink]=\"['/ContentManager']\"> {{User.roles.designationType}}\r\n           <span class=\"label label-danger\"></span></a>\r\n        \r\n    </div>\r\n  </div>\r\n  <!--Desktop nav-->\r\n  <div [hidden]='!shownav()'>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n        <!--<li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/home']\">\r\n            <span class='glyphicon glyphicon-home'></span> Home\r\n          </a>\r\n        </li>\r\n        <!--<li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/Article']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Article\r\n          </a>\r\n        </li>-->\r\n        <li><!-- note the ng-init and ng-click here: -->\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">\r\n              <i class=\"fa fa-caret-down\"></i>\r\n              <span class='glyphicon glyphicon-th-list'></span>\r\n              Resources\r\n            </button>\r\n            <div class=\"dropdown-content\">\r\n              <a [routerLink]=\"['/home']\">Home</a>\r\n              <a [routerLink]=\"['/Articles/1/createdAt']\">All articles\r\n              </a>\r\n              <a [routerLink]=\"['/AddArticle']\">Add Article</a>\r\n            </div>\r\n          </div> \r\n        </li>\r\n        <li><!-- note the ng-init and ng-click here: -->\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">\r\n              <i class=\"fa fa-caret-down\"></i>\r\n              <span class='glyphicon glyphicon-th-list'></span> MWC2\r\n            </button>\r\n            <div class=\"dropdown-content\">\r\n              <a [routerLink]=\"['/UserProfile']\">Category\r\n              </a>\r\n              <a href=\"#\">Category</a>\r\n              <a href=\"#\">Category</a>\r\n            </div>\r\n          </div> \r\n        </li>\r\n        <li><!-- note the ng-init and ng-click here: -->\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">\r\n              <i class=\"fa fa-caret-down\"></i>\r\n              <span class='glyphicon glyphicon-th-list'></span>Reports and Dashboards\r\n            </button>\r\n            <div class=\"dropdown-content\">\r\n              <a [routerLink]=\"['/BiReport']\">Reports\r\n              </a>\r\n              <a href=\"#\">Category</a>\r\n              <a href=\"#\">Category</a>\r\n            </div>\r\n          </div> \r\n        </li>\r\n        <li><!-- note the ng-init and ng-click here: -->\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">\r\n              <i class=\"fa fa-caret-down\"></i>\r\n              <span class='glyphicon glyphicon-th-list'></span> Project\r\n            </button>\r\n            <div class=\"dropdown-content\">\r\n              <a [routerLink]=\"['/Articles']\">Category\r\n              </a>\r\n             \r\n          \r\n              <a [routerLink]=\"['/article/12']\">Category</a>\r\n              <a href=\"#\">Category</a>\r\n            </div>\r\n          </div> \r\n        </li>\r\n        <li><!-- note the ng-init and ng-click here: -->\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">\r\n              <i class=\"fa fa-caret-down\"></i>\r\n              <span class='glyphicon glyphicon-th-list'></span> Training\r\n            </button>\r\n            <div class=\"dropdown-content\">\r\n              <a [routerLink]=\"['/home']\">Category\r\n              \r\n              </a>\r\n              <a [routerLink]=\"['/Articles']\">Category\r\n              </a>\r\n              <a [routerLink]=\"['/AddArticle']\">Category</a>\r\n            </div>\r\n          </div> \r\n        <li class='pull-right' > \r\n\r\n            <button class=\"SearchBtn\" (click)=showSearch()><i class=\"glyphicon glyphicon-search\"></i>\r\n              <span class=\"label label-danger\"></span></button>\r\n          </li>\r\n       \r\n      </ul>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  <!--Mobile nav-->\r\n  <div [hidden]='shownav()'>\r\n      <nav class=\"navbar navbar-default visible-xs\" role=\"navigation\" id=\"\">\r\n          <div class=\"navbar-header\">\r\n              <button type=\"button\" class=\"navbar-toggle pull-left\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\"> <span class=\"sr-only\">Toggle navigation</span>\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>\r\n              </button>\r\n              <button type=\"button\" class=\"navbar-toggle pull-right\" data-toggle=\"collapse\" data-target=\".navbar-ex2-collapse\" style=\"padding: 8px 15px;\"> <span class=\"sr-only\">Toggle navigation</span>\r\n                  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-sort\"></span>\r\n              </button>                \r\n          </div>\r\n          <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n              <ul class=\"nav navbar-nav\">\r\n                  <li class=\"active\"><a href=\"#\">Home<span class=\"sr-only\">(current)</span></a></li>\r\n                  <li><a href=\"#\">About Us</a></li>\r\n                  <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Services<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\" role=\"menu\">\r\n                      <li><a href=\"#\">Link 1</a></li>\r\n                      <li><a href=\"#\">Link 2</a></li>\r\n                      <li><a href=\"#\">Link 3</a></li>\r\n                      <li><a href=\"#\">Link 4</a></li>\r\n                    </ul>\r\n                    <li><a href=\"#\">Contact Us</a></li>\r\n                    <li><a href=\"#\">Events</a></li>\r\n                    <li><a href=\"#\">Career</a></li>\r\n               </ul>\r\n          </div>\r\n          <div class=\"collapse navbar-collapse navbar-ex2-collapse\">\r\n              <div class=\"col-xs-12\">\r\n                  <ul>\r\n                      <li><span class=\"social\"><a href=\"#\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-tags\"></i></a></span></li>\r\n                      <li><span class=\"social\"><a href=\"#\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-envelope\"></i></a></span></li>\r\n                      <li><span class=\"social\"><a href=\"#\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-music\"></i></a></span></li>\r\n                      <li><span class=\"social\"><a href=\"#\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-trash\"></i></a></span></li>\r\n                  </ul>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                  <form class=\"navbar-form qu-from\" role=\"search\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                      </div>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </nav>\r\n</div>\r\n    <!--End of Mobile nav-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!--End of Mobile nav-->\r\n\r\n  <mat-sidenav-container\r\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\r\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\r\n  </mat-sidenav>\r\n"

/***/ }),

/***/ "./src/app/Components/navmenu/navmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/navmenu/navmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/Service */ "./src/app/Core/Service/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var src_app_Core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Core */ "./src/app/Core/index.ts");




//import {AlertService } from '../../Core/Service'



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(router, authenticationService, route, ResponsiveService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.route = route;
        this.ResponsiveService = ResponsiveService;
        this.userService = userService;
        this.HOA = false;
        this.Admin = false;
        this.FU = false;
        // tslint:disable-next-line:no-inferrable-types
        this.showSearchCompontent = false;
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-next-line:member-ordering
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    NavMenuComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    NavMenuComponent.prototype.logout = function () {
        this.route.navigate['/home'];
        location.reload(true);
        window.sessionStorage.clear();
        window.localStorage.clear();
    };
    NavMenuComponent.prototype.shownav = function () {
        if (this.deviceDesktop === true) {
            this.show = true;
        }
        else {
            this.show = false;
        }
        return this.show;
    };
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findByUserName((window.sessionStorage.getItem("AuthUsername"))).subscribe(function (data) {
            console.log(data);
            _this.User = data;
            console.log(_this.User);
        });
        this.designation();
        this.ResponsiveService.getMobileStatus().subscribe(function (isMobile) {
            if (isMobile) {
                console.log('Mobile device detected');
                _this.deviceMobile = true;
            }
            else {
                console.log('Desktop detected');
                _this.deviceDesktop = true;
            }
        });
        this.onResize();
    };
    NavMenuComponent.prototype.onResize = function () {
        this.ResponsiveService.checkWidth();
    };
    NavMenuComponent.prototype.showSearch = function () {
        this.showSearchCompontent = true;
        this.buttonClicked.emit(this.showSearchCompontent);
    };
    NavMenuComponent.prototype.designation = function () {
        var role = window.sessionStorage.getItem("AuthAuthorities");
        if (this.role = "Home Office Admin") {
            this.HOA = true;
        }
        else if (this.role = "Franchise User") {
            this.FU = true;
            this.franchise = this.User.franchise;
        }
        else if (this.role = "Admin") {
            this.Admin = true;
        }
    };
    NavMenuComponent.prototype.admin = function () {
        var role = window.sessionStorage.getItem("AuthAuthorities");
        console.log(role);
        if (this.User.roles.designationID === 11) {
            this.HOA = true;
        }
        else {
            this.HOA = false;
        }
        return this.HOA;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavMenuComponent.prototype, "buttonClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])
    ], NavMenuComponent.prototype, "sidenav", void 0);
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/Components/navmenu/navmenu.component.html"),
            providers: [_Core_Service__WEBPACK_IMPORTED_MODULE_2__["ResponsiveService"]],
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/Components/navmenu/navmenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _Core_Service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Core_Service__WEBPACK_IMPORTED_MODULE_2__["ResponsiveService"],
            src_app_Core__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/Components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n                <!--Right Aside-->\r\n\r\n            <div>\r\n\r\n                <h3>Tools and Resources</h3>\r\n\r\n                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>\r\n\r\n                <h4>Some Links</h4>\r\n\r\n                <ul class=\"nav flex-column\">\r\n\r\n                    <li class=\"nav-item\">\r\n\r\n                        <a class=\"nav-link\" href=\"#\">Link 1</a>\r\n\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\">\r\n\r\n                        <a class=\"nav-link\" href=\"#\">Link 2</a>\r\n\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\">\r\n\r\n                        <a class=\"nav-link\" href=\"#\">Link 3</a>\r\n\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\">\r\n\r\n                        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n\r\n                    </li>\r\n\r\n                </ul>\r\n\r\n            </div>\r\n        "

/***/ }),

/***/ "./src/app/Components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/Components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/Components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/Core/Core.Module.ts":
/*!*************************************!*\
  !*** ./src/app/Core/Core.Module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_article_ArticleRoutes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/article/ArticleRoutes.module */ "./src/app/article/ArticleRoutes.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_summernote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-summernote */ "./node_modules/ngx-summernote/fesm5/ngx-summernote.js");
/* harmony import */ var src_app_article_markdown_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/article/markdown.pipe */ "./src/app/article/markdown.pipe.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_app_article_markdown_pipe__WEBPACK_IMPORTED_MODULE_6__["MarkdownPipe"],
            ],
            imports: [
                //BrowserModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_article_ArticleRoutes_module__WEBPACK_IMPORTED_MODULE_3__["ArticleRoutingModule"],
                ngx_summernote__WEBPACK_IMPORTED_MODULE_5__["NgxSummernoteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [,
            ],
            exports: [
                src_app_article_markdown_pipe__WEBPACK_IMPORTED_MODULE_6__["MarkdownPipe"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/Core/Service/Article.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/Service/Article.service.ts ***!
  \*************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/Service/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url;
console.log(url);
var endpoint = url + 'Articles/';
console.log(endpoint);
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    ArticlesService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params }));
    };
    ArticlesService.prototype.get = function (id) {
        return this.apiService.get('Articles/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/Articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/Articles/' + article.slug, { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/Articles/', { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.find = function (Page, Sort) {
        return this.apiService.get('Articles/' + Page + "/" + Sort).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.add = function (article) {
        return this.http.post(endpoint, article, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addHero', article)));
    };
    ArticlesService.prototype.addComment = function (comment) {
        return this.http.post(endpoint + '${Id}/Comment', comment, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Comment', comment)));
    };
    ArticlesService.prototype.getArticleById = function (id) {
        return this.http.get(endpoint + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/Core/Service/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Core/Service/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/Core/Service/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Core/Service/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/Core/Service/authentication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Core/Service/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/Core/Service/comment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/Service/comment.service.ts ***!
  \*************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/Service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CommentsService = /** @class */ (function () {
    function CommentsService(apiService) {
        this.apiService = apiService;
    }
    CommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.getAll = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comments; }));
    };
    CommentsService.prototype.destroy = function (commentId, articleSlug) {
        return this.apiService
            .delete("/articles/" + articleSlug + "/comments/" + commentId);
    };
    CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/Core/Service/index.ts":
/*!***************************************!*\
  !*** ./src/app/Core/Service/index.ts ***!
  \***************************************/
/*! exports provided: UserService, AlertService, AuthenticationService, ArticlesService, ResponsiveService, ApiService, CommentsService, JwtService, ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/Core/Service/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/Core/Service/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/Core/Service/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _Article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.service */ "./src/app/Core/Service/Article.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _Article_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"]; });

/* harmony import */ var _responsive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsive.service */ "./src/app/Core/Service/responsive.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return _responsive_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveService"]; });

/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/Service/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]; });

/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.service */ "./src/app/Core/Service/comment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentsService"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jwt.service */ "./src/app/Core/Service/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"]; });

/* harmony import */ var _profile_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-service.service */ "./src/app/Core/Service/profile-service.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]; });













/***/ }),

/***/ "./src/app/Core/Service/jwt.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Core/Service/jwt.service.ts ***!
  \*********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['AuthToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['AuthToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('AuthToken');
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/Core/Service/profile-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Core/Service/profile-service.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Core/service */ "./src/app/Core/service/index.ts");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




var ProfileService = /** @class */ (function () {
    function ProfileService(apiService) {
        this.apiService = apiService;
    }
    ProfileService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ProfileService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    ProfileService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/Core/Service/responsive.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Core/Service/responsive.service.ts ***!
  \****************************************************/
/*! exports provided: ResponsiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return ResponsiveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");

// globals.ts


var ResponsiveService = /** @class */ (function () {
    function ResponsiveService() {
        this.isMobile = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.checkWidth();
    }
    ResponsiveService.prototype.onMobileChange = function (status) {
        this.isMobile.next(status);
        //window.location.reload();
    };
    ResponsiveService.prototype.getMobileStatus = function () {
        return this.isMobile.asObservable();
    };
    ResponsiveService.prototype.checkWidth = function () {
        // tslint:disable-next-line:whitespace
        this.width = window.innerWidth;
        // tslint:disable-next-line:whitedth;
        if (this.width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        }
        else if (this.width > 768 && this.width <= 992) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        }
        else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    };
    ResponsiveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        // tslint:disable-next-line:class-name
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResponsiveService);
    return ResponsiveService;
}());



/***/ }),

/***/ "./src/app/Core/Service/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Core/Service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/Service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






//Read this about user authetication https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
var UserService = /** @class */ (function () {
    /*
      private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
      public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    */
    function UserService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.userUrl = 'http://localhost:8080/api/test/user';
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.accessToken);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.setAuth(data.user);
            return data;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    ///////////Old authentication
    UserService.prototype.getAll = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/register", user);
    };
    UserService.prototype.updateold = function (user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/" + id);
    };
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.userUrl, { responseType: 'text' });
    };
    UserService.prototype.findByUserName = function (Username) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + Username);
    };
    UserService.prototype.findByUserName1 = function (Username) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + Username);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/Core/auth-gaurd/auth-gaurd.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Core/auth-gaurd/auth-gaurd.component.ts ***!
  \*********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Core/auth/auth-interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/Core/auth/auth-interceptor.ts ***!
  \***********************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/Core/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/Core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Core/auth/token-storage.service */ "./src/app/Core/auth/token-storage.service.ts");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.loginUrl = 'https://webapp-190214214406.azurewebsites.net/api/login/';
        this.signupUrl = 'http://localhost:8080/api/auth/signup';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        var _this = this;
        return this.http.post(this.loginUrl, credentials, httpOptions).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
        ;
    };
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    /*public isAuth(): boolean {
      const token = localStorage.getItem('');
      return !this.jwtHelper.isTokenExpired(token);
    }*/
    AuthService.prototype.logout = function () {
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.jwtHelper.getToken();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Core/auth/login-info.ts":
/*!*****************************************!*\
  !*** ./src/app/Core/auth/login-info.ts ***!
  \*****************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/Core/auth/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Core/auth/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var User_ID = 'userID';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var DEPARTMENT_KEY = 'DepoKey';
var FRANCHISE_KEY = 'FranchiseKey';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, authorities);
    };
    TokenStorageService.prototype.getAuthorities = function () {
        return window.sessionStorage.getItem(AUTHORITIES_KEY);
    };
    TokenStorageService.prototype.saveFranchise = function (franchise) {
        window.sessionStorage.removeItem(FRANCHISE_KEY);
        window.sessionStorage.setItem(FRANCHISE_KEY, franchise);
    };
    TokenStorageService.prototype.getFranchise = function () {
        return window.sessionStorage.getItem(FRANCHISE_KEY);
    };
    TokenStorageService.prototype.saveDepartment = function (Department) {
        window.sessionStorage.removeItem(DEPARTMENT_KEY);
        window.sessionStorage.setItem(DEPARTMENT_KEY, Department);
    };
    TokenStorageService.prototype.getDepartment = function () {
        return window.sessionStorage.getItem(DEPARTMENT_KEY);
    };
    TokenStorageService.prototype.saveId = function (id) {
        window.sessionStorage.removeItem(User_ID);
        window.sessionStorage.setItem(User_ID, id);
    };
    TokenStorageService.prototype.getId = function () {
        return sessionStorage.getItem(User_ID);
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/Core/error.ts":
/*!*******************************!*\
  !*** ./src/app/Core/error.ts ***!
  \*******************************/
/*! exports provided: error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
var error = /** @class */ (function () {
    function error() {
    }
    return error;
}());



/***/ }),

/***/ "./src/app/Core/index.ts":
/*!*******************************!*\
  !*** ./src/app/Core/index.ts ***!
  \*******************************/
/*! exports provided: ApiService, UserService, AlertService, AuthenticationService, ArticlesService, ResponsiveService, CommentsService, JwtService, ProfileService, error, Article, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/app/Core/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ArticlesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ResponsiveService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/Core/model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Article"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Comment"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./src/app/Core/error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _error__WEBPACK_IMPORTED_MODULE_2__["error"]; });






/***/ }),

/***/ "./src/app/Core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Core/material.module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/Core/model/article.ts":
/*!***************************************!*\
  !*** ./src/app/Core/model/article.ts ***!
  \***************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/Core/model/comment.ts":
/*!***************************************!*\
  !*** ./src/app/Core/model/comment.ts ***!
  \***************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(article, body, userid) {
        this.id = article.ArticleID;
        this.body = body;
        this.createdAt = "";
        this.author = userid;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/Core/model/index.ts":
/*!*************************************!*\
  !*** ./src/app/Core/model/index.ts ***!
  \*************************************/
/*! exports provided: Article, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./src/app/Core/model/article.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _article__WEBPACK_IMPORTED_MODULE_0__["Article"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ "./src/app/Core/model/comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _comment__WEBPACK_IMPORTED_MODULE_1__["Comment"]; });





/***/ }),

/***/ "./src/app/Core/service/Article.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/service/Article.service.ts ***!
  \*************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/service/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url;
console.log(url);
var endpoint = url + 'Articles/';
console.log(endpoint);
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    ArticlesService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params }));
    };
    ArticlesService.prototype.get = function (id) {
        return this.apiService.get('Articles/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/Articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/Articles/' + article.slug, { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/Articles/', { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.find = function (Page, Sort) {
        return this.apiService.get('Articles/' + Page + "/" + Sort).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.add = function (article) {
        return this.http.post(endpoint, article, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addHero', article)));
    };
    ArticlesService.prototype.addComment = function (comment) {
        return this.http.post(endpoint + '${Id}/Comment', comment, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Comment', comment)));
    };
    ArticlesService.prototype.getArticleById = function (id) {
        return this.http.get(endpoint + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/Core/service/Search.service.ts":
/*!************************************************!*\
  !*** ./src/app/Core/service/Search.service.ts ***!
  \************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");







var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = 'https://api.cdnjs.com/libraries';
        this.queryUrl = '?search=';
    }
    SearchService.prototype.search = function (terms) {
        var _this = this;
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchEntries(term); });
    };
    SearchService.prototype.searchEntries = function (term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term)
            .map(function (res) { return res.json(); });
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/Core/service/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Core/service/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/Core/service/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Core/service/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/Core/service/article.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/service/article.service.ts ***!
  \*************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/service/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url;
console.log(url);
var endpoint = url + 'Articles/';
console.log(endpoint);
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    ArticlesService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params }));
    };
    ArticlesService.prototype.get = function (id) {
        return this.apiService.get('Articles/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/Articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/Articles/' + article.slug, { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/Articles/', { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.find = function (Page, Sort) {
        return this.apiService.get('Articles/' + Page + "/" + Sort).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.add = function (article) {
        return this.http.post(endpoint, article, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addHero', article)));
    };
    ArticlesService.prototype.addComment = function (comment) {
        return this.http.post(endpoint + '${Id}/Comment', comment, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Comment', comment)));
    };
    ArticlesService.prototype.getArticleById = function (id) {
        return this.http.get(endpoint + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/Core/service/authentication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Core/service/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/Core/service/category.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Core/service/category.service.ts ***!
  \**************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Core/service */ "./src/app/Core/service/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var CategoryService = /** @class */ (function () {
    function CategoryService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    CategoryService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CategoryService.prototype.get = function () {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "Category/");
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/Core/service/comment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/service/comment.service.ts ***!
  \*************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CommentsService = /** @class */ (function () {
    function CommentsService(apiService) {
        this.apiService = apiService;
    }
    CommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.getAll = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comments; }));
    };
    CommentsService.prototype.destroy = function (commentId, articleSlug) {
        return this.apiService
            .delete("/articles/" + articleSlug + "/comments/" + commentId);
    };
    CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/Core/service/index.ts":
/*!***************************************!*\
  !*** ./src/app/Core/service/index.ts ***!
  \***************************************/
/*! exports provided: ApiService, UserService, AlertService, AuthenticationService, ArticlesService, ResponsiveService, CommentsService, JwtService, ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/Core/service/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/Core/service/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/Core/service/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _Article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.service */ "./src/app/Core/service/Article.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _Article_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"]; });

/* harmony import */ var _responsive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsive.service */ "./src/app/Core/service/responsive.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return _responsive_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveService"]; });

/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/service/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]; });

/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.service */ "./src/app/Core/service/comment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentsService"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jwt.service */ "./src/app/Core/service/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"]; });

/* harmony import */ var _profile_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-service.service */ "./src/app/Core/service/profile-service.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]; });













/***/ }),

/***/ "./src/app/Core/service/jwt.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Core/service/jwt.service.ts ***!
  \*********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['AuthToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['AuthToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('AuthToken');
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/Core/service/profile-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Core/service/profile-service.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Core/service */ "./src/app/Core/service/index.ts");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




var ProfileService = /** @class */ (function () {
    function ProfileService(apiService) {
        this.apiService = apiService;
    }
    ProfileService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ProfileService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    ProfileService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/Core/service/responsive.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Core/service/responsive.service.ts ***!
  \****************************************************/
/*! exports provided: ResponsiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return ResponsiveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");

// globals.ts


var ResponsiveService = /** @class */ (function () {
    function ResponsiveService() {
        this.isMobile = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.checkWidth();
    }
    ResponsiveService.prototype.onMobileChange = function (status) {
        this.isMobile.next(status);
        //window.location.reload();
    };
    ResponsiveService.prototype.getMobileStatus = function () {
        return this.isMobile.asObservable();
    };
    ResponsiveService.prototype.checkWidth = function () {
        // tslint:disable-next-line:whitespace
        this.width = window.innerWidth;
        // tslint:disable-next-line:whitedth;
        if (this.width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        }
        else if (this.width > 768 && this.width <= 992) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        }
        else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    };
    ResponsiveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        // tslint:disable-next-line:class-name
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResponsiveService);
    return ResponsiveService;
}());



/***/ }),

/***/ "./src/app/Core/service/tags.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Core/service/tags.service.ts ***!
  \**********************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TagsService = /** @class */ (function () {
    function TagsService(apiService) {
        this.apiService = apiService;
    }
    TagsService.prototype.getAll = function () {
        return this.apiService.get('Articles/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.tags; }));
    };
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/Core/service/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Core/service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






//Read this about user authetication https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
var UserService = /** @class */ (function () {
    /*
      private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
      public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    */
    function UserService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.userUrl = 'http://localhost:8080/api/test/user';
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.accessToken);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.setAuth(data.user);
            return data;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    ///////////Old authentication
    UserService.prototype.getAll = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/register", user);
    };
    UserService.prototype.updateold = function (user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/" + id);
    };
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.userUrl, { responseType: 'text' });
    };
    UserService.prototype.findByUserName = function (Username) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + Username);
    };
    UserService.prototype.findByUserName1 = function (Username) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + Username);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/Login/Login.Module.ts":
/*!***************************************!*\
  !*** ./src/app/Login/Login.Module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/Login/login/login.component.ts");
/* harmony import */ var _LoginRoutes_Module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoginRoutes.Module */ "./src/app/Login/LoginRoutes.Module.ts");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core */ "./src/app/core/index.ts");












var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _LoginRoutes_Module__WEBPACK_IMPORTED_MODULE_9__["LoginRoutingModule"]
            ],
            providers: [
                src_app_core__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/Login/LoginRoutes.Module.ts":
/*!*********************************************!*\
  !*** ./src/app/Login/LoginRoutes.Module.ts ***!
  \*********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/Login/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/Login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/Login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.form-control {\r\n    width: 50%;\r\n}\r\n.login {\r\n    margin-left:500px;\r\n    margin-top:300px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n.form-control {\r\n    width: auto;\r\n}\r\n.login {\r\n    margin-left:auto;\r\n    margin-top:-100px;\r\n}\r\n\r\n}*/\r\n/* Reset browser */\r\n.login-container{\r\n    margin-top:-100px;\r\n}\r\nbody{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n/*Adjust icon size*/\r\ni{\r\n    font-size:1.3em;\r\n    color:black;\r\n}\r\n/*Apply corporate color for the nav bar*/\r\n.bg-color{\r\n    background-color: #555;\r\n}\r\nli{\r\n    margin-right: 20px;\r\n    font-size: 17px;\r\n}\r\nfooter{\r\n    line-height: 80px;\r\n}\r\n.body{\r\n    background-image: url(\"/assets/background-image.jpg\");  \r\n    height:500px;\r\n    width:500px;\r\n    \r\n}\r\n/********** HOVER MOUSE FOR ICON BAR *****************/\r\n/* The container <div> - needed to position the dropdown content */\r\n.drop-down {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {display: block;}\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n/************ END HOVER MOUSE *******************/\r\n/******* CUSTOM TOGGLE SWITCH *******/\r\n.switch input { \r\n    display:none;\r\n}\r\n.switch {\r\n    display:inline-block;\r\n    width:55px;\r\n    height:25px;\r\n    margin:8px;\r\n    -webkit-transform:translateY(50%);\r\n            transform:translateY(50%);\r\n    position:relative;\r\n}\r\n.slider {\r\n    position:absolute;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    border-radius:30px;\r\n    box-shadow:0 0 0 2px #777, 0 0 4px #777;\r\n    cursor:pointer;\r\n    border:4px solid transparent;\r\n    overflow:hidden;\r\n     transition:.4s;\r\n}\r\n.slider:before {\r\n    position:absolute;\r\n    content:\"\";\r\n    width:100%;\r\n    height:100%;\r\n    background:#777;\r\n    border-radius:30px;\r\n    -webkit-transform:translateX(-30px);\r\n            transform:translateX(-30px);\r\n    transition:.4s;\r\n}\r\ninput:checked + .slider:before {\r\n    -webkit-transform:translateX(30px);\r\n            transform:translateX(30px);\r\n    background:green;\r\n}\r\ninput:checked + .slider {\r\n    box-shadow:0 0 0 2px green,0 0 2px green;\r\n}\r\n/*********** END TOGGLE SWITCH **********/\r\n.login{\r\n\r\n\r\n   \r\n    /*float: left;\r\n    clear:both;\r\n    right:150px;\r\n    height:100%;*/\r\n}\r\n.bg-img {\r\n    background-image: url(\"/assets/background-image.jpg\");  \r\n    height:300px;\r\n    width:40%;\r\n    float:right;\r\n    left:55%;\r\n    position: absolute;\r\n  \r\n}\r\n.side-image {\r\n    float:left;\r\n\r\n}\r\n.login-container{\r\n    \r\n}\r\n@media screen and (max-width: 600px) {\r\n    .bg-img {\r\n    \r\n        display:none;\r\n      \r\n    }\r\n    .side-image{\r\n        display:none;\r\n    }\r\n    .login{\r\n        width:100%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBQ0Ysa0JBQWtCO0FBQ2xCO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBLHdDQUF3QztBQUN4QztJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kscURBQXFEO0lBQ3JELFlBQVk7SUFDWixXQUFXOztBQUVmO0FBR0Esc0RBQXNEO0FBQ3RELGtFQUFrRTtBQUNsRTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7QUFFQSx5Q0FBeUM7QUFDekM7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7RUFDWjtBQUVBLDhCQUE4QjtBQUM5QjtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHNCQUFzQixDQUFDO0FBRWxELG9DQUFvQztBQUNwQyxtQ0FBbUMsY0FBYyxDQUFDO0FBQ2xELDBCQUEwQix5QkFBeUIsQ0FBQztBQUNyRCxpREFBaUQ7QUFHakQscUNBQXFDO0FBQ3JDO0lBQ0csWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixlQUFlO0tBQ2QsY0FBYztBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0EseUNBQXlDO0FBRXpDOzs7O0lBSUk7OztpQkFHYTtBQUNqQjtBQUNBO0lBQ0kscURBQXFEO0lBQ3JELFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztJQUNYLFFBQVE7SUFDUixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtJQUNJOztRQUVJLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7RUFDRiIsImZpbGUiOiJzcmMvYXBwL0xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4ubG9naW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6NTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjMwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG4ubG9naW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi10b3A6LTEwMHB4O1xyXG59XHJcblxyXG59Ki9cclxuLyogUmVzZXQgYnJvd3NlciAqL1xyXG4ubG9naW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDotMTAwcHg7XHJcbn1cclxuYm9keXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4vKkFkanVzdCBpY29uIHNpemUqL1xyXG5pe1xyXG4gICAgZm9udC1zaXplOjEuM2VtO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi8qQXBwbHkgY29ycG9yYXRlIGNvbG9yIGZvciB0aGUgbmF2IGJhciovXHJcbi5iZy1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQtaW1hZ2UuanBnXCIpOyAgXHJcbiAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLyoqKioqKioqKiogSE9WRVIgTU9VU0UgRk9SIElDT04gQkFSICoqKioqKioqKioqKioqKioqL1xyXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcbi5kcm9wLWRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cclxuIC8qKioqKioqKioqKiogRU5EIEhPVkVSIE1PVVNFICoqKioqKioqKioqKioqKioqKiovXHJcbiBcclxuXHJcbiAvKioqKioqKiBDVVNUT00gVE9HR0xFIFNXSVRDSCAqKioqKioqL1xyXG4gLnN3aXRjaCBpbnB1dCB7IFxyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi5zd2l0Y2gge1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo1NXB4O1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbiAgICBtYXJnaW46OHB4O1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3R0b206MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICBib3gtc2hhZG93OjAgMCAwIDJweCAjNzc3LCAwIDAgNHB4ICM3Nzc7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJvcmRlcjo0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgdHJhbnNpdGlvbjouNHM7XHJcbn1cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiM3Nzc7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMzBweCk7XHJcbiAgICB0cmFuc2l0aW9uOi40cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDMwcHgpO1xyXG4gICAgYmFja2dyb3VuZDpncmVlbjtcclxufVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OjAgMCAwIDJweCBncmVlbiwwIDAgMnB4IGdyZWVuO1xyXG59XHJcbi8qKioqKioqKioqKiBFTkQgVE9HR0xFIFNXSVRDSCAqKioqKioqKioqL1xyXG5cclxuLmxvZ2lue1xyXG5cclxuXHJcbiAgIFxyXG4gICAgLypmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOmJvdGg7XHJcbiAgICByaWdodDoxNTBweDtcclxuICAgIGhlaWdodDoxMDAlOyovXHJcbn1cclxuLmJnLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQtaW1hZ2UuanBnXCIpOyAgXHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGxlZnQ6NTUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG59XHJcbi5zaWRlLWltYWdlIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcblxyXG59XHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJnLWltZyB7XHJcbiAgICBcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnNpZGUtaW1hZ2V7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLmxvZ2lue1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/Login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!--Start sign in-->\r\n  <!--div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"\">\r\n                <img class=\"bg-img img-responsive m-3\" src=\"/assets/logo.svg\" alt=\"logo\">\r\n            </div>\r\n        </div>\r\n        <br>\r\n    \r\n    </div>-->\r\n  <div [hidden]=\"shownav()\"class=\"container login-container\">\r\n      <div class=\"row\">\r\n      \r\n         \r\n          <div class=\"col-xs-5 col-md-6 offset-md-1 login\">\r\n              <div class=\"text-center\">\r\n                  <h3>Welcome back!</h3>\r\n                  <p>Please log in to manage your account</p>\r\n              </div>\r\n              <br>\r\n              <form name=\"form login\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"UserName\">Username</label>\r\n                      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\r\n                      required placeholder=\"Username\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"password\">Password</label>\r\n                      <input  type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\r\n                      required minlength=\"6\" placeholder=\"Password\">\r\n                      <div *ngIf=\"f.submitted && password.invalid\">\r\n                        <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                        <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n                      </div>\r\n                      <a href=\"#\">Forgot Password?</a>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n                      <label class=\"form-check-label\" for=\"exampleCheck1\">Remember me</label>\r\n                  </div>\r\n\r\n                  <!--Nested column-->\r\n                  <div class=\"row\">\r\n                      <div class=\"col-6 mt-2\">\r\n                          <button type=\"submit\" class=\"btn btn-block btn-primary\">Log in</button>\r\n                          <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\r\n                            Login failed: {{errorMessage}}\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-6\"> </div>\r\n                  </div>\r\n              </form>\r\n              \r\n          </div>\r\n          <div class=\"bg-img side-image\"></div>\r\n      </div>\r\n      \r\n  </div>\r\n\r\n\r\n<!--<div class='login'>\r\n        <div class=\"row col-sm-6\" style=\"max-width:350px;\">\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\r\n                      required />\r\n                    <div *ngIf=\"f.submitted && username.invalid\">\r\n                      <div *ngIf=\"username.errors.required\">Username is required</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\r\n                      required minlength=\"6\" />\r\n                    <div *ngIf=\"f.submitted && password.invalid\">\r\n                      <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                      <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <button class=\"btn btn-primary\">Login</button>\r\n                    <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\r\n                      Login failed: {{errorMessage}}\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <hr />\r\n                <p>Don't have an account?</p>\r\n                <a href=\"signup\" class=\"btn btn-success\">Sign Up</a>\r\n              </div>\r\n              </div>\r\n<!--<h2>Login</h2>\r\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\r\n    </div>\r\n</form>\r\n</div>-->"

/***/ }),

/***/ "./src/app/Login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/Login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var _Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/auth/token-storage.service */ "./src/app/Core/auth/token-storage.service.ts");
/* harmony import */ var _Core_auth_login_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Core/auth/login-info */ "./src/app/Core/auth/login-info.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Core */ "./src/app/Core/index.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, UserService) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.UserService = UserService;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
    };
    LoginComponent.prototype.shownav = function () {
        var currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            this.show = true;
        }
        else {
            this.show = false;
        }
        return this.show;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = new _Core_auth_login_info__WEBPACK_IMPORTED_MODULE_3__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
            console.log(_this.isLoginFailed);
        });
        this.UserService.findByUserName(this.form.username).subscribe(function (data) {
            //Add to user token
            //Query for User with Username
            console.log(data);
            _this.tokenStorage.saveDepartment(data.department.departmentID);
            _this.tokenStorage.saveId(data.userID);
            _this.tokenStorage.saveFranchise(data.franchise.franchiseID);
            _this.tokenStorage.saveAuthorities(data.roles.designationID);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
            console.log(_this.isLoginFailed);
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload(true);
        window.location.href = "/home";
        this.router.navigate(['/home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], src_app_Core__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Shared/article-helpers/article-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Shared/article-helpers/article-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-link {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL2FydGljbGUtaGVscGVycy9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvYXJ0aWNsZS1oZWxwZXJzL2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Shared/article-helpers/article-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Shared/article-helpers/article-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-preview\r\n  *ngFor=\"let article of results\"\r\n  [article]=\"article\">\r\n</app-article-preview>\r\n\r\n<div class=\"app-article-preview\"\r\n  [hidden]=\"!loading\">\r\n  Loading articles...\r\n</div>\r\n\r\n<div class=\"app-article-preview\"\r\n  [hidden]=\"loading || results.length\">\r\n  No articles are here... yet.\r\n</div>\r\n\r\n<nav [hidden]=\"loading || totalPages.length <= 1\">\r\n  <ul class=\"pagination\">\r\n\r\n    <li class=\"page-item\"\r\n      [ngClass]=\"{'active': pageNumber === currentPage}\"\r\n      *ngFor=\"let pageNumber of totalPages\"\r\n      (click)=\"setPageTo(pageNumber)\">\r\n\r\n      <a class=\"page-link\" >{{ pageNumber }}</a>\r\n\r\n    </li>\r\n\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/Shared/article-helpers/article-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Shared/article-helpers/article-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");


//import { Article, ArticleListConfig, ArticlesService } from '../../core';

var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(articlesService) {
        this.articlesService = articlesService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(ArticleListComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.query = config;
                this.currentPage = 1;
                this.runQuery();
            }
        },
        enumerable: true,
        configurable: true
    });
    ArticleListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    ArticleListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.articles;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            _this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ArticleListComponent.prototype, "limit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ArticleListComponent.prototype, "config", null);
    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/Shared/article-helpers/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/Shared/article-helpers/article-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/Shared/article-helpers/article-meta.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Shared/article-helpers/article-meta.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-meta\">\r\n  <a [routerLink]=\"['/profile', article.author.username]\">\r\n    <img [src]=\"article.author.image\" />\r\n  </a>\r\n\r\n  <div class=\"info\">\r\n    <a class=\"author\"\r\n      [routerLink]=\"['/profile', article.author.username]\">\r\n      {{ article.author.username }}\r\n    </a>\r\n    <span class=\"date\">\r\n      {{ article.createdAt | date: 'longDate' }}\r\n    </span>\r\n  </div>\r\n\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/article-helpers/article-meta.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Shared/article-helpers/article-meta.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return ArticleMetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



var ArticleMetaComponent = /** @class */ (function () {
    function ArticleMetaComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], ArticleMetaComponent.prototype, "article", void 0);
    ArticleMetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-meta',
            template: __webpack_require__(/*! ./article-meta.component.html */ "./src/app/Shared/article-helpers/article-meta.component.html")
        })
    ], ArticleMetaComponent);
    return ArticleMetaComponent;
}());



/***/ }),

/***/ "./src/app/Shared/article-helpers/article-preview.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Shared/article-helpers/article-preview.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\r\n  <app-article-meta [article]=\"article\">\r\n    <app-favorite-button\r\n      [article]=\"article\"\r\n      (toggle)=\"onToggleFavorite($event)\"\r\n      class=\"pull-xs-right\">\r\n      {{article.favoritesCount}}\r\n    </app-favorite-button>\r\n  </app-article-meta>\r\n\r\n  <a [routerLink]=\"['/article', article.slug]\" class=\"preview-link\">\r\n    <h1>{{ article.title }}</h1>\r\n    <p>{{ article.description }}</p>\r\n    <span>Read more...</span>\r\n    <ul class=\"tag-list\">\r\n      <li class=\"tag-default tag-pill tag-outline\"\r\n        *ngFor=\"let tag of article.tagList\">\r\n        {{ tag }}\r\n      </li>\r\n    </ul>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/article-helpers/article-preview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Shared/article-helpers/article-preview.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



var ArticlePreviewComponent = /** @class */ (function () {
    function ArticlePreviewComponent() {
    }
    ArticlePreviewComponent.prototype.onToggleFavorite = function (favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], ArticlePreviewComponent.prototype, "article", void 0);
    ArticlePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-preview',
            template: __webpack_require__(/*! ./article-preview.component.html */ "./src/app/Shared/article-helpers/article-preview.component.html")
        })
    ], ArticlePreviewComponent);
    return ArticlePreviewComponent;
}());



/***/ }),

/***/ "./src/app/Shared/article-helpers/index.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/article-helpers/index.ts ***!
  \*************************************************/
/*! exports provided: ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-list.component */ "./src/app/Shared/article-helpers/article-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return _article_list_component__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"]; });

/* harmony import */ var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-meta.component */ "./src/app/Shared/article-helpers/article-meta.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return _article_meta_component__WEBPACK_IMPORTED_MODULE_1__["ArticleMetaComponent"]; });

/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-preview.component */ "./src/app/Shared/article-helpers/article-preview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return _article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]; });






/***/ }),

/***/ "./src/app/Shared/buttons/favorite-button.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Shared/buttons/favorite-button.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-sm\"\r\n [ngClass]=\"{ 'disabled' : isSubmitting,\r\n              'btn-outline-primary': !article.favorited,\r\n              'btn-primary': article.favorited }\"\r\n (click)=\"toggleFavorite()\">\r\n  <i class=\"ion-heart\"></i> <ng-content></ng-content>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/Shared/buttons/favorite-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Shared/buttons/favorite-button.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoriteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return FavoriteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FavoriteButtonComponent = /** @class */ (function () {
    function FavoriteButtonComponent(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitting = false;
    }
    FavoriteButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
            // Favorite the article if it isn't favorited yet
            if (!_this.article == null) {
                return _this.articlesService.favorite(_this.article.Url)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfavorite the article
            }
            else {
                return _this.articlesService.unfavorite(_this.article.Url)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_3__["Article"])
    ], FavoriteButtonComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteButtonComponent.prototype, "toggle", void 0);
    FavoriteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite-button',
            template: __webpack_require__(/*! ./favorite-button.component.html */ "./src/app/Shared/buttons/favorite-button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FavoriteButtonComponent);
    return FavoriteButtonComponent;
}());



/***/ }),

/***/ "./src/app/Shared/buttons/follow-button.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Shared/buttons/follow-button.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\r\n  class=\"btn btn-sm action-btn\"\r\n  [ngClass]=\"{ 'disabled': isSubmitting,\r\n               'btn-outline-secondary': !profile.following,\r\n               'btn-secondary': profile.following }\"\r\n  (click)=\"toggleFollowing()\">\r\n  <i class=\"ion-plus-round\"></i>\r\n  &nbsp;\r\n  {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }}\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/Shared/buttons/follow-button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Shared/buttons/follow-button.component.ts ***!
  \***********************************************************/
/*! exports provided: FollowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return FollowButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var FollowButtonComponent = /** @class */ (function () {
    function FollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitting = false;
    }
    FollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        // TODO: remove nested subscribes, use mergeMap
        this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                return _this.profilesService.follow(_this.profile.username)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfollow this profile
            }
            else {
                return _this.profilesService.unfollow(_this.profile.username)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FollowButtonComponent.prototype, "profile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FollowButtonComponent.prototype, "toggle", void 0);
    FollowButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-follow-button',
            template: __webpack_require__(/*! ./follow-button.component.html */ "./src/app/Shared/buttons/follow-button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}());



/***/ }),

/***/ "./src/app/Shared/buttons/index.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/buttons/index.ts ***!
  \*****************************************/
/*! exports provided: FavoriteButtonComponent, FollowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-button.component */ "./src/app/Shared/buttons/favorite-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__["FavoriteButtonComponent"]; });

/* harmony import */ var _follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-button.component */ "./src/app/Shared/buttons/follow-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return _follow_button_component__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"]; });





/***/ }),

/***/ "./src/app/Shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/Shared/index.ts ***!
  \*********************************/
/*! exports provided: ListErrorsComponent, SharedModule, ShowAuthedDirective, ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent, FavoriteButtonComponent, FollowButtonComponent, FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-helpers */ "./src/app/Shared/article-helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleMetaComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticlePreviewComponent"]; });

/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/app/Shared/buttons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["FavoriteButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/app/Shared/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/Shared/list-errors.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return _list_errors_component__WEBPACK_IMPORTED_MODULE_3__["ListErrorsComponent"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.module */ "./src/app/Shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]; });

/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/Shared/show-authed.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"]; });









/***/ }),

/***/ "./src/app/Shared/layout/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Shared/layout/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <a class=\"logo-font\" routerLink=\"/\">conduit</a>\r\n    <span class=\"attribution\">\r\n      &copy; {{ today | date: 'yyyy' }}.\r\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\r\n      Code licensed under MIT.\r\n    </span>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/Shared/layout/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/layout/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Shared/layout/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Shared/layout/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Shared/layout/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">conduit</a>\r\n\r\n    <!-- Show this for logged out users -->\r\n    <ul *appShowAuthed=\"false\"\r\n      class=\"nav navbar-nav pull-xs-right\">\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          routerLink=\"/\">\r\n          Home\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          routerLink=\"/login\"\r\n          routerLinkActive=\"active\">\r\n          Sign in\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          routerLink=\"/register\"\r\n          routerLinkActive=\"active\">\r\n          Sign up\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <!-- Show this for logged in users -->\r\n    <ul *appShowAuthed=\"true\"\r\n      class=\"nav navbar-nav pull-xs-right\">\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          routerLink=\"/\"\r\n          routerLinkActive=\"active\"\r\n          [routerLinkActiveOptions]=\"{ exact: true }\">\r\n          Home\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          routerLink=\"/editor\"\r\n          routerLinkActive=\"active\">\r\n          <i class=\"ion-compose\"></i>&nbsp;New Article\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          routerLink=\"/settings\"\r\n          routerLinkActive=\"active\">\r\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          [routerLink]=\"['/profile', currentUser.username]\"\r\n          routerLinkActive=\"active\">\r\n          <img [src]=\"currentUser.image\" *ngIf=\"currentUser.image\" class=\"user-pic\" />\r\n          {{ currentUser.username }}\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/Shared/layout/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/layout/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        /*this.userService.currentUser.subscribe(
          (userData) => {
            this.currentUser = userData;
          }
        );*/
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Shared/layout/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/Shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ "./src/app/Shared/layout/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ "./src/app/Shared/layout/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });





/***/ }),

/***/ "./src/app/Shared/list-errors.component.html":
/*!***************************************************!*\
  !*** ./src/app/Shared/list-errors.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\r\n  <li *ngFor=\"let error of errorList\">\r\n    {{ error }}\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/Shared/list-errors.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/list-errors.component.ts ***!
  \*************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.error || {})
                .map(function (key) { return key + " " + errorList.error[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["error"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["error"]])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-errors',
            template: __webpack_require__(/*! ./list-errors.component.html */ "./src/app/Shared/list-errors.component.html")
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "./src/app/Shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-helpers */ "./src/app/Shared/article-helpers/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons */ "./src/app/Shared/buttons/index.ts");
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/Shared/list-errors.component.ts");
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/Shared/show-authed.directive.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleMetaComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticlePreviewComponent"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FavoriteButtonComponent"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FollowButtonComponent"],
                _list_errors_component__WEBPACK_IMPORTED_MODULE_8__["ListErrorsComponent"],
                _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__["ShowAuthedDirective"]
            ],
            exports: [
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleMetaComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticlePreviewComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FavoriteButtonComponent"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FollowButtonComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _list_errors_component__WEBPACK_IMPORTED_MODULE_8__["ListErrorsComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__["ShowAuthedDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/Shared/show-authed.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/show-authed.directive.ts ***!
  \*************************************************/
/*! exports provided: ShowAuthedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return ShowAuthedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



var ShowAuthedDirective = /** @class */ (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "appShowAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "appShowAuthed", null);
    ShowAuthedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appShowAuthed]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());



/***/ }),

/***/ "./src/app/User/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/User/user/user.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/User/user/user.component.html":
/*!***********************************************!*\
  !*** ./src/app/User/user/user.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/User/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/User/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/User/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/User/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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
/* harmony import */ var src_app_Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var src_app_Components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Components/calendar/calendar.component */ "./src/app/Components/calendar/calendar.component.ts");
/* harmony import */ var src_app_Components_bi_reports_bi_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Components/bi-reports/bi-reports.component */ "./src/app/Components/bi-reports/bi-reports.component.ts");
/* harmony import */ var src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Core/auth-gaurd/auth-gaurd.component */ "./src/app/Core/auth-gaurd/auth-gaurd.component.ts");
/* harmony import */ var src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user/user-resolver.service */ "./src/app/user/user-resolver.service.ts");





//import { UserListComponent } from 'src/app/Components/user-list/user-list.component';



var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: src_app_Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        resolve: { User: src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_7__["UserResolver"] },
        canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'calendar', component: src_app_Components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'BiReport', component: src_app_Components_bi_reports_bi_reports_component__WEBPACK_IMPORTED_MODULE_5__["BiReportsComponent"], canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: 'Articles',
        loadChildren: '../app/article/article.module#ArticleModule',
        data: { title: 'Article List' },
        canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'login',
        loadChildren: './Login/Login.Module#LoginModule',
    },
    {
        path: 'AddArticle',
        loadChildren: '../app/article/article.module#ArticleModule',
        canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'register',
        loadChildren: './Login/Login.Module#LoginModule',
    },
    {
        path: 'article/:id',
        data: { title: 'Article Details' },
        loadChildren: './article/article.module#ArticleModule',
        canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'User',
        loadChildren: '../app/user/User.Module#UserModule',
        canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'ContentManager',
        loadChildren: '../app/user/User.Module#UserModule',
        canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'NotificationSettings',
        loadChildren: './user/User.Module#UserModule',
    },
    {
        path: 'PasswordSettings',
        loadChildren: './user/User.Module#UserModule',
    },
];
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

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 10px;\r\n  }\r\n}\r\n\r\n#row1 {\r\n  \r\n  width: 100%;\r\n}\r\n\r\n/*\r\n.flatpickr-calendar.hasTime.animate.showTimeInput {\r\n  visibility: hidden;\r\n}*/\r\n\r\n.Row  {\r\n \r\n    margin-left: -2.5%;\r\n    margin-right: -2.5%;\r\n\r\n}\r\n\r\n.container-fluid{\r\n    margin-top:5%;\r\n    \r\n}\r\n\r\n.rightcol {\r\n    margin-top:10px;\r\n}\r\n\r\n.mains{\r\n  padding: 10px,10px,10px,10px;\r\n}\r\n\r\n#row1{\r\n  padding: 10px,10px,10px,10px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n  .form-control {\r\n      width: auto;\r\n  }\r\n  .dropdown {\r\n      display: none;\r\n  }\r\n}\r\n\r\n.container-fluid{\r\n  margin-top:170px;\r\n  width: 100%;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBQ0E7OztFQUdFOztBQUVGOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCOztBQUNBO0lBQ0ksYUFBYTs7QUFFakI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBOztFQUVFO01BQ0ksV0FBVztFQUNmO0VBQ0E7TUFDSSxhQUFhO0VBQ2pCO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jcm93MSB7XHJcbiAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLypcclxuLmZsYXRwaWNrci1jYWxlbmRhci5oYXNUaW1lLmFuaW1hdGUuc2hvd1RpbWVJbnB1dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuLlJvdyAge1xyXG4gXHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yLjUlO1xyXG5cclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxuICAgIFxyXG59XHJcbi5yaWdodGNvbCB7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuLm1haW5ze1xyXG4gIHBhZGRpbmc6IDEwcHgsMTBweCwxMHB4LDEwcHg7XHJcbn1cclxuI3JvdzF7XHJcbiAgcGFkZGluZzogMTBweCwxMHB4LDEwcHgsMTBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5kcm9wZG93biB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgbWFyZ2luLXRvcDoxNzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class=\"Row\">\r\n        <!--bug in ng-show evaluates with two conditions-->\r\n    </div>\r\n    <div [hidden]='shownavMobile()'class='col-sm-12' ><mobile-nav></mobile-nav></div>\r\n        <div [hidden]='!shownav()' class='col-sm-12'>\r\n            <nav-menu (buttonClicked)='showSearchComponent($event)'>   \r\n            </nav-menu>\r\n        </div>\r\n        \r\n  \r\n    <div class=\"Row\" id=\"row1\">\r\n            \r\n        <div class=\"mains\" class=\"col-sm-12\">\r\n            <div [hidden]='showSearch()'>\r\n            <app-search ></app-search>\r\n            </div>\r\n                <alert></alert>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </div>\r\n    \r\n</div>\r\n<footer class=\"bg-color mt-5\">\r\n    <p class=\"text-white text-center\">Copy right &copy TMT 2019</p>\r\n</footer>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core */ "./src/app/Core/index.ts");
/* harmony import */ var src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Core/auth/token-storage.service */ "./src/app/Core/auth/token-storage.service.ts");
/* harmony import */ var src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Core/auth-gaurd/auth-gaurd.component */ "./src/app/Core/auth-gaurd/auth-gaurd.component.ts");
/* harmony import */ var src_app_Core_service_Search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Core/service/Search.service */ "./src/app/Core/service/Search.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var AppComponent = /** @class */ (function () {
    function AppComponent(router, token, authenticationService, ResponsiveService, TokenStorage, Authguard, searchService) {
        var _this = this;
        this.router = router;
        this.token = token;
        this.authenticationService = authenticationService;
        this.ResponsiveService = ResponsiveService;
        this.TokenStorage = TokenStorage;
        this.Authguard = Authguard;
        this.searchService = searchService;
        this.deviceMobile = false;
        this.deviceDesktop = false;
        this.deviceMedium = false;
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.hiddenSearch = true;
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.results;
        });
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
        if (this.router.url === this.router.url + '/logout') {
            this.logout();
        }
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.shownav = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            this.show = true;
        }
        else {
            this.show = false;
        }
        return this.show;
    };
    AppComponent.prototype.shownavMobile = function () {
        if (this.authenticationService.isAuthenticated) {
            this.showNav = true;
        }
        else {
            this.showNav = false;
        }
        return this.showNav;
    };
    AppComponent.prototype.onResize = function () {
        this.ResponsiveService.checkWidth();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.authenticationService.currentUserValue.username);
        this.ResponsiveService.getMobileStatus().subscribe(function (isMobile) {
            if (isMobile) {
                console.log('Mobile device detected');
                _this.deviceMobile = true;
            }
            else {
                console.log('Desktop detected');
                _this.deviceDesktop = true;
            }
        });
        this.onResize();
    };
    AppComponent.prototype.showSearchComponent = function () {
        console.log('Button clicked.');
        this.hiddenSearch = false;
    };
    AppComponent.prototype.showSearch = function () {
        if (this.hiddenSearch) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _Core__WEBPACK_IMPORTED_MODULE_3__["ResponsiveService"],
            src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
            src_app_Core_service_Search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/calendar/calendar.component */ "./src/app/Components/calendar/calendar.component.ts");
/* harmony import */ var _Components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/navmenu/navmenu.component */ "./src/app/Components/navmenu/navmenu.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _core_service_alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/service/alert.service */ "./src/app/core/service/alert.service.ts");
/* harmony import */ var _Core_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Core/service */ "./src/app/Core/service/index.ts");
/* harmony import */ var src_app_Components_alert_alert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/Components/alert/alert.component */ "./src/app/Components/alert/alert.component.ts");
/* harmony import */ var _Core_material_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Core/material.module */ "./src/app/Core/material.module.ts");
/* harmony import */ var _Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/sidebar/sidebar.component */ "./src/app/Components/sidebar/sidebar.component.ts");
/* harmony import */ var _Components_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/mobile-nav/mobile-nav.component */ "./src/app/Components/mobile-nav/mobile-nav.component.ts");
/* harmony import */ var src_app_article_article_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/article/article.module */ "./src/app/article/article.module.ts");
/* harmony import */ var src_app_Login_Login_Module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/Login/Login.Module */ "./src/app/Login/Login.Module.ts");
/* harmony import */ var _user_User_Module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user/User.Module */ "./src/app/user/User.Module.ts");
/* harmony import */ var _User_user_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./User/user/user.component */ "./src/app/User/user/user.component.ts");
/* harmony import */ var src_app_Core_service_api_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/Core/service/api.service */ "./src/app/Core/service/api.service.ts");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/core */ "./src/app/core/index.ts");
/* harmony import */ var _Components_bi_reports_bi_reports_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/bi-reports/bi-reports.component */ "./src/app/Components/bi-reports/bi-reports.component.ts");
/* harmony import */ var src_app_helpers_XhrInterceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/helpers/XhrInterceptor */ "./src/app/helpers/XhrInterceptor.ts");
/* harmony import */ var _Core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Core/auth/auth-interceptor */ "./src/app/Core/auth/auth-interceptor.ts");
/* harmony import */ var src_app_helpers_JWT_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/helpers/JWT.interceptor */ "./src/app/helpers/JWT.interceptor.ts");
/* harmony import */ var src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/Core/auth-gaurd/auth-gaurd.component */ "./src/app/Core/auth-gaurd/auth-gaurd.component.ts");
/* harmony import */ var src_app_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/Core/auth/token-storage.service */ "./src/app/Core/auth/token-storage.service.ts");
/* harmony import */ var src_app_Core_service_Search_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/app/Core/service/Search.service */ "./src/app/Core/service/Search.service.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/user/user-resolver.service */ "./src/app/user/user-resolver.service.ts");
/* harmony import */ var src_app_article_Category_resolver__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! src/app/article/Category-resolver */ "./src/app/article/Category-resolver.ts");
/* harmony import */ var src_app_Core_service_category_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/app/Core/service/category.service */ "./src/app/Core/service/category.service.ts");



















//import { ArticleModule } from './Core/articles/articles.module';
//import { NgxSummernoteModule } from '../../projects/ngx-summernote/src/lib/ngx-summernote.module';



//import { JwtInterceptor, ErrorInterceptor } from './helpers';
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _Components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__["CalendarComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _Components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_16__["NavMenuComponent"],
                src_app_Components_alert_alert_component__WEBPACK_IMPORTED_MODULE_21__["AlertComponent"],
                _Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"],
                _Components_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_24__["MobileNavComponent"],
                _User_user_user_component__WEBPACK_IMPORTED_MODULE_28__["UserComponent"],
                _Components_bi_reports_bi_reports_component__WEBPACK_IMPORTED_MODULE_31__["BiReportsComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_40__["SearchComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                src_app_Login_Login_Module__WEBPACK_IMPORTED_MODULE_26__["LoginModule"],
                _user_User_Module__WEBPACK_IMPORTED_MODULE_27__["UserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"],
                _Core_material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                src_app_article_article_module__WEBPACK_IMPORTED_MODULE_25__["ArticleModule"],
                //SharedModule,
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
                }),
                src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            entryComponents: [_Components_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_24__["MobileNavComponent"]],
            providers: [
                src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"],
                _core_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"],
                src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"],
                _core_service__WEBPACK_IMPORTED_MODULE_18__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: src_app_helpers_JWT_interceptor__WEBPACK_IMPORTED_MODULE_34__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: src_app_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_37__["ErrorInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: src_app_helpers_XhrInterceptor__WEBPACK_IMPORTED_MODULE_32__["XhrInterceptor"], multi: true },
                _Core_service__WEBPACK_IMPORTED_MODULE_20__["ResponsiveService"],
                src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_38__["TokenStorageService"],
                _Core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["httpInterceptorProviders"],
                src_app_Core_service_api_service__WEBPACK_IMPORTED_MODULE_29__["ApiService"],
                src_app_core__WEBPACK_IMPORTED_MODULE_30__["JwtService"],
                _core_service_alert_service__WEBPACK_IMPORTED_MODULE_19__["AlertService"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                src_app_Core_service_Search_service__WEBPACK_IMPORTED_MODULE_39__["SearchService"],
                src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_41__["UserResolver"],
                src_app_article_Category_resolver__WEBPACK_IMPORTED_MODULE_42__["CategoryResolver"],
                src_app_Core_service_category_service__WEBPACK_IMPORTED_MODULE_43__["CategoryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
            exports: [_Components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__["CalendarComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/ArticleRoutes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/article/ArticleRoutes.module.ts ***!
  \*************************************************/
/*! exports provided: ArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleRoutingModule", function() { return ArticleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/article/articles/articles.component.ts");
/* harmony import */ var _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-article/add-article.component */ "./src/app/article/add-article/add-article.component.ts");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article.resolver */ "./src/app/article/article.resolver.ts");
/* harmony import */ var _article_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-resolver.service */ "./src/app/article/article-resolver.service.ts");
/* harmony import */ var src_app_article_Category_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/article/Category-resolver */ "./src/app/article/Category-resolver.ts");
/* harmony import */ var src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Core/auth-gaurd/auth-gaurd.component */ "./src/app/Core/auth-gaurd/auth-gaurd.component.ts");










var routes = [
    {
        path: 'Articles/:page/:sort',
        component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"],
        data: { title: 'Article List' },
        resolve: { Articles: _article_resolver__WEBPACK_IMPORTED_MODULE_6__["ArticlesResolver"] },
        canActivate: [src_app_Core_auth_gaurd_auth_gaurd_component__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    },
    {
        path: 'AddArticle',
        component: _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_2__["AddArticleComponent"],
        resolve: {
            Category: src_app_article_Category_resolver__WEBPACK_IMPORTED_MODULE_8__["CategoryResolver"]
        }
    },
    {
        path: 'article/:id',
        component: _article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"],
        data: { title: 'Article Details' },
        resolve: { Article: _article_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ArticleResolver"] }
    },
];
var ArticleRoutingModule = /** @class */ (function () {
    function ArticleRoutingModule() {
    }
    ArticleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: [_article_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ArticleResolver"], _article_resolver__WEBPACK_IMPORTED_MODULE_6__["ArticlesResolver"]]
        })
    ], ArticleRoutingModule);
    return ArticleRoutingModule;
}());



/***/ }),

/***/ "./src/app/article/Category-resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/article/Category-resolver.ts ***!
  \**********************************************/
/*! exports provided: CategoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResolver", function() { return CategoryResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Core_service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Core/service/category.service */ "./src/app/Core/service/category.service.ts");





var CategoryResolver = /** @class */ (function () {
    function CategoryResolver(http, categoryService, route, router) {
        this.http = http;
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
    }
    CategoryResolver.prototype.resolve = function (route, state) {
        return this.categoryService.get();
    };
    CategoryResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_Core_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoryResolver);
    return CategoryResolver;
}());



/***/ }),

/***/ "./src/app/article/add-article/add-article.component.css":
/*!***************************************************************!*\
  !*** ./src/app/article/add-article/add-article.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addArticle {\r\n    margin-left:20%;\r\n    margin-right:20%;\r\n    \r\n}\r\n.card{\r\n    width:60%;\r\n    \r\n\r\n}\r\nform{\r\n    padding: 10px, 10px, 10px, 10px\r\n}\r\n.title {\r\n    width: 30%;\r\n}\r\n.text-editor{\r\n    height:100%;\r\n}\r\n.category {\r\n    width:20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hZGQtYXJ0aWNsZS9hZGQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFNBQVM7OztBQUdiO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hZGQtYXJ0aWNsZS9hZGQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZEFydGljbGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcclxuICAgIFxyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgXHJcblxyXG59XHJcbmZvcm17XHJcbiAgICBwYWRkaW5nOiAxMHB4LCAxMHB4LCAxMHB4LCAxMHB4XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuLnRleHQtZWRpdG9ye1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOjIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/article/add-article/add-article.component.html":
/*!****************************************************************!*\
  !*** ./src/app/article/add-article/add-article.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='addArticle card'>\r\n    <h3>Add Article</h3>\r\n    \r\n    \r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" >\r\n    \r\n        <div class=\"form-group title\">\r\n                    <label for=\"title\">Title</label>\r\n                    <input type=\"text\" formControlName=\"title\" class=\"form-control\" [(ngModel)]=\"title\" />\r\n                    <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.title.errors.required\">Title is required</div>\r\n                    </div>\r\n        </div>\r\n    \r\n        <textarea [ngxSummernote] class=\"form-control text-editor\" [(ngModel)]=\"content\" formControlName=\"content\"\r\n        id=\"summernote\"\r\n       \r\n        maxlength=\"1000000\" rows=\"50\"></textarea>\r\n        <div class=\"form-group tags\">\r\n                <label for=\"Tags\">Tags</label>\r\n                <input type=\"text\" [(ngModel)]=\"Category\" formControlName=\"Tags\" class=\"form-control\" />\r\n                <div *ngIf=\"submitted && f.Tags.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.Tags.errors.required\">Last Name is required</div>\r\n                </div>\r\n            </div>\r\n    \r\n  \r\n        <div class=\"form-group category\">\r\n                <label for=\"category\">Category</label>\r\n                    <select class=\"form-control\" id=\"cateogry\" required>\r\n                    <option *ngFor=\"let a of array\" [value]=\"a.categoryID\">{{a.categoryName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"f.Category.errors.required\">Last Name is required</div>\r\n                \r\n            </div>\r\n         <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\r\n            <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a  class=\"btn btn-link\">Save as draft</a>\r\n        </div>\r\n    </form>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/article/add-article/add-article.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/article/add-article/add-article.component.ts ***!
  \**************************************************************/
/*! exports provided: AddArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddArticleComponent", function() { return AddArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Core_service_Article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core/service/Article.service */ "./src/app/Core/service/Article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AddArticleComponent = /** @class */ (function () {
    function AddArticleComponent(sanitizer, restService, f, route) {
        this.sanitizer = sanitizer;
        this.restService = restService;
        this.f = f;
        this.route = route;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.array = [];
        this.loading = false;
        this.submitted = false;
        this.config = {
            height: '200px',
            uploadImagePath: '/api/upload'
        };
        this.editorDisabled = false;
    }
    Object.defineProperty(AddArticleComponent.prototype, "sanitizedHtml", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustHtml(this.form.get('html').value);
        },
        enumerable: true,
        configurable: true
    });
    AddArticleComponent.prototype.enableEditor = function () {
        this.editorDisabled = false;
    };
    AddArticleComponent.prototype.disableEditor = function () {
        this.editorDisabled = true;
    };
    AddArticleComponent.prototype.onBlur = function () {
        console.log('Blur');
    };
    AddArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log('Data :', data);
            _this.categorys = data.Category.categoryName;
            _this.array = data.Category;
            console.log(_this.array);
        });
        var number = Number(window.sessionStorage.getItem("depoKey"));
        console.log(this.number);
        this.form = this.f.group({
            id: "",
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: "",
            url: "",
            publishdate: "",
            Tags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            departmentid: window.sessionStorage.getItem("depoKey"),
            franchiseid: window.sessionStorage.getItem("FranchiseKey"),
            archiveid: 0,
            author: window.sessionStorage.getItem("userID"),
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        ///https://github.com/summernote/awesome-summernote
        $('#summernote').summernote('createLink', {
            text: "This is the Summernote's Official Site",
            url: 'http://summernote.org',
            isNewWindow: true
        });
        $('#summernote').summernote('unlink');
        $('#summernote').summernote({
            callbacks: {
                onKeyup: function (e) {
                    console.log('Key is released:', e.keyCode);
                }
            }
        });
        $('#summernote').summernote('insertNode', document.createElement('div'));
    };
    AddArticleComponent.prototype.onSubmit = function (article) {
        this.submitted = true;
        console.log('Form Submitted!');
        // tslint:disable-next-line:no-unused-expression
        article = this.form.value;
        this.restService.add(article).subscribe(function (status) { return console.log(JSON.stringify(status)); });
        this.form.reset;
        location.reload(true);
        location.href = "http://webapp-190214214406.azurewebsites.net";
        //location.href = "http://localhost:8080/"
    };
    AddArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-article',
            template: __webpack_require__(/*! ./add-article.component.html */ "./src/app/article/add-article/add-article.component.html"),
            styles: [__webpack_require__(/*! ./add-article.component.css */ "./src/app/article/add-article/add-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _Core_service_Article_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddArticleComponent);
    return AddArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/article-meta/article-meta.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article/article-meta/article-meta.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS1tZXRhL2FydGljbGUtbWV0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/article/article-meta/article-meta.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article/article-meta/article-meta.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>edit</div>"

/***/ }),

/***/ "./src/app/article/article-meta/article-meta.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article/article-meta/article-meta.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return ArticleMetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_model_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/model/Article */ "./src/app/core/model/Article.ts");



var ArticleMetaComponent = /** @class */ (function () {
    function ArticleMetaComponent() {
    }
    ArticleMetaComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_model_Article__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], ArticleMetaComponent.prototype, "article", void 0);
    ArticleMetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'article-meta',
            template: __webpack_require__(/*! ./article-meta.component.html */ "./src/app/article/article-meta/article-meta.component.html"),
            styles: [__webpack_require__(/*! ./article-meta.component.css */ "./src/app/article/article-meta/article-meta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleMetaComponent);
    return ArticleMetaComponent;
}());



/***/ }),

/***/ "./src/app/article/article-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/article/article-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticleResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleResolver", function() { return ArticleResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Core_service_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/service/article.service */ "./src/app/Core/service/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ArticleResolver = /** @class */ (function () {
    function ArticleResolver(http, articlesService, route, router) {
        this.http = http;
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
    }
    ArticleResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.articlesService.get(route.params['id'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    ArticleResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _Core_service_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ArticleResolver);
    return ArticleResolver;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    /*border: solid;*/\r\n    width:70%;\r\n    height:100%;\r\n}\r\n.content{\r\n    /*border: solid;*/\r\n    width:80%;\r\n}\r\n.comment{\r\n    width:85%;\r\n}\r\n.comments{\r\n    /*border: solid;*/\r\n    margin-top:10px;\r\n}\r\n.btn-group{\r\n    vertical-align: initial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUVBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLypib3JkZXI6IHNvbGlkOyovXHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG4uY29udGVudHtcclxuICAgIC8qYm9yZGVyOiBzb2xpZDsqL1xyXG4gICAgd2lkdGg6ODAlO1xyXG59XHJcblxyXG4uY29tbWVudHtcclxuICAgIHdpZHRoOjg1JTtcclxufVxyXG4uY29tbWVudHN7XHJcbiAgICAvKmJvcmRlcjogc29saWQ7Ki9cclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uYnRuLWdyb3Vwe1xyXG4gICAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"article-page\">\r\n    \r\n  <div class=\"banner\">\r\n      <div class=\"container\">\r\n        <!--AuthGuard for editing>-->\r\n        <!--<div>\r\n            <app-article-meta [article]=\"article\">\r\n            <span [hidden]=\"!canModify\">\r\n                <a class=\"btn btn-sm btn-outline-secondary\"\r\n                   [routerLink]=\"['/editor', article.id]\">\r\n                  <i class=\"ion-edit\"></i> Edit Article\r\n                </a>\r\n              </span>\r\n              <span [hidden]=\"canModify\">\r\n        </div>-->\r\n        <div>\r\n        <h1>{{article.Article.title}}</h1>\r\n        <div class=\"card\"[innerHTML]=\"article.Article.user.image | mardown: 'html'\"></div>\r\n        <p>{{article.Article.user.username}}</p>\r\n        <p>Deparment {{article.Article.user.department.departmentName}}</p>\r\n        </div>\r\n        <!--ArticleContent-->\r\n        <div class=\"content\">\r\n          <div class=\"row article-content\">\r\n            <div class=\"col-md-12\">\r\n            <div class=\"card\"[innerHTML]=\"article.Article.content | mardown: 'html'\"></div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n       \r\n            <div class=\"tags\" >\r\n                <p>Tag</p>\r\n          </div>\r\n        \r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\r\n        <div class=\"comment\"><input class=\"form-control\"  name=\"comment\"id=\"comment\" [(ngModel)]=\"form.comment\" class=\"comment\"placeholder=\"Write your comment here!\"/>\r\n          <button class=\"btn btn-primary\"  type=\"sumbit\">Share</button>\r\n        </div>\r\n        </form>\r\n          <div class=\"btn-group\">\r\n              <button class=\"btn\" type=\"button\"><span class=\"fa fa-picture-o fa-lg\"></span></button>\r\n              <button class=\"btn\" type=\"button\"><span class=\"fa fa-video-camera fa-lg\"></span></button>\r\n              <button class=\"btn\" type=\"button\"><span class=\"fa fa-microphone fa-lg\"></span></button>\r\n              <button class=\"btn\" type=\"button\"><span class=\"fa fa-music fa-lg\"></span></button>\r\n          </div>\r\n        \r\n        <!--comments-->\r\n            <div class=\"card comments\" *ngFor=\"let a of article.Article.comments\" >\r\n                <div class=\"card\"[innerHTML]=\"a.user.image | mardown: 'html'\"></div>\r\n                  <a [routerLink]=\"['/User', a.id] \">{{a.user.username}}</a>\r\n                  <p>{{a.commentContent}}</p>\r\n                  <p>{{a.commentDateTime}}</p>\r\n            </div>\r\n             \r\n           \r\n  </div>  \r\n  </div>\r\n\r\n\r\n<!--\r\n      <app-article-meta [article]=\"article\">\r\n        <span [hidden]=\"!canModify\">\r\n          <a class=\"btn btn-sm btn-outline-secondary\"\r\n             [routerLink]=\"['/editor', article.slug]\">\r\n            <i class=\"ion-edit\"></i> Edit Article\r\n          </a>\r\n          <button class=\"btn btn-sm btn-outline-danger\"\r\n                  [ngClass]=\"{disabled: isDeleting}\"\r\n                  (click)=\"deleteArticle()\">\r\n            <i class=\"ion-trash-a\"></i> Delete Article\r\n          </button>\r\n        </span>\r\n        <span [hidden]=\"canModify\">\r\n          <app-follow-button [profile]=\"article.author\"\r\n                             (toggle)=\"onToggleFollowing($event)\">\r\n          </app-follow-button>\r\n          <app-favorite-button [article]=\"article\"\r\n                               (toggle)=\"onToggleFavorite($event)\">\r\n            {{ article.favorited ? 'Unfavorite' : 'Favorite' }} Article <span class=\"counter\">({{ article.favoritesCount }})</span>\r\n          </app-favorite-button>\r\n        </span>\r\n      </app-article-meta>\r\n    </div>\r\n  </div>\r\n  <div class=\"container page\">\r\n    <div class=\"row article-content\">\r\n      <div class=\"col-md-12\">\r\n        <div [innerHTML]=\"article.body | markdown\"></div>\r\n        <ul class=\"tag-list\">\r\n          <li *ngFor=\"let tag of article.tagList\"\r\n              class=\"tag-default tag-pill tag-outline\">\r\n            {{ tag }}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"article-actions\">\r\n      <app-article-meta [article]=\"article\">\r\n        <span [hidden]=\"!canModify\">\r\n          <a class=\"btn btn-sm btn-outline-secondary\"\r\n             [routerLink]=\"['/editor', article.slug]\">\r\n            <i class=\"ion-edit\"></i> Edit Article\r\n          </a>\r\n          <button class=\"btn btn-sm btn-outline-danger\"\r\n                  [ngClass]=\"{disabled: isDeleting}\"\r\n                  (click)=\"deleteArticle()\">\r\n            <i class=\"ion-trash-a\"></i> Delete Article\r\n          </button>\r\n        </span>\r\n        <span [hidden]=\"canModify\">\r\n          <app-follow-button [profile]=\"article.author\"\r\n                             (toggle)=\"onToggleFollowing($event)\">\r\n          </app-follow-button>\r\n          <app-favorite-button [article]=\"article\"\r\n                               (toggle)=\"onToggleFavorite($event)\">\r\n            {{ article.favorited ? 'Unfavorite' : 'Favorite' }} Article <span class=\"counter\">({{ article.favoritesCount }})</span>\r\n          </app-favorite-button>\r\n        </span>\r\n      </app-article-meta>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\r\n        <div *appShowAuthed=\"true\">\r\n          <app-list-errors [errors]=\"commentFormErrors\"></app-list-errors>\r\n          <form class=\"card comment-form\" (ngSubmit)=\"addComment()\">\r\n            <fieldset [disabled]=\"isSubmitting\">\r\n              <div class=\"card-block\">\r\n                <textarea class=\"form-control\"\r\n                          placeholder=\"Write a comment...\"\r\n                          rows=\"3\"\r\n                          [formControl]=\"commentControl\"></textarea>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <img [src]=\"currentUser.image\" class=\"comment-author-img\" />\r\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">\r\n                  Post Comment\r\n                </button>\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n        <div *appShowAuthed=\"false\">\r\n          <a [routerLink]=\"['/login']\">Sign in</a> or <a [routerLink]=\"['/register']\">sign up</a> to add comments on this article.\r\n        </div>\r\n        <app-article-comment *ngFor=\"let comment of comments\"\r\n                             [comment]=\"comment\"\r\n                             (deleteComment)=\"onDeleteComment(comment)\">\r\n        </app-article-comment>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Core/auth/token-storage.service */ "./src/app/Core/auth/token-storage.service.ts");







/**
 *
 */
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(articlesService, 
    //private commentsService: CommentsService,
    userService, route, sanitizer, tokenStorage) {
        this.articlesService = articlesService;
        this.userService = userService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.commentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.commentFormErrors = {};
        this.isSubmitting = false;
        this.isDeleting = false;
        this.userID = window.sessionStorage.getItem("userID");
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retreive the prefetched article
        this.route.data.subscribe(function (data) {
            console.log('Data :', data);
            _this.article = data;
            console.log(_this.article);
        });
    };
    ArticleComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.comment);
        this.comment = new _core__WEBPACK_IMPORTED_MODULE_4__["Comment"](this.article.Article.Id, this.form.comment, this.userID);
        this.articlesService.addComment(this.comment).subscribe(function (data) {
            console.log(_this.comment);
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-page',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            providers: [_core__WEBPACK_IMPORTED_MODULE_4__["CommentsService"]],
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        })
        /**
         *
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            src_app_Core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/article.module.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_article_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var src_app_article_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/article/articles/articles.component */ "./src/app/article/articles/articles.component.ts");
/* harmony import */ var src_app_article_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/article/add-article/add-article.component */ "./src/app/article/add-article/add-article.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_article_ArticleRoutes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/article/ArticleRoutes.module */ "./src/app/article/ArticleRoutes.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_summernote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-summernote */ "./node_modules/ngx-summernote/fesm5/ngx-summernote.js");
/* harmony import */ var src_app_Shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Shared */ "./src/app/Shared/index.ts");
/* harmony import */ var _article_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article.resolver */ "./src/app/article/article.resolver.ts");
/* harmony import */ var src_app_Core_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Core/service */ "./src/app/Core/service/index.ts");
/* harmony import */ var _article_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-resolver.service */ "./src/app/article/article-resolver.service.ts");
/* harmony import */ var _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article-meta/article-meta.component */ "./src/app/article/article-meta/article-meta.component.ts");
/* harmony import */ var src_app_Core_Core_Module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Core/Core.Module */ "./src/app/Core/Core.Module.ts");










//import { MarkdownPipe } from 'src/app/article/markdown.pipe';




//import { CategoryResolver } from './Category-resolver';


var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_app_article_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_4__["AddArticleComponent"],
                src_app_article_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"],
                src_app_article_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__["ArticlesComponent"],
                //MarkdownPipe,
                _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_13__["ArticleMetaComponent"]
            ],
            imports: [
                //BrowserModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                src_app_article_ArticleRoutes_module__WEBPACK_IMPORTED_MODULE_6__["ArticleRoutingModule"],
                ngx_summernote__WEBPACK_IMPORTED_MODULE_8__["NgxSummernoteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                src_app_Shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                src_app_Core_Core_Module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"]
            ],
            providers: [
                _article_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ArticleResolver"],
                src_app_Core_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
                src_app_Core_service__WEBPACK_IMPORTED_MODULE_11__["JwtService"],
                _article_resolver__WEBPACK_IMPORTED_MODULE_10__["ArticlesResolver"],
            ],
            exports: [
                src_app_article_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"],
                src_app_article_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__["ArticlesComponent"],
                src_app_article_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_4__["AddArticleComponent"],
                //MarkdownPipe,
                _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_13__["ArticleMetaComponent"],
            ]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/article/article.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/article/article.resolver.ts ***!
  \*********************************************/
/*! exports provided: ArticlesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesResolver", function() { return ArticlesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_service_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/service/article.service */ "./src/app/Core/service/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ArticlesResolver = /** @class */ (function () {
    function ArticlesResolver(http, articlesService, route) {
        this.http = http;
        this.articlesService = articlesService;
        this.route = route;
    }
    ArticlesResolver.prototype.resolve = function (route) {
        return this.articlesService.find(route.params['page'], route.params['sort']);
    };
    ArticlesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _Core_service_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ArticlesResolver);
    return ArticlesResolver;
}());



/***/ }),

/***/ "./src/app/article/articles/articles.component.css":
/*!*********************************************************!*\
  !*** ./src/app/article/articles/articles.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-results {\r\n    margin-left:30px;\r\n    width:100%;\r\n\r\n}\r\n.toppagination{\r\n    \r\n}\r\n.Articlecontent {\r\n    width:400px;\r\n    height: 30px;\r\n    white-space: nowrap; \r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n /*border: solid;*/\r\n}\r\n.sortby {\r\n    margin-top:-95px;\r\n\r\n    z-index: 0;\r\n}\r\n.rightcol {\r\n \r\n    float:left;\r\n  \r\n}\r\n.pagination {\r\n \r\n}\r\n.sort{\r\n    float:right;\r\n    margin-left:20px;\r\n}\r\n.datatable{\r\nmargin-top:0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4QixpQkFBaUI7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjs7SUFFaEIsVUFBVTtBQUNkO0FBQ0E7O0lBRUksVUFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1yZXN1bHRzIHtcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5cclxufVxyXG4udG9wcGFnaW5hdGlvbntcclxuICAgIFxyXG59XHJcbi5BcnRpY2xlY29udGVudCB7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAvKmJvcmRlcjogc29saWQ7Ki9cclxufVxyXG4uc29ydGJ5IHtcclxuICAgIG1hcmdpbi10b3A6LTk1cHg7XHJcblxyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4ucmlnaHRjb2wge1xyXG4gXHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gIFxyXG59XHJcbi5wYWdpbmF0aW9uIHtcclxuIFxyXG59XHJcbi5zb3J0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG59XHJcbi5kYXRhdGFibGV7XHJcbm1hcmdpbi10b3A6MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/article/articles/articles.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article/articles/articles.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"page-results\">\r\n<table class=\"table table-striped\">\r\n    <div *ngFor=\"let a of Article\" >\r\n    <tr>\r\n        <td>\r\n            <dt [routerLink]=\"['/article', a.id]\">{{a.title}}</dt>\r\n            <dd></dd>\r\n        </td>\r\n    </tr>\r\n</div>\r\n</table>\r\n</div>-->\r\n<div class=\"page-results\">\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-2 col-md-2\"></div>\r\n\r\n\r\n            <div class=\"col-xs-2 col-md-2\"></div>\r\n        </div>\r\n\r\n        <br><br>\r\n\r\n        <!--CREATE LEFT SIDE COLUMN-->\r\n    \r\n        <div class=\"row\">\r\n           <!--END VIDEO COLUMN-->\r\n           <div class=\"col-xs-1 col-md-3 rightcol\">\r\n            <h5>Filter your Search</h5>\r\n            <div class=\"card mt-4\">\r\n\r\n                <!--START VIDEO COLUMN-->\r\n                <div class=\"card-header font-weight-bold\">Article or Videos</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-check\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\"\r\n                            value=\"option1\">\r\n                        <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                            Articles <span class=\"badge badge-success\"> (19)</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-check\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\"\r\n                            value=\"option2\">\r\n                        <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                            Videos <span class=\"badge badge-success\"> (10)</span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div> <!--END VIDEO COLUMN-->\r\n\r\n                <!--START CATEGORY COLUMN-->\r\n                <div class=\"card mt-4\">\r\n                    <div class=\"card-header font-weight-bold\">Category</div>\r\n\r\n                    <div class=\"card-body\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\"\r\n                                value=\"option1\">\r\n                            <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                                Training Skill <span class=\"badge badge-success\"> (19)</span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\"\r\n                                value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                                Labor Safety <span class=\"badge badge-success\"> (10)</span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\"\r\n                                value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                                Road Skill <span class=\"badge badge-success\"> (10)</span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--END CATEGORY COLUMN-->\r\n\r\n                <button class=\"btn btn-block btn-primary\" type=\"submit\">Search</button>\r\n\r\n            </div>\r\n            <!--END LEFT SIDE COLUMN-->\r\n\r\n            <!--START RIGHT SIDE COLUMN-->\r\n            <div class=\"toppagination col-xs-8 offset-xs-1 col-md-8 offset-md-1 pagination\">\r\n                <!--Create Top pagination on the left-->\r\n                <nav aria-label=\"Page navigation example\">\r\n                    <ul class=\"pagination pagination-sm\">\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"['/Articles', 1,'createdAt']\">1</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"['/Articles', 2,'createdAt']\">2</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                    </ul>\r\n                </nav><!--End Top Pagination-->\r\n\r\n                <!--Nested Row for Sort by column-->\r\n                <div class=\"row sort\">\r\n                    <div class=\"col-xs-3 col-md-3\"></div>\r\n                    <div class=\"col-xs-3 col-md-3\"></div>\r\n\r\n                    <!--Start Sort By-->\r\n                    <div class=\"sortby col-xs-6 col-md-6\">\r\n                        <form class=\"form-group\">\r\n                            <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">Sort by: </span>\r\n                                </div>\r\n                                <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n                                    <option>Relevance</option>\r\n                                    <option>Newest to Oldest</option>\r\n                                    <option>Oldest to Newest</option>\r\n                                    <option>Title A to Z</option>\r\n                                    <option>Title Z to A</option>\r\n                                </select>\r\n                                </div>\r\n                        </form>\r\n                    </div><!--End Sort By-->\r\n                    \r\n                </div> <!--End Nested Row-->\r\n               \r\n\r\n                <!--START THE TABLE SECTION-->\r\n                <table class=\"table table-striped datatable\">\r\n                        <div *ngFor=\"let a of Article\" >\r\n                        <tr>\r\n                            <td>\r\n                                <dt [routerLink]=\"['/article', a.id]\">{{a.title}}</dt>\r\n                                <dd class=\"Articlecontent\"[innerHTML]=\"a.content | mardown: 'html'\"></dd>\r\n                            </td>\r\n                        </tr>\r\n                    </div>\r\n                    </table>\r\n                    \r\n             \r\n            </div>\r\n\r\n            <!--RIGHT SIDE PAGINATION-->\r\n            <nav aria-label=\"Page navigation example\">\r\n                <ul class=\"pagination pagination-sm justify-content-end\">\r\n                    <li class=\"page-item disabled\">\r\n                        <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\r\n                    </li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                </ul>\r\n            </nav>\r\n            <!--END RIGHT PAGINATION-->\r\n        </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/article/articles/articles.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article/articles/articles.component.ts ***!
  \********************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_service_Article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/service/Article.service */ "./src/app/Core/service/Article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(articlesService, route, router) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.arrayList = [""];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log('Data :', data.Articles);
            _this.Article = data.Articles;
            console.log(_this.Article);
        });
    };
    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/article/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.css */ "./src/app/article/articles/articles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Core_service_Article_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/article/markdown.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/article/markdown.pipe.ts ***!
  \******************************************/
/*! exports provided: MarkdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPipe", function() { return MarkdownPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MarkdownPipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    MarkdownPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mardown'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], MarkdownPipe);
    return MarkdownPipe;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-cyan input[type=text] {\r\n    border-bottom: 1px solid #e14d4d;\r\n    box-shadow: 0 1px 0 0 #0f0f0f;\r\n    width:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1jeWFuIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMTRkNGQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzBmMGYwZjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-form active-cyan-2 mb-3\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/core/error.ts":
/*!*******************************!*\
  !*** ./src/app/core/error.ts ***!
  \*******************************/
/*! exports provided: error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
var error = /** @class */ (function () {
    function error() {
    }
    return error;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: AlertService, error, UserService, AuthenticationService, ArticlesService, ResponsiveService, ApiService, CommentsService, JwtService, ProfileService, Article, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/app/core/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ArticlesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ResponsiveService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/core/model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Article"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Comment"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./src/app/core/error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _error__WEBPACK_IMPORTED_MODULE_2__["error"]; });






/***/ }),

/***/ "./src/app/core/model/Article.ts":
/*!***************************************!*\
  !*** ./src/app/core/model/Article.ts ***!
  \***************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/core/model/article.ts":
/*!***************************************!*\
  !*** ./src/app/core/model/article.ts ***!
  \***************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/core/model/comment.ts":
/*!***************************************!*\
  !*** ./src/app/core/model/comment.ts ***!
  \***************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(article, body, userid) {
        this.id = article.ArticleID;
        this.body = body;
        this.createdAt = "";
        this.author = userid;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/core/model/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/model/index.ts ***!
  \*************************************/
/*! exports provided: Article, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./src/app/core/model/article.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _article__WEBPACK_IMPORTED_MODULE_0__["Article"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ "./src/app/core/model/comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _comment__WEBPACK_IMPORTED_MODULE_1__["Comment"]; });





/***/ }),

/***/ "./src/app/core/service/Article.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/service/Article.service.ts ***!
  \*************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/core/service/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url;
console.log(url);
var endpoint = url + 'Articles/';
console.log(endpoint);
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    ArticlesService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params }));
    };
    ArticlesService.prototype.get = function (id) {
        return this.apiService.get('Articles/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/Articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/Articles/' + article.slug, { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/Articles/', { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/Articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.find = function (Page, Sort) {
        return this.apiService.get('Articles/' + Page + "/" + Sort).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.add = function (article) {
        return this.http.post(endpoint, article, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addHero', article)));
    };
    ArticlesService.prototype.addComment = function (comment) {
        return this.http.post(endpoint + '${Id}/Comment', comment, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Comment', comment)));
    };
    ArticlesService.prototype.getArticleById = function (id) {
        return this.http.get(endpoint + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ArticlesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/core/service/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/core/service/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/service/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/service/authentication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/service/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/service/comment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/service/comment.service.ts ***!
  \*************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CommentsService = /** @class */ (function () {
    function CommentsService(apiService) {
        this.apiService = apiService;
    }
    CommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.getAll = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comments; }));
    };
    CommentsService.prototype.destroy = function (commentId, articleSlug) {
        return this.apiService
            .delete("/articles/" + articleSlug + "/comments/" + commentId);
    };
    CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/core/service/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/service/index.ts ***!
  \***************************************/
/*! exports provided: AlertService, UserService, AuthenticationService, ArticlesService, ResponsiveService, ApiService, CommentsService, JwtService, ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/core/service/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/core/service/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/service/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _Article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.service */ "./src/app/core/service/Article.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _Article_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"]; });

/* harmony import */ var _responsive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsive.service */ "./src/app/core/service/responsive.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return _responsive_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveService"]; });

/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/core/service/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]; });

/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.service */ "./src/app/core/service/comment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentsService"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/service/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"]; });

/* harmony import */ var _profile_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-service.service */ "./src/app/core/service/profile-service.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]; });













/***/ }),

/***/ "./src/app/core/service/jwt.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/service/jwt.service.ts ***!
  \*********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['AuthToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['AuthToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('AuthToken');
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/core/service/profile-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/service/profile-service.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Core/service */ "./src/app/Core/service/index.ts");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




var ProfileService = /** @class */ (function () {
    function ProfileService(apiService) {
        this.apiService = apiService;
    }
    ProfileService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ProfileService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    ProfileService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Core_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/core/service/responsive.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/service/responsive.service.ts ***!
  \****************************************************/
/*! exports provided: ResponsiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return ResponsiveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");

// globals.ts


var ResponsiveService = /** @class */ (function () {
    function ResponsiveService() {
        this.isMobile = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.checkWidth();
    }
    ResponsiveService.prototype.onMobileChange = function (status) {
        this.isMobile.next(status);
        //window.location.reload();
    };
    ResponsiveService.prototype.getMobileStatus = function () {
        return this.isMobile.asObservable();
    };
    ResponsiveService.prototype.checkWidth = function () {
        // tslint:disable-next-line:whitespace
        this.width = window.innerWidth;
        // tslint:disable-next-line:whitedth;
        if (this.width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        }
        else if (this.width > 768 && this.width <= 992) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        }
        else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    };
    ResponsiveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        // tslint:disable-next-line:class-name
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResponsiveService);
    return ResponsiveService;
}());



/***/ }),

/***/ "./src/app/core/service/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






//Read this about user authetication https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
var UserService = /** @class */ (function () {
    /*
      private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
      public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    */
    function UserService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.userUrl = 'http://localhost:8080/api/test/user';
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.accessToken);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.setAuth(data.user);
            return data;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    ///////////Old authentication
    UserService.prototype.getAll = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/register", user);
    };
    UserService.prototype.updateold = function (user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users/" + id);
    };
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.userUrl, { responseType: 'text' });
    };
    UserService.prototype.findByUserName = function (Username) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + Username);
    };
    UserService.prototype.findByUserName1 = function (Username) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "Users/" + Username);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/helpers/JWT.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/JWT.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.accessToken
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/XhrInterceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/XhrInterceptor.ts ***!
  \*******************************************/
/*! exports provided: XhrInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/user/User.Module.ts":
/*!*************************************!*\
  !*** ./src/app/user/User.Module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_user_user_profile_password_setting_password_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/user/user-profile/password-setting/password-setting.component */ "./src/app/user/user-profile/password-setting/password-setting.component.ts");
/* harmony import */ var src_app_user_user_profile_notification_setting_notification_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user/user-profile/notification-setting/notification-setting.component */ "./src/app/user/user-profile/notification-setting/notification-setting.component.ts");
/* harmony import */ var src_app_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user/user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var src_app_user_UserRoutes_Module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user/UserRoutes.Module */ "./src/app/user/UserRoutes.Module.ts");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core */ "./src/app/core/index.ts");
/* harmony import */ var src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/user/user-resolver.service */ "./src/app/user/user-resolver.service.ts");
/* harmony import */ var _markdown_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./markdown.pipes */ "./src/app/user/markdown.pipes.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/user/admin/admin.component.ts");

















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                src_app_user_user_profile_password_setting_password_setting_component__WEBPACK_IMPORTED_MODULE_8__["PasswordSettingComponent"],
                src_app_user_user_profile_notification_setting_notification_setting_component__WEBPACK_IMPORTED_MODULE_9__["NotificationSettingComponent"],
                src_app_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
                _markdown_pipes__WEBPACK_IMPORTED_MODULE_14__["MarkdownPipes"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                src_app_user_UserRoutes_Module__WEBPACK_IMPORTED_MODULE_11__["UserRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            ],
            providers: [
                src_app_core__WEBPACK_IMPORTED_MODULE_12__["ApiService"],
                src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_13__["UserResolver"],
                src_app_core__WEBPACK_IMPORTED_MODULE_12__["UserService"]
            ],
            exports: [
                src_app_user_user_profile_password_setting_password_setting_component__WEBPACK_IMPORTED_MODULE_8__["PasswordSettingComponent"],
                src_app_user_user_profile_notification_setting_notification_setting_component__WEBPACK_IMPORTED_MODULE_9__["NotificationSettingComponent"],
                src_app_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
                _markdown_pipes__WEBPACK_IMPORTED_MODULE_14__["MarkdownPipes"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/UserRoutes.Module.ts":
/*!*******************************************!*\
  !*** ./src/app/user/UserRoutes.Module.ts ***!
  \*******************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_user_profile_password_setting_password_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/user-profile/password-setting/password-setting.component */ "./src/app/user/user-profile/password-setting/password-setting.component.ts");
/* harmony import */ var src_app_user_user_profile_notification_setting_notification_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user-profile/notification-setting/notification-setting.component */ "./src/app/user/user-profile/notification-setting/notification-setting.component.ts");
/* harmony import */ var src_app_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user/user-resolver.service */ "./src/app/user/user-resolver.service.ts");
/* harmony import */ var src_app_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user/admin/admin.component */ "./src/app/user/admin/admin.component.ts");








var routes = [
    {
        path: 'User',
        component: src_app_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
        resolve: { User: src_app_user_user_resolver_service__WEBPACK_IMPORTED_MODULE_6__["UserResolver"] }
    },
    {
        path: 'ContentManager',
        component: src_app_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"]
    },
    {
        path: 'NotificationSettings',
        component: src_app_user_user_profile_notification_setting_notification_setting_component__WEBPACK_IMPORTED_MODULE_4__["NotificationSettingComponent"]
    },
    {
        path: 'PasswordSetting',
        component: src_app_user_user_profile_password_setting_password_setting_component__WEBPACK_IMPORTED_MODULE_3__["PasswordSettingComponent"]
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/admin/admin.component.css":
/*!************************************************!*\
  !*** ./src/app/user/admin/admin.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n}\r\n\r\n#sidebar {\r\n    margin-left: -250px;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar {\r\n    /* don't forget to add all the previously mentioned styles here too */\r\n    \r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n    color: #fff;\r\n    padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBSUE7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUVBQXFFOztJQUVyRSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC91c2VyL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG59XHJcbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuYSwgYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICAvKiBkb24ndCBmb3JnZXQgdG8gYWRkIGFsbCB0aGUgcHJldmlvdXNseSBtZW50aW9uZWQgc3R5bGVzIGhlcmUgdG9vICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4YjtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzM4NkQ1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlID4gYSwgYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxudWwgdWwgYSB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/admin/admin.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/admin/admin.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <a [routerLink]=\"['/AddArticle']\">Add Article\n    </a>\n    <a [routerLink]=\"['/Articles']\">All Article</a>\n</div>"

/***/ }),

/***/ "./src/app/user/admin/admin.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/admin/admin.component.ts ***!
  \***********************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.show = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.toggleNav = function () {
        this.show = !this.show;
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/user/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/user/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/user/markdown.pipes.ts":
/*!****************************************!*\
  !*** ./src/app/user/markdown.pipes.ts ***!
  \****************************************/
/*! exports provided: MarkdownPipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPipes", function() { return MarkdownPipes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var MarkdownPipes = /** @class */ (function () {
    function MarkdownPipes(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MarkdownPipes.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    MarkdownPipes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mardown'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], MarkdownPipes);
    return MarkdownPipes;
}());



/***/ }),

/***/ "./src/app/user/user-profile/notification-setting/notification-setting.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/user-profile/notification-setting/notification-setting.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL25vdGlmaWNhdGlvbi1zZXR0aW5nL25vdGlmaWNhdGlvbi1zZXR0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user-profile/notification-setting/notification-setting.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/user/user-profile/notification-setting/notification-setting.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"alert alert-primary text-center\">\r\n      <h4>Notification setting</h4>\r\n    </div>\r\n    <form method=\"POST\" action=\"#\">\r\n      <p>*** Please select the checkbox to turn on/off the notification settings</p>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">\r\n        <label class=\"form-check-label\" for=\"defaultCheck1\">\r\n          Email\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck2\">\r\n        <label class=\"form-check-label\" for=\"defaultCheck2\">\r\n          Message\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck3\">\r\n        <label class=\"form-check-label\" for=\"defaultCheck3\">\r\n          New comment\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck4\">\r\n        <label class=\"form-check-label\" for=\"defaultCheck4\">\r\n          Alerts\r\n        </label>\r\n      </div>\r\n      <br>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save Changes</button>\r\n      <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n\r\n    </form>\r\n\r\n    <div class=\"col-md-3\"></div>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/user/user-profile/notification-setting/notification-setting.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/user/user-profile/notification-setting/notification-setting.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NotificationSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingComponent", function() { return NotificationSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationSettingComponent = /** @class */ (function () {
    function NotificationSettingComponent() {
    }
    NotificationSettingComponent.prototype.ngOnInit = function () {
    };
    NotificationSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-setting',
            template: __webpack_require__(/*! ./notification-setting.component.html */ "./src/app/user/user-profile/notification-setting/notification-setting.component.html"),
            styles: [__webpack_require__(/*! ./notification-setting.component.css */ "./src/app/user/user-profile/notification-setting/notification-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationSettingComponent);
    return NotificationSettingComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/password-setting/password-setting.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/user/user-profile/password-setting/password-setting.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL3Bhc3N3b3JkLXNldHRpbmcvcGFzc3dvcmQtc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-profile/password-setting/password-setting.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/user/user-profile/password-setting/password-setting.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"alert alert-primary text-center\">\r\n      <h4>Password setting</h4>\r\n    </div>\r\n\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupCurrentPwd\">Current password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"formGroupCurrentPwd\" placeholder=\"Current password\">\r\n        <a href=\"#\">Forget your password?</a>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupNewPwd\">New password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"New password here...\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupVerifyPwd\">Verify password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"formGroupVerifyPwd\" placeholder=\"Re-enter new password...\">\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-primary\">Save Changes</button>\r\n      <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-md-3\"></div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-profile/password-setting/password-setting.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user/user-profile/password-setting/password-setting.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PasswordSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordSettingComponent", function() { return PasswordSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PasswordSettingComponent = /** @class */ (function () {
    function PasswordSettingComponent() {
    }
    PasswordSettingComponent.prototype.ngOnInit = function () {
    };
    PasswordSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-setting',
            template: __webpack_require__(/*! ./password-setting.component.html */ "./src/app/user/user-profile/password-setting/password-setting.component.html"),
            styles: [__webpack_require__(/*! ./password-setting.component.css */ "./src/app/user/user-profile/password-setting/password-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordSettingComponent);
    return PasswordSettingComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Reset browser */\r\n.user{\r\n    margin-top:100px;\r\n}\r\nbody{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n/*Adjust icon size*/\r\ni{\r\n    font-size:1.3em;\r\n    color:black;\r\n}\r\n/*Apply corporate color for the nav bar*/\r\n.bg-color{\r\n    background-color: #555;\r\n}\r\nli{\r\n    margin-right: 20px;\r\n    font-size: 17px;\r\n}\r\nfooter{\r\n    line-height: 80px;\r\n}\r\n.side-image{\r\n    background-image: url(\"/assets/background-image.jpg\");  \r\n    \r\n}\r\n/********** HOVER MOUSE FOR ICON BAR *****************/\r\n/* The container <div> - needed to position the dropdown content */\r\n.drop-down {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {display: block;}\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n/************ END HOVER MOUSE *******************/\r\n/******* CUSTOM TOGGLE SWITCH *******/\r\n.switch input { \r\n    display:none;\r\n}\r\n.switch {\r\n    display:inline-block;\r\n    width:55px;\r\n    height:25px;\r\n    margin:8px;\r\n    -webkit-transform:translateY(50%);\r\n            transform:translateY(50%);\r\n    position:relative;\r\n}\r\n.slider {\r\n    position:absolute;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    border-radius:30px;\r\n    box-shadow:0 0 0 2px #777, 0 0 4px #777;\r\n    cursor:pointer;\r\n    border:4px solid transparent;\r\n    overflow:hidden;\r\n     transition:.4s;\r\n}\r\n.slider:before {\r\n    position:absolute;\r\n    content:\"\";\r\n    width:100%;\r\n    height:100%;\r\n    background:#777;\r\n    border-radius:30px;\r\n    -webkit-transform:translateX(-30px);\r\n            transform:translateX(-30px);\r\n    transition:.4s;\r\n}\r\ninput:checked + .slider:before {\r\n    -webkit-transform:translateX(30px);\r\n            transform:translateX(30px);\r\n    background:green;\r\n}\r\ninput:checked + .slider {\r\n    box-shadow:0 0 0 2px green,0 0 2px green;\r\n}\r\n/*********** END TOGGLE SWITCH **********/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBLHdDQUF3QztBQUN4QztJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kscURBQXFEOztBQUV6RDtBQUdBLHNEQUFzRDtBQUN0RCxrRUFBa0U7QUFDbEU7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxVQUFVO0VBQ1o7QUFFQSw4QkFBOEI7QUFDOUI7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQixzQkFBc0IsQ0FBQztBQUVsRCxvQ0FBb0M7QUFDcEMsbUNBQW1DLGNBQWMsQ0FBQztBQUNsRCwwQkFBMEIseUJBQXlCLENBQUM7QUFDckQsaURBQWlEO0FBR2pELHFDQUFxQztBQUNyQztJQUNHLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLEtBQUs7SUFDTCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZUFBZTtLQUNkLGNBQWM7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBLHlDQUF5QyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUmVzZXQgYnJvd3NlciAqL1xyXG4udXNlcntcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuYm9keXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4vKkFkanVzdCBpY29uIHNpemUqL1xyXG5pe1xyXG4gICAgZm9udC1zaXplOjEuM2VtO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi8qQXBwbHkgY29ycG9yYXRlIGNvbG9yIGZvciB0aGUgbmF2IGJhciovXHJcbi5iZy1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxufVxyXG5cclxuLnNpZGUtaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQtaW1hZ2UuanBnXCIpOyAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqIEhPVkVSIE1PVVNFIEZPUiBJQ09OIEJBUiAqKioqKioqKioqKioqKioqKi9cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4uZHJvcC1kb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTt9XHJcbiAvKioqKioqKioqKioqIEVORCBIT1ZFUiBNT1VTRSAqKioqKioqKioqKioqKioqKioqL1xyXG4gXHJcblxyXG4gLyoqKioqKiogQ1VTVE9NIFRPR0dMRSBTV0lUQ0ggKioqKioqKi9cclxuIC5zd2l0Y2ggaW5wdXQgeyBcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uc3dpdGNoIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6NTVweDtcclxuICAgIGhlaWdodDoyNXB4O1xyXG4gICAgbWFyZ2luOjhweDtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgYm94LXNoYWRvdzowIDAgMCAycHggIzc3NywgMCAwIDRweCAjNzc3O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBib3JkZXI6NHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgIHRyYW5zaXRpb246LjRzO1xyXG59XHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgY29udGVudDpcIlwiO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojNzc3O1xyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTMwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjouNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgzMHB4KTtcclxuICAgIGJhY2tncm91bmQ6Z3JlZW47XHJcbn1cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzowIDAgMCAycHggZ3JlZW4sMCAwIDJweCBncmVlbjtcclxufVxyXG4vKioqKioqKioqKiogRU5EIFRPR0dMRSBTV0lUQ0ggKioqKioqKioqKi9cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user\">\r\n <!--START MAIN SECTION-->\r\n <div class=\"container\">\r\n  <div class=\"row\">\r\n      <!--Create left side column-->\r\n      <div class=\"col-xs-4 col-md-4 text-center\">\r\n          <!--<img class=\"img-responsive mt-4\" src=\"\" alt=\"user icon\" width=\"100\" height=\"90\">-->\r\n          <div class=\"img-circle\"[innerHTML]=\"User.User.image | mardown: 'html'\"></div>\r\n          <ul class=\"list-group\">\r\n              <li class=\"list-group-item active \">{{User.User.username}}:{{User.User.fname}} {{User.User.lname}}</li>\r\n              <li class=\"list-group-item text-left\"><i class=\"fa fa-phone-square\"></i> Phone:\r\n                {{User.User.userPhone}}</li>\r\n              <li class=\"list-group-item text-left\"><i class=\"fas fa-envelope\"></i> Email:\r\n                {{User.User.userEmail}} </li>\r\n              <li class=\"list-group-item text-left\"><i class=\"fas fa-building\"></i> Department: {{User.User.department.departmentName}}</li>\r\n              <li class=\"list-group-item\"><button class=\"btn btn-block btn-info\"><a class=\"text-white\" href=\"editUserProfile.html\"><i class=\"fas fa-user-edit\"></i>\r\n                      Edit user profile</a></button>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n      <!--End left column-->\r\n\r\n      <!--Create right side column-->\r\n      <div class=\"col-xs-7 offset-xs-1 col-md-7 offset-md-1 mt-5\">\r\n\r\n          <div class=\"card mt-10\">\r\n              <div class=\"card-header\">\r\n                  <h5>Recent document <span> <button class=\"btn btn-info float-right\"> See all</button></span></h5>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                      <div class=\"card\">\r\n                          <div class=\"card-body\">\r\n                              <h6 class=\"card-title\">Document 1</h6>\r\n                              <p class=\"card-text\">Some quick example text to build on the card title and\r\n                                  make up the bulk of the card's content.</p>\r\n                              <a href=\"#\">Read more...</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                      <div class=\"card\">\r\n                          <div class=\"card-body\">\r\n                              <h6 class=\"card-title\">Document 2</h6>\r\n                              <p class=\"card-text\">Some quick example text to build on the card title and\r\n                                  make up the bulk of the card's content.</p>\r\n                              <a href=\"#\">Read more...</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                      <div class=\"card\">\r\n                          <div class=\"card-body\">\r\n                              <h6 class=\"card-title\">Document 3</h6>\r\n                              <p class=\"card-text\">Some quick example text to build on the card title and\r\n                                  make up the bulk of the card's content.</p>\r\n                              <a href=\"#\">Read more...</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!--End right column-->\r\n  </div>\r\n  <!--End top row-->\r\n\r\n  <!--Start 2 row-->\r\n  <div class=\"row\">\r\n      <!--Create 2 box in left column-->\r\n      <div class=\"col-xs-4 col-md-4 mt-5\">\r\n          <ul class=\"list-group\">\r\n              <li class=\"list-group-item active text-center\">Quick Links and Resources</li>\r\n              <li class=\"list-group-item text-left\"><a href=\"#\">Training...</a></li>\r\n              <li class=\"list-group-item text-left\"><a href=\"#\">Support...</a></li>\r\n              <li class=\"list-group-item text-left\">Info needed...</li>\r\n              <li class=\"list-group-item\">Info needed...</li>\r\n          </ul>\r\n      </div>\r\n      <!--End 2 left box-->\r\n\r\n      <!--Create 2 right side column-->\r\n      <div class=\"col-xs-7 offset-xs-1 col-md-7 offset-md-1 mt-5\">\r\n          <div class=\"card mt-10\">\r\n              <div class=\"card-header\">\r\n                  <h5>Subscriptions <span> <button class=\"btn btn-info float-right\"> See all</button></span></h5>\r\n              </div>\r\n              <!--Nested row to create 3 equal columns for document-->\r\n              <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                      <div class=\"card \">\r\n                          <h6 class=\"card-title ml-2\">Marketing</h6>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                      <div class=\"card\">\r\n                          <h6 class=\"card-title ml-2\">Information</h6>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                      <div class=\"card\">\r\n                          <h6 class=\"card-title ml-2\">Research and Development</h6>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!--End nested row-->\r\n          </div>\r\n      </div>\r\n      <!--End right column-->\r\n  </div>\r\n  <!--End 2 row-->\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core */ "./src/app/Core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");







var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(
    //private commentsService: CommentsService,
    userService, route, router, sanitizer, AuthService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        // Retreive the prefetched article
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log('Data :', data);
            _this.User = data;
            console.log(_this.User);
        });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], src_app_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user-resolver.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/user-resolver.service.ts ***!
  \***********************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/user.service */ "./src/app/core/service/user.service.ts");





var UserResolver = /** @class */ (function () {
    function UserResolver(http, UserService, route, router) {
        this.http = http;
        this.UserService = UserService;
        this.route = route;
        this.router = router;
    }
    UserResolver.prototype.resolve = function (route, state) {
        return this.UserService.findByUserName((window.sessionStorage.getItem("AuthUsername")));
    };
    UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_core_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserResolver);
    return UserResolver;
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
    production: false,
    api_url: 'http://webapp-190214214406.azurewebsites.net/api/',
    url: 'http://webapp-190214214406.azurewebsites.net/home'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\TMT\Hub2.0\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map