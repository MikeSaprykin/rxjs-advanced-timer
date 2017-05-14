import * as Rx from 'rxjs';
import {Subject} from "rxjs/Subject";
import { timerService } from './timer-service';

let value = 0;
const parag = document.querySelector('p');
const button = document.querySelector('button');

const subject = new Subject();
button.addEventListener('click', () => subject.next(value));


export async function getAsyncResult(): Promise<string> {
	return 'kappa';
}

async function consoleAsyncResult(): Promise<any> {

	const result: string = await getAsyncResult()
	alert(result);

}

const miliseconds = document.createElement('p');
const seconds = document.createElement('p');
const minutes = document.createElement('p');

document.body.appendChild(miliseconds);
document.body.appendChild(seconds);
document.body.appendChild(minutes);

timerService.miliseconds.subscribe(
	val => miliseconds.innerHTML = val)

timerService.minutes.subscribe(
	val => minutes.innerHTML = val)

timerService.seconds.subscribe(
	val => seconds.innerHTML = val
	)

timerService.startTimer()
