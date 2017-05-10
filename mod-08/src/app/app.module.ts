import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CatsModule,
    DogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
