import * as Rx from 'rxjs';

const Kappa = new Rx.Subject()
                    .timeout(1000)
                    .subscribe(val => console.log(val));
