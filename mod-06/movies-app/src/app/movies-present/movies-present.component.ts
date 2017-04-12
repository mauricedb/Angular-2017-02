import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-present',
  templateUrl: './movies-present.component.html',
  styleUrls: ['./movies-present.component.css']
})
export class MoviesPresentComponent implements OnInit {

  @Input() movies;

  constructor() { }

  ngOnInit() {
  }

}
