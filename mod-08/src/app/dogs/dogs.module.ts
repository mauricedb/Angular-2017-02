import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';

import { RouterModule } from '@angular/router';

export { DogComponent } from './dog/dog.component';

@NgModule({
  imports: [
    CommonModule,
        RouterModule.forChild([
      {
        path: '', component: DogComponent
      },
            {
        path: ':name', component: DogComponent
      }

        ])
  ],
  exports: [DogComponent],
  declarations: [DogComponent]
})
export class DogsModule { }
