import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateMovieComponent } from './template-movie/template-movie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TemplateMovieComponent
  ],
  declarations: [
    TemplateMovieComponent
  ]
})
export class TemplateMoviesModule { }
