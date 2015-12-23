System.register(['angular2/testing', 'angular2/core', 'angular2/http', 'rxjs/Observable', '../../app/services/search'], function(exports_1) {
    'use strict';
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, core_1, http_1, Observable_1, search_1;
    var MockHttpService;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            }],
        execute: function() {
            MockHttpService = (function (_super) {
                __extends(MockHttpService, _super);
                function MockHttpService() {
                    _super.apply(this, arguments);
                }
                MockHttpService.prototype.get = function (url) {
                    return Observable_1.Observable.create(function (observer) {
                        observer.onNext([]);
                        observer.onCompleted();
                    });
                };
                return MockHttpService;
            })(http_1.Http);
            testing_1.describe('with mocked Http', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(http_1.Http, { useClass: MockHttpService }),
                    http_1.HTTP_PROVIDERS,
                    search_1.SearchService
                ]; });
                testing_1.it('should throw exception with empty param', testing_1.inject([search_1.SearchService, http_1.Http], function (service) {
                    testing_1.expect(service.getSuggestions(undefined).length).toEqual(0);
                    testing_1.expect(service.getSuggestions(undefined).length).toEqual(0);
                }));
                /*
                  it('should return array suggestion',
                     injectAsync([SearchService, Http], (service: SearchService) => {
                       var res = service.getSuggestions('robe');
                       expect(typeof res).toBeAnInstanceOf(Array);
                       expect(res.length).toEqual(0);
                     }));*/
            });
        }
    }
});
//# sourceMappingURL=searchService_test.js.map