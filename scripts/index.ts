import {Observable} from 'rxjs';


const text$ = Observable.of('bloup');
 
text$.subscribe((val) => console.log(val));

const blank$ = Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});

blank$.subscribe((val) => console.log(val));


const button = document.querySelector('button');

const click$ = Observable.fromEvent(button, 'click');

click$.subscribe((event) => console.log(event));

const tableau$ = Observable
.from(['ga', 'zo', 'bu', 'meu'])
.filter((item) => item.length <= 3)
.take(3);

tableau$.subscribe((item) => console.log(item));




const inputs = document.querySelectorAll('input');

const nom$ = Observable.fromEvent(inputs[0], 'keyup')
.map((event:any) => event.target.value)
.filter(value => value !== '');

const prenom$ = Observable.fromEvent(inputs[1], 'keyup')
.map((event:any) => event.target.value)
.filter(value => value !== '');

const age$ = Observable.fromEvent(inputs[2], 'keyup')
.map((event:any) => event.target.value)
.filter(value => value !== '');


const personne$ = 
        Observable.combineLatest(nom$,prenom$,age$)
        .map((values) => {
            return {
                nom: values[0],
                prenom: values[1],
                age: values[2]
            }
        }).debounceTime(300);

personne$.subscribe((personne) => console.log(personne));