import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/subscription';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: object[];
  moviesSubscription: Subscription;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesSubscription = this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  ngOnDestroy() {
    console.log('Unsubscribe from movies observable')
    this.moviesSubscription.unsubscribe();
  }
}
