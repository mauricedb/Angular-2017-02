import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

import{ MoviesService } from './movies.service';
import { AsyncMoviesComponent } from './async-movies/async-movies.component';
import { MoviesPresentComponent } from './movies-present/movies-present.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AsyncMoviesComponent,
    MoviesPresentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
