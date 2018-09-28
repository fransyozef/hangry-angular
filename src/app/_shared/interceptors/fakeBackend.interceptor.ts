import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
 
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(mergeMap(() => {
            // console.log(request.url);

            // get list of restaurant
            if (request.url.endsWith('/api/restaurants') && request.method === 'GET') {
                const body = {
                  success : true,
                  result : [
                      {
                          id : 1,
                          name : 'Restaurant 1'
                      },
                      {
                        id : 2,
                        name : 'Restaurant 2'
                    }
                  ]
                };
                return of(new HttpResponse({ status: 200, body: body }));
            }

            // delete a restaurant
            if (request.url.match(/\/api\/restaurant\/\d+$/) && request.method === 'DELETE') {
                const body = {
                    success : true
                  };
                return of(new HttpResponse({ status: 200, body: body }));
            }

            // add a restaurant
            if (request.url.endsWith('/api/restaurant') && request.method === 'POST') {
                const newItem = request.body;
                const body = {
                  success : true,
                  result : {
                        id : Math.floor(Math.random() * 1000) + 100,
                        name : newItem['name']
                    }
                };
                return of(new HttpResponse({ status: 200, body: body }));
            }

            return next.handle(request);
        }))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
};
