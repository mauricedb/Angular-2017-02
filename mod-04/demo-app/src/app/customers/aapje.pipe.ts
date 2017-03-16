import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aapje'
})
export class AapjePipe implements PipeTransform {

  transform(value: string, args?: any): any {
   if (args === 'lower'){
    return value.toLowerCase()
   }
   else{
    return value.toUpperCase()

   }
  }

}
