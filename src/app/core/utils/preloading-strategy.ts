import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class CustomPreloadingStrategy implements PreloadingStrategy {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ){}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const loadRoute = (delay: number) =>
      delay > 0 ? timer(delay * 1000).pipe(map(() => load())) : load();
    if (isPlatformBrowser(this.platformId) && route.data && route.data['preload']) {
      const delay = route.data['delay']
        ? route.data['delay']
        : 0;
      return loadRoute(delay);
    }
    return of(null);
  }
}
