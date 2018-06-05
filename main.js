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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n  ========================================\n  BODY SECTION\n  ========================================\n*/\n\n.body{\n  padding: 50px;\n}\n\n.sidenav {\n  height: 100%;\n  width: 200px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #EEEEEE;\n  overflow-x: hidden;\n  padding-top: 100px;\n}\n\n.sidenav a {\n  padding: 6px 6px 6px 32px;\n  text-decoration: none;\n  font-size: 18px;\n  color: #111517;\n  display: block;\n}\n\n.sidenav a:hover{\n  background-color: #999999;\n}\n\n.main {\n  margin-left: 200px; /* Same as the width of the sidenav */\n}\n\n@media screen and (max-height: 450px) {\n.sidenav {padding-top: 15px;}\n.sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"sidenav\">\n    <a routerLink=\"/new-user\">Create Item</a>\n    <a routerLink=\"/user-list\">Item List</a>\n  </div>\n\n  <div class=\"main body\">\n    <router-outlet></router-outlet>\n  </div>\n\n</body>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_16__["NewUserComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__["UserListComponent"],
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__["UserListComponent"]
                    },
                    {
                        path: 'new-user',
                        component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_16__["NewUserComponent"]
                    },
                    {
                        path: 'user-list',
                        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__["UserListComponent"]
                    }
                ])
            ],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-user/new-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n  ========================================\n  INPUTS\n  ========================================\n*/\n.main-input{\n  margin-left: 100px;\n}\n.inputs label{\n  display: inline-block;\n  width: 10em;\n}\n.client-photo img{\n  width: 15%;\n}\n.inputs{\n  padding: 10px;\n}\ninput, select{\n  width: 40%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.md-input{\n  width: 40%;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.md-border{\n  text-align: center;\n}\nmat-select{\n  border-bottom-color: transparent !important;\n}\nbutton{\n  background-color: #999999;\n  color: #FFFFFF;\n  padding: 15px 145px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #userForm=\"ngForm\" class=\"main-input\" (ngSubmit)=\"onSubmit(userForm)\">\n  <div class=\"inputs client-photo\">\n    <label>Client Photo</label>\n    <img src=\"./assets/user.png\" alt=\"\">\n  </div>\n\n  <div class=\"inputs first-name\">\n    <label>First Name</label>\n    <input name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"userService.firstname\" required>\n  </div>\n\n  <div class=\"inputs last-name\">\n      <label>Last Name</label>\n      <input name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"userService.lastname\" required>\n    </div>\n\n  <div class=\"inputs rating-name\">\n    <label>Rating</label>\n    <select name=\"rating\" #rating=\"ngModel\" [(ngModel)]=\"userService.rating\">\n      <option value=1>1</option>\n      <option value=2>2</option>\n      <option value=3>3</option>\n      <option value=4>4</option>\n      <option value=5>5</option>\n    </select>\n  </div>\n\n  <div class=\"inputs category\">\n    <label>Category</label>\n    <select name=\"category\" #category=\"ngModel\" [(ngModel)]=\"userService.category\"> \n      <option value=\"Running\">Running</option>\n      <option value=\"Jogging\">Jogging</option>\n    </select>\n  </div>\n\n  <div class=\"inputs sub-category\">\n    <label>Sub Category</label>\n    <mat-form-field class=\"md-input\">\n      <mat-select class=\"md-border\" name=\"subcategory\" #subcategory=\"ngModel\" [(ngModel)]=\"userService.subcategory\" multiple>\n        <mat-option *ngFor=\"let subcategory of subcategoryList\" [value]=\"subcategory\">{{subcategory}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n\n  <div class=\"inputs amount\">\n    <label>Amount</label>\n    <input type=\"number\" name=\"amount\" #amount=\"ngModel\" [(ngModel)]=\"userService.amount\" required>\n  </div>\n\n  <div class=\"inputs button\">\n    <label></label>\n    <button class=\"btn-default\" type=\"submit\" [disabled]=\"!userForm.valid\" >SUBMIT</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewUserComponent = /** @class */ (function () {
    //Adding form builder service to constructor
    function NewUserComponent(userService) {
        this.userService = userService;
        this.subcategoryList = ['Sports', 'Leisure', 'Office'];
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.userService.getData();
        this.resetForm();
    };
    NewUserComponent.prototype.onSubmit = function (userForm) {
        this.userService.insertUser(userForm.value);
        this.resetForm(userForm);
    };
    NewUserComponent.prototype.resetForm = function (userForm) {
        if (userForm != null)
            userForm.reset();
        this.userService.selectedUser = {
            $key: null,
            firstname: "",
            lastname: "",
            rating: "",
            category: "",
            subcategory: [],
            amount: 0,
            created: 0,
            updated: 0
        };
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/shared/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/shared/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(firebase) {
        this.firebase = firebase;
        this.selectedUser = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    //Get user data
    UserService.prototype.getData = function () {
        this.userList = this.firebase.list('users');
        return this.userList;
    };
    //add user data
    UserService.prototype.insertUser = function (user) {
        this.userList.push({
            firstname: user.firstname,
            lastname: user.lastname,
            rating: user.rating,
            category: user.category,
            subcategory: user.subcategory,
            amount: user.amount,
            created: new Date().toDateString()
        });
    };
    //update user data
    UserService.prototype.updateUser = function (user) {
        this.userList.update(user.$key, {
            firstname: user.firstname,
            lastname: user.lastname,
            rating: user.rating,
            category: user.category,
            subcategory: user.subcategory,
            amount: user.amount,
            updated: new Date().toDateString()
        });
    };
    //delete user data
    UserService.prototype.deleteUser = function ($key) {
        this.userList.remove($key);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n  ========================================\n  TABLE\n  ========================================\n*/\ntable{\n  width: 100%;\n}\ntd, th {\n  text-align: left;\n  padding: 10px;\n}\n.table-img img{\n  width: 35px;\n  padding-right: 5px;\n}\ntd{\n  cursor: pointer;\n}\n.user-list h1, p{\n  margin: 0;\n}\n.user-list p{\n  padding-bottom: 50px;\n}\n.top-modal{\n  float: left;\n}\nhr{\n  width: 100%;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.vl-right{\n  border-right: 1px solid #EEEEEE;\n  height: 500px;\n}\n.vl-right p{\n  padding-top: 10px; \n}\n.subcategory{\n  background: #EEEEEE;\n  border-radius: 5px;\n  padding: 8px 12px;\n  margin-right: 3px; \n}\n.mid-data p{\n  padding: 15px;\n}\n.modal-data{\n  display: inline-block !important;\n  text-align: center;\n  width: 10em;\n}\n.data-title{\n  text-align: right;\n  width: 10em;\n  float: left;\n}\n.data-data{\n  text-align: left;\n\n}\n/*\n  ========================================\n  BUTTONS\n  ========================================\n*/\n.close{\n  padding: 20px;\n}\n.button-left{\n  text-align: center;\n}\n.button{\n  background-color: #999999;\n  color: #FFFFFF;\n  padding: 10px 50px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*\n  ========================================\n  DATA TITLE\n  ========================================\n*/\n.data-title{\n  font-weight: bold;\n  text-align: right !important;\n  margin-right: 15px;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n@media (min-width: 768px) {\n  .modal-xl {\n    width: 90%;\n   max-width:1200px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-list\">\n  <h1>Item List</h1>\n  <p>A list of all your items</p>\n\n  <table class=\"table table-sm table-hover\">\n    <tr>\n      <th>Created Date</th>\n      <th>Client</th>\n      <th>Rating</th>\n      <th>Category</th>\n      <th>Sub Category</th>\n      <th>Date</th>\n      <th>Amount(KES)</th>\n    </tr>\n\n    <tr *ngFor=\"let user of userList\" (click)=\"open(content)\" (click)=\"userDetails(user)\">\n      <td>{{user.created}}</td>\n      <td><span class=\"table-img\"><img src=\"./assets/user.png\" alt=\"\"> </span> {{user.firstname}} {{user.lastname}}</td>\n      <td>{{user.rating}}</td>\n      <td>{{user.category}}</td>\n      <td>{{user.subcategory[0]}} {{user.subcategory[1]}} {{user.subcategory[2]}}</td>\n      <td>{{user.created}}</td>\n      <td>{{user.amount}}</td>\n    </tr>\n  </table>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" class=\"modal-dialog modal-xl\">\n  <header class=\"container\">\n    <div class=\"top-modal\">\n      <h4 class=\"modal-title\">Item Details</h4>\n      <p>{{created}}</p>\n    </div>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </header>\n  <hr>\n  <div class=\"modal-body container\">\n\n    <div class=\"row\">\n      <div class=\"col vl-right\">\n          <p>{{firstname}} <span> {{lastname}}</span></p>\n          <small><span><strong>Rating:</strong></span> {{rating}}</small>\n      </div>\n      <div class=\"col-6 mid-data vl-right\">\n        <p><span class=\"data-title\">First Name:</span> <span class=\"data-data\">{{firstname}}</span></p>\n\n        <p><span class=\"data-title\">Last Name:</span> <span class=\"data-data\">{{lastname}}</span></p>\n\n        <p><span class=\"data-title\">Rating:</span> <span class=\"data-data\">{{rating}}</span></p>\n\n        <p><span class=\"data-title\">Category:</span> <span class=\"data-data\">{{category}}</span></p>\n\n        <p><span class=\"data-title\">Primary Sub Category:</span> <span class=\"data-data\">{{subcategory[0]}} {{subcategory[1]}} {{subcategory[2]}}</span></p>\n\n        <p><span class=\"data-title\">Amount(KES):</span> <span class=\"data-data\">{{amount}}</span></p>\n      </div>\n      <div class=\"col button-left\">\n          <button class=\"btn-default button\" (click)=\"onUpdate(user)\">EDIT</button>\n      </div>\n    </div>\n\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = /** @class */ (function () {
    function UserListComponent(modalService, userService, router, route) {
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get Data
        var single = this.userService.getData();
        single.snapshotChanges().subscribe(function (item) {
            _this.userList = [];
            item.forEach(function (element) {
                var all = element.payload.toJSON();
                all["$key"] = element.key;
                _this.userList.push(all);
            });
        });
        //Edit data
    };
    UserListComponent.prototype.onUpdate = function (usr) {
        console.log('updating');
        this.userService.selectedUser = usr;
    };
    //Fetch Single User
    UserListComponent.prototype.userDetails = function (usr) {
        this.userService.selectedUser = usr;
        this.firstname = usr.firstname;
        this.lastname = usr.lastname;
        this.rating = usr.rating;
        this.category = usr.category;
        this.subcategory = usr.subcategory;
        this.amount = usr.amount;
        this.created = usr.created;
        console.log(this.subcategory[0]);
    };
    UserListComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserListComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDnJ12t5ODGPrcYoMtXzi-NxtfIjVFSFO8",
        authDomain: "frtest-41292.firebaseapp.com",
        databaseURL: "https://frtest-41292.firebaseio.com",
        projectId: "frtest-41292",
        storageBucket: "",
        messagingSenderId: "544420245689"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/willard/Dropbox/Projects/MAIN/frtest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map