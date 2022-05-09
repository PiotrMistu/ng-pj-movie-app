import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LastWatchedModel } from '../model/last-watched.model';

@Injectable({
  providedIn: 'root'
})
export class LastWatchedService {
  protected lastWatchedSubject$ = new BehaviorSubject<LastWatchedModel[] | null>(null);
  public lastWatched$ = this.lastWatchedSubject$.asObservable();
  public lastWatched: LastWatchedModel[] = [];

  constructor() {
  }

  public load(): void {
    // @ts-ignore
    this.lastWatched = JSON.parse(localStorage.getItem('lastWatched')) ?? [];
    this.lastWatchedSubject$.next(this.lastWatched ?? []);
  }

  public lastWatchedAdd(item: LastWatchedModel): void {
    if (!this.checkIsExist(item)) {
      this.lastWatched.push(item);
    }
    localStorage.setItem('lastWatched', JSON.stringify(this.getLastThree()));
    this.lastWatchedSubject$.next(this.getLastThree());
  }

  public getLastThree(): LastWatchedModel[] {
    if (this.lastWatched.length > 5) {
      this.lastWatched = this.lastWatched.slice(this.lastWatched.length - 5, this.lastWatched.length);
      return this.lastWatched;
    }
    return this.lastWatched;
  }

  public checkIsExist(item: LastWatchedModel): boolean {
    const isExist = this.lastWatched.some(i => i.id === item.id);
    return isExist;
  }
}
