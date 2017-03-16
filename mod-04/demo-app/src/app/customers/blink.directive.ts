import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  constructor(private element: ElementRef) {

  }

  @Input() appBlink = 100;

  @Input() style = '';


  ngOnInit(){
    const element = this.element;

    setInterval(() => {
      if (element.nativeElement.style.display === 'none') {
        element.nativeElement.style.display = 'block';
      }
      else {
        element.nativeElement.style.display = 'none';
      }

    }, this.appBlink);
  }
}
