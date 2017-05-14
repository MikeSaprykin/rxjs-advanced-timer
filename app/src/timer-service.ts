import * as Rx from 'rxjs';
import { TimerStore } from './timer-store';

class TimerService {

	public store: TimerStore;

	constructor(){
		this.store = new TimerStore()
	}

	get minutes(): Rx.BehaviorSubject<string> {
		return this.store.minutes$;
	}

	get seconds(): Rx.BehaviorSubject<string> {
		return this.store.seconds$;
	}

	get miliseconds(): Rx.BehaviorSubject<string> {
		return this.store.miliseconds$;
	}


	public startTimer() {
		return Rx.Observable.interval(10)
				  .map(() => {
				  	return this.updateTimer();
				  }).subscribe(val => val)
	}

	private updateTimer() {
		const currentMiliSeconds = +this.miliseconds.value;
		const currentSeconds = +this.seconds.value;
		const currentMinutes = +this.minutes.value;
		const updatedMiliSeconds = currentMiliSeconds + 1 > 59 ? 0 : currentMiliSeconds + 1;
		this.store.updateMiliSeconds(updatedMiliSeconds);
		if(updatedMiliSeconds === 0) {
			const updatedSecondsValue = currentSeconds + 1 > 59 ? 0 : currentSeconds + 1;
			this.store.updateSeconds(updatedSecondsValue);
			if(updatedSecondsValue === 0)
				this.store.updateMinutes(currentMinutes + 1);
		}
		return Rx.Observable.of(this.seconds.value, this.minutes.value)	
	}

}

export const timerService = new TimerService();