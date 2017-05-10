import {  CanActivate, CanDeactivate } from '@angular/router';

export class CanEnter implements CanActivate, CanDeactivate<any> {
    canActivate() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 5000);
        });        
    }

    canDeactivate(){
        return false;
    }
}
