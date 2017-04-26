import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovie(id) {
    return this.http.get(`/api/movies/${id}`)
      .map(rsp => rsp.json());
  }
}
