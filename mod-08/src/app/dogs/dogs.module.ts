import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DogComponent],
  declarations: [DogComponent]
})
export class DogsModule { }
