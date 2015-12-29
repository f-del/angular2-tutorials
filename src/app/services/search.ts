'use strict';

import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class SearchService {
	private _url: string = "http://api.laredoute.com/catalogservice/FR/CatalogService.svc/Rest/SearchSuggestions/?sid=RDFR&lc=fr&searchTerm=";
  private _result: any;
  http: Http;

  constructor(http: Http) { this.http = http; }

  /** 
  	Documentation
  **/
  getSuggestions(key : string) {
	  if (key === undefined){
		 // throw new Error();
		  return [];
	  }

    this.http.get(this._url + key)
        .subscribe(
            sugg => this._result = sugg.json(), err => console.log('error'),
            () => console.log('completed'));

    return this._result != undefined ? this._result['Suggestions'] : [];
  }
}