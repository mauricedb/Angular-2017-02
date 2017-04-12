import rxjs from 'rxjs';


// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';


// rxjs.Observable.from([1,2,3])
// .do(x => {
//     if (x === 2) {
//         throw new Error('Ooops dat is twee');
//     }
// })
//     .subscribe(x => console.log(x)
//     , err=> console.error(err),
//     () => console.log('closed'))


// rxjs.Observable.interval(100) 
//     // .filter(x => x < 10)
// .do(x => {
//     // if (x === 2) {
//     //     throw new Error('Ooops dat is twee');
//     // }
// })
// .map(x => 7 * x)
// .catch(err=> {
//     console.error(err);
//     return rxjs.Observable.interval(1000) ;
// })
//     .take(5)
//     .subscribe(x => console.log(x)
//     , err=> console.error(err),
//     () => console.log('closed'))


// new rxjs.Observable(s => {
//     // s.next(1);
//     // s.next(2);
//     // s.next(3);
//     var i = 0;
//     setInterval(() => s.next(i++), 1000);
// })
// .do(x => console.log(x))
// .subscribe(x => console.log(x),);


rxjs.Observable.fromEvent(document.getElementById('tile'), 'mousemove')
    .map(e => ({x: e.screenX, y: e.screenY}))
    .filter(e => e.x < 500)
    .throttleTime(1000)
    .pairwise()
    .subscribe(x => console.log(x));
