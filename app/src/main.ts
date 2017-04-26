import * as Rx from 'rxjs';

const Kappa = new Rx.Subject();

Kappa.subscribe(val => console.log(val));

setTimeout(() => Kappa.next('HAHA'), 2000);
