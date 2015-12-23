import {bootstrap} from 'angular2/platform/browser';

import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app/app';

import {SearchService} from './app/services/search';

bootstrap(AppComponent, [HTTP_PROVIDERS, SearchService]);