System.register(['angular2/core', 'angular2/testing', '../../app/components/search/search', '../../app/services/search'], function(exports_1) {
    'use strict';
    var core_1, testing_1, search_1, search_2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            },
            function (search_2_1) {
                search_2 = search_2_1;
            }],
        execute: function() {
            testing_1.describe('search component', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(search_2.SearchService, { useClass: search_2.SearchServiceMock })
                ]; });
                testing_1.it('should display correctly at init', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(search_1.SearchComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compilated = fixture.debugElement.nativeElement;
                        testing_1.expect(compilated).toContainText('Chercher votre produit');
                        testing_1.expect(compilated.querySelector("label").innerText).toEqual('Chercher votre produit');
                        testing_1.expect(compilated.querySelector('ul')).toBeNull();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=searchComponent_test.js.map