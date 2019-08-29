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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");





const routes = [
    {
        path: '',
        component: _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"],
    },
    {
        path: ':post',
        component: _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_3__["PostViewComponent"],
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _reddit_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reddit-api.service */ "./src/app/reddit-api.service.ts");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");









let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reddit-api.service */ "./src/app/reddit-api.service.ts");



let ListViewComponent = class ListViewComponent {
    constructor(RedditAPiService) {
        this.RedditAPiService = RedditAPiService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.redditPosts = yield this.RedditAPiService.getListings();
        });
    }
    selectPost(post) {
        this.selectedPost = post;
    }
    getPrev() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Set value to falsy so that loading screen appears
            this.redditPosts = null;
            window.scrollTo(0, 0);
            this.redditPosts = yield this.RedditAPiService.getPreviousPage();
        });
    }
    clearSelectedPost() {
        this.selectedPost = null;
    }
    getNext() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Set value to falsy so that loading screen appears
            this.redditPosts = null;
            window.scrollTo(0, 0);
            this.redditPosts = yield this.RedditAPiService.getNextPage();
        });
    }
    getPageCount() {
        return this.RedditAPiService.getCount();
    }
};
ListViewComponent.ctorParameters = () => [
    { type: _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] }
];
ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-view',
        template: __webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-view/list-view.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"]])
], ListViewComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reddit-api.service */ "./src/app/reddit-api.service.ts");



let PostViewComponent = class PostViewComponent {
    constructor(RedditAPiService) {
        this.RedditAPiService = RedditAPiService;
    }
    ngOnChanges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.post = yield this.RedditAPiService.getPost(this.selectedPost);
        });
    }
};
PostViewComponent.ctorParameters = () => [
    { type: _reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-classes */ "./src/app/shared-classes.ts");




// CONSTS
const LIMIT_KEY = 'limit';
const LIMIT = '10';
const RAW_JSON_KEY = 'raw_json';
const RAW_JSON_VALUE = '1';
let RedditApiService = class RedditApiService {
    constructor(http) {
        this.http = http;
        this.after = '';
        this.before = '';
        this.count = 0;
    }
    getCount() {
        return this.count;
    }
    /**
     * Returns a Reddit Post(t3) object for a given postId
     * @param postId https://www.reddit.com/dev/api/#fullnames
     */
    getPost(postId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const builtURL = `https://www.reddit.com/comments/${postId}/.json`;
            // Set HTTP Parameters
            let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            httpParams = httpParams.set(LIMIT_KEY, LIMIT);
            httpParams = httpParams.set(RAW_JSON_KEY, RAW_JSON_VALUE);
            // Get response
            const response = yield this.get(builtURL, httpParams);
            // Parse response to get a Post object
            const parsed = this.parseResults(response[0])[0];
            // Parse comments separately
            parsed.comments = this.parseComments(response[1]);
            return parsed;
        });
    }
    /**
     * Returns an array of Posts, that starts after the AFTER reference
     */
    getNextPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = this.getListings('after', this.after);
            return response;
        });
    }
    /**
     * Returns an array of Posts, that starts at ( BEFORE reference - COUNT)
     */
    getPreviousPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = this.getListings('before', this.before);
            return response;
        });
    }
    /**
     * Returns an array of Posts
     * @param direction Either Before || After, depending on which direction we intend to paginate
     * @param reference the "anchor point" of the data slice https://www.reddit.com/dev/api/#listings
     */
    getListings(direction, reference) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // URL
            const builtURL = `https://www.reddit.com/r/all/hot.json`;
            // HTTP Parameters
            let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
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
            const response = yield this.get(builtURL, httpParams);
            // Update anchor points
            this.after = response.data.after;
            this.before = response.data.before;
            // Parse results into Posts
            return this.parseResults(response);
        });
    }
    /**
     * Converts Raw JSON into Post Objects
     * @param redditResponse : Raw json provided by Reddit
     */
    parseResults(redditResponse) {
        const posts = redditResponse.data.children;
        const allPosts = [];
        // Parse Posts
        posts.forEach((post) => {
            const data = post.data;
            // Lets not get fired from a job I don't have yet
            if (data.over_18) {
                return;
            }
            // Create a Post Object
            const newPost = new _shared_classes__WEBPACK_IMPORTED_MODULE_3__["Post"](data.id, data.permalink, data.subreddit, data.author, this.extractPreviewImages(data), data.title);
            // Push to list of posts
            allPosts.push(newPost);
        });
        console.groupEnd();
        return allPosts;
    }
    /**
     * Converts Raw JSON into Comment Objects
     * @param redditResponse :  Raw json provided by Reddit
     */
    parseComments(redditResponse) {
        const posts = redditResponse.data.children;
        const allComments = [];
        // Parse Posts
        posts.forEach((post) => {
            const data = post.data;
            // TODO: We should recurse and collect replies to this comment.
            const newComment = new _shared_classes__WEBPACK_IMPORTED_MODULE_3__["Comment"](data.id, data.body_html);
            allComments.push(newComment);
        });
        return allComments;
    }
    // Hacky way of safely traversing through unknown object. 
    extractPreviewImages(data) {
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
    }
    /**
     * Converts a `GET` request into a Promise that the caller can then await for
     */
    get(getUrl, httpParameters) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.get(getUrl, { params: httpParameters }).subscribe((response) => {
                    resolve(response);
                }, reject);
            }).catch((error) => {
                throw new Error(`ERROR: Unable to retrieve data from ${getUrl} due to ${error}`);
            });
        });
    }
};
RedditApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RedditApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RedditApiService);



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
class Comment {
    constructor(author, body, replies) {
        this.author = author;
        this.body = body;
        this.replies = replies;
    }
}
Comment.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Array }
];
class Post {
    constructor(id, permalink, subReddit, authorName, previewImage, title, comments) {
        this.id = id;
        this.permalink = permalink;
        this.subReddit = subReddit;
        this.authorName = authorName;
        this.previewImage = previewImage;
        this.title = title;
        this.comments = comments;
    }
}
Post.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Array }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map