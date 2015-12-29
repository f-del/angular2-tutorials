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
import {provide, Injector} from 'angular2/core';

import {
  Http,
  HTTP_PROVIDERS,
  Response,
  Headers,
  ResponseOptions,
  BaseRequestOptions
} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {Observable} from 'rxjs/Observable';
import {SearchService} from '../../app/services/search';


class MockHttpService extends Http {
  get(url: string) {
    let response = new ResponseOptions({
      body: '{"Suggestions":["robe test"]}',
      status: 200,
      headers: new Headers(),
      url: 'url'
    });


    return new Observable<Response>(observable => {
      observable.next(new Response(response));
      observable.complete();
    });
  }
}



describe('Serch service', () => {
  /* Simple Mock :
  provide(Http, {
        useClass: MockHttpService }
      ),
      */

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    provide(
        Http,
        {
          useFactory: (backend, defaultOptions) => {
            return new MockHttpService(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }),
    SearchService
  ]);


  it('should throw exception with empty param',
     inject([SearchService, Http], (service: SearchService) => {
       expect(service.getSuggestions(undefined).length).toEqual(0);

       expect(service.getSuggestions(undefined).length).toEqual(0);
     }));


  it('should return array suggestion',

     inject([SearchService], (service: SearchService) => {


       var res = service.getSuggestions('robe');
       expect(res).toEqual(['robe test']);
       expect(res.length).toEqual(1);
       expect(res[0]).toEqual('robe test');
     }));



});
