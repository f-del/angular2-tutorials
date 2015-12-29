'use strict';

import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class SearchService {
  private url: string =
      "http://api.laredoute.com/catalogservice/FR/CatalogService.svc/Rest/SearchSuggestions/?sid=RDFR&lc=fr&searchTerm=";
  private result: any;

  constructor(private http: Http) {}

  /**
        Documentation
  **/
  getSuggestions(key: string) {
    if (key === undefined) {
      // throw new Error();
      return [];
    }

    this.http.get(this.url + key)
        .subscribe(
            sugg => this.result = sugg.json(), err => console.log('error'),
            () => console.log('completed'));

    return this.result != undefined ? this.result['Suggestions'] : [];
  }
}


@Injectable()
export class SearchServiceMock extends SearchService {
}