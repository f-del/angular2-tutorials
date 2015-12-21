import {Component, View} from 'angular2/core';

import {Injectable, Inject} from 'angular2/core';

//import {Suggestion} from '../../models/suggestion';
import {SearchService} from '../../services/search.js';


@Component({
    selector: 'search',
 //   viewProviders: [Http, HTTP_PROVIDERS]
})

@View({
    templateUrl: './components/search/search.html',
    styleUrls: ['./components/search/search.css']
})


export class SearchComponent{  
  public suggestion : string = "";
  public results : string[] = [];
  previous: string[];

  searchService : SearchService;

  constructor(searchService: SearchService){
  	this.searchService = searchService;  	
  }

  getSuggestions(){  	   
    //this.suggestion.push(new Suggestion("robe "+this.cmpt++));

    this.results = this.searchService.getSuggestions(this.suggestion);   
  }
}