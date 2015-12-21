import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class SearchService{
	private _url : string = "";
	private _result : any;
	http : Http;	

	constructor(http: Http){
		this.http = http;
	}

	getSuggestions(key){
		this.http.get(this._url+ key)
			.subscribe(
				sugg => 
					this._result= sugg.json()
			);

		return this._result != undefined ? this._result['Suggestions'] : [];
	}
}