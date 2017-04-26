import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-reactive-movie',
  templateUrl: './reactive-movie.component.html',
  styleUrls: ['./reactive-movie.component.css']
})
export class ReactiveMovieComponent implements OnInit {

  movie: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getMovie(278)
      .subscribe(movie => this.movie = movie);
  }
}

