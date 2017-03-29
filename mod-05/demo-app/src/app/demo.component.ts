import { 
    Component, 
    Input, 
    Output, EventEmitter, NgZone, 
    ChangeDetectorRef , 
    ChangeDetectionStrategy, 
    ViewEncapsulation
} from '@angular/core';


@Component({
    selector: 'my-demo',
    template: `
    <div>Een demo <ng-content></ng-content>  nog iets
    {{log()}}
    {{now}}
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {

    now: Date;

    constructor(ngZone: NgZone, changeDetector: ChangeDetectorRef) {

        // ngZone.runOutsideAngular(() => {
        //     setInterval(() => { 
        //         this.now = new Date();

        //         changeDetector.detectChanges();
        //     }, 1000);
        // });

    }

    log() {
        console.log('log');
        return '';
    }

}



@Component({
    selector: 'my-demo2',
    template: "<div>Een demo</div>"
})
export class Demo2Component {


}


        // <img [src]="book?.image" />

@Component({
    selector: 'my-book',
    styles: [
        'h1{background-color: green;}'
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
    <div *ngIf="book" #theDiv>
        <h1>{{book?.title}}</h1>
        <input [(ngModel)]="book.title" #theTitle="ngModel">
        <button (click)="onClick(theTitle)">Click me</button>
    </div>
    <div *ngIf="!book">
        Loading...
    </div>
    {{log()}}
    `
})
export class BookComponent {
    @Input() book;
    @Output() wasClicked = new EventEmitter();

    onClick(e) {
        console.log(e);
        this.wasClicked.next(this.book)

        // alert('I was clicked');
    }

    log() {
        console.log('log book');
        return '';
    }

}
