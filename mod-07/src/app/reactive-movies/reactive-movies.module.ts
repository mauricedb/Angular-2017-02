import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveMovieComponent } from './reactive-movie/reactive-movie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReactiveMovieComponent
  ],
  exports: [
    ReactiveMovieComponent
  ]
})
export class ReactiveMoviesModule { }
