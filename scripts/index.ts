import {Observable} from 'rxjs';

const bloup$ = Observable.of('bloup');

bloup$.subscribe((val) => console.log(val));

const blank$ = Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});

blank$.subscribe((val) => console.log(val));

const click$ = Observable.fromEvent(document.querySelector("button"), 'click');

click$.subscribe(()=>console.log('clicked'));
