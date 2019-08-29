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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-view/list-view.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-view/list-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!-- Not routing, but gets the job done :) -->\n    <div *ngIf=\"selectedPost\">\n        <div class=\"text-left my-3\" (click)=\"clearSelectedPost()\"><i class=\"fas fa-arrow-left\"></i> </div>\n        <app-post-view [selectedPost]=\"selectedPost\"></app-post-view>\n    </div>\n\n    <div [ngClass]=\"selectedPost ? 'd-none' : ''\">\n        <div *ngIf=\"redditPosts else loading\">\n            <ng-container *ngFor=\"let post of redditPosts\">\n                <div class=\"card my-3  bg-dark text-white\" (click)=\"selectPost(post.id)\">\n                    <div class=\"card-body\">\n                        <div class=\"d-flex flex-row mb-3 \">\n                            <span class=\"font-weight-bold mr-2\">r/{{post.subReddit}}</span>\n                            <span class=\"text-muted ml-2\">posted by u/{{post.authorName}}</span>\n                        </div>\n                        <h5 class=\"card-title\">{{post.title}}</h5>\n\n                    </div>\n                    <img src=\"{{post.previewImage}}\" class=\"card-img-top\" alt=\"...\">\n                </div>\n            </ng-container>\n\n\n            <div class=\"position-relative my-3\">\n                <div *ngIf=\"getPageCount() > 0\" class=\"btn btn-dark \" (click)=\"this.getPrev()\">Previous</div>\n                <div (click)=\"this.getNext()\" class=\"btn btn-dark position-absolute\" style=\"top:0px;right: 0px;\">Next\n                </div>\n            </div>\n        </div>\n\n        <ng-template #loading>\n            <div class=\"text-white position-relative\" style=\"height: 300px;\">\n                <i class=\"fas large-font fa-spinner fa-spin position-absolute\" style=\"top:50%; left: 50%;\"></i>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-view/post-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"post else loading\">\n    <div class=\"card bg-dark text-white my-3\">\n        <div class=\"card-body\">\n            <div class=\"d-flex flex-row mb-3 \">\n                <span class=\"font-weight-bold mr-2\">r/{{post.subReddit}}</span>\n                <span class=\"text-muted ml-2\">posted by u/{{post.authorName}}</span>\n            </div>\n            <h5 class=\"card-title\">{{post.title}}</h5>\n\n        </div>\n        <img src=\"{{post.previewImage}}\" class=\"card-img-top\" alt=\"...\">\n\n        <div class=\"card-body\" *ngIf=\"post.comments.length > 0\">\n            <div *ngFor=\"let comment of post.comments\">\n                <span [innerHTML]=\"comment.body\"></span>\n            </div>\n        </div>\n    </div>\n\n\n</ng-container>\n\n<ng-template #loading>\n    <div class=\"text-white position-relative\" style=\"height: 300px;\">\n        <i class=\"fas large-font fa-spinner fa-spin position-absolute\" style=\"top:50%; left: 50%;\"></i>\n    </div>\n</ng-template>"

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
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");





var routes = [
    {
        path: '',
        component: _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"],
    },
    {
        path: ':post',
        component: _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_3__["PostViewComponent"],
    }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _reddit_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reddit-api.service */ "./src/app/reddit-api.service.ts");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_7__["PostViewComponent"],
                _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__["ListViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [
                _reddit_api_service__WEBPACK_IMPORTED_MODULE_6__["RedditApiService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list-view/list-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-view/list-view.component.ts ***!
  \**************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reddit-api.service */ "./src/app/reddit-api.service.ts");



var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(RedditAPiService) {
        this.RedditAPiService = RedditAPiService;
    }
    ListViewComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.RedditAPiService.getListings()];
                    case 1:
                        _a.redditPosts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListViewComponent.prototype.selectPost = function (post) {
        this.selectedPost = post;
    };
    ListViewComponent.prototype.getPrev = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Set value to falsy so that loading screen appears
                        this.redditPosts = null;
                        window.scrollTo(0, 0);
                        _a = this;
                        return [4 /*yield*/, this.RedditAPiService.getPreviousPage()];
                    case 1:
                        _a.redditPosts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListViewComponent.prototype.clearSelectedPost = function () {
        this.selectedPost = null;
    };
    ListViewComponent.prototype.getNext = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Set value to falsy so that loading screen appears
                        this.redditPosts = null;
                        window.scrollTo(0, 0);
                        _a = this;
                        return [4 /*yield*/, this.RedditAPiService.getNextPage()];
                    case 1:
                        _a.redditPosts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListViewComponent.prototype.getPageCount = function () {
        return this.RedditAPiService.getCount();
    };
    ListViewComponent.ctorParameters = function () { return [
        { type: _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] }
    ]; };
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-view',
            template: __webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-view/list-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/post-view/post-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-view/post-view.component.ts ***!
  \**************************************************/
/*! exports provided: PostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function() { return PostViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reddit-api.service */ "./src/app/reddit-api.service.ts");



var PostViewComponent = /** @class */ (function () {
    function PostViewComponent(RedditAPiService) {
        this.RedditAPiService = RedditAPiService;
    }
    PostViewComponent.prototype.ngOnChanges = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.RedditAPiService.getPost(this.selectedPost)];
                    case 1:
                        _a.post = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostViewComponent.ctorParameters = function () { return [
        { type: _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PostViewComponent.prototype, "selectedPost", void 0);
    PostViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-view',
            template: __webpack_require__(/*! raw-loader!./post-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"]])
    ], PostViewComponent);
    return PostViewComponent;
}());



/***/ }),

/***/ "./src/app/reddit-api.service.ts":
/*!***************************************!*\
  !*** ./src/app/reddit-api.service.ts ***!
  \***************************************/
/*! exports provided: RedditApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditApiService", function() { return RedditApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-classes */ "./src/app/shared-classes.ts");




// CONSTS
var LIMIT_KEY = 'limit';
var LIMIT = '10';
var RAW_JSON_KEY = 'raw_json';
var RAW_JSON_VALUE = '1';
var RedditApiService = /** @class */ (function () {
    function RedditApiService(http) {
        this.http = http;
        this.after = '';
        this.before = '';
        this.count = 0;
    }
    RedditApiService.prototype.getCount = function () {
        return this.count;
    };
    /**
     * Returns a Reddit Post(t3) object for a given postId
     * @param postId https://www.reddit.com/dev/api/#fullnames
     */
    RedditApiService.prototype.getPost = function (postId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var builtURL, httpParams, response, parsed;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        builtURL = "https://www.reddit.com/comments/" + postId + "/.json";
                        httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                        httpParams = httpParams.set(LIMIT_KEY, LIMIT);
                        httpParams = httpParams.set(RAW_JSON_KEY, RAW_JSON_VALUE);
                        return [4 /*yield*/, this.get(builtURL, httpParams)];
                    case 1:
                        response = _a.sent();
                        parsed = this.parseResults(response[0])[0];
                        // Parse comments separately
                        parsed.comments = this.parseComments(response[1]);
                        return [2 /*return*/, parsed];
                }
            });
        });
    };
    /**
     * Returns an array of Posts, that starts after the AFTER reference
     */
    RedditApiService.prototype.getNextPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                response = this.getListings('after', this.after);
                return [2 /*return*/, response];
            });
        });
    };
    /**
     * Returns an array of Posts, that starts at ( BEFORE reference - COUNT)
     */
    RedditApiService.prototype.getPreviousPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                response = this.getListings('before', this.before);
                return [2 /*return*/, response];
            });
        });
    };
    /**
     * Returns an array of Posts
     * @param direction Either Before || After, depending on which direction we intend to paginate
     * @param reference the "anchor point" of the data slice https://www.reddit.com/dev/api/#listings
     */
    RedditApiService.prototype.getListings = function (direction, reference) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var builtURL, httpParams, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        builtURL = "https://www.reddit.com/r/all/hot.json";
                        httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                        httpParams = httpParams.set(LIMIT_KEY, LIMIT);
                        httpParams = httpParams.set(RAW_JSON_KEY, RAW_JSON_VALUE);
                        // Add direction if provided
                        if (direction) {
                            httpParams = httpParams.set(direction, reference);
                            // update count
                            if (direction === 'after') {
                                this.count = this.count + 10;
                            }
                            else if (direction === 'before') {
                                this.count = this.count - 10;
                            }
                        }
                        httpParams = httpParams.set('count', String(this.count));
                        return [4 /*yield*/, this.get(builtURL, httpParams)];
                    case 1:
                        response = _a.sent();
                        // Update anchor points
                        this.after = response.data.after;
                        this.before = response.data.before;
                        // Parse results into Posts
                        return [2 /*return*/, this.parseResults(response)];
                }
            });
        });
    };
    /**
     * Converts Raw JSON into Post Objects
     * @param redditResponse : Raw json provided by Reddit
     */
    RedditApiService.prototype.parseResults = function (redditResponse) {
        var _this = this;
        var posts = redditResponse.data.children;
        var allPosts = [];
        // Parse Posts
        posts.forEach(function (post) {
            var data = post.data;
            // Lets not get fired from a job I don't have yet
            if (data.over_18) {
                return;
            }
            // Create a Post Object
            var newPost = new _shared_classes__WEBPACK_IMPORTED_MODULE_3__["Post"](data.id, data.permalink, data.subreddit, data.author, _this.extractPreviewImages(data), data.title);
            // Push to list of posts
            allPosts.push(newPost);
        });
        console.groupEnd();
        return allPosts;
    };
    /**
     * Converts Raw JSON into Comment Objects
     * @param redditResponse :  Raw json provided by Reddit
     */
    RedditApiService.prototype.parseComments = function (redditResponse) {
        var posts = redditResponse.data.children;
        var allComments = [];
        // Parse Posts
        posts.forEach(function (post) {
            var data = post.data;
            // TODO: We should recurse and collect replies to this comment.
            var newComment = new _shared_classes__WEBPACK_IMPORTED_MODULE_3__["Comment"](data.id, data.body_html);
            allComments.push(newComment);
        });
        return allComments;
    };
    // Hacky way of safely traversing through unknown object. 
    RedditApiService.prototype.extractPreviewImages = function (data) {
        if (data &&
            data.preview &&
            data.preview.images &&
            data.preview.images[0] &&
            data.preview.images[0].source &&
            data.preview.images[0].source.url) {
            return data.preview.images[0].source.url;
        }
        else {
            return '';
        }
    };
    /**
     * Converts a `GET` request into a Promise that the caller can then await for
     */
    RedditApiService.prototype.get = function (getUrl, httpParameters) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.get(getUrl, { params: httpParameters }).subscribe(function (response) {
                            resolve(response);
                        }, reject);
                    }).catch(function (error) {
                        throw new Error("ERROR: Unable to retrieve data from " + getUrl + " due to " + error);
                    })];
            });
        });
    };
    RedditApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RedditApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RedditApiService);
    return RedditApiService;
}());



/***/ }),

/***/ "./src/app/shared-classes.ts":
/*!***********************************!*\
  !*** ./src/app/shared-classes.ts ***!
  \***********************************/
/*! exports provided: Comment, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Comment = /** @class */ (function () {
    function Comment(author, body, replies) {
        this.author = author;
        this.body = body;
        this.replies = replies;
    }
    Comment.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Comment;
}());

var Post = /** @class */ (function () {
    function Post(id, permalink, subReddit, authorName, previewImage, title, comments) {
        this.id = id;
        this.permalink = permalink;
        this.subReddit = subReddit;
        this.authorName = authorName;
        this.previewImage = previewImage;
        this.title = title;
        this.comments = comments;
    }
    Post.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Post;
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

module.exports = __webpack_require__(/*! /Users/alb17/reddit-clone/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map