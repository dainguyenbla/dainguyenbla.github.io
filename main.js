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
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");




var routes = [
    { path: 'task/:id', component: _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"] }
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

module.exports = ".tasks-task {\n    height: 83vh;\n    grid-template-columns: 66% 34%;\n    border: 1px solid #E1E1DB;\n}\n\n.tasks {\n    height: 100%;\n    overflow: auto;\n    padding: 17px 12px;\n    background: #fff;\n    position: relative;\n}\n\n.tasks::-webkit-scrollbar {\n    width: 0;\n}\n\n.task-wrap {\n    height: 100%;\n    background: #E4E7EB;\n    text-align: center;\n    overflow: auto;\n}\n\n.task-wrap::-webkit-scrollbar {\n    width: 0;\n}\n\n.task-content {\n    width: 94%;\n    margin: 0 3%;\n    background: white;\n}\n\n.task-content-header input[type=\"text\"] {\n    font-size: 22px;\n    width: 90%;\n    border: none;\n    margin-top: 10px;\n}\n\n.task-content-header input[type=\"text\"]:focus {\n    outline: none;\n}\n\n.des {\n    overflow: hidden;\n    width: 83%;\n    border: none;\n    color: #7B8794;\n}\n\n.des:focus {\n    outline: none;\n}\n\n.title h3 {\n    margin: 3vh 0;\n}\n\n.checkbox-item-wrap {\n    position: relative;\n    cursor: pointer;\n    float: left;\n    clear: both;\n    margin-top: 10px;\n    margin-right: 15px;\n    margin-left: 15px;\n}\n\n.checkmark-item {\n    position: absolute;\n    border: 1px solid #5ED0FA;\n    border-radius: 50%;\n    cursor: pointer;\n    width: 25px;\n    height: 25px;\n}\n\n.checkbox-item-wrap:hover input~.checkmark-item {\n    background: #B3ECFF;\n}\n\n.checkbox-item-wrap input:checked~.checkmark-item {\n    background: #2BB0ED;\n}\n\n.checkmark-item:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.checkbox-item-wrap input:checked~.checkmark-item:after {\n    display: block;\n}\n\n.checkbox-item-wrap .checkmark-item:after {\n    left: 8px;\n    top: 3px;\n    width: 8px;\n    height: 14px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    transform: rotate(45deg);\n}\n\ninput[type=\"checkbox\"] {\n    opacity: 0;\n    cursor: pointer;\n    height: 30px;\n    width: 30px;\n    display: none;\n}\n\n.tasks-wrap {\n    margin: 34px;\n}\n\n.item-wrap {\n    padding: 0 10px 10px 10px;\n}\n\n.add-task-edit {\n    font-size: 20px;\n    display: block;\n    float: right;\n    color: #5ED0FA;\n}\n\n.tool {\n    width: 97%;\n    position: absolute;\n    margin: 13px 0;\n    height: 20px;\n    bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFza3MtdGFzayB7XG4gICAgaGVpZ2h0OiA4M3ZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjYlIDM0JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMURCO1xufVxuXG4udGFza3Mge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxN3B4IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xufVxuXG4udGFzay13cmFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI0U0RTdFQjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YXNrLXdyYXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMDtcbn1cblxuLnRhc2stY29udGVudCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW46IDAgMyU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50YXNrLWNvbnRlbnQtaGVhZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRhc2stY29udGVudC1oZWFkZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kZXMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDgzJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICM3Qjg3OTQ7XG59XG5cbi5kZXM6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi50aXRsZSBoMyB7XG4gICAgbWFyZ2luOiAzdmggMDtcbn1cblxuLmNoZWNrYm94LWl0ZW0td3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNoZWNrbWFyay1pdGVtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVFRDBGQTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmNoZWNrYm94LWl0ZW0td3JhcDpob3ZlciBpbnB1dH4uY2hlY2ttYXJrLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6ICNCM0VDRkY7XG59XG5cbi5jaGVja2JveC1pdGVtLXdyYXAgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6ICMyQkIwRUQ7XG59XG5cbi5jaGVja21hcmstaXRlbTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94LWl0ZW0td3JhcCBpbnB1dDpjaGVja2Vkfi5jaGVja21hcmstaXRlbTphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveC1pdGVtLXdyYXAgLmNoZWNrbWFyay1pdGVtOmFmdGVyIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgdG9wOiAzcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhc2tzLXdyYXAge1xuICAgIG1hcmdpbjogMzRweDtcbn1cblxuLml0ZW0td3JhcCB7XG4gICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbn1cblxuLmFkZC10YXNrLWVkaXQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM1RUQwRkE7XG59XG5cbi50b29sIHtcbiAgICB3aWR0aDogOTclO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDEzcHggMDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tasks-wrap\">\n    <div class=\"tasks-task\">\n        <div class=\"tasks\">\n            <app-task (delTaskEvent)=\"receivedTask($event)\"></app-task>\n        </div>\n        <div class=\"task-wrap display-none\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Todos';
    }
    AppComponent.prototype.receivedTask = function ($event) {
        this.delTaskId = $event;
        console.log($event);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/new-task/new-task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"],
                _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-item-wrap {\n    position: relative;\n    cursor: pointer;\n    float: left;\n    clear: both;\n    margin-top: 17px;\n    margin-right: 35px;\n    margin-left: 15px;\n}\n\n.checkmark-item {\n    position: absolute;\n    border: 1px solid #5ED0FA;\n    border-radius: 50%;\n    cursor: pointer;\n    width: 25px;\n    height: 25px;\n}\n\n.checkbox-item-wrap:hover input~.checkmark-item {\n    background: #B3ECFF;\n}\n\n.checkbox-item-wrap input:checked~.checkmark-item {\n    background: #2BB0ED;\n}\n\n.checkmark-item:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.checkbox-item-wrap input:checked~.checkmark-item:after {\n    display: block;\n}\n\n.checkbox-item-wrap .checkmark-item:after {\n    left: 8px;\n    top: 3px;\n    width: 8px;\n    height: 14px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    transform: rotate(45deg);\n}\n\ninput[type=\"checkbox\"] {\n    opacity: 0;\n    cursor: pointer;\n    height: 30px;\n    width: 30px;\n    display: none;\n}\n\n.des {\n    overflow: hidden;\n    width: 80%;\n    border: none;\n    color: #7B8794;\n    background: transparent;\n}\n\n.des:focus {\n    outline: none;\n}\n\n.items {\n    transition: all 0.2s;\n    border-bottom: 1px solid #E4E7EB;\n    position: relative;\n    text-align: left;\n    background: white;\n    -webkit-animation-name: ttb;\n    /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 4s;\n    /* Safari 4.0 - 8.0 */\n    animation-name: ttb;\n    -webkit-animation-duration: 1.3s;\n            animation-duration: 1.3s;\n\n}\n\n.items:hover {\n    background: #F7F7F7;\n}\n\n.items:focus-within {\n    background: #F7F7F7;\n}\n\n.add-edit {\n    font-size: 20px;\n    /* top: 18px; */\n    /* width: 31px; */\n    display: block;\n    float: left;\n    color: #5ED0FA;\n    margin: 17px 0 0 18px;\n}\n\n.add-item:hover {\n    background: #F7F7F7;\n}\n\n.add-item:focus-within {\n    background: #F7F7F7;\n}\n\n.add-item {\n    border-bottom: 1px solid #E4E7EB;\n    background: white;\n}\n\n.task-content {\n    width: 94%;\n    margin: 0 3%;\n    background: white;\n    height: 100%;\n    position: relative;\n    -webkit-animation-name: ttb;\n    /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 4s;\n    /* Safari 4.0 - 8.0 */\n    animation-name: ttb;\n    -webkit-animation-duration: 0.7s;\n            animation-duration: 0.7s;\n\n}\n\n.task-content-header{\n      border-bottom: 1px solid #E4E7EB;\n}\n\n.task-content-header input[type=\"text\"] {\n    font-size: 22px;\n    width: 90%;\n    border: none;\n    margin-top: 10px;\n}\n\n.task-content-header input[type=\"text\"]:focus {\n    outline: none;\n}\n\n.del-item-btn {\n    position: absolute;\n    margin-top: 16px;\n    margin-right: 0px;\n    border: none;\n    margin-left: 10px;\n    color: #5ED0FA;\n    background: none;\n    font-size: 20px;\n    transition: all 0.2s;\n}\n\n.del-item-btn:hover {\n    color: #F86A6A;\n}\n\n.del-task-btn {\n    position: absolute;\n    ;\n    background: white;\n    bottom: 0;\n    width: 100%;\n    height: 40px;\n    background: whitesmoke;\n}\n\n.del-task-btn button {\n    background: none;\n    border: none;\n    color: #5ED0FA;\n    font-size: 25px;\n    transition: all 0.2s;\n    position: absolute;\n    right: 0;\n}\n\n.del-task-btn button:hover {\n    color: #F86A6A;\n}\n\n.item-wrap {\n    overflow: auto;\n}\n\n.item-wrap::-webkit-scrollbar{\n  width: 0;\n}\n\n@-webkit-keyframes ttb {\n    from {\n        left: 100%;\n        opacity: 0.5;\n    }\n    to {\n        left: 0%;\n        opacity: 1;\n    }\n}\n\n/* Standard syntax */\n\n@keyframes ttb {\n    from {\n        left: 100%;\n        opacity: 0.5;\n    }\n    to {\n        left: 0%;\n        opacity: 1;\n    }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQ0FBd0I7WUFBeEIsd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0NBQXdCO1lBQXhCLHdCQUF3Qjs7QUFFNUI7O0FBRUE7TUFDTSxnQ0FBZ0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7O0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkO0FBQ0o7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFFBQVE7UUFDUixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LWl0ZW0td3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIG1hcmdpbi1yaWdodDogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNoZWNrbWFyay1pdGVtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVFRDBGQTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmNoZWNrYm94LWl0ZW0td3JhcDpob3ZlciBpbnB1dH4uY2hlY2ttYXJrLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6ICNCM0VDRkY7XG59XG5cbi5jaGVja2JveC1pdGVtLXdyYXAgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6ICMyQkIwRUQ7XG59XG5cbi5jaGVja21hcmstaXRlbTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94LWl0ZW0td3JhcCBpbnB1dDpjaGVja2Vkfi5jaGVja21hcmstaXRlbTphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveC1pdGVtLXdyYXAgLmNoZWNrbWFyay1pdGVtOmFmdGVyIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgdG9wOiAzcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRlcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzdCODc5NDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRlczpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLml0ZW1zIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTdFQjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB0dGI7XG4gICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgYW5pbWF0aW9uLW5hbWU6IHR0YjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XG5cbn1cblxuLml0ZW1zOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xufVxuXG4uaXRlbXM6Zm9jdXMtd2l0aGluIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xufVxuXG4uYWRkLWVkaXQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiB0b3A6IDE4cHg7ICovXG4gICAgLyogd2lkdGg6IDMxcHg7ICovXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICM1RUQwRkE7XG4gICAgbWFyZ2luOiAxN3B4IDAgMCAxOHB4O1xufVxuXG4uYWRkLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG59XG5cbi5hZGQtaXRlbTpmb2N1cy13aXRoaW4ge1xuICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG59XG5cbi5hZGQtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNEU3RUI7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luOiAwIDMlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdHRiO1xuICAgIC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgIGFuaW1hdGlvbi1uYW1lOiB0dGI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xuXG59XG5cbi50YXNrLWNvbnRlbnQtaGVhZGVye1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNEU3RUI7XG59XG5cbi50YXNrLWNvbnRlbnQtaGVhZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRhc2stY29udGVudC1oZWFkZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kZWwtaXRlbS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzVFRDBGQTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmRlbC1pdGVtLWJ0bjpob3ZlciB7XG4gICAgY29sb3I6ICNGODZBNkE7XG59XG5cbi5kZWwtdGFzay1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4uZGVsLXRhc2stYnRuIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICM1RUQwRkE7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbn1cblxuLmRlbC10YXNrLWJ0biBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOiAjRjg2QTZBO1xufVxuXG4uaXRlbS13cmFwIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5pdGVtLXdyYXA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICB3aWR0aDogMDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB0dGIge1xuICAgIGZyb20ge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgbGVmdDogMCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4vKiBTdGFuZGFyZCBzeW50YXggKi9cblxuQGtleWZyYW1lcyB0dGIge1xuICAgIGZyb20ge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgbGVmdDogMCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task-content\" [formGroup]=\"taskForm\" (change)=\"updateValue()\">\n    <div class=\"task-content-header\">\n        <input type=\"text\" name=\"\" id=\"\" formControlName=\"title\">\n        <textarea name=\"des\" class=\"des\" placeholder=\"Mô tả...\" formControlName=\"description\"\n            oninput='this.style.height = \"26px\";this.style.height = this.scrollHeight + \"px\"'></textarea>\n    </div>\n\n    <div class=\"item-wrap\">\n        <div formArrayName=\"itemForm\">\n            <div class=\"items\" [formGroupName]=\"i\" *ngFor=\"let item of itemForm.controls; let i=index\">\n                <input type=\"hidden\" formControlName=\"id\">\n                <label class=\"checkbox-item-wrap\">\n                <input type=\"checkbox\" name=\"item\" id=\"item\" formControlName=\"isChecked\">\n                <div class=\"checkmark-item\"></div>\n            </label>\n                <textarea name=\"des\" class=\"des\" (click)=\"onSelected(item)\" placeholder=\"Mô tả...\"\n                    oninput='this.style.height = \"\";this.style.height = this.scrollHeight + \"px\"'\n                    formControlName=\"description\"></textarea>\n                <button type=\"button\" class=\"del-item-btn\" (click)=\"delItem(i)\"><i class=\"far fa-trash-alt\"></i></button>\n            </div>\n        </div>\n        <div class=\"add-item\">\n            <i class=\"fas fa-plus add-edit\"></i>\n            <textarea name=\"des\" class=\"des\" formControlName=\"newItemForm\" placeholder=\"Thêm bước tiếp theo...\"\n                oninput='this.style.height = \"\";this.style.height = this.scrollHeight + \"px\"'></textarea>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/task.model */ "./src/app/models/task.model.ts");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../task/task.component */ "./src/app/task/task.component.ts");









var ItemComponent = /** @class */ (function () {
    function ItemComponent(activatedRoute, taskService, fb, router, taskComponent) {
        this.activatedRoute = activatedRoute;
        this.taskService = taskService;
        this.fb = fb;
        this.router = router;
        this.taskComponent = taskComponent;
        this.delTaskEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.task_id = -1;
        this.taskForm = this.fb.group({
            title: [''],
            description: [''],
            itemForm: this.fb.array([]),
            newItemForm: ['']
        });
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.currentTask.subscribe();
        this.activatedRoute.params.subscribe(function (params) {
            jquery__WEBPACK_IMPORTED_MODULE_5__('.tasks-task').addClass('grid-on');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.task-wrap').removeClass('display-none');
            _this.task_id = params.id;
            _this.itemForm.controls = [];
            _this.taskService.getTask(params.id).subscribe(function (task) {
                _this.task = task.task;
                _this.items = task.items;
                _this.taskForm.controls['description'].setValue(task.task.description);
                _this.taskForm.controls['title'].setValue(task.task.title);
                task.items.forEach(function (item) {
                    _this.itemForm.push(_this.fb.group({
                        id: [item.id],
                        isChecked: [item.checked],
                        description: [item.description]
                    }));
                });
            });
        });
    };
    ItemComponent.prototype.updateValue = function () {
        var _this = this;
        if (this.checkChangeTask()) {
            var task = new _models_task_model__WEBPACK_IMPORTED_MODULE_6__["Task"](this.task.id, this.taskForm.value.title, this.taskForm.value.description, true);
            this.taskService.updateTask(this.task.id, task).subscribe(function (res) {
                _this.taskForm.controls['description'].setValue(res.description);
                _this.taskForm.controls['title'].setValue(res.title);
                _this.taskService.changeTask(res);
            });
        }
        var tempChangeItem = this.checkChangeItem();
        if (tempChangeItem != -1) {
            var newItem = this.taskForm.value.itemForm[tempChangeItem];
            var item = new _models_item_model__WEBPACK_IMPORTED_MODULE_7__["Item"](newItem.description, newItem.isChecked);
            this.taskService.updateItem(newItem.id, item).subscribe(function (res) {
                _this.items[tempChangeItem].description = res.description;
                _this.items[tempChangeItem].checked = res.checked;
                _this.taskService.changeTask(res);
            });
        }
        if (this.checkChangeNewItem()) {
            this.taskService.createItem(this.task.id, { description: this.taskForm.value.newItemForm }).subscribe(function (res) {
                _this.itemForm.push(_this.fb.group({
                    id: [res.id],
                    isChecked: [res.checked],
                    description: [res.description]
                }));
                _this.items.push(res);
                _this.taskForm.controls['newItemForm'].setValue("");
                _this.taskService.changeTask(res);
            });
        }
    };
    ItemComponent.prototype.checkChangeTask = function () {
        return this.taskForm.value.title != this.task.title || this.taskForm.value.description != this.task.description;
    };
    ItemComponent.prototype.checkChangeItem = function () {
        var _this = this;
        var temp = -1;
        this.items.forEach(function (item, index) {
            if (item.checked != _this.taskForm.value.itemForm[index].isChecked || item.description != _this.taskForm.value.itemForm[index].description) {
                temp = index;
            }
        });
        return temp;
    };
    ItemComponent.prototype.checkChangeNewItem = function () {
        return this.taskForm.value.newItemForm.length != 0;
    };
    ItemComponent.prototype.onSelected = function (item) {
    };
    ItemComponent.prototype.delItem = function (id) {
        var _this = this;
        var delItemId = this.items[id].id;
        this.taskService.delItem(delItemId).subscribe(function (res) {
            _this.items.splice(id, 1);
            _this.itemForm.removeAt(id);
            _this.taskService.changeTask(res);
        });
    };
    ItemComponent.prototype.delTask = function () {
        var _this = this;
        if (this.task_id != -1) {
            this.taskService.delTask(this.task_id).subscribe(function (res) {
                _this.router.navigate(['']);
            });
        }
    };
    Object.defineProperty(ItemComponent.prototype, "itemForm", {
        get: function () {
            return this.taskForm.get('itemForm');
        },
        enumerable: true,
        configurable: true
    });
    ItemComponent.prototype.send = function (x) {
        this.delTaskEvent.emit(x);
        console.log(x);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "delTaskEvent", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            providers: [_task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"]],
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/models/item.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/item.model.ts ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(detail, checked) {
        this.detail = detail;
        this.checked = checked;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/models/task.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/task.model.ts ***!
  \**************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(id, title, description, checked) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.checked = checked;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/new-task/new-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-task/new-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-task/new-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-task/new-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-task works!\n</p>\n"

/***/ }),

/***/ "./src/app/new-task/new-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-task/new-task.component.ts ***!
  \************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent() {
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.css */ "./src/app/new-task/new-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var TaskService = /** @class */ (function () {
    function TaskService(httpClient) {
        this.httpClient = httpClient;
        this.changedTask = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.currentTask = this.changedTask.asObservable();
    }
    TaskService.prototype.changeTask = function (task) {
        this.changedTask.next(task);
    };
    TaskService.prototype.getTasks = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/tasks");
    };
    TaskService.prototype.getTask = function (id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/tasks/" + id);
    };
    TaskService.prototype.newTask = function (title) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/tasks", { title: title });
    };
    TaskService.prototype.delTask = function (id) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/tasks/" + id);
    };
    TaskService.prototype.updateItem = function (id, newItem) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/items/" + id, newItem);
    };
    TaskService.prototype.updateTask = function (id, newTask) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/tasks/" + id, newTask);
    };
    TaskService.prototype.createItem = function (task_id, newItem) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/items/" + task_id, newItem);
    };
    TaskService.prototype.delItem = function (id) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/items/" + id);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-wrap {\n    position: relative;\n    cursor: pointer;\n    float: left;\n    width: 30px;\n    clear: both;\n    margin-top: 10px;\n    margin-right: 30px;\n    margin-left: 15px;\n}\n\n.task {\n    width: 100%;\n    height: 70px;\n    padding-top: 9px;\n    border-width: 0 0 1px 0;\n    border-bottom: 1px solid #E4E7EB;\n    margin: 0;\n    background: none;\n    transition: all 0.2s;\n}\n\n.active {\n    background: #E4E7EB;\n    outline: none;\n}\n\n.task:hover {\n    background: #E4E7EB;\n}\n\n.task:focus-within {}\n\n.checkmark {\n    position: absolute;\n    border: 1px solid #5ED0FA;\n    border-radius: 50%;\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n}\n\n.checkbox-wrap:hover input~.checkmark {\n    background: #B3ECFF;\n}\n\n.checkbox-wrap input:checked~.checkmark {\n    background: #2BB0ED;\n}\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.checkbox-wrap input:checked~.checkmark:after {\n    display: block;\n}\n\n.checkbox-wrap .checkmark:after {\n    left: 11px;\n    top: 5px;\n    width: 8px;\n    height: 15px;\n    border: solid white;\n    border-width: 0 4px 4px 0;\n    transform: rotate(45deg);\n}\n\ninput[type=\"checkbox\"] {\n    opacity: 0;\n    cursor: pointer;\n    height: 30px;\n    width: 30px;\n    display: none;\n}\n\n.content {\n    float: left;\n    width: 70%;\n}\n\n.content input[type=\"text\"] {\n    width: 100%;\n    height: 50px;\n    background: none;\n    border: none;\n    font-size: 18px;\n}\n\n.content input[type=\"text\"]:focus {\n    outline: none;\n}\n\n.title {\n    text-align: left;\n    font-size: 18px;\n}\n\n.title p {\n    margin: 0;\n}\n\n.des {\n    color: #7B8794;\n    text-align: left;\n}\n\n.des p {\n    margin: 0;\n}\n\n.add-task {\n    position: relative;\n    cursor: pointer;\n    float: left;\n    width: 30px;\n    color: ;\n    clear: both;\n    margin-top: 10px;\n    margin-right: 18px;\n    margin-left: 16px;\n    color: #5ED0FA;\n    font-size: 25px;\n}\n\n.del-task-btn {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    float: right;\n    margin: 10px;\n}\n\n.del-task-btn button {\n    background: none;\n    border: none;\n    color: #5ED0FA;\n    font-size: 25px;\n    transition: all 0.2s;\n}\n\n.del-task-btn button:hover {\n    color: #F86A6A;\n}\n\n.flex-task {\n    display: flex;\n}\n\n.del-task-bn {\n    width: 36px;\n    float: right;\n    margin: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi50YXNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZy10b3A6IDlweDtcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTdFQjtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI0U0RTdFQjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI0U0RTdFQjtcbn1cblxuLnRhc2s6Zm9jdXMtd2l0aGluIHt9XG5cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUVEMEZBO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY2hlY2tib3gtd3JhcDpob3ZlciBpbnB1dH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiAjQjNFQ0ZGO1xufVxuXG4uY2hlY2tib3gtd3JhcCBpbnB1dDpjaGVja2Vkfi5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQ6ICMyQkIwRUQ7XG59XG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVja2JveC13cmFwIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveC13cmFwIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGxlZnQ6IDExcHg7XG4gICAgdG9wOiA1cHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi5jb250ZW50IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGVudCBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmRlcyB7XG4gICAgY29sb3I6ICM3Qjg3OTQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRlcyBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hZGQtdGFzayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjb2xvcjogO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIGNvbG9yOiAjNUVEMEZBO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmRlbC10YXNrLWJ0biB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5kZWwtdGFzay1idG4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzVFRDBGQTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5kZWwtdGFzay1idG4gYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogI0Y4NkE2QTtcbn1cblxuLmZsZXgtdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlbC10YXNrLWJuIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-task\" *ngFor=\"let task of tasks; let i=index\">\n    <div class=\"task\" routerLink=\"/task/{{task?.id}}\">\n        <label class=\"checkbox-wrap\">\n      <input type=\"checkbox\" id=\"\" [checked]=\"task?.checked\" disabled >\n    <span class=\"checkmark\"></span>\n  </label>\n        <div class=\"content\">\n            <div class=\"title\">\n                <p>{{task?.title}}</p>\n            </div>\n            <div class=\"des\">\n              <p>Hoàn thành {{task?.checked_item}}/{{task?.total_item}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"del-task-btn\">\n        <button type=\"button\" (click)=\"delTask(i)\"><i class=\"far fa-trash-alt\"></i></button>\n    </div>\n</div>\n<div class=\"flex-task\">\n    <div class=\"task\">\n        <label class=\"add-task\">\n      <i class=\"fas fa-plus add-edit\"></i>\n  </label>\n        <div class=\"content\" [formGroup]=\"newTaskForm\">\n            <input type=\"text\" formControlName=\"newTask\" (change)=\"addNewTask()\" placeholder=\"Thêm tác vụ...\">\n        </div>\n    </div>\n    <div class=\"del-task-bn\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskService, fb, router, activatedRoute) {
        this.taskService = taskService;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.newTaskForm = this.fb.group({
            newTask: ['']
        });
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.task').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.task').removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass("active");
            });
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.tasks-task').removeClass('grid-on');
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TaskComponent.prototype.checked = function (isChecked) {
        if (isChecked == true) {
            return "checked";
        }
        else {
            return "";
        }
    };
    TaskComponent.prototype.addNewTask = function () {
        var _this = this;
        this.taskService.newTask(this.newTaskForm.value.newTask).subscribe(function (res) {
            if (res['status']) {
                _this.tasks.push(res['data']);
            }
            _this.newTaskForm.controls['newTask'].setValue('');
        });
    };
    TaskComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.taskService.currentTask.subscribe(function (res) {
            _this.taskService.getTasks().subscribe(function (tasks) {
                _this.tasks = tasks;
            });
        });
    };
    TaskComponent.prototype.delTask = function (taskId) {
        var _this = this;
        this.taskService.delTask(this.tasks[taskId].id).subscribe(function (res) {
            _this.tasks.splice(taskId, 1);
            _this.router.navigate(['']);
            jquery__WEBPACK_IMPORTED_MODULE_2__('.tasks-task').removeClass('grid-on');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.task-wrap').removeClass('display-none');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.task-wrap').addClass('display-none');
        });
    };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], TaskComponent);
    return TaskComponent;
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
    apiURL: 'http://localhost:3000'
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

module.exports = __webpack_require__(/*! /home/nguyenducdai/Documents/Todos/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map