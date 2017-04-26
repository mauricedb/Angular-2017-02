import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-template-movie',
  templateUrl: './template-movie.component.html',
  styleUrls: ['./template-movie.component.css']
})
export class TemplateMovieComponent implements OnInit {

  movie: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getMovie(278)
      .subscribe(movie => this.movie = movie);
  }

  save(){
    alert('Saving')
  }
}
