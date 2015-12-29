System.register(['angular2/testing', 'angular2/http/testing', '../../app/mockHelper', '../../app/services/search'], function(exports_1) {
    'use strict';
    var testing_1, testing_2, mockHelper_1, search_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (mockHelper_1_1) {
                mockHelper_1 = mockHelper_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            }],
        execute: function() {
            testing_1.describe('Serch service', function () {
                testing_1.beforeEachProviders(function () { return mockHelper_1.HttpMockHelper.injectProviders([search_1.SearchService]); });
                testing_1.it('should return [] with empty/undefined param', testing_1.inject([search_1.SearchService], function (service) {
                    testing_1.expect(service.getSuggestions(undefined)).toEqual([]);
                    testing_1.expect(service.getSuggestions(null)).toEqual([]);
                }));
                testing_1.it('should return array suggestion', testing_1.inject([search_1.SearchService, testing_2.MockBackend], function (service, mockBackend) {
                    mockHelper_1.HttpMockHelper.injectResponse(mockBackend, '{"Suggestions":["robe test"]}');
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