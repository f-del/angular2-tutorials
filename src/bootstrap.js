System.register(['angular2/platform/browser', 'angular2/http', './app/app', './app/services/search'], function(exports_1) {
    var browser_1, http_1, app_1, search_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, search_1.SearchService]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map