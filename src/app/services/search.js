System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    'use strict';
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var SearchService, SearchServiceMock;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SearchService = (function () {
                function SearchService(http) {
                    this.http = http;
                    this.url = "http://api.laredoute.com/catalogservice/FR/CatalogService.svc/Rest/SearchSuggestions/?sid=RDFR&lc=fr&searchTerm=";
                }
                /**
                      Documentation
                **/
                SearchService.prototype.getSuggestions = function (key) {
                    var _this = this;
                    if (key === undefined) {
                        // throw new Error();
                        return [];
                    }
                    this.http.get(this.url + key)
                        .subscribe(function (sugg) { return _this.result = sugg.json(); }, function (err) { return console.log('error'); }, function () { return console.log('completed'); });
                    return this.result != undefined ? this.result['Suggestions'] : [];
                };
                SearchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SearchService);
                return SearchService;
            })();
            exports_1("SearchService", SearchService);
            SearchServiceMock = (function (_super) {
                __extends(SearchServiceMock, _super);
                function SearchServiceMock() {
                    _super.apply(this, arguments);
                }
                SearchServiceMock = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SearchServiceMock);
                return SearchServiceMock;
            })(SearchService);
            exports_1("SearchServiceMock", SearchServiceMock);
        }
    }
});
//# sourceMappingURL=search.js.map