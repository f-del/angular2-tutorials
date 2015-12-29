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
  ResponseOptions,
  BaseRequestOptions
} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {Observable} from 'rxjs/Observable';

import {APP_ID} from 'angular2/core';

describe('default test injector', () => {
  it('should provide default id',
     inject([APP_ID], (id) => { expect(id).not.toBeUndefined(); }));
});


describe('Mocking http', () => {

  it('should get some data', inject([], () => {
       var connection;
       var injector = Injector.resolveAndCreate([
         MockBackend,
         BaseRequestOptions,
         provide(
             Http,
             {
               useFactory: (backend, defaultOptions) => {
                 return new Http(backend, defaultOptions)
               },
               deps: [MockBackend, BaseRequestOptions]
             })
       ]);
       var http = injector.get(Http);
       var backend = injector.get(MockBackend);
       // Assign any newly-created connection to local variable
       backend.connections.subscribe(c => connection = c);

       http.request('data.json')
           .subscribe((res) => { expect(res.text()).toBe('awesome'); });

       connection.mockRespond(
           new Response(new ResponseOptions({body: 'awesome'})));

     }));

  it('should get a response', () => {
    var connection;  // this will be set when a new connection is emitted from
                     // the
    // backend.
    var text;  // this will be set from mock response
    var injector = Injector.resolveAndCreate([
      MockBackend,
      BaseRequestOptions,
      provide(
          Http,
          {
            useFactory:
                (backend, options) => { return new Http(backend, options); },
            deps: [MockBackend, BaseRequestOptions]
          })
    ]);
    var backend = injector.get(MockBackend);
    var http = injector.get(Http);
    backend.connections.subscribe(c => connection = c);

    http.request('something.json').subscribe(res => { text = res.text(); });

    connection.mockRespond(
        new Response(new ResponseOptions({body: 'Something'})));
    expect(text).toBe('Something');
  });
});