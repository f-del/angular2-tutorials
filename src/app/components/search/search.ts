import {Component, View} from 'angular2/core';

import {COMMON_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {Injectable, Inject} from 'angular2/core';

// import {Suggestion} from '../../models/suggestion';
import {SearchService} from '../../services/search';


@Component({
  selector: 'search'
})

@View({
  templateUrl: './app/components/search/search.html',
  styleUrls: ['./app/components/search/search.css'],
  directives: [COMMON_DIRECTIVES, FORM_DIRECTIVES]
})


export class SearchComponent{
  public suggestion: string = "";
  public results: string[] = [];
  previous: string[];

  searchService: SearchService;

  constructor(searchService: SearchService) {
    this.searchService = searchService;
  }

  getSuggestions() {
    // this.suggestion.push(new Suggestion("robe "+this.cmpt++));

    this.results = this.searchService.getSuggestions(this.suggestion);
  }
}