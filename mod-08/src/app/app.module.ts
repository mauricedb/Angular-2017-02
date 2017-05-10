import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

// import { CatsModule } from './cats/cats.module';
// import { DogsModule } from './dogs/dogs.module';

import { AppComponent } from './app.component';

import { routes} from './routes';
import {CanEnter} from './CanEnter'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,  {useHash:true}),
    // CatsModule,
    // DogsModule
  ],
  providers: [CanEnter],
  bootstrap: [AppComponent]
})
export class AppModule { }
