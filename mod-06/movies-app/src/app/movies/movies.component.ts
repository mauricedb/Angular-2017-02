import { Component, OnInit } from '@angular/core';
import{ MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: object[];
  cleanup;

  constructor(private moviesService: MoviesService) {     
  }

  ngOnInit() {
    this.cleanup =  this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  ngOnDestroy() {
    this.cleanup();
  }
}
