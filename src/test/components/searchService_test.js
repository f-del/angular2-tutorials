System.register(['angular2/testing', 'angular2/core', 'angular2/http', 'angular2/http/testing', 'rxjs/Observable', '../../app/services/search'], function(exports_1) {
    'use strict';
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, core_1, http_1, testing_2, Observable_1, search_1;
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
            function (testing_2_1) {
                testing_2 = testing_2_1;
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
                    var response = new http_1.ResponseOptions({
                        body: '{"Suggestions":["robe test"]}',
                        status: 200,
                        headers: new http_1.Headers(),
                        url: 'url'
                    });
                    return new Observable_1.Observable(function (observable) {
                        observable.next(new http_1.Response(response));
                        observable.complete();
                    });
                };
                return MockHttpService;
            })(http_1.Http);
            testing_1.describe('Serch service', function () {
                /* Simple Mock :
                provide(Http, {
                      useClass: MockHttpService }
                    ),
                    */
                testing_1.beforeEachProviders(function () { return [
                    testing_2.MockBackend,
                    http_1.BaseRequestOptions,
                    core_1.provide(http_1.Http, {
                        useFactory: function (backend, defaultOptions) {
                            return new MockHttpService(backend, defaultOptions);
                        },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    }),
                    search_1.SearchService
                ]; });
                testing_1.it('should throw exception with empty param', testing_1.inject([search_1.SearchService, http_1.Http], function (service) {
                    testing_1.expect(service.getSuggestions(undefined).length).toEqual(0);
                    testing_1.expect(service.getSuggestions(undefined).length).toEqual(0);
                }));
                testing_1.it('should return array suggestion', testing_1.inject([search_1.SearchService], function (service) {
                    var res = service.getSuggestions('robe');
                    testing_1.expect(res).toEqual(['robe test']);
                    testing_1.expect(res.length).toEqual(1);
                    testing_1.expect(res[0]).toEqual('robe test');
                }));
            });
        }
    }
});
//# sourceMappingURL=searchService_test.js.map