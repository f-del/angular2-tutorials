System.register(['angular2/core', '../../services/search.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, search_js_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (search_js_1_1) {
                search_js_1 = search_js_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(searchService) {
                    this.suggestion = "";
                    this.results = [];
                    this.searchService = searchService;
                }
                SearchComponent.prototype.getSuggestions = function () {
                    //this.suggestion.push(new Suggestion("robe "+this.cmpt++));
                    this.results = this.searchService.getSuggestions(this.suggestion);
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                    }),
                    core_1.View({
                        templateUrl: './components/search/search.html',
                        styleUrls: ['./components/search/search.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof search_js_1.SearchService !== 'undefined' && search_js_1.SearchService) === 'function' && _a) || Object])
                ], SearchComponent);
                return SearchComponent;
                var _a;
            })();
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.js.map