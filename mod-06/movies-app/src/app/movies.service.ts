import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable } from  'rxjs/observable';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/delay';

@Injectable()
export class MoviesService {

  o;

  constructor(private http: Http) {
    this.o = this.http.get('/api/movies')
      .map(rsp => rsp.json())
      .publish()
      .refCount()
      // .delay(10000)
   }

  getMovies() : Observable<any[]>{
    return this.o      
  }
}
