System.register(['angular2/testing', 'angular2/core', 'angular2/http', 'angular2/http/testing'], function(exports_1) {
    'use strict';
    var testing_1, core_1, http_1, testing_2, core_2;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            }],
        execute: function() {
            testing_1.describe('default test injector', function () {
                testing_1.it('should provide default id', testing_1.inject([core_2.APP_ID], function (id) { testing_1.expect(id).not.toBeUndefined(); }));
            });
            testing_1.describe('Mocking http', function () {
                testing_1.it('should get some data', testing_1.inject([], function () {
                    var connection;
                    var injector = core_1.Injector.resolveAndCreate([
                        testing_2.MockBackend,
                        http_1.BaseRequestOptions,
                        core_1.provide(http_1.Http, {
                            useFactory: function (backend, defaultOptions) {
                                return new http_1.Http(backend, defaultOptions);
                            },
                            deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                        })
                    ]);
                    var http = injector.get(http_1.Http);
                    var backend = injector.get(testing_2.MockBackend);
                    // Assign any newly-created connection to local variable
                    backend.connections.subscribe(function (c) { return connection = c; });
                    http.request('data.json')
                        .subscribe(function (res) { testing_1.expect(res.text()).toBe('awesome'); });
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: 'awesome' })));
                }));
                testing_1.it('should get a response', function () {
                    var connection; // this will be set when a new connection is emitted from
                    // the
                    // backend.
                    var text; // this will be set from mock response
                    var injector = core_1.Injector.resolveAndCreate([
                        testing_2.MockBackend,
                        http_1.BaseRequestOptions,
                        core_1.provide(http_1.Http, {
                            useFactory: function (backend, options) { return new http_1.Http(backend, options); },
                            deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                        })
                    ]);
                    var backend = injector.get(testing_2.MockBackend);
                    var http = injector.get(http_1.Http);
                    backend.connections.subscribe(function (c) { return connection = c; });
                    http.request('something.json').subscribe(function (res) { text = res.text(); });
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: 'Something' })));
                    testing_1.expect(text).toBe('Something');
                });
            });
        }
    }
});
//# sourceMappingURL=using-injector_test.js.map