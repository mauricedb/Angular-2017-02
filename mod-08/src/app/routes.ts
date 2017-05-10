import { Routes } from '@angular/router';
// import { CatComponent } from './cats/cats.module';
// import { DogComponent } from './dogs/dogs.module';

import { CanEnter } from './CanEnter'

export const routes: Routes = [
    //     {
    //     path: 'cat', component: CatComponent,
    //      canActivate: [CanEnter],
    //      canDeactivate: [CanEnter]
    // }, {
    //     path: 'dog', component: DogComponent
    // }, {
    //     path: 'dog/:name', component: DogComponent
    // }, {
    //     path: '**', redirectTo: '/'
    // }

    {
        path: 'cat', loadChildren: './cats/cats.module#CatsModule'
    },
    {
        path: 'dog', loadChildren: './dogs/dogs.module#DogsModule'
    }, {
        path: '**', redirectTo: '/'
    }
];
