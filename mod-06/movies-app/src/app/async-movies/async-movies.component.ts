import { Component, OnInit } from '@angular/core';
import{ MoviesService } from '../movies.service';
import {Observable } from  'rxjs/observable';

@Component({
  selector: 'app-async-movies',
  templateUrl: './async-movies.component.html',
  styleUrls: ['./async-movies.component.css']
})
export class AsyncMoviesComponent implements OnInit {

  movies: Observable<any[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
}
