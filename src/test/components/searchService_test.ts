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

import {MockBackend} from 'angular2/http/testing';
import {HttpMockHelper} from '../../app/mockHelper';

import {Observable} from 'rxjs/Observable';
import {SearchService} from '../../app/services/search';

describe('Serch service', () => {
  beforeEachProviders(() => HttpMockHelper.injectProviders([SearchService]));

  it('should return [] with empty/undefined param',
     inject([SearchService], (service: SearchService) => {
       expect(service.getSuggestions(undefined)).toEqual([]);

       expect(service.getSuggestions(null)).toEqual([]);
     }));

  it('should return array suggestion',

     inject(
       [SearchService, MockBackend],
         (service: SearchService, mockBackend) => {


           HttpMockHelper.injectResponse(
               mockBackend, '{"Suggestions":["robe test"]}');

           var res = service.getSuggestions('robe');
           expect(res).toEqual(['robe test']);
           expect(res.length).toEqual(1);
           expect(res[0]).toEqual('robe test');

         }));
});
