import * as Rx from 'rxjs';
import {Subject} from "rxjs/Subject";

let value = 0;
const parag = document.querySelector('p');
const button = document.querySelector('button');

const subject = new Subject();
button.addEventListener('click', () => subject.next(value));

Rx.Observable.interval(1)
    .map( value => value + 1)
    .takeWhile(val => val < 61)
    .subscribe(val => console.log(val));
