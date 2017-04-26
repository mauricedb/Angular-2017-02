import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TemplateMoviesModule } from './template-movies/template-movies.module';
import { ReactiveMoviesModule } from './reactive-movies/reactive-movies.module';

import { AppComponent } from './app.component';
import { MoviesService } from './movies.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TemplateMoviesModule,
    ReactiveMoviesModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
