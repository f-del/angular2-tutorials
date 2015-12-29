
import {
Http,
HTTP_PROVIDERS,
Response,
Headers,
ResponseOptions,
BaseRequestOptions
} from 'angular2/http';

import {provide, Injector} from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';

export class HttpMockHelper {
  /**/
  static injectProviders(srv: Array<any>) {
    return [
      MockBackend,
      BaseRequestOptions,
      provide(
          Http,
          {
            useFactory: (backend, defaultOptions) => {
              return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          })
    ].concat(srv);
  };

  static injectResponse(mock: MockBackend, response: string) {
    let responseOptions = new ResponseOptions({body: response});
    mock.connections.subscribe(
        c => c.mockRespond(new Response(responseOptions)));
  };
}