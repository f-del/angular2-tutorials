System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    'use strict';
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
    var SearchService;
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
                    this._url = "http://api.laredoute.com/catalogservice/FR/CatalogService.svc/Rest/SearchSuggestions/?sid=RDFR&lc=fr&searchTerm=";
                    this.http = http;
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
                    this.http.get(this._url + key)
                        .subscribe(function (sugg) { return _this._result = sugg.json(); }, function (err) { return console.log('error'); }, function () { return console.log('completed'); });
                    return this._result != undefined ? this._result['Suggestions'] : [];
                };
                SearchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SearchService);
                return SearchService;
            })();
            exports_1("SearchService", SearchService);
        }
    }
});
//# sourceMappingURL=search.js.map