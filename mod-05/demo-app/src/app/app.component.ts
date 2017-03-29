import { Component, ErrorHandler, OnInit } from '@angular/core';
import { books } from './books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  book = books[0]
  allBooks = books;
  Math = (window as any).Math;

  constructor(private eh: ErrorHandler){

  }

  ngOnInit(){
  }

  itWasClicked(book) {
    alert(book.title + ' was clicked')
  }
}
