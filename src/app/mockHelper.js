System.register(['angular2/http', 'angular2/core', 'angular2/http/testing'], function(exports_1) {
    var http_1, core_1, testing_1;
    var HttpMockHelper;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            HttpMockHelper = (function () {
                function HttpMockHelper() {
                }
                /**/
                HttpMockHelper.injectProviders = function (srv) {
                    return [
                        testing_1.MockBackend,
                        http_1.BaseRequestOptions,
                        core_1.provide(http_1.Http, {
                            useFactory: function (backend, defaultOptions) {
                                return new http_1.Http(backend, defaultOptions);
                            },
                            deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
                        })
                    ].concat(srv);
                };
                ;
                HttpMockHelper.injectResponse = function (mock, response) {
                    var responseOptions = new http_1.ResponseOptions({ body: response });
                    mock.connections.subscribe(function (c) { return c.mockRespond(new http_1.Response(responseOptions)); });
                };
                ;
                return HttpMockHelper;
            })();
            exports_1("HttpMockHelper", HttpMockHelper);
        }
    }
});
//# sourceMappingURL=mockHelper.js.map