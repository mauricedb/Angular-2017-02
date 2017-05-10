import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';

export { CatComponent } from './cat/cat.component';


import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CatComponent
      }
    ])
  ],
  exports: [CatComponent],
  declarations: [CatComponent]
})
export class CatsModule { }
