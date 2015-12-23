import {Component, View} from 'angular2/core';

import {SearchComponent} from './components/search/search'

@Component({
    selector: 'app'    
})

@View({
	templateUrl: './app/app.html',
	directives : [SearchComponent]
})

export class AppComponent { 
}