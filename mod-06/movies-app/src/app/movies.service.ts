import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/delay';

@Injectable()
export class MoviesService {

  movies$: Observable<any[]>;

  constructor(private http: Http) {
    this.movies$ = this.http.get('/api/movies')
      .map(rsp => rsp.json())
      .publishReplay(1)
      .refCount()
      // .delay(10000)
  }

  getMovies(): Observable<any[]> {
    return this.movies$;
  }
}
