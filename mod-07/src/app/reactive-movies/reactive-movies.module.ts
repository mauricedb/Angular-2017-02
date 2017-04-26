import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveMovieComponent } from './reactive-movie/reactive-movie.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReactiveMovieComponent
  ],
  exports: [
    ReactiveMovieComponent
  ]
})
export class ReactiveMoviesModule { }
