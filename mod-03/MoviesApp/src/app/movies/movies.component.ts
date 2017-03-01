import { Component, OnInit } from '@angular/core';
import movies from './movies';
import {MovieLoaderService}  from '../movie-loader.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[];
  name: string= 'Maurice';

  constructor(private loader: MovieLoaderService) { }

  ngOnInit() {
    // this.loader.
    this.movies = movies;
  }

  onClick(){
    alert('Klikje');
  }
}
