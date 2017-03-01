import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieLoaderService {

  constructor(private http: Http) { }

}
