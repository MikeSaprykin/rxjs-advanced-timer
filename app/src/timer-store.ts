import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Lap {
	constructor(public id: number, 
				public minutes: string,
				public seconds: string){}
}

export class TimerStore {

	private _minutes: string = '00';
	private _seconds: string = '00';
	private _miliseconds: string = '00';
	private _laps: Array<Lap> = [];

	public laps$: BehaviorSubject<Array<Lap>> = new BehaviorSubject(this._laps);
	public minutes$: BehaviorSubject<string> = new BehaviorSubject(this._minutes);
	public seconds$: BehaviorSubject<string> = new BehaviorSubject(this._minutes);
	public miliseconds$: BehaviorSubject<string> = new BehaviorSubject(this._miliseconds);

	public addNewLap({minutes, seconds}): void {
		const lapId = this._laps.length;
		this.minutes$.next('00');
		this.seconds$.next('00');
		this.laps$.next([...this._laps, new Lap(lapId, minutes, seconds)]);
	}

	public updateMinutes(value: number): void {
		this._minutes = this.generateTimeValue(value, this._minutes);
		this.minutes$.next(this._minutes);
	}

	public updateSeconds(value: number): void {
		this._seconds = this.generateTimeValue(value, this._seconds);
		this.seconds$.next(this._seconds);
	}

	public updateMiliSeconds(value: number): void {
		this._miliseconds = this.generateTimeValue(value, this._miliseconds);
		this.miliseconds$.next(this._miliseconds);
	}

	public generateTimeValue(value: number, property: string): string {
		const sum = value === 0 ? 0 : value;
		return sum > 9 ? '' + sum : '0' + sum;
	}


}