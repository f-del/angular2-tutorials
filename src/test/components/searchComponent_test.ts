'use strict';
import {provide, Injector} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {
it,
iit,
describe,
expect,
inject,
injectAsync,
TestComponentBuilder,
beforeEachProviders,
fakeAsync,
tick
} from 'angular2/testing';


import {SearchComponent} from '../../app/components/search/search';
import {SearchService, SearchServiceMock} from '../../app/services/search';

describe('search component', () => {

  beforeEachProviders(() => [
    provide(SearchService, { useClass: SearchServiceMock })
  ]);

  it('should display correctly at init',
    injectAsync([TestComponentBuilder], (tcb) => {

      return tcb.createAsync(SearchComponent).then((fixture) => {
        fixture.detectChanges();

        var compilated = fixture.debugElement.nativeElement;

        expect(compilated).toContainText('Chercher votre produit');

        expect(compilated.querySelector("label").innerText).toEqual('Chercher votre produit');
        expect(compilated.querySelector('ul')).toBeNull();
      });

    }));
});