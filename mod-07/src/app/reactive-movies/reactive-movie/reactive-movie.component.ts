import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MoviesService } from '../../movies.service';

const val1 = () => new Promise(resolve => {
  console.log('In val1')
  setTimeout(function() {
    console.log('Resolve val1')
    resolve({val1:1})
  }, 2000);

})

const val2 = () => new Promise(resolve => {
  console.log('In val2')
  setTimeout(function() {
    resolve({val2:2})
    console.log('Resolve val2')
  }, 10000);
})

@Component({
  selector: 'app-reactive-movie',
  templateUrl: './reactive-movie.component.html',
  styleUrls: ['./reactive-movie.component.css']
})
export class ReactiveMovieComponent implements OnInit {

  movie: any;
  movieForm: FormGroup;
  valid = true;
  errors:any = {
    title:null
  };

  constructor(private moviesService: MoviesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: [null, [
        Validators.required,
        Validators.minLength(5),
      ], [
        // Async validator
        // val1,
        // val2
      ]],
      release_date: null
    });

 this.movieForm.statusChanges.subscribe(() => {
        console.log( this.movieForm.status);

        const errors = this.movieForm.controls.title.errors;
        console.log(errors)
 });

 
    this.movieForm.valueChanges.subscribe(data => {
      this.valid = this.movieForm.status === 'VALID';
        this.errors = {};

        const errors = this.movieForm.controls.title.errors;
        if (errors && errors.required){
          this.errors.title = "The title is required"
        } else if (errors && errors.minlength){
          this.errors.title = `The min length is ${errors.minlength.requiredLength}`;
        }

        console.log(data, this.movieForm.status);
    });

    this.moviesService
      .getMovie(278)
      .subscribe(movie => {
        this.movie = movie
        this.movieForm.patchValue(movie);
      });
  }

  save() {
    var movie = Object.assign({},  this.movie, this.movieForm.getRawValue())
    console.log('Saving', movie);
    // alert('Saving')
  }
}

