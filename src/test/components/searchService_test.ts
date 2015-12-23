'use strict';

import {
  it,
  iit,
  describe,
  expect,
  inject,
  injectAsync,
  beforeEachProviders,
  fakeAsync,
  tick
} from 'angular2/testing';
import {provide} from 'angular2/core';

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {SearchService} from '../../app/services/search';

class MockHttpService extends Http {
  get(url: string) {
    return Observable.create(function(observer) {
      observer.onNext([]);
      observer.onCompleted();
    });
  }
}

describe('with mocked Http', () => {
  beforeEachProviders(() => [
    provide(Http, {useClass: MockHttpService}),
    HTTP_PROVIDERS,
    SearchService
  ]);


  it('should throw exception with empty param',
     inject([SearchService, Http], (service: SearchService) => {
       expect(service.getSuggestions(undefined).length).toEqual(0);

       expect(service.getSuggestions(undefined).length).toEqual(0);
     }));
  /*
    it('should return array suggestion',
       injectAsync([SearchService, Http], (service: SearchService) => {
         var res = service.getSuggestions('robe');
         expect(typeof res).toBeAnInstanceOf(Array);
         expect(res.length).toEqual(0);
       }));*/
});
